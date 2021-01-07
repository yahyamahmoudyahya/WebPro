<?php

namespace App\Http\Controllers;

use App\Order;
use App\OrderProduct;
use App\Product;
use Illuminate\Http\Request;
use function Sodium\add;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $cart = null;
        //add new order products
        if(session()->has('cart')){
            //add new Order
            $cart = session()->get('cart');
            //check if cart has one product at least

            $new_order = new Order();
            $new_order->name = $request->name;
            $new_order->phone = $request->phone;
            $new_order->address = $request->address;
            $new_order->note = $request->note;
            $new_order->grand_total = $cart->grandTotal;
            //complete code
            $new_order->save();
            foreach ($cart->products as $key => $product) {
                $new_order_product = new OrderProduct();
                $new_order_product->order_id = $new_order->id;
                $new_order_product->product_id = $product['product']['id'];
                $new_order_product->product_name = $product['product']['name'];
                $new_order_product->quantity = $product['qty'];
                $new_order_product->price = $product['qty']*$product['price'];
                $new_order_product->save();
            }

        }
        if ($cart==null){
            return 'There are no items in the cart ';
        }

        request()->session()->forget('cart');
        request()->session()->flush();
        return back();

    }

    public function addToOrder(Request $request)
    {

        $orders=Order::with('orders_products')->get();
        $products=Product::with('orders_products')->get();
        $orderProduct= OrderProduct::with('order','product')->get();
        $items= null;
//        foreach ($orders as $item){
//            return $item["orders_products"];
//            foreach ($item as $id_product){
//                return Product::find($id_product["product_id"]);
//            }
//        }
        return $orders;
    }
}
