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

    public function addOrder(Request $req) {
        return response()->json(FormatterUtil::formatedProductResponse($this->orderServices->addOrder($req))) ;
    }

    public function getOrderList(Request $req) {

    }
}
