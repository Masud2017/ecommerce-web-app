<?php
namespace App\Http\Services;

use Illuminate\Http\Request;

interface QuestionAnswerService {
    public function getQuestionListOfAProduct(Request $req, $product_id);
}
