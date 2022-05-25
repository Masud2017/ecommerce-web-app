<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class shopping_session extends Model
{
    use HasFactory;

    protected $fillable = [
        'total'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function cart_items() {
        return $this->hasMany(cart_items::class);
    }

    // public function cart() {
    //     return $this->hasMany(cart_items::class);
    // }
}
