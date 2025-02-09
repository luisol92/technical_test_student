<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GradeController;
use App\Http\Controllers\StudentController;

Route::post('/crear-alumno', [StudentController::class,'save']);

Route::get('/consultar-alumno/{id}', [StudentController::class,'search']);

Route::post('/crear-grado', [GradeController::class,'save']);