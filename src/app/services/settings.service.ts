import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    this.currentTheme();
  }

  currentTheme(): void{
    const urlTheme = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme.setAttribute('href', urlTheme);
  }

  changeTheme(theme: string): void{


    const urlTheme = `./assets/css/colors/${ theme }.css`;

    this.linkTheme.setAttribute('href', urlTheme);

    localStorage.setItem('theme', urlTheme);

    this.checkCurrentTheme();
  }

  checkCurrentTheme(): void{
    const links = document.querySelectorAll('.selector');
    links.forEach(elem => {
      elem.classList.remove('working');

      const btnTheme = elem.getAttribute('data-theme');
      const currentUrlTheme = this.linkTheme.getAttribute('href');
      const btnUrlTheme = `./assets/css/colors/${ btnTheme }.css`;

      if (currentUrlTheme === btnUrlTheme) {
        elem.classList.add('working');
      }
    });
  }
}
