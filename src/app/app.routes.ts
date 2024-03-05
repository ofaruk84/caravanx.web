import { Routes } from '@angular/router';
import { CaravanAdvertiesmentsComponent } from './caravan-advertiesments/caravan-advertiesments.component';
import { HomeComponent } from './home/home.component';
import { YachtAdvertiesmentsComponent } from './yacht-advertiesments/yacht-advertiesments.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'caravans',component:CaravanAdvertiesmentsComponent},
    {path:'yachts',component:YachtAdvertiesmentsComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
];
