<?php

Route::get('/', function () { return view('index');} );
Route::get('/index-2', function () { return view('pages/index2');} );
Route::get('/index-3', function () { return view('pages/index3');} );
