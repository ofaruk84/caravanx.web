import { Routes } from '@angular/router';
import { CaravanAdvertiesmentsComponent } from './components/caravan-advertiesments/caravan-advertiesments.component';
import { HomeComponent } from './components/home/home.component';
import { YachtAdvertiesmentsComponent } from './components/yacht-advertiesments/yacht-advertiesments.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'caravans',component:CaravanAdvertiesmentsComponent},
    {path:'yachts',component:YachtAdvertiesmentsComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
];
