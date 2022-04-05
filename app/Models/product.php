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
}
