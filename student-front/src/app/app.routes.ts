import { Routes } from '@angular/router';
import { RegisterStudentComponent } from './form/register-student/register-student.component';
import { SearchStudentComponent } from './form/search-student/search-student.component';
import { AppComponent } from './app.component';
import { ToastGlobalComponent } from './form/toast-global/toast-global.component';

export const routes: Routes = [
    {
        path: '',
        component: ToastGlobalComponent
    },
    {
        path: 'register',
        component: RegisterStudentComponent
    },
    {
        path: 'search',
        component: SearchStudentComponent
    }
];
