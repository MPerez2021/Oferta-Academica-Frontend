import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { CourseComponent } from './course/course.component';
import { RequestComponent } from './request/request.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DocumentsComponent } from './documents/documents.component';
import { HttpClientModule } from '@angular/common/http';
import { CareerService} from './home/career.services';
import { CarrerComponent } from './carrer/carrer.component';
import { AuxiliarenfermeryComponent } from './auxiliarenfermery/auxiliarenfermery.component';
import { AuxiliarfarmacyComponent } from './auxiliarfarmacy/auxiliarfarmacy.component';
import { AuxiliarphysiotherapyComponent } from './auxiliarphysiotherapy/auxiliarphysiotherapy.component';
import { FitnesskitchenComponent } from './fitnesskitchen/fitnesskitchen.component';
import { SymfonyComponent } from './symfony/symfony.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CareersComponent,
    CourseComponent,
    RequestComponent,
    InscriptionComponent,
    DocumentsComponent,
    CarrerComponent,
    AuxiliarenfermeryComponent,
    AuxiliarfarmacyComponent,
    AuxiliarphysiotherapyComponent,
    FitnesskitchenComponent,
    SymfonyComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CareerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
