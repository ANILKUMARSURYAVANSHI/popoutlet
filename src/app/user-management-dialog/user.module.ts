import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';
import { userState} from './user.route' ;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {
    UserManagementDialogComponent,
    UserDialogComponent,
    UserService,
    UserManagementComponent
} from './';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        RouterModule.forChild(userState),
        CommonModule
    ],
    declarations: [
        UserManagementComponent,
        UserDialogComponent,
        UserManagementDialogComponent
    ],
    entryComponents: [
        UserManagementDialogComponent,
    ],
    providers: [
        UserService
    ],
    exports:[RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
