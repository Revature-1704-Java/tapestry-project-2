import { Component, OnInit } from '@angular/core';

import { Thread } from '../shared/thread';
import { ThreadService } from '../shared/thread.service';
import { Observable } from 'rxjs/Observable';
import { CurrentViewService } from '../shared/current-view.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public threads: Observable<Thread[]>;

  constructor(private threadService: ThreadService, public curView: CurrentViewService) { }

  ngOnInit() {
    this.threads = this.threadService.getThreads();
  }

  viewSpecific(id: number): void {
    console.log(id);
    this.curView.view = 'specific';
    this.curView.id = id;
  }
}
