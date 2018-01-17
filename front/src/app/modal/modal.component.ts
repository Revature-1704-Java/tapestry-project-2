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
  public user = { username: '', password: '' };
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
    const uName: string = this.user.username;
    const uPass: string = this.user.password;

    const apiUrl = 'https://reqres.in/api/login';
    // TODO: switch 'email' to 'username'
    const body = new HttpParams()
      .set('email', uName)
      .set('password', uPass);
    const header = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    this.httpClient.post(apiUrl, body, { headers: header })
      .subscribe(res => {
        // TODO: Switch res['token'] to proper response, token.id to recieve proper userId
        this.token.token = res['token'];
        this.token.auth = true;
        this.token.id = 1;

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
        // TODO: Replace res['token'] with proper response, token.id to recieve proper userId
        if (res['token'] != undefined) {
          this.token.token = res['token'];
          this.token.auth = true;
          this.token.id = 1;

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
      body.set('postID', this.curView.id.toString());
    }

    // TODO: Switch x-www-form-urlencoded to multipart/form-data
    const header = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    //  .set('Content-Type', 'multipart/form-data');

    this.httpClient.post(apiUrl, body, { headers: header })
      .subscribe(res => {
        this.newpost.file = null;
        this.postFile.nativeElement.value = '';

        this.postClose.nativeElement.click();
      }, err => console.log(err));

  }
}
