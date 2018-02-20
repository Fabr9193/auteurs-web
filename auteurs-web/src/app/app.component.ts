import { Component } from '@angular/core';

import {book} from "./models/bookModel"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Auteurs Web Client';

  username: string = "test";
  book : book[];
}
