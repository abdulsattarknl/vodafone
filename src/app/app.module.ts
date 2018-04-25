import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {TransferHttpCacheModule} from '@nguniversal/common';

import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './module/login/login.component';

import { DropdownComponent } from './core/dropdown/dropdown.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ModalComponent } from './core/modal/modal.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ChartsModule } from 'ng2-charts';
import { UserManagementComponent } from './pages/user-management/user-management.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DropdownComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    DashboardComponent,
    WelcomeComponent,
    NotificationComponent,
    UserManagementComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'usermanagment', component: UserManagementComponent}


    ]),
    TransferHttpCacheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
