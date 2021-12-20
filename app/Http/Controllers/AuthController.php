<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    function test() {
        $name = "Masud karim";
        $age = 21;

        return compact('name','age');
    }

    public function login(Request $req) {
        $cred = $req->only('email','password');
        $token = auth()->attempt($cred);

        return response()->json(['token'=>$token]);

    }

    public function register(Request $req) {
        $name = $req->input('name');
        $password = $req->input('password');
        $email = $req->input('email');

        $user = new User();
        $user->name = $name;
        $user->password = Hash::make($password);
        $user->email = $email;

        $user->save();

        $token = auth()->attempt(compact('email','password'));

        return response()->json(['token'=>$token]);

    }

    public function me(Request $req) {

        // auth()->logout();
        $token = $req->header("Bearer_token");
        if (JWTAuth::parseToken()->authenticate()) {

        }

       return response()->json(['msg'=> JWTAuth::setToken($token)->toUser(),'extra_msg'=> auth()->check($token)]);
    }

    public function logout(Request $req) {
        auth()->logout();
        return response()->json(['satatus'=>'logged_out']);
    }
}
