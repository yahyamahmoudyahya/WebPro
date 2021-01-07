<?php

namespace App\Http\Controllers;

use App\Order;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        Product::create([
            'type' => $request->input('selected'),
            'name' => $request->input('nameItem'),
            'price' => $request->input('priceItem'),
            'image' => $request->input('imge')
        ]);

        return redirect('/admin');
    }
    public function remove(Request $request)
    {
        Product::where('id',$request->id)->delete();
        $order=Order::with('orders_products')->get();
        $makeup = Product::where('type','makeup')->get();
        $bage = Product::where('type','bags')->get();
        $shawle = Product::where('type','shawls')->get();
        $perfume = Product::where('type','perfumes')->get();

        return view('admin', ['makeup'=>$makeup,'bage'=>$bage,'shawle'=>$shawle,'perfume'=>$perfume,'order'=>$order]);

    }


    public function admin()
    {

        $order=Order::with('orders_products')->get();
        $makeup = Product::where('type','makeup')->get();
        $bage = Product::where('type','bags')->get();
        $shawle = Product::where('type','shawls')->get();
        $perfume = Product::where('type','perfumes')->get();

        return view('admin', ['makeup'=>$makeup,'bage'=>$bage,'shawle'=>$shawle,'perfume'=>$perfume,'order'=>$order]);

    }

    public function login(Request $request)
    {
        if ($request->email=="yahya_223311@hotmail.com" && $request->pass=="123456"){

            $order=Order::with('orders_products')->get();
            $makeup = Product::where('type','makeup')->get();
            $bage = Product::where('type','bags')->get();
            $shawle = Product::where('type','shawls')->get();
            $perfume = Product::where('type','perfumes')->get();

            return view('admin', ['makeup'=>$makeup,'bage'=>$bage,'shawle'=>$shawle,'perfume'=>$perfume,'order'=>$order]);

        }
        return view('auth');

    }
}
