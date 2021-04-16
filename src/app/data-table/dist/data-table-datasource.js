"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.DataTableDataSource = void 0;
var collections_1 = require("@angular/cdk/collections");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var EXAMPLE_DATA = [
    { product: 'Melk', carbs: 200, protein: 100, fats: 50 },
    { product: 'Melk', carbs: 200, protein: 100, fats: 50 },
    { product: 'Melk', carbs: 200, protein: 100, fats: 50 },
    { product: 'Melk', carbs: 200, protein: 100, fats: 50 },
];
var DataTableDataSource = /** @class */ (function (_super) {
    __extends(DataTableDataSource, _super);
    function DataTableDataSource() {
        var _this = _super.call(this) || this;
        _this.data = EXAMPLE_DATA;
        return _this;
    }
    DataTableDataSource.prototype.connect = function () {
        var _this = this;
        var dataMutations = [
            rxjs_1.of(this.data),
            this.paginator.page,
            this.sort.sortChange
        ];
        return rxjs_1.merge.apply(void 0, dataMutations).pipe(operators_1.map(function () {
            return _this.getPagedData(_this.getSortedData(__spreadArrays(_this.data)));
        }));
    };
    DataTableDataSource.prototype.disconnect = function () { };
    /**
     * Paginate the data (client-side). If you're using server-side pagination,
     * this would be replaced by requesting the appropriate data from the server.
     */
    DataTableDataSource.prototype.getPagedData = function (data) {
        var startIndex = this.paginator.pageIndex * this.paginator.pageSize;
        return data.splice(startIndex, this.paginator.pageSize);
    };
    /**
     * Sort the data (client-side). If you're using server-side sorting,
     * this would be replaced by requesting the appropriate data from the server.
     */
    DataTableDataSource.prototype.getSortedData = function (data) {
        var _this = this;
        if (!this.sort.active || this.sort.direction === '') {
            return data;
        }
        return data.sort(function (a, b) {
            var isAsc = _this.sort.direction === 'asc';
            switch (_this.sort.active) {
                case 'product': return compare(a.product, b.product, isAsc);
                case 'carbs': return compare(+a.carbs, +b.carbs, isAsc);
                case 'protein': return compare(+a.protein, +b.protein, isAsc);
                case 'fats': return compare(+a.fats, +b.fats, isAsc);
                default: return 0;
            }
        });
    };
    return DataTableDataSource;
}(collections_1.DataSource));
exports.DataTableDataSource = DataTableDataSource;
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
