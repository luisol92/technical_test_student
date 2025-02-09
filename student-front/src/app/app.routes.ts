import { Routes } from '@angular/router';
import { RegisterStudentComponent } from './form/register-student/register-student.component';
import { SearchStudentComponent } from './form/search-student/search-student.component';

export const routes: Routes = [
    {
        path: 'register',
        component: RegisterStudentComponent
    },
    {
        path: 'search',
        component: SearchStudentComponent
    }
];
