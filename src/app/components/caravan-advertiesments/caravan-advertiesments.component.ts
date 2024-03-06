import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-caravan-advertiesments',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatRadioModule, FormsModule, ReactiveFormsModule],
  templateUrl: './caravan-advertiesments.component.html',
  styleUrl: './caravan-advertiesments.component.scss'
})
export class CaravanAdvertiesmentsComponent {

}
