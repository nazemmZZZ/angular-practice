import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/uesr';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./../register-page/register-page.component.sass'],
})
export class LoginPageComponent {
  @Output('auth-change') authChange=new EventEmitter<string>()
  constructor(private client: ClientService, private router:Router){}
  onSubmit(form: NgForm) {
    let u: User = {
      email: form.form.value.email,
      password: form.form.value.password
    }
    this.client.loggin(u).subscribe((res:any) => {
      console.log(res)
      localStorage.setItem('tocken', res.tocken);
      this.router.navigate(['/secure']);
      this.authChange.emit("OK")
    },err => {
      console.warn(err);

    })
  }
}
