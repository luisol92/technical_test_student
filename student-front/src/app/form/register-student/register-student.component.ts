import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GradeServiceService } from '../../service/grade/grade-service.service';
import { StudentServiceService } from '../../service/student/student-service.service';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register-student',
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule],
  templateUrl: './register-student.component.html',
  styleUrl: './register-student.component.css'
})
export class RegisterStudentComponent {

  form = signal<FormGroup>(
    new FormGroup(
      {
        name: new FormControl('', Validators.required),
        birthdate: new FormControl('', Validators.required),
        father: new FormControl('', Validators.required),
        mother: new FormControl('', Validators.required),
        grade_id: new FormControl('', Validators.required),
        section: new FormControl('', Validators.required)
      }
    )
  ); 

  constructor(private gradeService: GradeServiceService,
              private studentServiceService: StudentServiceService
  ) {

    this.gradeService.getGrade().subscribe({
      next: (data)=> {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  save() {
    if(!this.form().valid){
      alert("You must fill in all fields");
    } else {
      this.studentServiceService.createStudent(this.form().value).subscribe({
        next: (data) => {
          console.log(data);
          alert("Student Created !!!")
        },
        error: (error) => {
          console.log(error);
          alert("There is Error when try create student !!!")
        }
      });
    }
  }

}
