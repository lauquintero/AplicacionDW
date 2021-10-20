import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styles: [
  ]
})
export class DoughnutChartComponent implements OnInit {

  @Input() doughnutChartLabels : Label[]  = []
  @Input() doughnutChartData: MultiDataSet = [] 
  @Input() doughnutChartType: ChartType 
  @Input() leyenda : string

  constructor() { }


  ngOnInit(): void {
  }

}
