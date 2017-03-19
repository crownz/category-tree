import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['app.component.less',
  '../../node_modules/@angular/material/core/theming/prebuilt/indigo-pink.css']
})
export class AppComponent {
  title = 'app works!';
}
