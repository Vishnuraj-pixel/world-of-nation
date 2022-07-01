import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurAcademyComponent } from './our-academy/our-academy.component';
import { AmbassadorsComponent } from './ambassadors/ambassadors.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { MissionComponent } from './mission/mission.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { PatronsComponent } from './patrons/patrons.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    OurAcademyComponent,
    AmbassadorsComponent,
    FacilitiesComponent,
    MissionComponent,
    PartnershipComponent,
    PatronsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class AppsModule { }
