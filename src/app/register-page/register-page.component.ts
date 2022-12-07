import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/uesr';
import { z, ZodObject } from 'zod';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: [
    './register-page.component.sass',
    './../../../node_modules/bootstrap/scss/bootstrap.scss',
  ],
})
export class RegisterPageComponent {
  constructor(private client: ClientService,private router:Router) {
    this.validate = z
      .object({
        password: z.string(),
        confPasswd: z.string(),
        email: z.string().email(),
      })
      .superRefine(({ password, confPasswd }, ctx) => {
        if (password !== confPasswd) {
          ctx.addIssue({
            code: 'custom',
            message: "passwords don't match",
          });
        }
      });
    this.error = this.validate.safeParse({
      password: '12',
      confPasswd: '12',
      email: 'a@c.com',
    });
  }
  private validate;
  public error;
  public servererr = 'NULL';
  onSubmit(val: any) {
    console.log('====================================');
    console.log(val);
    this.error = this.validate.safeParse(val.form.value);
    console.log(this.error.success);

    if (this.error.success) {
      let u: User = {
        email: val.form.value.email,
        password: val.form.value.password,
      };
      console.log(u);
      this.client.register(u).subscribe(
        (res: any) => {
          if (res.tocken) {
            localStorage.setItem('tocken', res.tocken);
          }
        },
        (err) => {
          this.servererr = err.error.error;
          console.log('====================================');
          console.log(err);
          console.log('====================================');;
        }
      );
    }
    console.log(this.error);
    console.log('====================================');
  }
}
