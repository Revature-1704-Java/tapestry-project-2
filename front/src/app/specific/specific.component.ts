import { Component, OnInit } from '@angular/core';
import { CurrentViewService } from '../shared/current-view.service';

@Component({
  selector: 'app-specific',
  templateUrl: './specific.component.html',
  styleUrls: ['./specific.component.css']
})
export class SpecificComponent implements OnInit {

  constructor(public curView: CurrentViewService) { }

  ngOnInit() {
  }

  viewCatalog(): void {
    this.curView.view = 'catalog';
  }
}
