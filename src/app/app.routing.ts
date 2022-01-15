import { Routes } from '@angular/router';
import { BaseComponentComponent } from './base-component/base-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';

export const AppRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'authentication',
    },
    {
        path: 'authentication',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    },
    {
        path: 'h',
        component: BaseComponentComponent,
        children: [
            {
                path: '',
                component: HomePageComponent
            },
            {
                path: 'verify',
                component: VerifyUserComponent
            }
        ]
    }
]