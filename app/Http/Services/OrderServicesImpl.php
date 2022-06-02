<?php
namespace App\Http\Services;

use App\Http\Util\FormatterUtil;
use App\Models\cart_items;
use App\Models\order_item;
use App\Models\Product;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class OrderServicesImpl implements OrderServices {
    /**
     * @param $req - Request -- the request object from the user/client
     * @return $responseJson - the json that contain the response for the user;
     */
    function addOrder(Request $req,$data_count) {
        $array_id = array();
        $result_db_data = array();
        $cart_to_product = array();

        for ($i = 1; $i <= $data_count; $i++) {
            array_push($array_id,$req->input('id'.$i));
        }

        foreach($array_id as $id_item) {
            $item_cart = cart_items::where('id',$id_item)->first();
            array_push($cart_to_product, $item_cart->product);

            array_push($result_db_data,$item_cart);

        }

        // if($this->preventDuplicateOrderItem($result_db_data,$array_id)) {
        //     return response()->json(["status"=>"already exists"]);
        // }

        $order_item_array = array();

        foreach($result_db_data as $item) {


            $temp_order_item = new order_item();
            $temp_order_item->product()->associate($item["product"] );
            $temp_order_item->quantity = $item->quantity;

            array_push($order_item_array,$temp_order_item);
        }

        $user = JWTAuth::user();

        foreach ($order_item_array as $item) {
            $user->orderDetail->orderItem()->save($item);
            $user->orderDetail->save();
        }

        return FormatterUtil::formatedProductResponse($result_db_data);
    }

    function getOrderList(Request $req) {
        $user = JWTAuth::user();
        $orderList = $user->orderDetail->orderItem;
        return FormatterUtil::formatedProductResponse($orderList);
    }

    function cancelOrder(Request $req) {

    }

    function doneOrder(Request $req) {

    }

    // protected function preventDuplicateOrderItem($order_item_list ,$id_collection) {

    //     foreach($order_item_list as $item) {
    //         foreach($id_collection as $id) {
    //             echo ($id);
    //             if ($item['id'] == $id) {
    //                 return true;
    //             }
    //         }
    //     }
    //     return false;
    // }
}
