import { RouterConfig, RouterModule } from "@angular/router";
import { HomeComponent } from "./home-component.component";
import { UserComponent } from "./user/user.component";
import { USER_ROUTES } from "./user/user.routes";
const APP_ROUTES: RouterConfig = [
	{ path: 'user/:id', component: UserComponent},
	{ path: 'user/:id', component: UserComponent, children: USER_ROUTES},
	{ path: '', component: HomeComponent },
	{ path: '**', reditectTo: '/user/1', pathMatch: 'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);