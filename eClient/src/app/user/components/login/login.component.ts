import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  passType: string = 'password';
  constructor(private router: Router, private authservice: AuthService) {}

  ngOnInit(): void {}
  showPass() {
    if (this.passType == 'password') {
      this.passType = 'text';
    } else {
      this.passType == 'password';
    }
  }
  onSubmit() {
    this.authservice.login().subscribe(
      (res) => {
        let user = res;
        user.forEach((element: any) => {
          if (
            this.username == element.username &&
            this.password == element.password
          ) {
            console.log('login successs');

            this.router.navigate(['/client/search']);
          } else {
            console.log('Invaid usernae and password');
          }
        });

        // localStorage.setItem('token', res.token);

        // this.decoded = jwt_decode(res.token);

        // console.log(this.decoded);

        // localStorage.setItem('userDetails', JSON.stringify(this.decoded));

        // this.subjectService.loginSubject.next(true);

        // this.router.navigate(['/dashboard/user']);
      },

      (err) => {
        console.log(JSON.stringify(err));

        // this.errors = err.error;
      }
    );
  }
}
