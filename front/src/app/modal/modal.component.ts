import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../shared/token.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  private user = { email: '', password: '' };
  private myForm: FormGroup = this.myForm;
  @ViewChild('loginClose') loginClose: ElementRef;

  constructor(private httpClient: HttpClient, public token: TokenService) { }

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
        console.log(this.token);

        this.loginClose.nativeElement.click();
      }, err => console.log(err));
  }

}
