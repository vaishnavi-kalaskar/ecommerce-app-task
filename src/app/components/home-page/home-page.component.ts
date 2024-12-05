import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  languageIsActive = false;
  signinIsActive = false;

  showLanguageDropdown(): void {
    this.languageIsActive = true;
  }

  hideLanguageDropdown(): void {
    this.languageIsActive = false;
  }

  showSigninDropdown(): void {
    this.signinIsActive = true;
  }

  hideSigninDropdown(): void {
    this.signinIsActive = false;
  }
}
