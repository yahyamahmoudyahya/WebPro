<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = ['name','phone','address','note','grand_total'];
    public function orders_products()
    {
        return $this->hasMany(OrderProduct::class);
    }
}
