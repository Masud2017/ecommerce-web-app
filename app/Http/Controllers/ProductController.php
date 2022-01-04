<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function add_new_product(Request $req) {
        $name = $req->input("name");
        $price = $req->input("price");
        $stock = $req->input("stock"); // the number of products that the vendor can provide
        $description = $req->input("description");
        $rating = $req->input("rating");
        $images = $req->file("images");

        // Taking each image from images array or json
        foreach($images as $image) {
            $random_number = rand(0,10000000); // this number will be saved at database for later image access


        }


    }

    public function get_product_list(Request $req) {
        $product_list = Product::all(); // get all records from the product table;

        return response()->json($this->formated_product_response($product_list));
    }

    public function delete_product(Request $req, $id) {
        $code = 0;

        try {
            $product = DB::table('products')->where('id',$id)->first();
            $product->delete();
            $code = 200;
        } catch(Exception $e) {
            $code = 409;
        }

        return response()->json(['status_code'=>$code]);
    }


    protected function formated_product_response($product_list) {
        $response = [
            'data'=>$product_list
        ];

        return $response;
    }
}
