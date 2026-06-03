import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about';
import { FormComponent } from './components/form/form';
import { SuccessComponent } from './components/success/success';
import { FormsModule } from '@angular/forms';
import { ViewState } from './models/viewState/viewState.model';
import { LandingComponent } from './components/landing/landing';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LandingComponent,
    AboutComponent,
    FormComponent,
    SuccessComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  view: ViewState = ViewState.Landing;

  goTo(event: ViewState) {
    this.view = event;
  }
}