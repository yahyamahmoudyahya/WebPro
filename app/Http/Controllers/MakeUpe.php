<?php

namespace App\Http\Controllers;

use App\Order;
use App\Product;
use App\shopping;
use Illuminate\Http\Request;
use App\bage;
use App\shawle;
use App\perfume;
use App\makeup;
use Illuminate\Support\Facades\DB;

class MakeUpe extends Controller
{
    public function index(Request $request)
    {

        $makeup = Product::where('type','makeup')->get();
        $bage = Product::where('type','bags')->get();
        $shawle = Product::where('type','shawls')->get();
        $perfume = Product::where('type','perfumes')->get();

        return view('index', ['makeup'=>$makeup,'bage'=>$bage,'shawle'=>$shawle,'perfume'=>$perfume]);

    }





}
