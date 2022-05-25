<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OAuthController;
use App\Http\Controllers\ProductController;
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
    Route::get('removecartitem/{id}',[CartController::class,'removeCartItem']);
    Route::get('clearCart',[CartController::class,'clearCart']);
    Route::get('updatecartitem/{id}',[CartController::class,'updateCartItem']);
    Route::get('placeorder',[CartController::class,'addProductToCart']);

    // Route for order handling

    // user specific handler
    Route::get('useraddress',[UserController::class,'getUserAddress']);
    Route::get('adduseraddress',[UserController::class,'addUserAddress']);
    Route::get('edituseraddress',[UserController::class,'editUserAddress']);



    // Google OAuth Handling
    Route::get('/google/redirect', [OAuthController::class,'getGoogleRedirect']);
    Route::get('/google/callback', [OAuthController::class,'getGoogleCallback']);
});
