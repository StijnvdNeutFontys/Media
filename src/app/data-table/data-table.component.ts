import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DataTableDataSource, DataTableItem } from './data-table-datasource';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexLegend,
  NgApexchartsModule,
  ApexDataLabels
} from "ng-apexcharts";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<DataTableItem>;
  dataSource: DataTableDataSource;

  series: number[];
  chart: ApexChart;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  colors: string[];
  stroke: ApexStroke;
  

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['product', 'carbs', 'protein', 'fats'];

  ngOnInit() {
    this.dataSource = new DataTableDataSource();
    this.initializeChartOptions();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  private initializeChartOptions(): void {

    this.title = {
      text: 'Macro Breakdown',
      style: {
        color: '#ffffff'
      }
    };

    this.series = [800, 450, 250];

    this.labels = ['Koolhydraten', 'Eiwitten', 'Vetten'];

    this.chart = {
      type: 'pie',
      width: 450
    };

    this.legend = {
      labels: {
        colors: '#ffffff'
      }
    };

    this.colors = ['#bc5090', '#ff6361', '#ffa600'];

    this.stroke = {
      show: false
    };
  }
}
