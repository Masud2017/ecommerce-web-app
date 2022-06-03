<?php

namespace App\Providers;

use App\Http\Services\OrderServices;
use App\Http\Services\OrderServicesImpl;
use App\Http\Services\QuestionAnswerService;
use App\Http\Services\QuestionAnswerServiceImpl;
use App\Http\Services\ReviewService;
use App\Http\Services\ReviewServiceImpl;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(OrderServices::class,function($app) {
            return new OrderServicesImpl();
        });
        $this->app->bind(QuestionAnswerService::class,function($app){
            return new QuestionAnswerServiceImpl();
        });
        $this->app->bind(ReviewService::class,function($app){
            return new ReviewServiceImpl();
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
