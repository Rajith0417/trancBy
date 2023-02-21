import { Component } from '@angular/core';

interface details{
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trackBy';
  list = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];
  list2 = [{id: 1, name: "one"}, {id: 2, name: "two"}, {id: 3, name: "three"}, {id: 4, name: "four"}];

  getItems() {
    this.list = [{id: 1}, {id: 2}, {id: 3}, {id: 5}];
    this.list2 = [{id: 1, name: "onees"}, {id: 2, name: "two"}, {id: 3, name: "three"}, {id: 5, name: "five"}];
  }

  trackByFunction(index: number, name: any): number {
    return name.id;
  }

  trackByFunction2(index: number, details: any): number {
    return details.id;
  }

}
