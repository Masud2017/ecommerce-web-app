<?php
namespace App\Http\Services;

use Illuminate\Http\Request;

class OrderServicesImpl implements OrderServices {

    /**
     * @param $req - Request -- the request object from the user/client
     * @return $responseJson - the json that contain the response for the user;
     */
    function addOrder(Request $req) {
        $inp = $req->input('email');
        return "Hello world this is a test string from add order service. Your email is : ".$inp;
    }

    function getOrderList(Request $req) {

    }
}
