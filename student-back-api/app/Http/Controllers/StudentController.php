<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    public function save (Request $request) {

        $validator = Validator::make($request-> all(),[
            'name' => 'required',
            'birthdate' => 'required',
            'father' => 'required',
            'mother' => 'required',
            'grade_id' => 'required',
            'section' => 'required'
        ]);

        if ($validator->fails()) {
            $data = ['message'=> 'Error validations',
            'errors' => $validator->errors(),
            'status' => 400
            ];
            return response()->json($data, 400);
        }

        $student = Student::create([
            'name'=> $request->name,
            'birthdate'=> $request->birthdate,
            'father'=> $request->father,
            'mother'=> $request->mother,
            'grade_id'=> $request->grade_id,
            'section'=> $request->section
        ]);

        if (!$student) {
          $data = [
            'message'=> 'Error when trying to create student',
            'status'=> 500
          ];
          return response()->json($data, 500);
        }

        return response()->json($student, 201);
    }

    public function search ($id) {
        $queryStudent = Student::query();
        $queryStudent->where('grade_id', '=', $id);
        $student = $queryStudent->get();
        if (count($student) == 0) {
            $data = [
                'message'=> 'Not exist student',
                'status'=> 204
              ];
            return response()->json($data, 204);
        }
        return response()->json($student, 200);
    }
}