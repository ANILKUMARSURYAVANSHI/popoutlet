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
import { UserService } from './user-management-dialog/user.service';
import { AniltestAppRoutingModule } from './app-routing.module';





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
    AniltestAppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [  UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
