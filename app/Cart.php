<?php


namespace App;


use Illuminate\Support\Facades\Session;

class Cart
{
    public $qty = 0;
    public $grandTotal = 0;
    public $products = null;
    //create constructor
    public function __construct($oldCart)
    {
        if($oldCart){
          $this->qty = $oldCart->qty;
          $this->grandTotal = $oldCart->grandTotal;
          $this->products = $oldCart->products;
        }
    }

    //create add to cart
    public function add(Product $product)
    {
        //create a default product object
        $added_item = ['qty' => 0, 'product' => $product, 'price' => $product->price];
        //check if there is any products
        $product_id = $product->id;
        $cart_products = $this->products;
        if($cart_products){
            if(array_key_exists($product_id, $cart_products)){
                $added_item = $cart_products[$product_id];
            }
        }

        $added_item['qty']++;
        $added_item['price']=$product->price ;
        $this->products[$product_id]=$added_item;
        $this->qty++;
        $this->grandTotal+=$product->price;

        $cart_products[$product_id] = $added_item;
    }
    //remove from cart
    public function remove($id){

        $removed_item = $this->products[$id];

        $this->grandTotal -= $removed_item['price'] * $removed_item['qty'];

        unset($removed_item);

    }

    public function destroy(){
        //remove all products
    }

}
