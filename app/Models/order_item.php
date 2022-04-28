<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order_item extends Model
{
    use HasFactory;

    public function products() {
        return $this->belongsToMany(product::class,'product_order_item');
    }

    // public function orderDetails() {
    //     return $this->hasMany(OrderDetails::class);
    // }

    public function orderDetails() {
        return $this->hasOne(OrderDetails::class);
    }
}
