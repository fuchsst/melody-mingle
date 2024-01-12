import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
@Component({
  selector: 'start-screen',
  standalone: true,
  imports: [MatButtonModule,MatToolbarModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {

}
