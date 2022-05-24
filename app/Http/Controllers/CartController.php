<?php

namespace App\Http\Controllers;

use App\Http\Util\FormatterUtil;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class CartController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    public function addCart(Request $req,$id) {
        // this function will add new product to cart
        $product = Product::find($id);
        $user = JWTAuth::user();
        // $productList = $user->cart()->products();
        // array_push($productList,$product);
        try {
           $user->cart()->products()->save($product);
        } catch(Exception $e) {
            echo $e;
        }

    }

    public function getAllCartProduct(Request $req) {
        $user = JWTAuth::user();
        $product = new Product();


    }


    public function removeCartItem(Request $req, $id) {

    }

    public function updateCartItem(Request $req,$id) {

    }

    public function placeOrder(Request $req) {

    }

    public function getCartQuantity(Request $req) {
        $user = JWTAuth::user();

        if ($user->cart->quantity == 0) {
            return response()->json(["status_code"=>"404"]);
        } else {
            return response()->json(["cart_quantity"=> $user->cart->quantity]);
        }
    }


    // public function checkoutFromCart(Request $req) {

    // }
}
