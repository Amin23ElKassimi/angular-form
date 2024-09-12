import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private authservice: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    form.reset(); // Reset form right after extracting values

    this.authservice.signIn({ email: email, password: password, returnSecureToken: true }).subscribe(
      (data: any) => {
        console.log(data);

        // Compute the expiration date based on Firebase's "expiresIn" field
        const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);

        // Create the user object with the correct expiration date
        this.authservice.createUser(data.email, data.localId, data.idToken, expirationDate);

        // Store user information in localStorage
        localStorage.setItem('user', JSON.stringify(this.authservice.user));

        // Debugging: Ensure the user token is stored and valid
        console.log("User stored:", this.authservice.user);
      },
      (error) => {
        console.error("Error during sign in:", error);
        // Handle error scenario appropriately, e.g., show an error message to the user
      }
    );
  }

}
