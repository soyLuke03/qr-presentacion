import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { environment } from '../../../environment/environtment.prod';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {

  open: string | null = null;

  instagramUser: string = environment.instagramUser

  toggle(section: string) {
    this.open = this.open === section ? null : section;
  }
}
