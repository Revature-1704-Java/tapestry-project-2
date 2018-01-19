import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CurrentViewService } from '../shared/current-view.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public curView: CurrentViewService, private router: Router) { }

  ngOnInit(): void {
  }

  switchBoard(newBoard: string): void {
    this.curView.board = newBoard;
    
    const curUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([curUrl]));
  }

}
