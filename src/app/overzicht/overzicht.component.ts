import { style } from '@angular/animations';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexOptions } from 'apexcharts';

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

export interface MacroData {
  carbs: number;
  protein: number;
  fats: number;
}

@Component({
  selector: 'app-overzicht',
  templateUrl: './overzicht.component.html',
  styleUrls: ['./overzicht.component.scss'],
})
export class OverzichtComponent implements OnInit {

  public readonly rows: number[] = [];

  series: number[];
  chart: ApexChart;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  colors: string[];
  stroke: ApexStroke;

  totalMacroData: MacroData;
  macroData: MacroData[];
  counter: number;

  ngOnInit(): void {

    this.totalMacroData = {
      carbs: 0,
      protein: 0,
      fats: 0
    };

    this.macroData = [];

    this.initializeChartOptions();
  }

  private initializeChartOptions(): void {

    this.title = {
      text: 'Macro Breakdown',
      style: {
        color: '#ffffff'
      }
    };

    this.series = [this.totalMacroData.carbs, this.totalMacroData.protein, this.totalMacroData.fats];

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

  public addRowWithDummyData(): void {


    this.macroData[this.counter] = {
      carbs: Math.round(Math.random() * 100),
      protein: Math.round(Math.random() * 100),
      fats: Math.round(Math.random() * 100),

    }

    this.counter++;

    this.rows.push(this.rows.length);

  }
}
