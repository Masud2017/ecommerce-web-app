<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CartController extends Controller
{
    public function addProductToCart(Request $req,$id) {
        // this function will add new product to cart
    }

    public function deleteProductFromCart(Request $req, $id) {

    }

    public function clearCart(Request $req) {
        // this one is going to clear the cart from the user database ()

    }
}
