<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cart_items extends Model
{
    use HasFactory;

    public function shoppingSession() {
        return $this->belongsTo(shopping_session::class);
    }

    public function products() {
        return $this->hasMany(product::class);
    }
}
