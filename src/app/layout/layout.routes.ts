import { Routes } from "@angular/router";
import { AuthenticationGuard } from "../appinterface/auth/authentication.guard";

export const layout_routes: Routes = [
    { path: '', canActivate:[AuthenticationGuard], loadChildren: () => import('../Pages/home/home.routes').then(m => m.routes) },
] 
