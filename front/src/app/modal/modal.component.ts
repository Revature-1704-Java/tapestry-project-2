import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../shared/token.service';
import { CurrentViewService } from '../shared/current-view.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  private user = { email: '', password: '' };
  private newuser = { username: '', email: '', password: '' };
  private newpost = { title: '', body: ''}

  private myForm: FormGroup = this.myForm;
  @ViewChild('loginClose') loginClose: ElementRef;
  @ViewChild('signupClose') signupClose: ElementRef;
  @ViewChild('postClose') postClose: ElementRef;

  constructor(private httpClient: HttpClient, public token: TokenService, public curView: CurrentViewService) { }

  ngOnInit(): void {
  }

  login(): void {
    const uEmail: string = this.user.email;
    const uPass: string = this.user.password;
    console.log(`Tried to login: ${uEmail}, ${uPass}`);

    const apiUrl = 'https://reqres.in/api/login';
    const body = new HttpParams()
      .set('email', uEmail)
      .set('password', uPass);
    const header = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    this.httpClient.post(apiUrl, body, { headers: header })
      .subscribe(res => {
        this.token.token = res['token'];
        this.token.auth = true;
        this.token.id = 1;
        console.log(this.token);

        this.loginClose.nativeElement.click();
      }, err => console.log(err));
  }

  signup(): void {
    const apiUrl = 'https://reqres.in/api/register';

    const newUsername = this.newuser.username;
    const newEmail = this.newuser.email;
    const newPass = this.newuser.password;

    const body = new HttpParams()
      .set('email', newEmail)
      .set('password', newPass);
    const header = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    
    this.httpClient.post(apiUrl, body, { headers: header })
      .subscribe(res => {
        if (res['token'] != undefined) {
          this.token.token = res['token'];
          this.token.auth = true;
          this.token.id = 1;
          console.log(this.token);

          this.signupClose.nativeElement.click();
        }
      }, err => console.log(err));
  }

  createPost(): void {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    const body = new HttpParams()
      .set('userId', this.token.id.toString())
      .set('body', this.newpost.body);
    if (this.curView.view == 'catalog') {
      body.set('title', this.newpost.title);
    } else {
      body.set('title', '');
    }

    const header = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    this.httpClient.post(apiUrl, body, { headers: header })
      .subscribe(res => {
        console.log(res);
        this.postClose.nativeElement.click();
      }, err => console.log(err));

  }
}
