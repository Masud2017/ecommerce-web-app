<?php

// use Illuminate\Database\Migrations\Migration;
// use Illuminate\Database\Schema\Blueprint;
// use Illuminate\Support\Facades\Schema;

// class CreateProductsCartTable extends Migration
// {
//     /**
//      * Run the migrations.
//      *
//      * @return void
//      */
//     public function up()
//     {
//         Schema::create('products_cart', function (Blueprint $table) {
//             $table->id();
//             $table->integer('cart_id')->unsigned();
//             $table->integer('product_id')->unsigned();
//             $table->timestamps();

//             $table->foreign('cart_id')->references('id')->on('carts')->onDelete('cascade');
//             $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');

//         });
//     }

//     /**
//      * Reverse the migrations.
//      *
//      * @return void
//      */
//     public function down()
//     {
//         Schema::dropIfExists('products_cart');
//     }
// }
