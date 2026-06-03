import { Component, EventEmitter, Output } from '@angular/core';
import { ViewState } from '../../models/viewState/viewState.model';

@Component({
  selector: 'app-landing',
  imports: [],
  standalone: true,
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class LandingComponent {

  constructor() {
    console.log('LANDING COMPONENT CREADO');
  }

  @Output() start = new EventEmitter<ViewState>();

  

  onStartClick() {
    console.log("BOTON START");
    
    this.start.emit(ViewState.Form);
  }
}
