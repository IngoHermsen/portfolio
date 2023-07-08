import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  value: string = '';

  formGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    company: new FormControl(''),
    website: new FormControl(''),
    message: new FormControl(''),
  })

}
