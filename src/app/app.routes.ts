import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing';
import { FormComponent } from './components/form/form';
import { SuccessComponent } from './components/success/success';
import { AboutComponent } from './components/about/about';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'form', component: FormComponent },
    { path: 'success', component: SuccessComponent },
    { path: 'about', component: AboutComponent }
];
