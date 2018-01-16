import { Component, OnInit } from '@angular/core';
import { CurrentViewService } from '../shared/current-view.service';
import { ThreadService } from '../shared/thread.service';
import { Observable } from 'rxjs/Observable';
import { Thread } from '../shared/thread';

@Component({
  selector: 'app-specific',
  templateUrl: './specific.component.html',
  styleUrls: ['./specific.component.css']
})
export class SpecificComponent implements OnInit {
  public replies: Observable<Array<Thread>>;
  public post: Thread;

  constructor(private threadService: ThreadService, public curView: CurrentViewService) { }

  ngOnInit(): void {
    this.threadService.getThread(this.curView.id).subscribe(res => this.post = res);
    this.replies = this.threadService.getReplies(this.curView.id);
  }

  viewCatalog(): void {
    this.curView.view = 'catalog';
  }

  funTimes(): void {
    console.log('fun times');
  }
}
