import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {CustomMaterialModule} from './core/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RegisterComponent } from './HospitalComponents/register/register.component';
import { CustomerComponent } from './components/customer/customer.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule, MatCardModule, MatTableModule, MatTabsModule } from '@angular/material';

import { MatButtonModule, MatMenuModule, MatToolbarModule, MatFormFieldModule } from '@angular/material';
import { HomeComponent } from './components/home/home.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PrescriptionComponent } from './HospitalComponents/prescription/prescription.component';
import { AllergiesComponent } from './HospitalComponents/allergies/allergies.component';
import { ConsultationComponent } from './HospitalComponents/consultation/consultation.component';
import { PatientProfileComponent } from './HospitalComponents/patient-profile/patient-profile.component';
import { ChronicDiseaseComponent } from './HospitalComponents/chronic-disease/chronic-disease.component';
import { DashboardComponent } from './HospitalComponents/dashboard/dashboard.component';
import { MriResultsComponent } from './HospitalComponents/mri-results/mri-results.component';
import { LabTestResultsComponent } from './HospitalComponents/lab-test-results/lab-test-results.component';
import { HomePageComponent } from './HospitalComponents/home-page/home-page.component';
import { TestComponent } from './HospitalComponents/test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './HospitalComponents/login/login.component';
import { CustomerProfileComponent } from './CustomerComponent/customer-profile/customer-profile.component';
import { ProfileComponent } from './CustomerComponent/profile/profile.component';
import { PhysicalActivityComponent } from './CustomerComponent/physical-activity/physical-activity.component';
import { NutritionComponent } from './CustomerComponent/nutrition/nutrition.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CustomerComponent,
    InsuranceComponent,
    HospitalComponent,
    HomeComponent,
    MainNavComponent,
    PrescriptionComponent,
    AllergiesComponent,
    ConsultationComponent,
    PatientProfileComponent,
    ChronicDiseaseComponent,
    DashboardComponent,
    MriResultsComponent,
    LabTestResultsComponent,
    HomePageComponent,
    TestComponent,
    LoginComponent,
    CustomerProfileComponent,
    ProfileComponent,
    PhysicalActivityComponent,
    NutritionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatMenuModule,
    MatTabsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'customer', component: CustomerComponent },
      { path: 'hospital', component: HospitalComponent },
      { path: 'insurance', component: InsuranceComponent },
      { path: 'main-nav', component: MainNavComponent },

      { path: 'dashboard', component: DashboardComponent },
      { path: 'patient-profile', component: PatientProfileComponent },
      { path: 'consultation', component: ConsultationComponent },
      { path: 'prescription', component: PrescriptionComponent },
      { path: 'allergies', component: AllergiesComponent },
      { path: 'mri-result', component: MriResultsComponent },
      { path: 'lab-test-results', component: LabTestResultsComponent },
      { path: 'chronic-disease', component: ChronicDiseaseComponent },
      { path: 'home-page', component: HomePageComponent },
      { path: 'test', component: TestComponent },
      { path: 'login', component: LoginComponent },

      { path: 'customer-profile', component: CustomerProfileComponent },
      { path: 'nutrition', component: NutritionComponent },
      { path: 'physical-activity', component: PhysicalActivityComponent },
      { path: 'profile', component: ProfileComponent },

      { path: '', redirectTo: '/test' , pathMatch: 'full'}

    ]),
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports : [MatButtonModule,
    MatToolbarModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

