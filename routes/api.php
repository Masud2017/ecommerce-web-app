<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
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
});
