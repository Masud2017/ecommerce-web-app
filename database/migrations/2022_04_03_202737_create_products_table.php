<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->engine = 'MyIsam';
            $table->increments('id')->unsigned();
            $table->string('name')->nullable();
            $table->float('price')->nullable();
            $table->text('description')->nullable();
            $table->string('rating')->nullable();
            $table->integer('stock')->nullable();
            $table->timestamps();

            $table->integer('product_catagories_id')->unsigned();
            $table->foreign('product_catagories_id')->references('id')->on('product_catagories')->onDelete('cascade');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
