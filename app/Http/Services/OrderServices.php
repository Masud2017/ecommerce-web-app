<?php
namespace App\Http\Services;

use Illuminate\Http\Request;

interface OrderServices {
    function addOrder(Request $req,$data_count);
    function getOrderList(Request $req);
    function cancelOrder(Request $req);
    function doneOrder(Request $req);
}
