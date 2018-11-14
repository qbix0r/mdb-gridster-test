import {Component, OnInit} from '@angular/core';
import {GridsterConfig, GridsterItem} from 'angular-gridster2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  optionsSelect: Array<any>;

  options: GridsterConfig;
  dashboard: Array<GridsterItem>;

  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      itemChangeCallback: AppComponent.itemChange,
      itemResizeCallback: AppComponent.itemResize,
      fixedRowHeight: 100,
      gridType: "verticalFixed"
    };

    this.dashboard = [
      {cols: 2, rows: 1, y: 0, x: 0},
      {cols: 2, rows: 2, y: 1, x: 0}
    ];


    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    //this.dashboard.push({});
  }
}
