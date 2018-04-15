import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';
import { adminState} from './user.route' ;

import {
    UserManagementDialogComponent,
    UserDialogComponent,
    UserService,
    UserManagementComponent
} from './';

@NgModule({
    imports: [
        RouterModule.forChild(adminState),
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
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
