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
        return $this->respondWithToken($token);
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
        $user->roles()->attach([$this->get_permission($role_name)]);


        // $token = auth()->attempt(compact('email','password'));
        $token = auth()->login($user);

        // return response()->json(['token'=>$token]);

        return response()->json(['data'=>$this->respondWithToken($token)]);
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
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * @param token  string - jwt token
    */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    /**
     * @param permission_name $string - permission name can be in any case
     */
    protected function get_permission($permission_name) {
        $permission_name = strtolower($permission_name);

        $role_id = DB::table('roles')->where('role',$permission_name)->first();

        return $role_id->id;
    }
}
