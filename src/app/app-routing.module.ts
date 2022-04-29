import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { ContactComponent } from './contact/contact.component';
import { CurrentComponent } from './current/current.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LandingComponent } from './landing/landing.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { PricesComponent } from './prices/prices.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'prices', component: PricesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'customers', component: OurCustomersComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'data-protection', component: DataProtectionComponent},
  {path: 'back-to-top', component: BackToTopComponent},
  {path: 'current', component: CurrentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
