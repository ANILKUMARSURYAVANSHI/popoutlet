import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { ComputerComponent } from './computer/computer.component';
import { YogComponent } from './yog/yog.component';
import { AsanComponent } from './asan/asan.component';
import { PranayamComponent } from './pranayam/pranayam.component';
import { PopupmodelComponent } from './popupmodel/popupmodel.component';
import { ComposeComponent } from './compose/compose.component';

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
    ComposeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
