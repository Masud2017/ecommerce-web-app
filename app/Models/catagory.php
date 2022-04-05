<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class catagory extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'description'];

    public function products() {
        return $this->belongsToMany(product::class,'product_catagory');
    }
}
