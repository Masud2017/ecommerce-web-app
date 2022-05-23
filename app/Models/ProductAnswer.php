<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductAnswer extends Model
{
    use HasFactory;

    protected $fillable = ['answer'];

    public function product_question() {
        return $this->belongsTo(ProductQuestions::class);
    }
}
