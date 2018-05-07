import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ComputerComponent } from './computer/computer.component';
import { YogComponent } from './yog/yog.component';
import { AsanComponent } from './asan/asan.component';
import { PopupmodelComponent } from './popupmodel/popupmodel.component';
import { ComposeComponent } from './compose/compose.component';

const appRoutes: Routes = [
    {
        path: '',
        children: [ {
            path: 'yog',
            component: YogComponent
        },
        {   path: 'book', 
            component: BookComponent },
        {
            path: 'computer',
            component: ComputerComponent,
            data: { title: 'Computers ' }
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
    { path: 'pranayam', loadChildren : './pranayam/pranayam.module#PranayamModule'},
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
