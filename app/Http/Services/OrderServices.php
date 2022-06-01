<?php
namespace App\Http\Services;

use Illuminate\Http\Request;

interface OrderServices {
    function addOrder(Request $req);
    function getOrderList(Request $req);
}
