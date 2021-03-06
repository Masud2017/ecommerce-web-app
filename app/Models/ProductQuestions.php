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
        return $this->hasMany(ProductAnswer::class,'product_question_id');
    }

    public function product () {
        return $this->belongsTo(product::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
