import { Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ManageComponent } from './components/manage/manage.component';
import { EditComponent } from './components/edit/edit.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


export const routes: Routes = [
    {path:"", component:ManageComponent,title:"CRUD"},
    {path:"addEmployee",component:AddComponent, title: "add employee"},
    {path:'edit/:id',component:EditComponent,title:"Edit"},
    {path:"**",component:NotFoundComponent,title:"Not Found"}
];
