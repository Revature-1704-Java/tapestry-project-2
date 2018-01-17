import { Injectable } from '@angular/core';

@Injectable()
export class CurrentViewService {
  view: string = 'catalog';
  id: number;
}
