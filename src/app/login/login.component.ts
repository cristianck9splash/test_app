
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator, passValidator } from '../shared/validations/custom-validations';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  errors = {
    email: null,
    pass: null,
  };
  myValue: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, emailValidator]],
      pass: [null, [Validators.required, passValidator]],
    });
  }

  ngOnInit() {
  }

  validationInput(type: string) {
    return this.form.controls[type].errors
           && this.form.controls[type].touched;
  }

  enviar() {
    this.form.invalid ? this.form.markAllAsTouched() : console.log('OK');
  }
  myChange(check) {
    var checked = check.detail.checked;
    console.log(checked);
}

  

}
