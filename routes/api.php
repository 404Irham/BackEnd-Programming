<?php

use App\Http\Controllers\patientsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get("/patients", [patientsController::class, "index"]);
Route::post("/patients", [patientsController::class, "store"]);
Route::get("/patients/{id}", [patientsController::class, "show"]);
Route::put("/patients/{id}", [patientsController::class, "update"]);
Route::delete("/patients/{id}", [patientsController::class, "destroy"]);
Route::get("/patients/search/{name}", [patientsController::class, "search"]);
Route::get("/patients/status/positive", [patientsController::class, "positive"]);
Route::get("/patients/status/recovered", [patientsController::class, "recovered"]);
Route::get("/patients/status/dead", [patientsController::class, "dead"]);