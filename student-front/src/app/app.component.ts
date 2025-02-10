import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchStudentComponent } from './form/search-student/search-student.component';
import { RegisterStudentComponent } from './form/register-student/register-student.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbNavModule, SearchStudentComponent, RegisterStudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-front';
  active = 1;
}
