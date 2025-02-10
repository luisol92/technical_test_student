import { Component, signal, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentServiceService } from '../../service/student/student-service.service';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { GradeServiceService } from '../../service/grade/grade-service.service';
import { ToastService } from '../../service/alert/toast.service';
import { ToastContainerComponent } from '../toast-container/toast-container.component';

@Component({
  selector: 'app-search-student',
  imports: [ReactiveFormsModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, ToastContainerComponent],
  templateUrl: './search-student.component.html',
  styleUrl: './search-student.component.css'
})
export class SearchStudentComponent {
  form = signal<FormGroup>(
    new FormGroup(
      {
        id: new FormControl('', Validators.required)
      }
    )
  ); 

  constructor(private studentServiceService: StudentServiceService,
              private gradeService: GradeServiceService,
              private toasService: ToastService
  ) {
    this.gradeService.getGrade().subscribe({
      next: (data)=> {
        console.log(data);
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

  search() {
    if(!this.form().valid) {
      alert("You must fill in all fields to search students");
    } else {
      let idGrade = this.form().value['id'];
      this.studentServiceService.getStudenByGradeId(idGrade).subscribe({
        next: (data) => {
          if (data == null) {
            alert('Not exist data with id: ' + idGrade);
          } else {
            console.log(data);
          }
        },
        error: (error) => {
          console.log(error);
          alert("There is Error when try search student !!!")
        }
      });
    }
  }

}
