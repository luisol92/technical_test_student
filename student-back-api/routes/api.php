<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/crear-alumno', function (Request $request) {
    return "Creating student";
});

Route::get('/consultar-alumno/{id}', function (Request $request) {
    return "searching student";
});
