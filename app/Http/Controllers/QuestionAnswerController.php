<?php

namespace App\Http\Controllers;

use App\Http\Services\QuestionAnswerService;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class QuestionAnswerController extends Controller
{
    protected $questionAnswerService;

    public function __construct(QuestionAnswerService $questionAnswerService)
    {
        $this->questionAnswerService = $questionAnswerService;
    }
    public function getQuesteionListOfAProduct(Request $req,$product_id) {


    }
}
