<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cart_items', function (Blueprint $table) {
            $table->engine = 'MyIsam';
            $table->increments('id');
            $table->timestamps();
            $table->integer("quantity")->nullable();
            $table->integer('product_id')->unsigned();
            // $table->integer('user_id')->unsigned()->nullable();
            $table->integer('shopping_session_id')->unsigned()->nullable();

            $table->foreign('product_id')->references('id')->on('products')->onUpdate('cascade');

            $table->foreign('shopping_session_id')->references('id')->on('shopping_sessions')->onDelete('cascade');


            // $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cart_items');
    }
}
