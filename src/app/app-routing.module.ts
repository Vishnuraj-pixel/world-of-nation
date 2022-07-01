import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbassadorsComponent } from './modules/apps/ambassadors/ambassadors.component';
import { ContactUsComponent } from './modules/apps/contact-us/contact-us.component';
import { FacilitiesComponent } from './modules/apps/facilities/facilities.component';
import { MissionComponent } from './modules/apps/mission/mission.component';
import { OurAcademyComponent } from './modules/apps/our-academy/our-academy.component';
import { PartnershipComponent } from './modules/apps/partnership/partnership.component';
import { PatronsComponent } from './modules/apps/patrons/patrons.component';

const routes: Routes = [
  {
    path: '',
    component: OurAcademyComponent
  },
  {
    path: "ambassadors",
    component: AmbassadorsComponent
  },
  {
    path: "facilities",
    component: FacilitiesComponent 
  },
  {
    path: "mission",
    component: MissionComponent
  },
  {
    path: "partnership",
    component: PartnershipComponent
  },
  {
    path: "patrons&advisors",
    component: PatronsComponent
  },
  {
    path: "contact-us",
    component: ContactUsComponent 
  },
  {
    path: '*',
    component: OurAcademyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
