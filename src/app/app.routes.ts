import { Routes } from '@angular/router';
import { HeaderComponentComponent } from './header-component/header-component.component';

export const routes: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: 'home', component: HeaderComponentComponent},
];
