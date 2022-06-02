<?php

namespace App\Http\Controllers;

use App\Http\Services\TestService;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

use Tymon\JWTAuth\Facades\JWTAuth;

use Exception;
use App\Http\Util\FormatterUtil;
use App\Models\OrderDetails;
use App\Models\shopping_session;

class AuthController extends Controller
{
    private $service;
    function __construct(TestService $service)
    {
        $this->middleware('token_validator')->only('me');
        $this->middleware('role_middleware');
        $this->middleware('user_existance_checker_middleware')->only(['register','register_admin']);
        $this->middleware('auth:api', ['except' => ['login', 'register','me','register_admin']]);

        try {$this->service = $service;
        } catch (Exception $e) {

        }
    }

    public function login(Request $req) {
        $cred = $req->only('email','password');
        $token = auth()->attempt($cred);

        // return response()->json(['token'=>$token]);
        // return $this->respondWithToken($token);
        return FormatterUtil::respondWithToken($token);
    }

    public function register(Request $req) {
        $name = $req->input('name');
        $password = $req->input('password');
        $email = $req->input('email');
        $role_name = $req->input('role');


        $user = new User();
        $user->name = $name;
        $user->password = Hash::make($password);
        $user->email = $email;

        $user->save();
        // $user->roles()->attach([$this->get_permission($role_name)]);
        $user->roles()->attach([FormatterUtil::get_permission($role_name)]);



        // New addition -- creating the shopping_session at the moment after the registration;
        $session = new shopping_session();
        $user->shopping_session()->save($session);
        // New addition -- creating the order details at the moment after the registration
        $order_details = new OrderDetails();
        $user->orderDetail()->save($order_details);

        // $token = auth()->attempt(compact('email','password'));
        $token = auth()->login($user);

        // return response()->json(['token'=>$token]);

        // return response()->json(['data'=>$this->respondWithToken($token)]);
        return response()->json(['data'=>FormatterUtil::respondWithToken($token)]);

    }

    public function registerAdmin(Request $req) {
        $name = $req->input('name');
        $password = $req->input('password');
        $email = $req->input('email');
        $role_name = $req->input('role');
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
        // return $this->respondWithToken(auth()->refresh());
        return FormatterUtil::respondWithToken(auth()->refresh());

    }
}
