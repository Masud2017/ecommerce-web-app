<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Role;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\DB;


class OAuthController extends Controller
{
    function __construct()
    {
        $this->middleware('token_validator')->only('me');
        $this->middleware('role_middleware');
        // $this->middleware('user_existance_checker_middleware')->only(['getGoogleCallback']);
        $this->middleware('auth:api', ['except' => ['getGoogleRedirect','getGoogleCallback']]);
    }

    /**
     * @return redirectTargetUrl - A json response which contains redirectTargetUrl for getting user consent
     */
    public function getGoogleRedirect() {
        return response()->json(['url'=>Socialite::driver('google')->stateless()->redirect()->getTargetUrl()]);
    }

    /**
     * @return token - Jwt token for get user authneticated.
     */
    public function getGoogleCallback() {
        $user = Socialite::driver('google')->stateless()->user();

        $findUser = User::where('google_id',$user->id)->first();

        if ($findUser) {
            $token = auth()->login($findUser);
        } else {
            $new_user = new User();
            $new_user->name = $user->name;
            $new_user->email = $user->email;
            $new_user->google_id = $user->id;
            $new_user->save();
            $user->roles()->attach([$this->get_permission("user")]);

            $token = auth()->login($new_user);
        }

        return $this->respondWithToken($token);
    }

    /**
     * @param permission_name - a string which contains a case insensitive permission name
     * @return permission_code - a permission code based on the permission_name which mapped in database.
     */
    protected function get_permission($permission_name) {
        $permission_name = strtolower($permission_name);

        $role_id = DB::table('roles')->where('role',$permission_name)->first();

        return $role_id->id;
    }

    /**
     * @param token - a stirng which contains jwt token
     * @return token_info - a json response contains jwt token , it's authorization type and expire time.
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

}
