import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SharedModule } from '../../shared/shared/shared.module';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { ServiceService } from '../../Pages/services/service.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AuthResponse } from '../../appinterface/auth-response.interface';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule,RouterModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form!: FormGroup;


  constructor(private formBuilder: FormBuilder, private serviceService: ServiceService, private route:Router  ) {
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

  submit() {
    console.log('Form Value', this.form.value);
    const email = this.form.value.email;
    const password = this.form.value.password;

    let authObservable:Observable<any>
    authObservable= this.serviceService.signIn(email, password)

    authObservable.subscribe({
      next: (res: any) => {
        console.log("Success",res),
        this.route.navigate(['/home'])
      },
      error: (err) => {
        console.log("Show Error",err)
      },
    })

  }
}
