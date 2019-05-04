import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as data from './namecounter.json';
var AvengersInfinityWarComponent = /** @class */ (function () {
    function AvengersInfinityWarComponent() {
    }
    AvengersInfinityWarComponent.prototype.ngOnInit = function () {
    };
    AvengersInfinityWarComponent.prototype.peanut = function () {
        var x = data;
        console.log(x);
    };
    AvengersInfinityWarComponent = tslib_1.__decorate([
        Component({
            selector: 'app-avengers-infinity-war',
            templateUrl: './avengers-infinity-war.component.html',
            styleUrls: ['./avengers-infinity-war.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AvengersInfinityWarComponent);
    return AvengersInfinityWarComponent;
}());
export { AvengersInfinityWarComponent };
//# sourceMappingURL=avengers-infinity-war.component.js.map