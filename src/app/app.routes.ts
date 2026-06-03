import { Routes } from '@angular/router';
import { LandingComponent } from './src/components/landing/landing';
import { FormComponent } from './src/components/form/form';
import { SuccessComponent } from './src/components/success/success';
import { AboutComponent } from './src/components/about/about';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'form', component: FormComponent },
    { path: 'success', component: SuccessComponent },
    { path: 'about', component: AboutComponent }
];
