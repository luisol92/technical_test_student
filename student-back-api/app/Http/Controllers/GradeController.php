<?php

namespace App\Http\Controllers;

use App\Models\Grade;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GradeController extends Controller
{
    public function save (Request $request) {

        $validator = Validator::make($request-> all(),[
            'name' => 'required'
        ]);

        if ($validator->fails()) {
            $data = ['message'=> 'Error validations',
            'errors' => $validator->errors(),
            'status' => 400
            ];
            return response()->json($data, 400);
        }

        $grade = Grade::create([
            'name'=> $request->name
        ]);

        if (!$grade) {
          $data = [
            'message'=> 'Error when trying to create grade',
            'status'=> 500
          ];
          return response()->json($data, 500);
        }

        return response()->json($grade, 201);
    }

    public function search () {
        $listGrade = Grade::all();
        if ($listGrade->isEmpty()) {
            $data = [
                'message'=> 'Not exist grades, remeber create grade from api grade',
                'status'=> 204
              ];
            return response()->json($data, 204);
        }
        return response()->json($listGrade, 200);
    }
}
