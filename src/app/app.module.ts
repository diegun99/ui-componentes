import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import { EmpleadosComponent } from './empleados/empleados.component';
import { CajeroComponent } from './cajero/cajero.component';
import {MatTabsModule} from '@angular/material/tabs';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import { ProductService } from './services/productService';



@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    CajeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatBadgeModule,
    MatTabsModule,
    AccordionModule,
    CarouselModule,
    ButtonModule,
    ToastModule,


    

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
