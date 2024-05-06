

import { Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";

export const routes: Routes = [
    {path: '', component: HomeComponent },
    { path: 'about', loadComponent: () => import('../about/about.component').then((comp) => comp.AboutComponent) },
    { path: 'nav', loadComponent: () => import('../nav/nav.component').then((comp) => comp.NavComponent)},
    { path: 'contact', loadComponent: () => import('../contact/contact.component').then((comp) => comp.ContactComponent)},
]