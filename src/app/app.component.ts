import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trackBy';
  list = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];

  getItems() {
    this.list = [{id: 1}, {id: 2}, {id: 3}, {id: 5}];
  }

  trackByFunction(index: number, name: any): number {
    return name.id;
  }


}
