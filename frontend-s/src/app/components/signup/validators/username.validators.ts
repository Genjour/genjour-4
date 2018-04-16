import { AbstractControl,ValidationErrors } from "@angular/forms";
import { AuthService } from "../../../services/user_auth/auth.service";


 export class ValidateUsernameNotTaken {
  static createValidator(signupService: AuthService) {
    return (control: AbstractControl) => {
      return signupService.checkUsernameNotTaken(control.value).map(res => {
        return res ? null : { usernameTaken: true };
      });
    };
  }
     
    }