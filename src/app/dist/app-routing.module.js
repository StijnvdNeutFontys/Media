"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var overzicht_component_1 = require("./overzicht/overzicht.component");
var producten_component_1 = require("./producten/producten.component");
var maaltijden_component_1 = require("./maaltijden/maaltijden.component");
var login_component_1 = require("./login/login.component");
var data_table_component_1 = require("./data-table/data-table.component");
var routes = [
    { path: 'overzicht', component: overzicht_component_1.OverzichtComponent },
    { path: 'producten', component: producten_component_1.ProductenComponent },
    { path: 'maaltijden', component: maaltijden_component_1.MaaltijdenComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'data-table', component: data_table_component_1.DataTableComponent },
    { path: '', pathMatch: 'full', redirectTo: '/login' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
