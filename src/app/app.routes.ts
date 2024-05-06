import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


export const routes: Routes = [
    {
        path:'home',component:LayoutComponent,loadChildren:()=>import('./layout/layout.routes').then((comp)=>comp.layout_routes)
    },
    { path:'',loadChildren:()=>import('./auth/auth.routes').then((mod)=>mod.auth_routes)}

];
