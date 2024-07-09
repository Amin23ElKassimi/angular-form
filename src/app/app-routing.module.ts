import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'contatti', component: ContattiComponent, canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    // Routers child
    children: [
      { path: ':id', component: ContactComponent }
    ]
  },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
