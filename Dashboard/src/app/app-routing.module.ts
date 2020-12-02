import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{
  path: 'contact',
  component: ContactComponent,
},
{
  path: 'users', 
  component: UserListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
