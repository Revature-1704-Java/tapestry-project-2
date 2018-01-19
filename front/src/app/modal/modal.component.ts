import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { CurrentViewService } from '../shared/current-view.service';
import { TokenService } from '../shared/token.service';
import { UrlsService } from '../shared/urls.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  public user = { username: '', password: '' };
  public newuser = { username: '', email: '', password: '' };
  public newpost = { title: '', body: '', file: undefined };

  private myForm: FormGroup = this.myForm;
  @ViewChild('loginClose') loginClose: ElementRef;
  @ViewChild('signupClose') signupClose: ElementRef;
  @ViewChild('postClose') postClose: ElementRef;
  @ViewChild('postFile') postFile: ElementRef;

  constructor(private httpClient: HttpClient, public token: TokenService, 
    public curView: CurrentViewService, public urls: UrlsService) { }

  ngOnInit(): void {
  }

  login(): void {
    const uName: string = this.user.username;
    const uPass: string = this.user.password;

    const apiUrl = this.urls.serverBasePath + '/login';

    const body = new HttpParams()
      .set('username', uName)
      .set('password', uPass);
    const header = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    this.httpClient.post(apiUrl, body, { headers: header })
      .subscribe(res => {
        if (res['userID'] !== undefined) {
          this.token.auth = true;
          this.token.id = res['userID'];
        }
        this.loginClose.nativeElement.click();
      }, err => console.log(err));
  }

  signup(): void {
    const apiUrl = this.urls.serverBasePath + '/signup';

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
        if (res['userID'] !== undefined) {
          this.token.auth = true;
          this.token.id = res['userID'];
        }
        this.signupClose.nativeElement.click();
      }, err => console.log(err));
  }

  fileSelected(file: FormData): void {
    this.newpost.file = file;
  }

  createPost(): void {
    const apiUrl = this.urls.serverBasePath + '/createThread';

    const body: FormData = new FormData();
    if (this.newpost.file !== undefined) {
      body.append('file', this.newpost.file, this.newpost.file.name);
    }

    body.append('userId', this.token.id.toString());
    body.append('body', this.newpost.body);
    body.append('board', this.curView.board);

  if (this.curView.view === 'catalog') {
     body.append('title', this.newpost.title);
     body.append('type', 'post');
  } else {
    body.append('title', '');
    body.append('type', 'comment');
    body.append('postID', this.curView.id.toString());
  }

  let xhr = new XMLHttpRequest;
  xhr.open('POST', '/', true);
  xhr.send(body);

    this.httpClient.post(apiUrl, body)
      .subscribe(res => {
        this.newpost.file = undefined;
        this.postFile.nativeElement.value = '';

        this.postClose.nativeElement.click();
      }, err => console.log(err));

  }
}
