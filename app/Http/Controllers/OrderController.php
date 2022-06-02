<?php

namespace App\Http\Controllers;

use App\Http\Services\OrderServices;
use App\Http\Util\FormatterUtil;
use Illuminate\Http\Request;
use Symfony\Component\CssSelector\Node\FunctionNode;

class OrderController extends Controller
{
    private $orderServices;

    public function __construct(OrderServices $orderServices) {
        $this->middleware('auth:api'); // locking this endpoint only for authenticated users.

        $this->orderServices = $orderServices; // injecting the dependency;
    }

    public function addOrder(Request $req,$data_count) {
        return $this->orderServices->addOrder($req,$data_count);
    }

    public function getOrderList(Request $req) {
        return $this->orderServices->getOrderList($req);
    }
}
