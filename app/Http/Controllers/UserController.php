<?php

namespace App\Http\Controllers;

use App\Http\Util\FormatterUtil;
use App\Models\UserAddress;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('user_existance_checker_middleware',['except'=>['getUserAddress','addUserAdddress','editUserAddress']]); // these methods are allowed in all cercumtances
        $this->middleware('auth:api'); // making these methods locked to the specific user only

    }
    public function getUserAddress(Request $req) {
        $user = JWTAuth::user();

        return response()->json(FormatterUtil::formatedProductResponse([$user->userAddress]));
    }

    public function addUserAddress(Request $req) {
        $user = JWTAuth::user();

        $userAddress = new UserAddress();
        $userAddress->address1 = "433 kollyanpur south paik para";
        $userAddress->address2 = "407/2 kollyanpur south paikpara sp road";
        $userAddress->phone = "(+880) 1721600967";
        $userAddress->postal_code = "1216";
        $userAddress->city = "Mirpur";
        $userAddress->disctrict = "Dhaka";
        $userAddress->country = "Bangladesh";

        $user->userAddress()->save($userAddress);
    }

    public function editUserAddress(Request $req) {
        $user = JWTAuth::user();

        $user->userAddress->address1 = "Hello world this is the changed stuff that  i wanted to share";
        $user->userAddress->address2 = "Hello world this is the changed stuff that  i wanted to share";
        $user->userAddress->phone = "Hello world this is the changed stuff that  i wanted to share";
        $user->userAddress->postal_code = "Hello world this is the changed stuff that  i wanted to share";
        $user->userAddress->city = "Hello world this is the changed stuff that  i wanted to share";
        $user->userAddress->disctrict = "Hello world this is the changed stuff that  i wanted to share";
        $user->userAddress->country = "Hello world this is the changed stuff that  i wanted to share";

        $user->userAddress->save(); // special note when updating something I don't have to use userAddress()->save() but when save something for the first time then i have to use userAddress()->save(instance_of_userAddress)
    }
}
