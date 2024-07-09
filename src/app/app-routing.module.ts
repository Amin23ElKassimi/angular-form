import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContattiComponent } from './contatti/contatti.component';
import { NotfoundComponent } from './componenti/notfound/notfound.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/homepage' },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'contatti', component: ContattiComponent,
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
