<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'price', 'description'];

    /**
     * Connects product model with multiple catagories
     */
    public function catagories() {
        return $this->belongsToMany(catagory::class,"product_catagory");
    }

    public function productInventor() {
        return $this->hasOne(ProductInventor::class);
    }

    public function discount () {
        return $this->belongsTo(Discount::class);
    }

    public function cart_item() {
        return $this->belongsToMany(cart_items::class,'product_cart_item');
    }

    public function order_items() {
        return $this->belongsToMany(order_item::class,'product_order_item');
    }
}
