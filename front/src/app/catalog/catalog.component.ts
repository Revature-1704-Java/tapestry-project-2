import { Component, OnInit } from '@angular/core';

import { Thread } from '../shared/thread';
import { ThreadService } from '../shared/thread.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  threads: Thread[] = [];

  constructor(private threadService: ThreadService) { }

  ngOnInit() {
    this.threads = this.threadService.getThreads();
  }

}
