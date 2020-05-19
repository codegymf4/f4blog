import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/signup/signup.component';
import { LandingComponent } from './examples/landing/landing.component';
import {RegisterComponent} from './examples/register/register.component';
import {DashboardComponent} from './components_user/dashboard/dashboard.component';
import {ShowblogComponent} from './examples/showblog/showblog.component';
import {IndexUserComponent} from './examples/index-user/index-user.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: LandingComponent },
    { path: 'profile',     component: ProfileComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'register',          component: RegisterComponent },
    { path: 'showblog',          component: ShowblogComponent },
    { path: 'index',          component: IndexUserComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
