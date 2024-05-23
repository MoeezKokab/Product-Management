import { Component } from '@angular/core';

import {MatButton, MatIconButton} from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButton,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    RouterLink

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
