import { AbstractControl } from '@angular/forms';

export function emailValidator(control: AbstractControl) {
  if (/\S+@\S+\.\S+/.test(control.value)) {
    return null;
  }
  return { emailValidator: true };
}

export function passValidator(control: AbstractControl) {
  if (/.{5,}/.test(control.value) || control.value == '') {
    return null;
  }
  return { passValidator: true };
}





