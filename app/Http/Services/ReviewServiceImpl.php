<?php
namespace App\Http\Services;

use Illuminate\Http\Request;

use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Util\FormatterUtil;
use App\Models\Product;
use App\Models\ProductReview;

class ReviewServiceImpl implements ReviewService {
    public function addReview(Request $req,$product_id) {
        $product = Product::where('id',$product_id)->first();
        $review = new ProductReview();
        $user = JWTAuth::user();

        $review->msg = $req->input('msg');
        $review->product()->associate($product);
        $review->user()->associate($user);
        $review->save();

        return FormatterUtil::formatedProductResponse($review);
    }

    public function getAllReviewsOfAProduct(Request $req,$product_id) {
        $product = Product::where('id',$product_id)->first();
        $reviewList = $product->product_reviews;

        return FormatterUtil::formatedProductResponse($reviewList);
    }
    public function getAllReviewsOfAnUser(Request $req) {
        $user = JWTAuth::user();

        return FormatterUtil::formatedProductResponse($user->product_reviews);
    }
    public function getSingleReview(Request $req,$review_id) {
        return FormatterUtil::formatedProductResponse(ProductReview::where('id',$review_id)->first());
    }

    public function deleteReview(Request $req,$review_id) {
        $review = ProductReview::where('id',$review_id)->first();
        $review->delete();

        return FormatterUtil::formatedProductResponse(["status"=>"deleted"]);
    }

    public function editReview(Request $req, $review_id) {
        $review = ProductReview::where('id',$review_id)->first();

        $review->msg = $req->input('msg');
        $review->save();

        return FormatterUtil::formatedProductResponse(["status"=>"Edited"]);
    }


}
