"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by sonals on 3/28/17.
 */
var core_1 = require("@angular/core");
var ViewTSComponent = (function () {
    function ViewTSComponent() {
        this.fromDate = new Date(2017, 2, 27);
        this.toDate = new Date(2017, 3, 2);
    }
    return ViewTSComponent;
}());
ViewTSComponent = __decorate([
    core_1.Component({
        templateUrl: './ViewTS.component.html'
    })
], ViewTSComponent);
exports.ViewTSComponent = ViewTSComponent;
//# sourceMappingURL=ViewTS.component.js.map