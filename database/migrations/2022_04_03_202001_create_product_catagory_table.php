<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductCatagoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_catagory', function (Blueprint $table) {
            // $table->id();
            // $table->timestamps();
            $table->integer('product_id')->unsigned();
            $table->integer('catagory_id')->unsigned();

            $table->foreign('product_id')->references('id')->on('products')

                ->onDelete('cascade');

            $table->foreign('catagory_id')->references('id')->on('catagories')

                ->onDelete('cascade');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_catagory');
    }
}