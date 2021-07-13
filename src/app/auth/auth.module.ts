import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [
    AuthComponent
  ],
  providers: []
})
export class AuthModule {}
