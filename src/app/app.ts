import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LandingComponent } from './src/components/landing/landing';
import { AboutComponent } from './src/components/about/about';
import { FormComponent } from './src/components/form/form';
import { SuccessComponent } from './src/components/success/success';
import { CommonModule } from '@angular/common';
import { ViewState } from './src/models/viewState/viewState.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, LandingComponent, AboutComponent, FormComponent, SuccessComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  protected readonly title = signal('qr-presentacion');

  view: ViewState = ViewState.Landing;

  goToSuccess() {
    this.view = ViewState.Success;
  }

  goToAbout() {
    this.view = ViewState.About;
  }

  goHome() {
    this.view = ViewState.Landing;
  }

  goTo(event: ViewState) {
    this.view = event
  }
}



