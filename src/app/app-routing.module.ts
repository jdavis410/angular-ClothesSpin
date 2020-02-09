import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DropoffComponent} from './dropoff/dropoff.component';
import {ServiceComponent} from './service/service.component';
import {HistoryComponent} from './history/history.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'dropoff', component: DropoffComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'history', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
