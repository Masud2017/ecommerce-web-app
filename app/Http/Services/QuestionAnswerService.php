<?php
namespace App\Http\Services;

use Illuminate\Http\Request;

interface QuestionAnswerService {
    public function getQuestionListOfAProduct(Request $req, $product_id);
    public function addQuestionToAProduct(Request $req, $product_id);
    public function getAnswersOfAQuestion(Request $req, $question_id);
    public function addAnswerToAQuestion(Request $req, $question_id);
}

