import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';


import {
    PranayamComponent,
  
} from './pranayam.component';


const pranayamRoutes : Routes = [
    
    {
        path: '', 
        component: PranayamComponent
    }
]


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(pranayamRoutes),
        
    ],
    declarations: [
        PranayamComponent
    ],
    
    providers: [
       
    ],
   exports:[RouterModule],
})
export class PranayamModule { }
