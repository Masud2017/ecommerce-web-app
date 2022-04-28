<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderDetails extends Model
{
    use HasFactory;


    public function orderItem() {
        return $this->belongsTo(order_item::class);
    }

}
