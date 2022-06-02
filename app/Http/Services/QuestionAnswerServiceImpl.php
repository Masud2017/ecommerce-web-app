<?php
namespace App\Http\Services;

use App\Http\Util\FormatterUtil;
use App\Models\Product;
use App\Models\ProductAnswer;
use App\Models\ProductQuestions;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class QuestionAnswerServiceImpl implements QuestionAnswerService {

    public function getQuestionListOfAProduct(Request $req, $product_id) {
        $product = Product::where('id',$product_id)->first();
        $questionList= $product->product_questions;

        return FormatterUtil::formatedProductResponse($questionList);
    }

    public function addQuestionToAProduct(Request $req, $product_id) {
        $user = JWTAuth::user();

        $product =Product::where('id',$product_id)->first();
        $question = new ProductQuestions();

        $question->question = $req->input('question');
        $question->product()->associate($product);
        $question->user()->associate($user);
        $question->save();

        return FormatterUtil::formatedProductResponse($question);

    }

    public function getAnswersOfAQuestion(Request $req, $question_id) {
        $question = ProductQuestions::where('id',$question_id)->first();

        return FormatterUtil::formatedProductResponse($question->product_answers );
    }

    public function addAnswerToAQuestion(Request $req, $question_id) {
        $question = ProductQuestions::where('id',$question_id)->first();
        $user = JWTAuth::user();

        $answer = new ProductAnswer();
        $answer->answer = $req->input('answer');
        $answer->product_question()->associate($question);
        $answer->user()->associate($user);
        $answer->save();

        return FormatterUtil::formatedProductResponse($answer);
    }
}
