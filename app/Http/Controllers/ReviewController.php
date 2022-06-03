<?php

namespace App\Http\Controllers;

use App\Http\Services\ReviewService;

use Illuminate\Http\Request;

class ReviewController extends Controller
{
    protected $reviewService;

    public function __construct(ReviewService $reviewService)
    {
        $this->reviewService = $reviewService;
    }


    public function addReview(Request $req,$product_id) {
        return $this->reviewService->addReview($req,$product_id);
    }
    public function getAllReviewsOfAProduct(Request $req,$product_id) {
        return $this->reviewService->getAllReviewsOfAProduct($req,$product_id);
    }
    public function getAllReviewsOfAnUser(Request $req) {
        return $this->reviewService->getAllReviewsOfAnUser($req);
    }
    public function getSingleReview(Request $req,$review_id) {
        return $this->reviewService->getSingleReview($req,$review_id);
    }
    public function deleteReview(Request $req,$review_id) {
        return $this->reviewService->deleteReview($req,$review_id);
    }

    public function editReview(Request $req, $review_id) {
        return $this->reviewService->editReview($req,$review_id);
    }

}
