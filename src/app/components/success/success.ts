import { Component, EventEmitter, Output } from '@angular/core';
import { ViewState } from '../../models/viewState/viewState.model';

@Component({
  selector: 'app-success',
  imports: [],
  standalone: true,
  templateUrl: './success.html',
  styleUrl: './success.css',
})
export class SuccessComponent {

  @Output() clickOnAbout = new EventEmitter<ViewState>();
  @Output() clickOnLanding = new EventEmitter<ViewState>();

  constructor() { }

  goAbout() {
    this.clickOnAbout.emit(ViewState.About);
  }
}
