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

  @Output() start = new EventEmitter<ViewState>();

  onStartClick() {
    this.start.emit(ViewState.Form);
  }
}
