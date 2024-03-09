import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-yacht-advertiesments',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, MatRadioModule, FormsModule, ReactiveFormsModule],
  templateUrl: './yacht-advertiesments.component.html',
  styleUrl: './yacht-advertiesments.component.scss'
})
export class YachtAdvertiesmentsComponent {

}
