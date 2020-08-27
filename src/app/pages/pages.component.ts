import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions(): void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  // Cargamos el tema en PageComponents, ya que el CSS de los temas sólo se aplica al Dashboard

  constructor( private settingService: SettingsService ) {
  }

  ngOnInit(): void {
    customInitFunctions();
  }

}
