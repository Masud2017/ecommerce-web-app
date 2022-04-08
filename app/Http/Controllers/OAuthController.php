<?php

namespace App\Http\Controllers;

use App\Http\Util\FormatterUtil;
use Illuminate\Http\Request;
use App\Models\Role;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Carbon\Carbon;
use DateTime;
use DateTimeZone;
use Illuminate\Support\Facades\Date;
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
            $new_user->email_verified_at = Carbon::now()->toDateTimeString();
            $new_user->save();
            // $user->roles()->attach([$this->get_permission("user")]);
            $user->roles()->attach([FormatterUtil::get_permission("user")]);

            $token = auth()->login($new_user);
        }

        return FormatterUtil::respondWithToken($token);
    }

}
