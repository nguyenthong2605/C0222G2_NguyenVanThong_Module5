import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  registrationForm: FormGroup;

  // checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  //   let pass = group.get('password').value;
  //   let confirmPass = group.get('confirmPassword').value
  //   return pass === confirmPass ? null : {notSame: true}
  // }

  constructor() {
    this.registrationForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
      passwordGroup: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('')
      },{validators: this.validateCustomConfirmPassword}),
        country: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required, Validators.min(18)]),
        gender: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required, Validators.pattern(/(84|0[3|5|7|8|9])+([0-9]{8})\b/)])
      }
    )
      // {validators: this.checkPasswords}

  }

  ngOnInit(): void {
  }

  createRegistrationForm() {
    console.log(this.registrationForm)
    if (this.registrationForm.valid) {
      console.log("okei");
    }
  }
  validateCustomConfirmPassword(elementControl: AbstractControl){
      let value = elementControl.value;
      return(value.password === value.confirmPassword) ? null : {'invalid0':true};
  }
}
