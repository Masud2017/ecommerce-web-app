<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function __construct()
    {
        // $this->middleware('token_validator');
        $this->middleware('auth:api');
        $this->middleware('ProductCRUDPermissionMiddleWare');
    }


    public function addNewProduct(Request $req) {
        $name = $req->input('name');
        $price = $req->input('price');
        $stock = $req->input('stock'); // the number of products that the vendor can provide
        $description = $req->input('description');
        $rating = $req->input('rating');
        $images = $req->file('images');

        $product_table = new Product();

        try {
            $product_table->name = $name;
            $product_table->price = $price;
            $product_table->stock = $stock;
            $product_table->description = $description;
            $product_table->rating = $rating;
            $product_table->images = json_encode(['images'=>$images]);

            $product_table->save();

            return response()->json(['status_code'=>200]);

        } catch(Exception $e) {
            echo $e;

            return response()->json(['status_code'=>409]);
        }
        // return response()->json(['data'=>$name]);
    }

    public function getProductList(Request $req) {
        $product_list = Product::all(); // get all records from the product table;

        return response()->json($this->formatedProductResponse($product_list));
    }

    public function getProduct(Request $req, $id) {
        $product = Product::find($id);

        return response()->json(['data'=>$product]);
    }

    public function deleteProduct(Request $req, $id) {
        $code = 0;

        try {
            // $product = DB::table('products')->where('id',$id)->first();
            $product = Product::find($id);
            $product->delete();
            $code = 200;
        } catch(Exception $e) {
            $code = 409;
        }

        return response()->json(['status_code'=>$code]);
    }


    /**
 *  @param product_list - json file that contains list of products
 *  @return response - a json containing formated productInfo
 * */
    protected function formatedProductResponse($product_list) {
        $response = [
            'data'=>$product_list
        ];

        return $response;
    }
}
