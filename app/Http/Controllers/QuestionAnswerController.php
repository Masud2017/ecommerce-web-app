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

    public function getQuestionListOfAProduct(Request $req,$product_id) {
        return $this->questionAnswerService->getQuestionListOfAProduct($req,$product_id);
    }

    public function addQuestionToAProduct(Request $req, $product_id) {
        return $this->questionAnswerService->addQuestionToAProduct($req,$product_id);
    }

    public function getAnswersOfAQuestion(Request $req, $question_id) {
        return $this->questionAnswerService->getAnswersOfAQuestion($req,$question_id);
    }

    public function addAnswerToAQuestion(Request $req, $question_id) {
        return $this->questionAnswerService->addAnswerToAQuestion($req,$question_id);
    }
}
