import { Component } from '@angular/core';
import { CurrentViewService } from '../shared/current-view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(public curView: CurrentViewService) { }
}
