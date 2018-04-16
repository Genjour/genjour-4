import { AuthService } from './../../../services/user_auth/auth.service';
import { AbstractControl } from '@angular/forms';


export class ValidateEmailNotTaken {
  static createValidator(signupService: AuthService) {
    return (control: AbstractControl) => {
      return signupService.checkEmailNotTaken(control.value).map(res => {
        return res ? null : { emailTaken: true };
      });
    };
  }
}