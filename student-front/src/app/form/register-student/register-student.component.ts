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
import { ToastService } from '../../service/alert/toast.service';
import { ToastContainerComponent } from '../toast-container/toast-container.component';

@Component({
  selector: 'app-register-student',
  imports: [ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, ToastContainerComponent],
  templateUrl: './register-student.component.html',
  styleUrl: './register-student.component.css'
})
export class RegisterStudentComponent {

  infoGrades:any;

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
              private studentServiceService: StudentServiceService,
              private toasService: ToastService
  ) {

    this.gradeService.getGrade().subscribe({
      next: (data)=> {
        this.infoGrades = data;
      },
      error: (err) => {
        if (err?.status == 0) {
          this.toasService.show({ text: "Remember to start the API server first.", classname: 'bg-danger text-light', delay: 5000 });
        } else {
          this.toasService.show({ text: "Error: " + err.status + " -> " + err.statusText, classname: 'bg-danger text-light', delay: 5000 });
        }
      }
    });

  }

  save() {
    if(!this.form().valid){
      this.toasService.show({ text: "You must fill in all fields", classname: 'bg-danger text-light', delay: 5000 });
    } else {
      this.studentServiceService.createStudent(this.form().value).subscribe({
        next: (data: any) => {
          this.toasService.show({ text: "Student " + data?.name + " was created !!!", classname: 'bg-success text-light', delay: 10000 });
        },
        error: (error) => {
          if (error?.status == 0) {
            this.toasService.show({ text: "Remember to start the API server first.", classname: 'bg-danger text-light', delay: 5000 });
          } else {
            this.toasService.show({ text: "Error: " + error.status + " -> " + error.statusText, classname: 'bg-danger text-light', delay: 5000 });
          }
        }
      });
    }
  }

}
