<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GradeController;
use App\Http\Controllers\StudentController;
use App\Http\Middleware\BasicAuthentication;

Route::post('/crear-alumno', [StudentController::class,'save'])->middleware(BasicAuthentication::class);

Route::get('/consultar-alumno/{id}', [StudentController::class,'search'])->middleware(BasicAuthentication::class);

Route::post('/crear-grado', [GradeController::class,'save'])->middleware(BasicAuthentication::class);