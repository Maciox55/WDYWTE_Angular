var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Geoloaction } from '../models/geolocation';
var MainServiceService = /** @class */ (function () {
    function MainServiceService(http) {
        this.http = http;
        this.geolocation = new Geoloaction();
    }
    MainServiceService.prototype.getResults = function () {
        var _this = this;
        var resultsObservable = new Observable(function (observer) {
            setTimeout(function () {
                observer.next({ results: _this.results, geo: _this.geolocation });
            }, 1000);
        });
        return resultsObservable;
    };
    MainServiceService.prototype.getGeo = function () {
        return of(this.geolocation);
    };
    MainServiceService.prototype.setSearchQuery = function (sq) {
        console.log("FROM MAIN SERVICE" + sq);
        this.searchQuery = sq;
    };
    MainServiceService.prototype.setresults = function (r) {
        this.results = r;
    };
    MainServiceService.prototype.requestPlaces = function (z) {
        var _this = this;
        this.http.post('/api/searchAround/', { params: this.searchQuery })
            .subscribe(function (res) {
            console.log(res);
            //this.setresults(res.results);
            _this.geolocation = res.data.geo;
            _this.results = res.data.results;
            console.log(_this.results);
        }, function (error) { return console.log(error); });
    };
    MainServiceService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], MainServiceService);
    return MainServiceService;
}());
export { MainServiceService };
//# sourceMappingURL=main-service.service.js.map