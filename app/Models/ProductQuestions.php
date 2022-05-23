<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductQuestions extends Model
{
    use HasFactory;
    protected $fillable = [
        'question'
    ];

    public function product_answers() {
        return $this->hasMany(ProductAnswer::class);
    }

    public function product () {
        return $this->belongsTo(product::class);
    }
}
