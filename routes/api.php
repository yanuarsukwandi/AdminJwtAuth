<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([

    'middleware' => 'api',
    //'namespace' => 'App\Http\Controllers',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');

});

Route::group(['middleware' => 'auth'], function ($router) {
    Route::get('posts', 'Admin\PostController@index');
    Route::delete('posts/{id}', 'Admin\PostController@destroy');
    Route::patch('post/edit/{id}', 'Admin\PostController@update');
    Route::post('post/new', 'Admin\PostController@store');
    Route::get('post/{id}', 'Admin\PostController@edit');

});
