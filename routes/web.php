<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/owner', 'Admin\AdminController@index');

Route::get('/test', 'TestController@index');

Route::get('/main', ['as' => 'index', 'uses' => 'PagesController@index']);
Route::get('/woman', ['as' => 'woman', 'uses' =>'PagesController@woman']);
Route::get('/man', ['as' => 'man', 'uses' =>'PagesController@man']);
Route::get('/children', ['as' => 'children', 'uses' =>'PagesController@children']);
Route::get('/accessories', ['as' => 'accessories', 'uses' =>'PagesController@accessories']);
Route::get('/house', ['as' => 'house', 'uses' =>'PagesController@house']);
Route::get('/food', ['as' => 'food', 'uses' =>'PagesController@food']);
Route::get('/decor', ['as' => 'decor', 'uses' =>'PagesController@decor']);
Route::get('/contacts', ['as' => 'contacts', 'uses' =>'PagesController@contacts']);
Route::get('/help', ['as' => 'help', 'uses' =>'PagesController@help']);
Route::get('/rules', ['as' => 'rules', 'uses' =>'PagesController@rules']);