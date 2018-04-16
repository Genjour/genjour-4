import { AbstractControl,ValidationErrors } from "@angular/forms";

export class ValidatePassword {
static passwordValidator(control) {
    if (control.value != undefined) {
      if (!control.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,100})/)) {
        return { 'invalidPassword': true };
      }
    }
  }}