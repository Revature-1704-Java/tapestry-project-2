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
  public replies: Observable<Thread[]>;

  constructor(private threadService: ThreadService, public curView: CurrentViewService) { }

  ngOnInit() {
    this.replies = this.threadService.getThread(this.curView.id);
  }

  viewCatalog(): void {
    this.curView.view = 'catalog';
  }
}
