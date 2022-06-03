<?php
namespace App\Http\Services;

use Illuminate\Http\Request;

interface ReviewService {
    public function addReview(Request $req,$product_id);
    public function getAllReviewsOfAProduct(Request $req,$product_id);
    public function getAllReviewsOfAnUser(Request $req);
    public function getSingleReview(Request $req,$review_id);
    public function deleteReview(Request $req,$review_id);
    public function editReview(Request $req, $review_id);
}
