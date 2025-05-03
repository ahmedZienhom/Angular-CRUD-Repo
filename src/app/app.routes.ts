import { Routes } from '@angular/router';
import { ManageComponent } from './components/manage/manage.component';
import { confirmGuard } from './core/guards/confirm.guard';


export const routes: Routes = [
    {path:"", redirectTo:"crud",pathMatch:'full'},
    {path:"crud", component:ManageComponent,title:"CRUD"},
    {path:"addEmployee",loadComponent:() => import('./components/add/add.component').then(c => c.AddComponent),title:"Add New Employee" ,canDeactivate:[confirmGuard]},
    {path:'edit/:id',loadComponent:() => import('./components/edit/edit.component').then(c => c.EditComponent),title:"Edit",canDeactivate:[confirmGuard]},
    {path:"**",loadComponent:() => import('./components/not-found/not-found.component').then(c => c.NotFoundComponent),title:"Not Found"}
];
