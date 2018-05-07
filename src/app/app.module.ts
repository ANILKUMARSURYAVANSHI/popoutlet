import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ComputerComponent } from './computer/computer.component';
import { YogComponent } from './yog/yog.component';
import { AsanComponent } from './asan/asan.component';
import { PopupmodelComponent } from './popupmodel/popupmodel.component';
import { ComposeComponent } from './compose/compose.component';
import { AniltestAppRoutingModule } from './app-routing.module';
import { UserModule } from './user-management-dialog/user.module';
import { PranayamModule } from './pranayam/pranayam.module';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ComputerComponent,
    YogComponent,
    AsanComponent,
    PopupmodelComponent,
    ComposeComponent,
  ],
  entryComponents: [
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AniltestAppRoutingModule,
    UserModule,
    NgbModule.forRoot(),
    PranayamModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
