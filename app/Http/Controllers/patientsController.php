<?php

namespace App\Http\Controllers;

use App\Models\patients;
use Illuminate\Http\Request;

class patientsController extends Controller
{
    //

    public function index(){
        $patients =  patients::all();

        if($patients->isNotEmpty()){
            $result = [
                "message" => "Get all Resource",
                "data" => $patients
            ];

            return response()->json($result, 200);
        }else{
            $result = [
                "message" => "Data is empty"
            ];

            return response()->json($result, 200);
        }
    }

    public function store(Request $request){
        $validateData=$request->validate([
            "name" => "required",
            "phone" => "required|numeric",
            "address" => "required",
            "status" => "required",
            "in_date_at" => "required",
        ]);
       
        $patients = patients::create($validateData);

        if($patients){
            $result = [
                "message" => "Resource Is added successfully",
                "data" => $patients
            ];

            return response()->json($result, 201);
        }else{
            $result = [
                "message" => "Resource not found"
            ];

            return response()->json($result, 404);
        }
        
    }

    public function show($id){
        $patients = patients::find($id);
        
        if($patients){
            $result = [
                "message" => "Get Detail Resource",
                "data" => $patients
            ];

            return response()->json($result, 200);
        }else{
            $result = [
                "message" => "Resource not found"
            ];

            return response()->json($result, 404);
        }
    }

    public function update(Request $request,$id){
        $patients = patients::find($id);

        if($patients){           
        $patients->update($request->all());
            $result = [
                "message" => "Resource is update successfully",
                "data" => $patients
            ];

            return response()->json($result, 200);
        }else{
            $result = [
                "message" => "Resource not found"
            ];

            return response()->json($result, 404);
        }
    }

    public function destroy($id){
        $patients = patients::find($id);

        if($patients){
            $patients->delete();
            $result = [
                "message" => "Resource is delete successfully",
                "data" => $patients
            ];

            return response()->json($result, 200);
        }else{
            $result = [
                "message" => "Resource not found"
            ];

            return response()->json($result, 404);
        }
    }

    public function search($name){
        $patients = patients::where("name","like","%" . $name . "%")->get();

        if($patients->isNotEmpty()){
            $result = [
                "message" => "Get searched Resource",
                "data" => $patients
            ];

            return response()->json($result, 200);
        }else{
            $result = [
                "message" => "Resource not found"
            ];

            return response()->json($result, 404);
        }
    }

    public function positive(){
        $patients = patients::where("status","positive")->get();

        if($patients->isNotEmpty()){
            $result = [
                "message" => "Get positive Resource",
                "data" => $patients
            ];

            return response()->json($result, 200);
        }else{
            $result = [
                "message" => "Resource not found"
            ];

            return response()->json($result, 404);
        }
    }

    public function recovered(){
        $patients = patients::where("status","recovered")->get();

        if($patients->isNotEmpty()){
            $result = [
                "message" => "Get recovered Resource",
                "data" => $patients
            ];

            return response()->json($result, 200);
        }else{
            $result = [
                "message" => "Resource not found"
            ];

            return response()->json($result, 404);
        }
    }

    public function dead(){
        $patients = patients::where("status","dead")->get();

        if($patients->isNotEmpty()){
            $result = [
                "message" => "Get dead Resource",
                "data" => $patients
            ];

            return response()->json($result, 200);
        }else{
            $result = [
                "message" => "Resource not found"
            ];

            return response()->json($result, 404);
        }
    }

}
