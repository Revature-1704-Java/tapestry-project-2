import { Component, OnInit } from '@angular/core';
import { Thread } from '../shared/thread';
import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';

import { ThreadService } from '../shared/thread.service';
import { CurrentViewService } from '../shared/current-view.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public threads: Observable<Array<Thread>>;

  constructor(private threadService: ThreadService, public curView: CurrentViewService) { 
    this.threads = this.threadService.getThreads(this.curView.board).pipe(share());
  }

  ngOnInit(): void {
    //this.threads = this.threadService.getThreads(this.curView.board);
  }

  viewSpecific(id: number): void {
    this.curView.id = id;
    this.curView.view = 'specific';
  }

  postTrackByFn(index: number, thread: Thread): number {
    return thread.postID;
  }
}
