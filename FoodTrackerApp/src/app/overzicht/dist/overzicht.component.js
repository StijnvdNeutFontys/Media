"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OverzichtComponent = void 0;
var core_1 = require("@angular/core");
var OverzichtComponent = /** @class */ (function () {
    function OverzichtComponent() {
        this.rows = [];
    }
    OverzichtComponent.prototype.ngOnInit = function () {
        this.totalMacroData = {
            carbs: 0,
            protein: 0,
            fats: 0
        };
        this.currentMacroData = {
            carbs: 0,
            protein: 0,
            fats: 0
        };
        this.initializeChartOptions();
    };
    OverzichtComponent.prototype.initializeChartOptions = function () {
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
    };
    OverzichtComponent.prototype.addRowWithDummyData = function () {
        this.currentMacroData.carbs = Math.round(Math.random() * 100);
        this.currentMacroData.protein = Math.round(Math.random() * 100);
        this.currentMacroData.fats = Math.round(Math.random() * 100);
        this.rows.push(this.rows.length);
    };
    OverzichtComponent = __decorate([
        core_1.Component({
            selector: 'app-overzicht',
            templateUrl: './overzicht.component.html',
            styleUrls: ['./overzicht.component.scss']
        })
    ], OverzichtComponent);
    return OverzichtComponent;
}());
exports.OverzichtComponent = OverzichtComponent;
