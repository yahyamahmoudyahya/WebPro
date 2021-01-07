<?php

namespace App\Http\Controllers;

use App\Cart;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\URL;
use Illuminate\View\View;

class CartController extends Controller
{
    //
    public function store(Request $request)
    {
        //ajax
        //validation  (not ready)
        $find_product = Product::find($request->input('id'));
        //check if product not available
        if(!$find_product) {
            return response()->json(['status' => true, 'message' => 'Product Not Found', 'status' => 404]);
        }
        //catch cart
        $myCart = null;
        if (Session::has('cart')) {
            $myCart = Session::get('cart');
        }

        $cart = new Cart($myCart);

        $cart->add($find_product);

        request()->session()->put('cart', $cart);
        return back();

    }

    public function destroy(Request $request)
    {
        //ajax

        //validation  (not ready)

        $find_product = Product::find($request->id);

        //check if product not available
        if(!$find_product) {
            return response()->json(['status' => true, 'message' => 'Product Not Found', 'status' => 404]);
        }

        //catch cart
        $myCart = null;
        if (Session::has('cart')) {
            $myCart = request()->session()->get('cart');
        }

        $cart = new Cart($myCart);

        $cart->remove($request->id);

        Session::put('cart', $cart);

        return back();
    }
    public function demo(){
        return view('cart');
    }
    public function deleteSession(){
        request()->session()->forget('cart');
        request()->session()->flush();

        return view('cart');
    }
}
