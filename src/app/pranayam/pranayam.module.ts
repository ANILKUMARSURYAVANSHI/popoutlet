import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import {  PranayamComponent } from './pranayam.component';
import { PranayamRoutingModule } from './pranayam.routing.module';





@NgModule({
    imports: [
        CommonModule,
        PranayamRoutingModule
        
    ],
    declarations: [
        PranayamComponent
    ]
    
   
})
export class PranayamModule { }
