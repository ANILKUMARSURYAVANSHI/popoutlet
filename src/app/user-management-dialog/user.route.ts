import { Routes } from '@angular/router';
import { userMgmtRoute, userDialogRoute} from './user-management.route' ;


export const userState: Routes = [

  {
    path: '',
    children: [...userMgmtRoute]
  },
...userDialogRoute
];
