<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'MakeUpe@index');

Route::post('order', 'OrderController@store')->name('order.store');
Route::post('/login', 'ProductController@login')->name('login');
Route::post('addNewItem', 'ProductController@store');
Route::post('remove', 'ProductController@remove')->name('remove.item');
Route::post('add', 'CartController@store');
Route::post('delete', 'CartController@destroy')->name('delete.cart');
Route::get('demo', 'OrderController@addToOrder');//to demo all orders
Route::get('/cart', 'CartController@demo');
Route::get('/auth', 'ProductController@login');
Route::get('/admin', 'ProductController@admin');
Route::get('/deleteSession','CartController@deleteSession');

