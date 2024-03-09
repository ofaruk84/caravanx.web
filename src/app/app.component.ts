import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaravanAdvertiesmentsComponent } from './components/caravan-advertiesments/caravan-advertiesments.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CaravanAdvertiesmentsComponent,HomeComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'caravanx';
}
