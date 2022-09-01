import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sampleProject';
  relativepathSRC='../assets/spree.jpeg';
  value='';
  formGroup:any;

  constructor(){}

}

