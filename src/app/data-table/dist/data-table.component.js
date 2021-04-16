"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataTableComponent = void 0;
var core_1 = require("@angular/core");
var paginator_1 = require("@angular/material/paginator");
var sort_1 = require("@angular/material/sort");
var table_1 = require("@angular/material/table");
var data_table_datasource_1 = require("./data-table-datasource");
var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
        /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
        this.displayedColumns = ['product', 'carbs', 'protein', 'fats'];
    }
    DataTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new data_table_datasource_1.DataTableDataSource();
        this.initializeChartOptions();
    };
    DataTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    };
    DataTableComponent.prototype.initializeChartOptions = function () {
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
    };
    __decorate([
        core_1.ViewChild(paginator_1.MatPaginator)
    ], DataTableComponent.prototype, "paginator");
    __decorate([
        core_1.ViewChild(sort_1.MatSort)
    ], DataTableComponent.prototype, "sort");
    __decorate([
        core_1.ViewChild(table_1.MatTable)
    ], DataTableComponent.prototype, "table");
    DataTableComponent = __decorate([
        core_1.Component({
            selector: 'app-data-table',
            templateUrl: './data-table.component.html',
            styleUrls: ['./data-table.component.scss']
        })
    ], DataTableComponent);
    return DataTableComponent;
}());
exports.DataTableComponent = DataTableComponent;
