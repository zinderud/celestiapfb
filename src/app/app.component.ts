import { Component } from '@angular/core';
import { LibService } from './lib/lib.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'celestiapfb';
  constructor(private libService: LibService) {

  }

}
