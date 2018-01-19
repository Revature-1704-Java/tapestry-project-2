import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CurrentViewService } from '../shared/current-view.service';
import { ThreadService } from '../shared/thread.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public curView: CurrentViewService, private router: Router, private threadService: ThreadService) { }

  ngOnInit(): void {
  }

  switchBoard(newBoard: string): void {
    this.curView.board = newBoard;

    //this.threadService.updateThreads(newBoard);
    this.router.navigateByUrl('/Dummy', { skipLocationChange: true })
      .then(() => this.router.navigate([newBoard]));
  }

}
