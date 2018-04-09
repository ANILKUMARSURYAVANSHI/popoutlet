import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ComputerComponent } from './computer/computer.component';
import { YogComponent } from './yog/yog.component';
import { AsanComponent } from './asan/asan.component';
import { PranayamComponent } from './pranayam/pranayam.component';
import { PopupmodelComponent } from './popupmodel/popupmodel.component';
import { ComposeComponent } from './compose/compose.component';
import { UserManagementDialogComponent } from './user-management-dialog/user-management-dialog.component';
import { UserDialogComponent } from './user-management-dialog/user-management-dialog.component';

const appRoutes: Routes = [
    {
        path: '',
        children: [ {
            path: 'yog',
            component: YogComponent
        },
    { path: 'book', component: BookComponent },
    {
        path: 'computer',
        component: ComputerComponent,
        data: { title: 'Heroes List' }
    }
    ]
    },
    {
        path: 'angular',
        component: PopupmodelComponent,
        outlet: 'popup'
    },
    {
        path: 'compose',
        component: ComposeComponent,
        outlet: 'popup'
    },
    // {
    //   path: 'user',
    //   component: UserManagementDialogComponent,
    //   outlet: 'popup'
    // },
    {
        path: 'user',
        component: UserDialogComponent,
        outlet: 'popup'
    },
    { path: '**', component: YogComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true, enableTracing: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AniltestAppRoutingModule { }
