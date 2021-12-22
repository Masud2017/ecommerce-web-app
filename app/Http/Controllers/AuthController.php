<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    function __construct()
    {
        $this->middleware('token_validator')->only('me');
        $this->middleware('auth:api', ['except' => ['login', 'register','me']]);

    }
    function test() {
        $name = "Masud karim";
        $age = 21;

        return compact('name','age');
    }

    public function login(Request $req) {
        $cred = $req->only('email','password');
        $token = auth()->attempt($cred);

        // return response()->json(['token'=>$token]);
        return $this->respondWithToken($token);


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

        // $token = auth()->attempt(compact('email','password'));
        $token = auth()->login($user);

        return response()->json(['token'=>$token]);

    }

    public function me(Request $req) {

        // auth()->logout();
        $token = $req->header("Bearer_token");
        // if (JWTAuth::parseToken()->authenticate()) {

        // }
        // $token = JWTAuth::parseToken()->authenticate();
        $response = explode(' ', $req->header('Authorization'));

        // echo ($req->header("Authorization"));
        $token = trim($response[1]);

       return response()->json(['msg'=> JWTAuth::setToken($token)->toUser(),'extra_msg'=> auth()->check($token)]);
    }

    public function logout(Request $req) {
        auth()->logout();
        return response()->json(['satatus'=>'logged_out']);
    }


    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
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
