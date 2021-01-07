<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';

    protected $fillable = ['type', 'name', 'price', 'image'];

    public function orders_products()
    {
        return $this->hasMany(OrderProduct::class);
    }

}
