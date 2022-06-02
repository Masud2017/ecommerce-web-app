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
            $table->engine = 'MyIsam';
            $table->id();
            $table->timestamps();
            $table->string("answer");
            $table->integer('product_question_id')->unsigned();
            $table->integer('user_id')->unsigned();

            $table->foreign('product_question_id')->references('id')->on('product_questions')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
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
