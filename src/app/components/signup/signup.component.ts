import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private authservice: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    // console.log(email, password)
    form.reset()
    this.authservice.signUP({ email: email, password: password, returnSecureToken: true }).subscribe(
      data => {
        console.log(data)
      }
    )
  }

}
