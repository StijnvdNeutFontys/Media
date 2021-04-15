"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ProductenComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var ProductenComponent = /** @class */ (function () {
    function ProductenComponent() {
        var _this = this;
        this.rows = [];
        this._click = new rxjs_1.Subject();
        this.controls = {
            product: new forms_1.FormControl(null, forms_1.Validators.required),
            kcal: new forms_1.FormControl(null, forms_1.Validators.required),
            eiwitten: new forms_1.FormControl(null, forms_1.Validators.required),
            koolhydraten: new forms_1.FormControl(null, forms_1.Validators.required),
            vetten: new forms_1.FormControl(null, forms_1.Validators.required)
        };
        this.theForm = new forms_1.FormGroup(this.controls);
        this.datum$ = this.theForm.valueChanges.pipe(operators_1.sample(this._click), operators_1.tap(function (_) { _this.theForm.reset(); }), operators_1.scan(function (datum, value) { return __spreadArrays(datum, [value]); }, []));
    }
    ProductenComponent.prototype.ngOnInit = function () {
    };
    ProductenComponent.prototype.addRow = function () {
        this.rows.push(this.rows.length);
        console.log(this.rows.length);
    };
    ProductenComponent.prototype.addData = function () {
        this._click.next();
    };
    ProductenComponent.prototype.getIndex = function (indx) {
        return indx;
    };
    ProductenComponent = __decorate([
        core_1.Component({
            selector: 'app-producten',
            templateUrl: './producten.component.html',
            styleUrls: ['./producten.component.scss']
        })
    ], ProductenComponent);
    return ProductenComponent;
}());
exports.ProductenComponent = ProductenComponent;
