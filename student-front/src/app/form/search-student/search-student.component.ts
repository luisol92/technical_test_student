import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentServiceService } from '../../service/student/student-service.service';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search-student',
  imports: [ReactiveFormsModule, MatCardModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule],
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

  constructor(private studentServiceService: StudentServiceService) { }

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
