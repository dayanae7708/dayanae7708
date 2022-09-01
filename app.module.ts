import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from'@angular/material/button'
import { MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from'@angular/material/select'
import {MatInputModule} from'@angular/material/input';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component'
import { FormsModule,ReactiveFormsModule} from'@angular/forms';
import {Router} from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SampleComponent } from './sample/sample.component'
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    SignUpComponent,
    SampleComponent,
     
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule, 
    FormsModule,
    ToastrModule.forRoot()


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
