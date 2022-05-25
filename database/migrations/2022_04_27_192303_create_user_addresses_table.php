<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_addresses', function (Blueprint $table) {
            $table->engine = 'MyIsam';
            $table->increments('id');
            $table->timestamps();
            $table->string("address1")->nullable();
            $table->string("address2")->nullable();
            $table->string("phone")->nullable();
            $table->string("postal_code")->nullable();
            $table->string("city")->nullable();
            $table->string("disctrict")->nullable();
            $table->string("country")->nullable();

            $table->integer('user_id')->unsigned()->nullable();
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
        Schema::dropIfExists('user_addresses');
    }
}
