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
        $this->middleware('user_existance_checker_middleware')->only(['register','register_admin']);
        $this->middleware('auth:api', ['except' => ['getGoogleRedirect','getGoogleCallback']]);
    }

    public function getGoogleRedirect() {
        return response()->json(['url'=>Socialite::driver('google')->stateless()->redirect()->getTargetUrl()]);
    }

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

        // return response()->json(["data"=> $user]);
        return $this->respondWithToken($token);
    }

    protected function get_permission($permission_name) {
        $permission_name = strtolower($permission_name);

        $role_id = DB::table('roles')->where('role',$permission_name)->first();

        return $role_id->id;
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

}
