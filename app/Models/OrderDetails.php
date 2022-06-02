<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class OrderDetails extends Model
{
    use HasFactory;

    protected $fillable = ['total','status'];


    public function orderItem() { // I will talk aboaut you later.
        return $this->hasMany(order_item::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }



}
