webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.handleClose = function () {
        this.sidenav.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('sidenav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSidenav */])
    ], AppComponent.prototype, "sidenav", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: "\n  <mat-sidenav-container class=\"mat-typography\">\n    <mat-sidenav\n      #sidenav\n      mode=\"side\"\n      [(opened)]=\"opened\">\n      <sty-sidebar (close)=\"handleClose()\"></sty-sidebar>\n    </mat-sidenav>\n    <mat-sidenav-content>\n      <sty-header (menuClicked)=\"sidenav.toggle()\"></sty-header>\n      <router-outlet></router-outlet>\n      <sty-footer></sty-footer>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main__ = __webpack_require__("./src/app/main/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar__ = __webpack_require__("./src/app/sidebar/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__sidebar__["a" /* SidebarModule */],
                __WEBPACK_IMPORTED_MODULE_4__main__["a" /* MainModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_module__ = __webpack_require__("./src/app/main/main.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__main_module__["a"]; });



/***/ }),

/***/ "./src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_pages_module__ = __webpack_require__("./src/app/main/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sections__ = __webpack_require__("./src/app/main/sections/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_3__sections__["a" /* SectionsModule */], __WEBPACK_IMPORTED_MODULE_2__pages_pages_module__["a" /* PagesModule */]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/main/pages/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'st-landing',
            template: "\n  <sty-page title=\"Home\">\n    <p>Angular Material Styleguide. Navigate through the app and see/play with the components.</p>\n  </sty-page>\n  "
        })
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/main/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export appRoutedComponents */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_component__ = __webpack_require__("./src/app/main/pages/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resources_component__ = __webpack_require__("./src/app/main/pages/resources.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutedComponents = [__WEBPACK_IMPORTED_MODULE_4__resources_component__["a" /* ResourcesComponent */], __WEBPACK_IMPORTED_MODULE_3__landing_component__["a" /* LandingComponent */]];
var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__landing_component__["a" /* LandingComponent */] },
    { path: 'resources', component: __WEBPACK_IMPORTED_MODULE_4__resources_component__["a" /* ResourcesComponent */] },
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: appRoutedComponents.slice(),
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes), __WEBPACK_IMPORTED_MODULE_2__shared__["a" /* SharedModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]].concat(appRoutedComponents),
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/main/pages/resources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'st-resources',
            template: "\n    <sty-page [title]=\"'Resources'\">\n      <ul>\n      \t<li>\n      \t\t<h2>\n      \t\t\t<a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a>\n      \t\t</h2>\n      \t</li>\n      \t<li>\n      \t\t<h2>\n      \t\t\t<a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a>\n      \t\t</h2>\n      \t</li>\n      \t<li>\n      \t\t<h2>\n      \t\t\t<a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a>\n      \t\t</h2>\n      \t</li>\n      </ul>\n    </sty-page>\n    "
        })
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "./src/app/main/sections/buttons-indicators.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsIndicatorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonsIndicatorsComponent = /** @class */ (function () {
    function ButtonsIndicatorsComponent() {
    }
    ButtonsIndicatorsComponent.prototype.handleClick = function () {
        alert('Yes, you clicked!');
    };
    ButtonsIndicatorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sty-buttons-indicators',
            styles: ["\n    .button-row {\n      padding: 40px;\n    }\n  "],
            template: "\n  <sty-page title=\"Buttons and Indicators\">\n\n    <sty-expansion [title]=\"'Button'\">\n      <p>Angular Material buttons are native **button** or **a** elements enhanced with Material Design styling and ink ripples.</p>\n\n      <mat-tab-group>\n        <mat-tab label=\"Basic\">\n          <div class=\"button-row\">\n            <button (click)=\"handleClick()\" mat-button>Basic</button>\n            <button (click)=\"handleClick()\" mat-button color=\"primary\">Primary</button>\n            <button (click)=\"handleClick()\" mat-button color=\"accent\">Accent</button>\n            <button (click)=\"handleClick()\" mat-button color=\"warn\">Warn</button>\n            <button (click)=\"handleClick()\" mat-button disabled>Disabled</button>\n            <a (click)=\"handleClick()\" mat-button routerLink=\".\">Link</a>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Raised\">\n          <div class=\"button-row\">\n            <button (click)=\"handleClick()\" mat-raised-button>Basic</button>\n            <button (click)=\"handleClick()\" mat-raised-button color=\"primary\">Primary</button>\n            <button (click)=\"handleClick()\" mat-raised-button color=\"accent\">Accent</button>\n            <button (click)=\"handleClick()\" mat-raised-button color=\"warn\">Warn</button>\n            <button (click)=\"handleClick()\" mat-raised-button disabled>Disabled</button>\n            <a (click)=\"handleClick()\" mat-raised-button routerLink=\".\">Link</a>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Icon\">\n          <div class=\"button-row\">\n            <button (click)=\"handleClick()\" mat-icon-button>\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n            </button>\n            <button (click)=\"handleClick()\" mat-icon-button color=\"primary\">\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n            </button>\n            <button (click)=\"handleClick()\" mat-icon-button color=\"accent\">\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n            </button>\n            <button (click)=\"handleClick()\" mat-icon-button color=\"warn\">\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n            </button>\n            <button (click)=\"handleClick()\" mat-icon-button disabled>\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n            </button>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Fab\">\n          <div class=\"button-row\">\n            <button (click)=\"handleClick()\" mat-fab>Basic</button>\n            <button (click)=\"handleClick()\" mat-fab color=\"primary\">Primary</button>\n            <button (click)=\"handleClick()\" mat-fab color=\"accent\">Accent</button>\n            <button (click)=\"handleClick()\" mat-fab color=\"warn\">Warn</button>\n            <button (click)=\"handleClick()\" mat-fab disabled>Disabled</button>\n            <button (click)=\"handleClick()\" mat-fab>\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n            </button>\n            <a (click)=\"handleClick()\" mat-fab routerLink=\".\">Link</a>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Mini Fab\">\n          <div class=\"button-row\">\n            <button (click)=\"handleClick()\" mat-mini-fab>Basic</button>\n            <button (click)=\"handleClick()\" mat-mini-fab color=\"primary\">Primary</button>\n            <button (click)=\"handleClick()\" mat-mini-fab color=\"accent\">Accent</button>\n            <button (click)=\"handleClick()\" mat-mini-fab color=\"warn\">Warn</button>\n            <button (click)=\"handleClick()\" mat-mini-fab disabled>Disabled</button>\n            <button (click)=\"handleClick()\" mat-mini-fab>\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n            </button>\n            <a (click)=\"handleClick()\" mat-mini-fab routerLink=\".\">Link</a>\n          </div>\n        </mat-tab>\n      </mat-tab-group>\n    </sty-expansion>\n\n    <sty-expansion [title]=\"'Button Toggle'\">\n      <h4>Single Selection</h4>\n\n      <mat-button-toggle-group #group=\"matButtonToggleGroup\">\n        <mat-button-toggle value=\"left\">\n          <mat-icon>format_align_left</mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"center\">\n          <mat-icon>format_align_center</mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"right\">\n          <mat-icon>format_align_right</mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"justify\" disabled>\n          <mat-icon>format_align_justify</mat-icon>\n        </mat-button-toggle>\n      </mat-button-toggle-group>\n\n      <h4>Multiple Selection</h4>\n\n      <mat-button-toggle-group multiple>\n        <mat-button-toggle value=\"left\">\n          <mat-icon>format_align_left</mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"center\">\n          <mat-icon>format_align_center</mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"right\">\n          <mat-icon>format_align_right</mat-icon>\n        </mat-button-toggle>\n        <mat-button-toggle value=\"justify\" disabled>\n          <mat-icon>format_align_justify</mat-icon>\n        </mat-button-toggle>\n      </mat-button-toggle-group>\n    </sty-expansion>\n\n    <sty-expansion [title]=\"'Chips'\">\n      <p>If you want to use colors the chip must be selected=true</p>\n      <mat-chip-list>\n        <mat-chip>One fish</mat-chip>\n        <mat-chip>Two fish</mat-chip>\n        <mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\n        <mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\n      </mat-chip-list>\n    </sty-expansion>\n\n    <sty-expansion [title]=\"'Icon'\">\n      <mat-icon>home</mat-icon>\n    </sty-expansion>\n\n    <sty-expansion [title]=\"'Progress spinner'\">\n      <ul>\n        <li>Determinate</li>\n        <li>Indeterminate</li>\n      </ul>\n      <h4>Indeterminate</h4>\n      <mat-progress-spinner mode=\"indeterminate\"></mat-progress-spinner>\n    </sty-expansion>\n\n    <sty-expansion [title]=\"'Progress bar'\">\n      <ul>\n        <li>Determinate</li>\n        <li>Indeterminate</li>\n        <li>Buffer</li>\n        <li>Query</li>\n      </ul>\n      <mat-list>\n        <mat-list-item>\n          <h4 matLine>Determinate</h4>\n          <mat-progress-bar matLine mode=\"determinate\" value=\"40\"></mat-progress-bar>\n          <mat-divider></mat-divider>\n        </mat-list-item>\n        <mat-list-item>\n          <h4 matLine>Indeterminate</h4>\n          <mat-progress-bar matLine mode=\"indeterminate\"></mat-progress-bar>\n          <mat-divider></mat-divider>\n        </mat-list-item>\n        <mat-list-item>\n          <h4 matLine>Buffer</h4>\n          <mat-progress-bar matLine mode=\"buffer\"></mat-progress-bar>\n          <mat-divider></mat-divider>\n        </mat-list-item>\n        <mat-list-item>\n          <h4 matLine>Query</h4>\n          <mat-progress-bar matLine mode=\"query\"></mat-progress-bar>\n        </mat-list-item>\n      </mat-list>\n\n    </sty-expansion>\n\n  </sty-page>\n  "
        })
    ], ButtonsIndicatorsComponent);
    return ButtonsIndicatorsComponent;
}());



/***/ }),

/***/ "./src/app/main/sections/data-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataTableComponent = /** @class */ (function () {
    function DataTableComponent() {
    }
    DataTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sty-popups-modals',
            template: "\n  <sty-page title=\"Data Table\">\n\n    <sty-expansion [title]=\"'Paginator'\">\n\n    </sty-expansion>\n\n    <sty-expansion [title]=\"'Sort header'\">\n\n    </sty-expansion>\n\n    <sty-expansion [title]=\"'Table'\">\n\n    </sty-expansion>\n\n  </sty-page>\n  "
        })
    ], DataTableComponent);
    return DataTableComponent;
}());



/***/ }),

/***/ "./src/app/main/sections/form-controls.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsControlComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormsControlComponent = /** @class */ (function () {
    function FormsControlComponent(fb) {
        this.fb = fb;
        this.foods = ['Soup', 'Burger', 'Lobster'];
        this.createForms();
    }
    FormsControlComponent.prototype.createForms = function () {
        this.autoComplete = this.fb.group({
            name: ['']
        });
        this.checkbox = this.fb.group({
            alive: [true]
        });
        this.datepicker = this.fb.group({
            datepicker: [(new Date()).toISOString()]
        });
        this.texts = this.fb.group({
            short: ['Pere'],
            long: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec enim sollicitudin, auctor elit quis, pretium dui. Maecenas luctus, urna sed ullamcorper gravida, nunc massa cursus nunc, et auctor quam est id tortor. Pellentesque eu ante ac orci blandit iaculis. Curabitur interdum porttitor mollis. Donec faucibus felis vitae magna finibus, quis varius nulla lacinia. Donec fringilla, justo eu hendrerit lacinia, dolor mauris auctor nulla, gravida consectetur lacus sapien eget metus. In sem quam, interdum sed consectetur sed, vulputate ac augue. Nunc accumsan justo sed nunc auctor condimentum. Donec tristique varius libero nec placerat. Proin vel diam vitae nisi porttitor interdum. Cras bibendum porttitor diam, at aliquam augue dignissim at. Donec ut mollis nisi. Quisque ornare fermentum odio, non finibus est accumsan et. Cras non risus interdum, gravida ligula quis, maximus neque. Sed vitae erat diam. Suspendisse egestas ipsum tortor, ut bibendum massa imperdiet sit amet.']
        });
        this.radios = this.fb.group({
            radios: ['3']
        });
        this.select = this.fb.group({
            select: ['Lobster']
        });
        this.slider = this.fb.group({
            slider: [2]
        });
        this.sliderToggle = this.fb.group({
            sliderToggle: false
        });
    };
    FormsControlComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sty-forms-control',
            styles: ["\n  mat-form-field {\n    width: 100%;\n  }\n  "],
            template: "\n  <sty-page title=\"Forms Control\">\n    <sty-expansion title=\"AutoComplete\">\n      <form [formGroup]=\"autoComplete\">\n        <mat-form-field>\n          <input type=\"text\" matInput formControlName=\"name\">\n        </mat-form-field>\n      </form>\n    </sty-expansion>\n    <sty-expansion title=\"Checkbox\">\n      <form [formGroup]=\"checkbox\">\n        <mat-checkbox formControlName=\"alive\">Check me!</mat-checkbox>\n      </form>\n      <code>\n        {{ this.checkbox.get('alive').value }}\n      </code>\n    </sty-expansion>\n    <sty-expansion title=\"Datepicker\">\n      <form [formGroup]=\"datepicker\">\n        <mat-form-field>\n          <input matInput formControlName=\"datepicker\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n      </form>\n      <code>\n      {{ this.datepicker.get('datepicker').value }}\n      </code>\n    </sty-expansion>\n    <sty-expansion title=\"Form field & Input\">\n      <p>The following input types can be used with matInput:</p>\n      <ul>\n        <li>date</li>\n        <li>datetime-local</li>\n        <li>email</li>\n        <li>month</li>\n        <li>number</li>\n        <li>password</li>\n        <li>search</li>\n        <li>tel</li>\n        <li>text</li>\n        <li>time</li>\n        <li>url</li>\n        <li>week</li>\n      </ul>\n      <form [formGroup]=\"texts\">\n        <mat-form-field>\n          <input matInput placeholder=\"Input\" formControlName=\"short\">\n        </mat-form-field>\n        <mat-form-field>\n          <textarea matInput placeholder=\"Textarea\" formControlName=\"long\"></textarea>\n        </mat-form-field>\n      </form>\n      <code>\n        {{ this.texts.value | json }}\n      </code>\n    </sty-expansion>\n    <sty-expansion title=\"Radio button\">\n      <form [formGroup]=\"radios\">\n        <mat-radio-group formControlName=\"radios\">\n          <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n          <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n          <mat-radio-button value=\"3\">Option 3</mat-radio-button>\n          <mat-radio-button value=\"4\">Option 4</mat-radio-button>\n        </mat-radio-group>\n      </form>\n      <code>\n        {{ this.radios.value | json }}\n      </code>\n    </sty-expansion>\n    <sty-expansion title=\"Select\">\n      <form [formGroup]=\"select\">\n        <mat-form-field>\n          <mat-select formControlName=\"select\" placeholder=\"Favorite food\">\n            <mat-option *ngFor=\"let food of foods\" [value]=\"food\">\n              {{ food }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n      </form>\n      <code>\n        {{ this.select.value | json }}\n      </code>\n    </sty-expansion>\n    <sty-expansion title=\"Slider\">\n      <form [formGroup]=\"slider\">\n        <mat-slider formControlName=\"slider\" min=\"1\" max=\"5\" step=\"0.5\" ></mat-slider>\n      </form>\n      <code>\n        {{ this.slider.value | json }}\n      </code>\n    </sty-expansion>\n    <sty-expansion title=\"Slider toggle\">\n      <form [formGroup]=\"sliderToggle\">\n        <mat-slide-toggle formControlName=\"sliderToggle\"></mat-slide-toggle>\n      </form>\n      <code>\n        {{ this.sliderToggle.value | json }}\n      </code>\n    </sty-expansion>\n  </sty-page>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]])
    ], FormsControlComponent);
    return FormsControlComponent;
}());



/***/ }),

/***/ "./src/app/main/sections/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sections_module__ = __webpack_require__("./src/app/main/sections/sections.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sections_module__["a"]; });



/***/ }),

/***/ "./src/app/main/sections/layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    LayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sty-layout',
            styles: ["\n    .example-card {\n      max-width: 400px;\n    }\n  "],
            template: "\n  <sty-page title=\"Layout\">\n\n    <sty-expansion [title]=\"'Card'\">\n      <p>While this component can be used alone, it also provides a number of preset styles for common card sections, including:</p>\n      <ul>\n        <li>mat-card-title</li>\n        <li>mat-card-subtitle</li>\n        <li>mat-card-content</li>\n        <li>mat-card-actions</li>\n        <li>mat-card-footer</li>\n      </ul>\n\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Shiba Inu</mat-card-title>\n          <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n        </mat-card-header>\n          <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          <p>\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n            bred for hunting.\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button>LIKE</button>\n          <button mat-button>SHARE</button>\n        </mat-card-actions>\n      </mat-card>\n    </sty-expansion>\n\n    <sty-expansion [title]=\"'Divider'\">\n      <mat-list>\n        <mat-list-item>Item 1</mat-list-item>\n        <mat-divider></mat-divider>\n        <mat-list-item>Item 2</mat-list-item>\n        <mat-divider></mat-divider>\n        <mat-list-item>Item 3</mat-list-item>\n      </mat-list>\n    </sty-expansion>\n\n    <sty-expansion [title]=\"'Expansion Panel'\">\n      <mat-card>\n        <mat-card-title>Examples</mat-card-title>\n        <mat-card-content>\n          <p>To see examples of the <strong>mat-expansion-panel</strong> look at the <strong>sty-expansion</strong> component and all over the styleguide app.</p>\n        </mat-card-content>\n      </mat-card>\n    </sty-expansion>\n\n    <sty-expansion [title]=\"'Grid list'\">\n      <mat-grid-list cols=\"4\" rowHeight=\"100px\">\n        <mat-grid-tile\n            *ngFor=\"let tile of tiles\"\n            [colspan]=\"tile.cols\"\n            [rowspan]=\"tile.rows\"\n            [style.background]=\"tile.color\">\n          {{tile.text}}\n        </mat-grid-tile>\n      </mat-grid-list>\n    </sty-expansion>\n\n    <sty-expansion [title]=\"'List'\">\n      <mat-selection-list #shoes>\n        <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n          {{shoe}}\n        </mat-list-option>\n      </mat-selection-list>\n\n      <p>\n        Options selected: {{shoes.selectedOptions.selected.length}}\n      </p>\n    </sty-expansion>\n\n    <sty-expansion [title]=\"'Stepper'\">\n\n    </sty-expansion>\n\n    <sty-expansion [title]=\"'Tabs'\">\n\n    </sty-expansion>\n\n  </sty-page>\n  "
        })
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/main/sections/popus-modals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PopupsModalsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogOverviewExampleDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PizzaPartyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PopupsModalsComponent = /** @class */ (function () {
    function PopupsModalsComponent(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
    }
    PopupsModalsComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: 'John', animal: 'Tiger' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            alert('The dialog was closed');
        });
    };
    PopupsModalsComponent.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 500,
        });
    };
    PopupsModalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sty-popups-modals',
            template: "\n  <sty-page title=\"Layout\">\n\n    <sty-expansion [title]=\"'Dialog'\">\n      <p>In this example look at entryComponents and how uses @Inject and gets the dialog reference</p>\n      <p><a href=\"https://material.angular.io/components/dialog/overview\">Dialog docs</a></p>\n      <p><button mat-raised-button (click)=\"openDialog()\">Pick one</button></p>\n    </sty-expansion>\n\n    <sty-expansion [title]=\"'Snackbar'\">\n      <button mat-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n        Pizza party\n      </button>\n    </sty-expansion>\n\n    <sty-expansion [title]=\"'Tooltip'\">\n      <span matTooltip=\"Tooltip!\">I have a tooltip</span>\n    </sty-expansion>\n\n  </sty-page>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatSnackBar */]])
    ], PopupsModalsComponent);
    return PopupsModalsComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dialog-overview-example-dialog',
            template: "\n  <h1 mat-dialog-title>Hi {{data.name}}</h1>\n  <div mat-dialog-content>\n    <p>What's your favorite animal?</p>\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"data.animal\">\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions>\n    <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n    <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n  </div>\n  ",
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatDialogRef */], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());

var PizzaPartyComponent = /** @class */ (function () {
    function PizzaPartyComponent() {
    }
    PizzaPartyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'snack-bar-component-example-snack',
            template: "<span class=\"example-pizza-party\">\n    Pizza party!!! \uD83C\uDF55\n  </span>\n  ",
            styles: [".example-pizza-party { color: hotpink; }"],
        })
    ], PizzaPartyComponent);
    return PizzaPartyComponent;
}());



/***/ }),

/***/ "./src/app/main/sections/sections.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SectionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_controls_component__ = __webpack_require__("./src/app/main/sections/form-controls.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_component__ = __webpack_require__("./src/app/main/sections/layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popus_modals_component__ = __webpack_require__("./src/app/main/sections/popus-modals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_table_component__ = __webpack_require__("./src/app/main/sections/data-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__buttons_indicators_component__ = __webpack_require__("./src/app/main/sections/buttons-indicators.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var components = [__WEBPACK_IMPORTED_MODULE_9__buttons_indicators_component__["a" /* ButtonsIndicatorsComponent */], __WEBPACK_IMPORTED_MODULE_5__form_controls_component__["a" /* FormsControlComponent */], __WEBPACK_IMPORTED_MODULE_6__layout_component__["a" /* LayoutComponent */], __WEBPACK_IMPORTED_MODULE_7__popus_modals_component__["c" /* PopupsModalsComponent */], __WEBPACK_IMPORTED_MODULE_7__popus_modals_component__["a" /* DialogOverviewExampleDialog */], __WEBPACK_IMPORTED_MODULE_7__popus_modals_component__["b" /* PizzaPartyComponent */], __WEBPACK_IMPORTED_MODULE_8__data_table_component__["a" /* DataTableComponent */]];
var routes = [
    { path: 'examples/buttons-and-indicators', component: __WEBPACK_IMPORTED_MODULE_9__buttons_indicators_component__["a" /* ButtonsIndicatorsComponent */] },
    { path: 'examples/forms-control', component: __WEBPACK_IMPORTED_MODULE_5__form_controls_component__["a" /* FormsControlComponent */] },
    { path: 'examples/layout', component: __WEBPACK_IMPORTED_MODULE_6__layout_component__["a" /* LayoutComponent */] },
    { path: 'examples/popups-modals', component: __WEBPACK_IMPORTED_MODULE_7__popus_modals_component__["c" /* PopupsModalsComponent */] },
    { path: 'examples/data-table', component: __WEBPACK_IMPORTED_MODULE_8__data_table_component__["a" /* DataTableComponent */] },
];
// TODO: create dialog example own module and move the entryComponents
// TODO: the same for the snackBar
var SectionsModule = /** @class */ (function () {
    function SectionsModule() {
    }
    SectionsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__popus_modals_component__["a" /* DialogOverviewExampleDialog */], __WEBPACK_IMPORTED_MODULE_7__popus_modals_component__["b" /* PizzaPartyComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]].concat(components),
            declarations: components,
        })
    ], SectionsModule);
    return SectionsModule;
}());



/***/ }),

/***/ "./src/app/shared/expansion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpansionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExpansionComponent = /** @class */ (function () {
    function ExpansionComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ExpansionComponent.prototype, "title", void 0);
    ExpansionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sty-expansion',
            template: "\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      {{ title }}\n    </mat-expansion-panel-header>\n\n    <ng-content></ng-content>\n  </mat-expansion-panel>\n  "
        })
    ], ExpansionComponent);
    return ExpansionComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sty-footer',
            styles: ["\n    footer {\n      padding: 12px;\n      color: white;\n      font-size: 14px;\n    }\n    footer * {\n      color: white;\n    }\n  "],
            template: "\n  <footer class=\"primary\">\n    <a [routerLink]=\"['']\">home</a> | <a [routerLink]=\"['resources']\">resources</a>\n  </footer>\n  "
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.menuClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], HeaderComponent.prototype, "menuClicked", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sty-header',
            styles: ["\n    .sty-header {\n      position: fixed;\n      box-shadow: 0px 1px 10px 0px #222;\n    }\n  "],
            template: "\n    <mat-toolbar class=\"sty-header\" color=\"primary\">\n      <a mat-button (click)=\"menuClicked.emit(true)\"><mat-icon>menu</mat-icon></a>\n      <span [routerLink]=\"['']\">CMS</span>\n    </mat-toolbar>\n    "
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__shared_module__["a"]; });



/***/ }),

/***/ "./src/app/shared/material-buttons.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialButtonsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var modules = [__WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatIconModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatChipsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatProgressBarModule */]];
var MaterialButtonsModule = /** @class */ (function () {
    function MaterialButtonsModule() {
    }
    MaterialButtonsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: modules,
            exports: modules
        })
    ], MaterialButtonsModule);
    return MaterialButtonsModule;
}());



/***/ }),

/***/ "./src/app/shared/material-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var modules = [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatNativeDateModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSlideToggleModule */]];
var MaterialFormModule = /** @class */ (function () {
    function MaterialFormModule() {
    }
    MaterialFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: modules,
            exports: modules
        })
    ], MaterialFormModule);
    return MaterialFormModule;
}());



/***/ }),

/***/ "./src/app/shared/material-layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialLayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var modules = [__WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatDividerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatGridListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTabsModule */]];
var MaterialLayoutModule = /** @class */ (function () {
    function MaterialLayoutModule() {
    }
    MaterialLayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: modules,
            exports: modules
        })
    ], MaterialLayoutModule);
    return MaterialLayoutModule;
}());



/***/ }),

/***/ "./src/app/shared/material-navigation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialNavigationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var modules = [__WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSidenavModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatMenuModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatToolbarModule */]];
var MaterialNavigationModule = /** @class */ (function () {
    function MaterialNavigationModule() {
    }
    MaterialNavigationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: modules,
            exports: modules
        })
    ], MaterialNavigationModule);
    return MaterialNavigationModule;
}());



/***/ }),

/***/ "./src/app/shared/material-popups-modals.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialPopupsModalsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var modules = [__WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["G" /* MatTooltipModule */]];
var MaterialPopupsModalsModule = /** @class */ (function () {
    function MaterialPopupsModalsModule() {
    }
    MaterialPopupsModalsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: modules,
            exports: modules
        })
    ], MaterialPopupsModalsModule);
    return MaterialPopupsModalsModule;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_buttons_module__ = __webpack_require__("./src/app/shared/material-buttons.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_form_module__ = __webpack_require__("./src/app/shared/material-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_navigation_module__ = __webpack_require__("./src/app/shared/material-navigation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_layout_module__ = __webpack_require__("./src/app/shared/material-layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_popups_modals_module__ = __webpack_require__("./src/app/shared/material-popups-modals.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var modules = [__WEBPACK_IMPORTED_MODULE_2__material_form_module__["a" /* MaterialFormModule */], __WEBPACK_IMPORTED_MODULE_4__material_layout_module__["a" /* MaterialLayoutModule */], __WEBPACK_IMPORTED_MODULE_3__material_navigation_module__["a" /* MaterialNavigationModule */], __WEBPACK_IMPORTED_MODULE_1__material_buttons_module__["a" /* MaterialButtonsModule */], __WEBPACK_IMPORTED_MODULE_5__material_popups_modals_module__["a" /* MaterialPopupsModalsModule */]];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: modules,
            exports: modules
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageComponent = /** @class */ (function () {
    function PageComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], PageComponent.prototype, "title", void 0);
    PageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sty-page',
            styles: ["\n    h2 {\n      margin: 64px 0 0 0;\n      padding: 28px;\n    }\n    .sty-page__body {\n      padding: 20px;\n    }\n  "],
            template: "\n  <h2 class=\"primary\">{{ title }}</h2>\n  <div class=\"sty-page__body\">\n    <ng-content></ng-content>\n  </div>\n  "
        })
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_module__ = __webpack_require__("./src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_component__ = __webpack_require__("./src/app/shared/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_component__ = __webpack_require__("./src/app/shared/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_component__ = __webpack_require__("./src/app/shared/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__expansion_component__ = __webpack_require__("./src/app/shared/expansion.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var components = [__WEBPACK_IMPORTED_MODULE_4__header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_5__footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_6__page_component__["a" /* PageComponent */], __WEBPACK_IMPORTED_MODULE_7__expansion_component__["a" /* ExpansionComponent */]];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: components,
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__material_module__["a" /* MaterialModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]].concat(components)
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/sidebar/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sidebar_module__ = __webpack_require__("./src/app/sidebar/sidebar.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sidebar_module__["a"]; });



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SidebarComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "close", void 0);
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sty-sidebar',
            styles: ["\n    .sty-sidebar__close {\n      text-align: right;\n    }\n    .sty-sidebar__close-icon {\n      cursor: pointer;\n      padding: 10px;\n    }\n    .sty-sidebar__close-icon:hover {\n      color: #ccc;\n    }\n  "],
            template: "\n  <div class=\"sty-sidebar__close\">\n    <mat-icon class=\"sty-sidebar__close-icon\" (click)=\"close.emit(true)\">clear</mat-icon>\n  </div>\n  <mat-nav-list (click)=\"close.emit(true)\">\n    <mat-list-item>\n       <a [routerLink]=\"['examples', 'forms-control']\" matLine >Form Controls</a>\n       <button mat-icon-button>\n          <mat-icon>create</mat-icon>\n       </button>\n    </mat-list-item>\n    <mat-divider></mat-divider>\n    <mat-list-item>\n       <a matLine >(Disabled) Navigation</a>\n       <button mat-icon-button>\n          <mat-icon>apps</mat-icon>\n       </button>\n    </mat-list-item>\n    <mat-divider></mat-divider>\n    <mat-list-item>\n       <a matLine [routerLink]=\"['examples', 'layout']\">Layout</a>\n       <button mat-icon-button>\n          <mat-icon>view_module</mat-icon>\n       </button>\n    </mat-list-item>\n    <mat-divider></mat-divider>\n    <mat-list-item>\n       <a [routerLink]=\"['examples', 'buttons-and-indicators']\" matLine >Buttons & Indicators</a>\n       <button mat-icon-button>\n          <mat-icon>add_box</mat-icon>\n       </button>\n    </mat-list-item>\n    <mat-divider></mat-divider>\n    <mat-list-item>\n       <a [routerLink]=\"['examples', 'popups-modals']\" matLine >Popup & Modals</a>\n       <button mat-icon-button>\n          <mat-icon>present_to_all</mat-icon>\n       </button>\n    </mat-list-item>\n    <mat-divider></mat-divider>\n    <mat-list-item>\n       <a matLine [routerLink]=\"['examples', 'data-table']\">Data table</a>\n       <button mat-icon-button>\n          <mat-icon>border_left</mat-icon>\n       </button>\n    </mat-list-item>\n  </mat-nav-list>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var components = [__WEBPACK_IMPORTED_MODULE_2__sidebar_component__["a" /* SidebarComponent */]];
var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */]],
            exports: components.slice(),
            declarations: components.slice(),
            providers: [],
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map