import {  Routes } from '@angular/router';

import {
    UserManagementComponent,
    UserDialogComponent
} from './';

export const userMgmtRoute: Routes = [
    {
        path: 'usermanagement',
        component: UserManagementComponent,

    }

];

export const userDialogRoute: Routes = [
    {
        path: 'user',
        component: UserDialogComponent,
        outlet: 'popup'
    }

];
