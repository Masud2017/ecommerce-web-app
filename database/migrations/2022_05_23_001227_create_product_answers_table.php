<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_answers', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("answer");
            $table->integer('product_questions')->unsigned();

            $table->foreign('product_questions')->references('id')->on('product_questions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_answers');
    }
}
