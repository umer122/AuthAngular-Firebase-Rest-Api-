import { Routes } from "@angular/router";

export const layout_routes: Routes = [
    { path: '', loadChildren: () => import('../Pages/home/home.routes').then(m => m.routes) },
] 
