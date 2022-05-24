<?php

namespace App\Http\Controllers;

use App\Http\Util\FormatterUtil;
use App\Models\Product;
use App\Models\ProductImage;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function __construct()
    {
        // $this->middleware('token_validator');
        $this->middleware('auth:api');
        $this->middleware('ProductCRUDPermissionMiddleWare',['except'=>['getProductList','getProduct']]);
    }



    /**
     * In case of instering new data into the product database the user should be admin or from similar previledge.,
     */
    public function addNewProduct(Request $req) {
        $name = $req->input('name');
        $price = $req->input('price');
        $stock = $req->input('stock'); // the number of products that the vendor can provide
        $description = $req->input('description');
        $rating = $req->input('rating');
        $images = $req->input('images');

        $product_table = new Product();

        try {
            $product_table->name = $name;
            $product_table->price = $price;
            $product_table->stock = $stock;
            $product_table->description = $description;
            $product_table->rating = $rating;
            // $product_table->images = json_encode(['images'=>$images]);

            $image = new ProductImage();
            $image->url = $images;

            // $product_table->images()->associate($image);

            $product_table->save();
            $product_table->images()->save($image);


            return response()->json(['status_code'=>200]);

        } catch(Exception $e) {
            echo $e;

            return response()->json(['status_code'=>409]);
        }
        // return response()->json(['data'=>$name]);
    }

    public function getProductList(Request $req) {
        $product_list = Product::with('images')->get(); // get all records from the product table;



        // return response()->json($this->formatedProductResponse($product_list));
        return response()->json(FormatterUtil::formatedProductResponse($product_list));

    }

    public function getProduct(Request $req, $id) {
        $product = Product::with('images')->get()->find($id);

        // $product["img"] = $product->images;
        // return response()->json(['data'=>$product]);
        return response()->json(FormatterUtil::formatedProductResponse($product));
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

    public function editProduct(Request $req, $id,$img_id) {

        $name = $req->input('name');
        $desc = $req->input('description');
        $stock = $req->input('stock');
        $price = $req->input('price');
        $rating = $req->input('rating');
        $images = $req->input('images');

        try {
            $product  = Product::find($id);
            $product->name = $name;
            $product->description = $desc;
            $product->stock = $stock;
            $product->price = $price;
            $product->rating = $rating;

            // $image_id = $product->images()->id;
            // $image = ProductImage::find($image_id);
            // $image->url =$images;



            $image = ProductImage::find($img_id);
            $image->url = $images;


            $product->push();
            $product->images()->save($image);

            // $product->save();


        } catch(Exception $e) {
            echo ($e);
        }
        return response()->json(FormatterUtil::formatedProductResponse(["code"=>"200"]));
    }

}
