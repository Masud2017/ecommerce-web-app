<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OAuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\QuestionAnswerController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use Laravel\Socialite\Facades\Socialite;




/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::post('/test',[AuthController::class,'test']);
// Route::post('login', [AuthController::class,'login']);
// Route::post('register', [AuthController::class,'register']);




Route::group([

    'middleware' => 'api',
    'namespace' => 'App\Http\Controllers',
    'prefix' => 'auth'

], function ($router) {
    Route::post('login', [AuthController::class,'login']);
    Route::post('register', [AuthController::class,'register']);
    Route::post('admin/register',[AuthController::class,'register_admin']);
    Route::post('me', [AuthController::class,'me']);
    Route::post('logout', [AuthController::class,'logout']);
    Route::post('refresh',[AuthController::class,'refresh']);

    // route for product handling
    Route::put('addproduct',[ProductController::class,'addNewProduct']);
    Route::get('products',[ProductController::class,'getProductList']);
    Route::delete('deleteproduct/{id}', [ProductController::class,'deleteProduct']);
    Route::get('product/{id}',[ProductController::class,'getProduct']);
    Route::put('editproduct/{id}/{img_id}', [ProductController::class,'editProduct']);

    // route for cart handling
    Route::put('addcart/{product_id}',[CartController::class,'addCart']);
    Route::get('cartitems',[CartController::class,'getAllCartProduct']);
    Route::delete('removecartitem/{id}',[CartController::class,'removeCartItem']);
    Route::delete('clearcart',[CartController::class,'clearCart']);
    Route::put('updatecartitem/{id}',[CartController::class,'updateCartItem']);
    Route::get('cartquantity',[CartController::class,'getCartQuantity']);


    // Route for order handling
    Route::put('addorder/{id}',[OrderController::class,'addOrder']);
    Route::get('orderitems',[OrderController::class,'getOrderList']);
    Route::get('cancelorder',[OrderController::class,'cancelOrder']);
    Route::get('doneorder',[OrderController::class,'doneOrder']);



    // user specific handler
    Route::get('useraddress',[UserController::class,'getUserAddress']);
    Route::get('adduseraddress',[UserController::class,'addUserAddress']);
    Route::get('edituseraddress',[UserController::class,'editUserAddress']);

    // Route for handling product question and answers
    Route::put('addquestions/{product_id}',[QuestionAnswerController::class,'addQuestionToAProduct']);
    Route::get('questions/{product_id}',[QuestionAnswerController::class,'getQuestionListOfAProduct']);
    Route::put('addanswer/{question_id}',[QuestionAnswerController::class,'addAnswerToAQuestion']);
    Route::get('answers/{question_id}',[QuestionAnswerController::class,'getAnswersOfAQuestion']);

    // Route for handling product reivew
    Route::put('addreview/{product_id}',[ReviewController::class,'addReview']);
    Route::get('productreviews/{product_id}',[ReviewController::class,'getAllReviewsOfAProduct']);
    Route::get('userreviews',[ReviewController::class,'getAllReviewsOfAnUser']);
    Route::get('singlereview/{review_id}',[ReviewController::class,'getSingleReview']);
    Route::delete('deletereview/{review_id}',[ReviewController::class,'deleteReview']);
    Route::put('editreview/{review_id}',[ReviewController::class,'editReview']);




    // Google OAuth Handling
    Route::get('/google/redirect', [OAuthController::class,'getGoogleRedirect']);
    Route::get('/google/callback', [OAuthController::class,'getGoogleCallback']);
});
