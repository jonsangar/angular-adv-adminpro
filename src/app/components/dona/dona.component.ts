import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() public title = 'Sin título';

  // Doughnut
  // tslint:disable-next-line:no-input-rename
  @Input('labels') public doughnutChartLabels: Label[] = ['Label 1', 'Label 2', 'Label 3'];
  // tslint:disable-next-line:no-input-rename
  @Input('data') public doughnutChartData: MultiDataSet = [
    [100, 100, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {backgroundColor: ['#6857E6', '#009FEE', '#F02059']}
  ];

}
