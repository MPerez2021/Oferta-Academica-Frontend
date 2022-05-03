import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {CareersComponent} from './careers/careers.component';
import {CourseComponent} from './course/course.component';
import {DocumentsComponent} from './documents/documents.component';
import {RequestComponent} from './request/request.component';
import {CarrerComponent} from './carrer/carrer.component';
import {AuxiliarenfermeryComponent} from './auxiliarenfermery/auxiliarenfermery.component';
import {AuxiliarfarmacyComponent} from './auxiliarfarmacy/auxiliarfarmacy.component';
import {AuxiliarphysiotherapyComponent} from './auxiliarphysiotherapy/auxiliarphysiotherapy.component';
import {FitnesskitchenComponent} from './fitnesskitchen/fitnesskitchen.component';
import {SymfonyComponent} from './symfony/symfony.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: InscriptionComponent.URL, component: InscriptionComponent},
  {path: CareersComponent.URL, component: CareersComponent},
  {path: CourseComponent.URL, component: CourseComponent},
  {path: DocumentsComponent.URL, component: DocumentsComponent},
  {path: RequestComponent.URL, component: RequestComponent},
  {path: CarrerComponent.URl, component: CarrerComponent},
  {path: AuxiliarenfermeryComponent.URL, component:AuxiliarenfermeryComponent},
  {path: AuxiliarfarmacyComponent.URL, component: AuxiliarfarmacyComponent},
  {path: AuxiliarphysiotherapyComponent.URL , component: AuxiliarphysiotherapyComponent},
  {path: FitnesskitchenComponent.URL, component: FitnesskitchenComponent},
  {path: SymfonyComponent.URL, component:SymfonyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
