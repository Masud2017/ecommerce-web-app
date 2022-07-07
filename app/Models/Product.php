<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'price', 'description','rating','stock'
    ];

    /**
     * Connects product model with multiple catagories
     */
    public function catagories() {
        return $this->belongsToMany(catagory::class,"product_catagory");
    }

    // public function productInventor() {
    //     return $this->hasOne(ProductInventor::class);
    // }

    // public function discount () {
    //     return $this->belongsTo(Discount::class);
    // }

    public function cart_item() {
        return $this->hasMany(cart_items::class);
        // return $this->belongsToMany(cart_items::class);

    }
    public function order_item() {
        return $this->hasMany(order_item::class);
    }

    // public function order_items() {
    //     return $this->belongsToMany(order_item::class,'product_order_item');
    // }

    public function images() {
        return $this->hasMany(ProductImage::class);
    }

    public function product_questions() {
        return $this->hasMany(ProductQuestions::class);
    }

    public function product_reviews() {
        return $this->hasMany(ProductReview::class);
    }

    public function product_catagory () {
        return $this->belongsTo(ProductCatagory::class);
    }
}
