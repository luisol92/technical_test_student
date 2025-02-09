import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentServiceService } from '../../service/student/student-service.service';

@Component({
  selector: 'app-search-student',
  imports: [ReactiveFormsModule],
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
