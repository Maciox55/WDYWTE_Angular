var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { MainServiceService } from '../../Services/main-service.service';
import { SearchDetails } from '../../models/SearchDetails';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, spinner, mainService) {
        this.router = router;
        this.spinner = spinner;
        this.mainService = mainService;
        this.model = new SearchDetails();
        this.types = [
            { value: 'restaurant', viewValue: 'Restaurant' },
            { value: 'bar', viewValue: 'Bar' },
            { value: 'meal_delivery', viewValue: 'Delivery' }
        ];
        this.ranges = [
            { value: '5', viewValue: '5 Mi' },
            { value: '10', viewValue: '10 Mi' },
            { value: '15', viewValue: '15 Mi' },
            { value: '25', viewValue: '25 Mi' }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.submitt = function (f) {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            _this.spinner.hide();
            console.log(_this.model);
            _this.mainService.setSearchQuery(_this.model);
            _this.mainService.requestPlaces(_this.model);
            _this.router.navigate(['results']);
        }, 1000);
    };
    HomeComponent.prototype.formatLabel = function () {
        return this.value;
    };
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], HomeComponent.prototype, "value", void 0);
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [Router, NgxSpinnerService, MainServiceService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map