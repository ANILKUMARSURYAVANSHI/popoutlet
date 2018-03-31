import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
import { UserModalService } from './user-management-dialog/user-modal.service';
import { UserService } from './user-management-dialog/user.service';


const appRoutes: Routes = [
  {
    path: 'yog',
    component: YogComponent
  },
  { path: 'book', component: BookComponent },
  {
    path: 'computer',
    component: ComputerComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: '',
    redirectTo: '/yog',
    pathMatch: 'full'
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
  declarations: [
    AppComponent,
    BookComponent,
    ComputerComponent,
    YogComponent,
    AsanComponent,
    PranayamComponent,
    PopupmodelComponent,
    ComposeComponent,
    UserManagementDialogComponent,
    UserDialogComponent
  ],
  entryComponents: [
    UserManagementDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule.forRoot()
  ],
  providers: [  UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
