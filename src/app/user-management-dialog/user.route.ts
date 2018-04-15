import { Routes } from '@angular/router';
import { userMgmtRoute, userDialogRoute} from './user-management.route' ;



const ADMIN_ROUTES = [

    ...userMgmtRoute,
];

export const adminState: Routes = [{
    path: '',
    children: ADMIN_ROUTES
},
...userDialogRoute
];
