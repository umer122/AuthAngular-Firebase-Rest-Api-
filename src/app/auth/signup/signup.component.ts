import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared/shared.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../../Pages/services/service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  form!: FormGroup
  constructor(private formBuilder: FormBuilder, private serviceService: ServiceService) {

  }
  ngOnInit() {
    this.createForm()
  }
  createForm() {
    this.form = this.formBuilder.group({
      email: [''],
      password: [''],
    })
  }
  signUp() {
    const email = this.form.value.email;
    const password = this.form.value.password;
    this.serviceService.signup(email, password).subscribe(res => {
      console.log('success login', res)
    },
      error => {
        console.log('Show Error', error)
      }
    )
  }
}
