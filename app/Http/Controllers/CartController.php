<?php

namespace App\Http\Controllers;

use App\Http\Util\FormatterUtil;
use App\Models\cart_items;
use App\Models\Product;
use App\Models\shopping_session;
use Exception;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

use function GuzzleHttp\Promise\each;

/**
 * This class is all about handling the Shopping_session and cart_item database(model)
 */
class CartController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    public function addCart(Request $req,$product_id) {
        $user = JWTAuth::user(); // getting hte user here;


        // Preventing the system to save the duplicate cartitem
        $cart_item_list = $user->shopping_session->cart_items;
        foreach($cart_item_list as $item) {
            if ($item->product->id == $product_id) {
                return response()->json(["status"=>"already exists"]);
            }
        }


        $product = Product::with('images')->get()->find($product_id);

        $cartitem = new cart_items();
        $cartitem->quantity  = 34;
        $cartitem->product()->associate($product);
        // $cartitem->product()->save($product);


        $user->shopping_session->cart_items()->save($cartitem);
        $user->shopping_session->save();

        // revesion -- for the concept .. It took me alot of time to understand and implement it.
        // $session = new shopping_session();
        // $session->total = 34;
        // $user->shopping_session()->save($session);
        // $user->shopping_session->cart_items()->save($cartitem);
        // $user->shopping_session->save();
    }

    public function getAllCartProduct(Request $req) {
        $user = JWTAuth::user(); // getting the current user that authenticated to the system.
        return response()->json(FormatterUtil::formatedProductResponse($user->shopping_session->cart_items));

    }


    public function removeCartItem(Request $req, $id) {
        $user = JWTAuth::user();

        $cart_item_list = $user->shopping_session->cart_items;

        foreach($cart_item_list as $item) {
            if ($item->id == $id) {
                $item->delete();
                return response()->json(FormatterUtil::formatedProductResponse(["status"=>"200"]));

            }
        }

        return response()->json(FormatterUtil::formatedProductResponse(["status"=>"404"]));

    }

    public function clearCart(Request $req) {
        $user = JWTAuth::user();
        $user->shopping_session->total = 0;
        $user->shopping_session->save();
        $user->shopping_session->cart_items->each(function($item,$key) {
            echo ($key);
            $item->delete();
        });

    }

    public function updateCartItem(Request $req,$id_) {
        $user = JWTAuth::user();

        $cart_item_list = $user->shopping_session->cart_items;

        foreach($cart_item_list as $item) {
            if ($item->id == $id_) {
                echo ($req->input("quantity"));
                $item->quantity = $req->input('quantity');
                $item->save();
            }
        }

    }

    public function getCartQuantity(Request $req) {
        $user = JWTAuth::user();

        // if ($user->cart->quantity == 0) {
        //     return response()->json(["status_code"=>"404"]);
        // } else {
        //     return response()->json(["cart_quantity"=> $user->cart->quantity]);
        // }
        return response()->json(FormatterUtil::formatedProductResponse(["cart_item_count"=>$user->shopping_session->cart_items->count()]));
    }


    // public function checkoutFromCart(Request $req) {

    // }
}
