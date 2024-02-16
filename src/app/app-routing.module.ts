import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    title: "AGF | Home",
    children:[
      {
        path:'',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path:'home',
        component: HomeComponent
      },
      {
        path: 'about',
        title: "AGF | About Me",
        component: AboutComponent
      },
      {
        path: 'services',
        title: "AGF | Services",
        component: ServicesComponent
      },
      {
        path: 'contact',
        title: "AGF | Contact Me",
        component: ContactComponent
      }
    ]
  },
  {
    path: '**',
    component: NotfoundComponent,
    title: 'Learn Angular | Page Not Found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
