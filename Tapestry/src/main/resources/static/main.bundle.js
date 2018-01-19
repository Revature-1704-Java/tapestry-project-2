webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-header {\r\n    background-color: #14141f;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-modal></app-modal>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__catalog_catalog_component__ = __webpack_require__("../../../../../src/app/catalog/catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_current_view_service__ = __webpack_require__("../../../../../src/app/shared/current-view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modal_modal_component__ = __webpack_require__("../../../../../src/app/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__specific_specific_component__ = __webpack_require__("../../../../../src/app/specific/specific.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__thread_item_thread_item_component__ = __webpack_require__("../../../../../src/app/thread-item/thread-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_thread_service__ = __webpack_require__("../../../../../src/app/shared/thread.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__view_view_component__ = __webpack_require__("../../../../../src/app/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_token_service__ = __webpack_require__("../../../../../src/app/shared/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_urls_service__ = __webpack_require__("../../../../../src/app/shared/urls.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_17__view_view_component__["a" /* ViewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__catalog_catalog_component__["a" /* CatalogComponent */],
                __WEBPACK_IMPORTED_MODULE_15__thread_item_thread_item_component__["a" /* ThreadItemComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__modal_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_14__specific_specific_component__["a" /* SpecificComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([
                    {
                        path: ':board',
                        component: __WEBPACK_IMPORTED_MODULE_17__view_view_component__["a" /* ViewComponent */],
                        pathMatch: 'full'
                    },
                    {
                        path: ':board/post/:postId',
                        component: __WEBPACK_IMPORTED_MODULE_17__view_view_component__["a" /* ViewComponent */],
                        pathMatch: 'full'
                    },
                    {
                        path: '',
                        redirectTo: 'IT',
                        pathMatch: 'full'
                    },
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_17__view_view_component__["a" /* ViewComponent */],
                        pathMatch: 'full'
                    }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__shared_thread_service__["a" /* ThreadService */], __WEBPACK_IMPORTED_MODULE_7__shared_current_view_service__["a" /* CurrentViewService */], __WEBPACK_IMPORTED_MODULE_18__shared_token_service__["a" /* TokenService */], __WEBPACK_IMPORTED_MODULE_19__shared_urls_service__["a" /* UrlsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/catalog/catalog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#catalogView {\r\n    margin-top: 5em;\r\n    padding-top: 1em;\r\n    background-color: #28283e;\r\n}\r\n\r\nhr {\r\n    border: 1px #0a0a10 dashed;\r\n}\r\n\r\nbutton {\r\n    background-color: #a0a0c5;\r\n    border-color: #a0a0c5;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #3a3a5f;\r\n    border-color: #3a3a5f;\r\n}\r\n\r\nbutton:active {\r\n    background-color: #46466d;\r\n    border-color: #46466d;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/catalog/catalog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"catalogView\">\r\n  <div class=\"col-sm-12\">\r\n    <button type=\"button\" class=\"btn btn-success col-sm-4 offset-sm-4\" data-toggle=\"modal\" data-target=\"#postModal\">Create New Thread</button>\r\n    <hr>\r\n  </div>\r\n  <div *ngFor=\"let thread of threads | async; trackBy: postTrackByFn\" class=\"col-sm-4\">\r\n    <a [routerLink]=\"['post/', thread.postID]\" (click)=\"viewSpecific(thread.postID)\">\r\n      <app-thread-item [thread]=\"thread\"></app-thread-item>\r\n    </a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/catalog/catalog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_thread_service__ = __webpack_require__("../../../../../src/app/shared/thread.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_current_view_service__ = __webpack_require__("../../../../../src/app/shared/current-view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatalogComponent = (function () {
    function CatalogComponent(threadService, curView) {
        this.threadService = threadService;
        this.curView = curView;
    }
    CatalogComponent.prototype.ngOnInit = function () {
        this.threads = this.threadService.getThreads(this.curView.board);
    };
    CatalogComponent.prototype.viewSpecific = function (id) {
        this.curView.id = id;
        this.curView.view = 'specific';
    };
    CatalogComponent.prototype.postTrackByFn = function (index, thread) {
        return thread.postID;
    };
    CatalogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-catalog',
            template: __webpack_require__("../../../../../src/app/catalog/catalog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/catalog/catalog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_thread_service__["a" /* ThreadService */], __WEBPACK_IMPORTED_MODULE_2__shared_current_view_service__["a" /* CurrentViewService */]])
    ], CatalogComponent);
    return CatalogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n    margin-top: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\" id=\"footer\">\r\n  <div class=\"container\">\r\n    &copy; 2018 Tapestry\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4 {\r\n    color: #ffffcc;\r\n    padding: 0 1em 0 .5em;\r\n    font-family:\"Courier New\", Courier, monospace;\r\n}\r\n\r\na {\r\n    text-decoration: none; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-inverse bg-dark navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n      <a href=\"/\"><img src=\"../assets/taptrans.png\"></a>\r\n      <a href=\"/\"><h4>Tapestry</h4></a>\r\n      \r\n      <div class=\"mr-auto\">\r\n        <app-navbar></app-navbar>\r\n      </div>\r\n\r\n      <app-search></app-search>\r\n      <app-login></app-login>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#signupButtonNav {\r\n    margin-right: 8px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"this.token.auth\">\r\n    <div *ngSwitchCase=\"true\" class=\"dropdown\">\r\n        <button type=\"button form-control\" class=\"btn btn-secondary dropdown-toggle\" id=\"dropdownLogin\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            Pic\r\n        </button>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownLogin\">\r\n            <h6 class=\"dropdown-header\">Your Name</h6>\r\n            <button class=\"dropdown-item\" type=\"button\" disabled>\r\n                <span class=\"oi oi-person\">&nbsp;</span> Profile\r\n            </button>\r\n\r\n            <button class=\"dropdown-item\" type=\"button\" disabled>\r\n                <span class=\"oi oi-cog\">&nbsp;</span> Settings\r\n            </button>\r\n\r\n            <button class=\"dropdown-item\" type=\"button\" (click)=\"logout()\">\r\n                <span class=\"oi oi-account-logout\">&nbsp;</span> Logout\r\n            </button>\r\n\r\n            <div class=\"dropdown-divider\"></div>\r\n            <button class=\"dropdown-item\" type=\"button\" disabled>\r\n                Night mode &nbsp;&nbsp;<span class=\"oi oi-moon\"></span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div *ngSwitchDefault class=\"input-group\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#userModal\" id=\"signupButtonNav\">\r\n            Sign up\r\n        </button>\r\n\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-toggle=\"modal\" data-target=\"#loginModal\">\r\n            <span class=\"oi oi-account-login\">&nbsp;</span> Log in\r\n        </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_token_service__ = __webpack_require__("../../../../../src/app/shared/token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(token) {
        this.token = token;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.logout = function () {
        this.token.auth = false;
        this.token.token = '';
        this.token.id = 0;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_token_service__["a" /* TokenService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#loginCheckLabel, #loginButton, #signUpButton, #postButton {\r\n    margin-right: 1em;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"modal fade\" id=\"loginModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #loginClose>\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n\r\n            <div class=\"modal-body form-horizontal\">\r\n                <form #loginForm=\"ngForm\" (ngSubmit)=\"login(); loginForm.reset()\">\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"loginUsername\" class=\"col-sm-2 col-form-label\">Username</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input [(ngModel)]=\"user.username\" name=\"username\" type=\"text\" class=\"form-control\" id=\"loginUsername\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"loginPass\" class=\"col-sm-2 col-form-label\">Password</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" class=\"form-control\" id=\"loginPass\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"mr-auto\"></div>\r\n                        <div class=\"form-check\">\r\n                            <input type=\"checkbox\" class=\"form-check-input\" id=\"loginCheck\">\r\n                            <label for=\"loginCheck\" class=\"form-check-label\" id=\"loginCheckLabel\">\r\n                                Remember Me \r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"row\">\r\n                        <div class=\"mr-auto\"></div>\r\n                        <button type=\"submit\" class=\"btn btn-primary\" id=\"loginButton\">Log in</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"userModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #signupClose>\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n\r\n            <div class=\"modal-body form-horizontal\">\r\n                <form #signupForm=\"ngForm\" (ngSubmit)=\"signup(); signupForm.reset()\">\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"signUpUsername\" class=\"col-sm-2 col-form-label\">Username</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input [(ngModel)]=\"newuser.username\" name=\"username\" type=\"text\" class=\"form-control\" id=\"signUpUsername\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"signUpEmail\" class=\"col-sm-2 col-form-label\">Email</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input [(ngModel)]=\"newuser.email\" name=\"email\" type=\"email\" class=\"form-control\" id=\"signUpEmail\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row\">\r\n                        <label for=\"signUpPass\" class=\"col-sm-2 col-form-label\">Password</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input [(ngModel)]=\"newuser.password\" name=\"password\" type=\"password\" class=\"form-control\" id=\"signUpPass\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"mr-auto\"></div>\r\n                        <button type=\"submit\" class=\"btn btn-primary\" id=\"signUpButton\">Sign Up</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"postModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <div [ngSwitch]=\"this.curView.view\">\r\n                    <div *ngSwitchCase=\"'specific'\">Reply</div>\r\n                    <div *ngSwitchDefault>New Thread</div>\r\n                </div>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" #postClose>\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n    \r\n            <div class=\"modal-body form-horizontal\">\r\n                <form #postForm=\"ngForm\" (ngSubmit)=\"createPost(); postForm.reset()\">\r\n                    <div *ngIf=\"this.curView.view == 'catalog'\" class=\"form-group\">\r\n                        <input [(ngModel)]=\"newpost.title\" name=\"title\" type=\"text\" class=\"form-control\" placeholder=\"Title\">\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <textarea [(ngModel)]=\"newpost.body\" name=\"body\" class=\"form-control\" placeholder=\"Comment\" rows=\"6\"></textarea>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"file\" #postFile name=\"file\" class=\"form-control\" (change)=\"fileSelected($event.target.files[0])\">\r\n                    </div>\r\n    \r\n                    <div class=\"row\">\r\n                        <div class=\"mr-auto\"></div>\r\n                        <button *ngIf=\"this.token.id != 0 && this.token.id != undefined\" type=\"submit\" class=\"btn btn-primary\" id=\"postButton\">Submit</button>\r\n                        <div *ngIf=\"this.token.id == 0 || this.token.id == undefined\">\r\n                            <label class=\"mr-auto font-weight-bold text-danger\">Not logged in</label>\r\n                            <button type=\"submit\" class=\"btn btn-danger\" id=\"postButton\" disabled>Submit</button>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_current_view_service__ = __webpack_require__("../../../../../src/app/shared/current-view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_token_service__ = __webpack_require__("../../../../../src/app/shared/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_urls_service__ = __webpack_require__("../../../../../src/app/shared/urls.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ModalComponent = (function () {
    function ModalComponent(httpClient, token, curView, urls, router) {
        this.httpClient = httpClient;
        this.token = token;
        this.curView = curView;
        this.urls = urls;
        this.router = router;
        this.user = { username: '', password: '' };
        this.newuser = { username: '', email: '', password: '' };
        this.newpost = { title: '', body: '', file: undefined };
        this.myForm = this.myForm;
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.login = function () {
        var _this = this;
        var uName = this.user.username;
        var uPass = this.user.password;
        var apiUrl = this.urls.serverBasePath + '/login';
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('username', uName)
            .set('password', uPass);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Content-Type', 'application/x-www-form-urlencoded');
        this.httpClient.post(apiUrl, body, { headers: header })
            .subscribe(function (res) {
            if (res['userID'] !== undefined) {
                _this.token.auth = true;
                _this.token.id = res['userID'];
            }
            _this.loginClose.nativeElement.click();
        }, function (err) { return console.log(err); });
    };
    ModalComponent.prototype.signup = function () {
        var _this = this;
        var apiUrl = this.urls.serverBasePath + '/signup';
        var newUsername = this.newuser.username;
        var newEmail = this.newuser.email;
        var newPass = this.newuser.password;
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('username', newUsername)
            .set('email', newEmail)
            .set('password', newPass);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Content-Type', 'application/x-www-form-urlencoded');
        this.httpClient.post(apiUrl, body, { headers: header })
            .subscribe(function (res) {
            if (res['userID'] !== undefined) {
                _this.token.auth = true;
                _this.token.id = res['userID'];
            }
            _this.signupClose.nativeElement.click();
        }, function (err) { return console.log(err); });
    };
    ModalComponent.prototype.fileSelected = function (file) {
        this.newpost.file = file;
    };
    ModalComponent.prototype.createPost = function () {
        var _this = this;
        var apiUrl = this.urls.serverBasePath + '/createThread';
        var body = new FormData();
        if (this.newpost.file !== undefined) {
            body.append('file', this.newpost.file, this.newpost.file.name);
        }
        body.append('userId', this.token.id.toString());
        body.append('body', this.newpost.body);
        body.append('board', this.curView.board);
        if (this.curView.view === 'catalog') {
            body.append('title', this.newpost.title);
            body.append('type', 'post');
        }
        else {
            body.append('title', '');
            body.append('type', 'comment');
            body.append('postID', this.curView.id.toString());
        }
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        header.delete('Content-Type');
        this.httpClient.post(apiUrl, body, { headers: header })
            .subscribe(function (res) {
            _this.newpost.file = undefined;
            _this.postFile.nativeElement.value = '';
            _this.postClose.nativeElement.click();
            var curUrl = _this.router.url;
            _this.router.navigateByUrl('/Dummy', { skipLocationChange: true })
                .then(function () { return _this.router.navigate([curUrl]); });
        }, function (err) { return console.log(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('loginClose'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ModalComponent.prototype, "loginClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('signupClose'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ModalComponent.prototype, "signupClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('postClose'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ModalComponent.prototype, "postClose", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('postFile'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ModalComponent.prototype, "postFile", void 0);
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-modal',
            template: __webpack_require__("../../../../../src/app/modal/modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__shared_token_service__["a" /* TokenService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_current_view_service__["a" /* CurrentViewService */], __WEBPACK_IMPORTED_MODULE_5__shared_urls_service__["a" /* UrlsService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    color: #ffffcc;\r\n}\r\n\r\na:hover {\r\n    color: #e6b800;\r\n}\r\n\r\na:active {\r\n    color: #e6b800;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar-nav\">\r\n  <li class=\"nav-item active\">\r\n    <a class=\"nav-link\" [routerLink]=\"['IT']\" (click)=\"switchBoard('IT')\">IT<span class=\"sr-only\">(current)</span></a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['Sales']\" (click)=\"switchBoard('Sales')\">Sales</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['HR']\" (click)=\"switchBoard('HR')\">HR</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['Finance']\" (click)=\"switchBoard('Finance')\">Finance</a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['Production']\" (click)=\"switchBoard('Production')\">Production</a>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_current_view_service__ = __webpack_require__("../../../../../src/app/shared/current-view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(curView) {
        this.curView = curView;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.switchBoard = function (newBoard) {
        this.curView.board = newBoard;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_current_view_service__["a" /* CurrentViewService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".input-group-addon {\r\n    background-color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\">\n  <div class=\"input-group\">\n      <div class=\"input-group-addon\">\n          <span class=\"oi oi-magnifying-glass\"></span>\n      </div>\n    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/current-view.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentViewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CurrentViewService = (function () {
    function CurrentViewService() {
        this.view = 'catalog';
        this.board = 'IT';
    }
    CurrentViewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CurrentViewService);
    return CurrentViewService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/thread.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toArray__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__urls_service__ = __webpack_require__("../../../../../src/app/shared/urls.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ThreadService = (function () {
    function ThreadService(httpClient, urls) {
        this.httpClient = httpClient;
        this.urls = urls;
    }
    ThreadService.prototype.getThreads = function (board) {
        var _this = this;
        var apiUrl = this.urls.serverBasePath + '/getPosts';
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('boardName', board);
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Content-Type', 'application/x-www-form-urlencoded');
        return this.httpClient
            .post(apiUrl, body, { headers: header })
            .map(function (val) {
            var threads = [];
            val.map(function (res) {
                var thread = {
                    postID: res.postID,
                    commentID: 0,
                    userId: res.user.userID,
                    username: res.user.username,
                    title: res.title,
                    textContent: res.textContent,
                    imagePath: _this.urls.imageBasePath + res.imagePath,
                    postTime: res.postTime
                };
                if (res.imagePath === null) {
                    thread.imagePath = _this.urls.placeholderPostImage;
                }
                threads.push(thread);
            });
            return threads;
        });
    };
    ThreadService.prototype.getReplies = function (id) {
        var _this = this;
        var apiUrl = this.urls.serverBasePath + '/getPost';
        var body = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .set('postId', id.toString());
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Content-Type', 'application/x-www-form-urlencoded');
        return this.httpClient
            .post(apiUrl, body, { headers: header })
            .map(function (val) {
            var threads = [];
            var thread = {
                postID: val.postID,
                commentID: 0,
                userId: val.user.userID,
                username: val.user.username,
                title: val.title,
                textContent: val.textContent,
                imagePath: _this.urls.imageBasePath + val.imagePath,
                postTime: val.postTime
            };
            if (val.imagePath === null) {
                thread.imagePath = _this.urls.placeholderPostImage;
            }
            threads.push(thread);
            val.replies.map(function (res) {
                var reply = {
                    postID: 0,
                    commentID: res.commentID,
                    userId: res.user.userID,
                    username: res.user.username,
                    title: '',
                    textContent: res.textContent,
                    imagePath: _this.urls.imageBasePath + res.imagePath,
                    postTime: res.postTime
                };
                if (res.imagePath === null) {
                    reply.imagePath = _this.urls.placeholderCommentImage;
                }
                threads.push(reply);
            });
            return threads;
        });
    };
    ThreadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__urls_service__["a" /* UrlsService */]])
    ], ThreadService);
    return ThreadService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TokenService = (function () {
    function TokenService() {
    }
    TokenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/urls.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UrlsService = (function () {
    function UrlsService() {
        this.imageBasePath = 'http://s3.amazonaws.com/moirai/';
        this.serverBasePath = 'http://34.234.202.22:8181';
        this.placeholderPostImage = 'http://placehold.it/150x150';
        this.placeholderCommentImage = 'http://placehold.it/100x100';
    }
    UrlsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UrlsService);
    return UrlsService;
}());



/***/ }),

/***/ "../../../../../src/app/specific/specific.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#specificView {\r\n    margin-top: 20px;\r\n}\r\n\r\n#createReply {\r\n    margin-right: 10px;\r\n}\r\n\r\nh4 {\r\n    color: #d9d9d9;\r\n}\r\n\r\n#btn button-success {\r\n    background-color: #a0a0c5;\r\n    border-color: #a0a0c5;\r\n}\r\n\r\nbutton:hover {\r\n    background-color: #3a3a5f;\r\n    border-color: #3a3a5f;\r\n}\r\n\r\nbutton:active {\r\n    background-color: #46466d;\r\n    border-color: #46466d;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/specific/specific.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"specificView\">\r\n  <div class=\"mr-auto\">\r\n    <div *ngIf=\"post\">\r\n      <h4>{{ post.title }}</h4>\r\n    </div>\r\n  </div>\r\n\r\n  <button class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#postModal\" id=\"createReply\">\r\n    <span class=\"oi oi-comment-square\">&nbsp;</span>\r\n  </button>\r\n\r\n  <a [routerLink]=\"['../../']\" class=\"btn btn-warning\" (click)=\"viewCatalog()\">\r\n    <span class=\"oi oi-share\">&nbsp;</span>\r\n  </a>\r\n</div>\r\n\r\n<div>\r\n  <div *ngFor=\"let reply of replies | async; trackBy: postTrackByFn; first as isFirst\">\r\n    <div *ngIf=\"isFirst === true\" class=\"col-sm-11\">\r\n      <app-thread-item *ngIf=\"isFirst === true\" [thread]=\"reply\" [op]=\"true\"></app-thread-item>\r\n    </div>\r\n\r\n    <div *ngIf=\"isFirst === false\" class=\"col-sm-11 offset-sm-1\">\r\n        <app-thread-item [thread]=\"reply\" [op]=\"false\"></app-thread-item>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/specific/specific.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecificComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_current_view_service__ = __webpack_require__("../../../../../src/app/shared/current-view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_thread_service__ = __webpack_require__("../../../../../src/app/shared/thread.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpecificComponent = (function () {
    function SpecificComponent(threadService, curView) {
        this.threadService = threadService;
        this.curView = curView;
    }
    SpecificComponent.prototype.ngOnInit = function () {
        this.replies = this.threadService.getReplies(this.curView.id);
    };
    SpecificComponent.prototype.viewCatalog = function () {
        this.curView.view = 'catalog';
    };
    SpecificComponent.prototype.postTrackByFn = function (index, thread) {
        return thread.commentID;
    };
    SpecificComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-specific',
            template: __webpack_require__("../../../../../src/app/specific/specific.component.html"),
            styles: [__webpack_require__("../../../../../src/app/specific/specific.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_thread_service__["a" /* ThreadService */], __WEBPACK_IMPORTED_MODULE_1__shared_current_view_service__["a" /* CurrentViewService */]])
    ], SpecificComponent);
    return SpecificComponent;
}());



/***/ }),

/***/ "../../../../../src/app/thread-item/thread-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group-item {\r\n    margin-top: 10px;\r\n}\r\n\r\ndiv li {\r\n    background-color: #14141f;\r\n    color: #f2f2f2;\r\n}\r\n\r\nh5 {\r\n    color: #d9d9d9;\r\n}\r\n\r\np {\r\n    color: #f2f2f2;\r\n}\r\n\r\n.resizable {\r\n    float: left;\r\n    position: relative;\r\n    margin: 3px;\r\n}\r\n\r\n.resizable img {\r\n    vertical-align: bottom;\r\n}\r\n\r\n.resizable:hover {\r\n    border: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.resizable span {\r\n    position: absolute;\r\n    visibility: hidden;\r\n}\r\n\r\n.resizable:hover span {\r\n    visibility: visible;\r\n    top: 30px;\r\n    left: 30px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/thread-item/thread-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"this.curView.view\">\r\n    <li *ngSwitchCase=\"'specific'\" class=\"list-group-item\">\r\n        <div *ngIf=\"op === true\" class=\"row\">\r\n            <div class=\"col-sm-5 col-md-3\">\r\n                <img [src]=\"thread.imagePath\" class=\"rounded resizable\" width=\"150\" height=\"150\">\r\n            </div>\r\n            <div class=\"col-sm-7 col-md-9\">\r\n                <h5>{{ thread.username }} says:</h5>\r\n                <p>{{ thread.textContent }}</p>\r\n            </div>\r\n        </div>\r\n                \r\n        <div *ngIf=\"op !== true\" class=\"row\">\r\n            <div class=\"col-sm-3 col-md-2\">\r\n                <img [src]=\"thread.imagePath\" class=\"rounded resizable\" width=\"100\" height=\"100\">\r\n            </div>\r\n            <div class=\"col-sm-9 col-md-10\">\r\n                <h5>{{ thread.username }} says:</h5>\r\n                <p>{{ thread.textContent }}</p>\r\n            </div>\r\n        </div>\r\n    </li>\r\n    <figure *ngSwitchDefault class=\"figure\">\r\n        <span class=\"resizable\">\r\n            <img [src]=\"thread.imagePath\" class=\"figure-img rounded\" width=\"150\" height=\"150\">\r\n            <span>\r\n                <img [src]=\"thread.imagePath\" class=\"figure-img rounded\">\r\n            </span>\r\n        </span>\r\n        <figcaption class=\"figure-caption\">\r\n            <h5>{{ thread.title }}</h5>\r\n            <p>{{ thread.textContent }}</p>\r\n        </figcaption>\r\n    </figure>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/thread-item/thread-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThreadItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_current_view_service__ = __webpack_require__("../../../../../src/app/shared/current-view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThreadItemComponent = (function () {
    function ThreadItemComponent(curView) {
        this.curView = curView;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ThreadItemComponent.prototype, "thread", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ThreadItemComponent.prototype, "op", void 0);
    ThreadItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-thread-item',
            template: __webpack_require__("../../../../../src/app/thread-item/thread-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/thread-item/thread-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_current_view_service__["a" /* CurrentViewService */]])
    ], ThreadItemComponent);
    return ThreadItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/view/view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"this.curView.view\">\r\n  <div *ngSwitchCase=\"'specific'\">\r\n    <app-specific></app-specific>\r\n  </div>\r\n  <div *ngSwitchDefault>\r\n    <app-catalog></app-catalog>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_current_view_service__ = __webpack_require__("../../../../../src/app/shared/current-view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewComponent = (function () {
    function ViewComponent(curView, route) {
        this.curView = curView;
        this.route = route;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (res) {
            var postId = res.get('postId');
            if (postId == null) {
                _this.curView.view = 'catalog';
                _this.curView.id = 0;
            }
            else {
                _this.curView.view = 'specific';
                _this.curView.id = Number(postId);
            }
            _this.curView.board = res.get('board');
        });
    };
    ViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view',
            template: __webpack_require__("../../../../../src/app/view/view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_current_view_service__["a" /* CurrentViewService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map