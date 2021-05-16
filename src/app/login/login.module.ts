// COMPONENTES
import { LoginComponent } from './login.component';
// MODULES
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InputModule } from '../input/input.module';
 

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule
  ],
  exports: [
    LoginComponent,
  ],
})
export class LoginModule { }
