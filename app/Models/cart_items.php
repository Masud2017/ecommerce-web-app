<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cart_items extends Model
{
    use HasFactory;

    protected $fillable = [
        'quantity'
    ];

    public $timestamps = true;



    public function shoppingSession() {
        return $this->belongsTo(shopping_session::class);
    }

    public function product() {
        return $this->belongsTo(Product::class);
    }
}
