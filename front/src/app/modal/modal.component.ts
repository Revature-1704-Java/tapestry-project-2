import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../shared/token.service';
import { CurrentViewService } from '../shared/current-view.service';

export interface User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public user = { email: '', password: '' };
  public newuser = { username: '', email: '', password: '' };
  public newpost = { title: '', body: '', file: null }

  private myForm: FormGroup = this.myForm;
  @ViewChild('loginClose') loginClose: ElementRef;
  @ViewChild('signupClose') signupClose: ElementRef;
  @ViewChild('postClose') postClose: ElementRef;
  @ViewChild('postFile') postFile: ElementRef;

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
      .set('username', newUsername)
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

  fileSelected(file: FormData): void {
    this.newpost.file = file;
  }

  createPost(): void {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    const body = new HttpParams()
      .set('userId', this.token.id.toString())
      .set('body', this.newpost.body)
      .set('file', this.newpost.file);
    if (this.curView.view == 'catalog') {
      body.set('title', this.newpost.title);
      body.set('type', 'post');
    } else {
      body.set('title', '');
      body.set('type', 'comment');
    }

    console.log(body);

    const header = new HttpHeaders()
      .set('Content-Type', 'multipart/form-data');

    this.httpClient.post(apiUrl, body, { headers: header })
      .subscribe(res => {
        console.log(res);

        this.newpost.file = null;
        this.postFile.nativeElement.value = '';

        this.postClose.nativeElement.click();
      }, err => console.log(err));

  }
}
