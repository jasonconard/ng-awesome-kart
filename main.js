(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _kart_core_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./kart-core/welcome/welcome.component */ "./src/app/kart-core/welcome/welcome.component.ts");
/* harmony import */ var _kart_core_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kart-core/about/about.component */ "./src/app/kart-core/about/about.component.ts");
/* harmony import */ var _kart_core_driver_choice_driver_choice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kart-core/driver-choice/driver-choice.component */ "./src/app/kart-core/driver-choice/driver-choice.component.ts");
/* harmony import */ var _kart_core_game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kart-core/game/game.component */ "./src/app/kart-core/game/game.component.ts");
/* harmony import */ var _shared_models_footerBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/models/footerBtn */ "./src/app/shared/models/footerBtn.ts");









const routes = [
    {
        path: 'welcome',
        component: _kart_core_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"],
        data: {
            title: 'Bienvenue sur l\'espace recrutement',
            footerBtns: [_shared_models_footerBtn__WEBPACK_IMPORTED_MODULE_6__["FOOTER_BTN"].EXIT, _shared_models_footerBtn__WEBPACK_IMPORTED_MODULE_6__["FOOTER_BTN"].ABOUT, _shared_models_footerBtn__WEBPACK_IMPORTED_MODULE_6__["FOOTER_BTN"].DRIVER]
        }
    }, {
        path: 'about',
        component: _kart_core_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
        data: {
            title: 'A propos',
            footerBtns: [_shared_models_footerBtn__WEBPACK_IMPORTED_MODULE_6__["FOOTER_BTN"].HELP, _shared_models_footerBtn__WEBPACK_IMPORTED_MODULE_6__["FOOTER_BTN"].DRIVER]
        }
    }, {
        path: 'driver-choice',
        component: _kart_core_driver_choice_driver_choice_component__WEBPACK_IMPORTED_MODULE_4__["DriverChoiceComponent"],
        data: {
            title: 'Choix du pilote',
            footerBtns: [_shared_models_footerBtn__WEBPACK_IMPORTED_MODULE_6__["FOOTER_BTN"].HELP, _shared_models_footerBtn__WEBPACK_IMPORTED_MODULE_6__["FOOTER_BTN"].GAME]
        }
    }, {
        path: 'game',
        component: _kart_core_game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"],
        data: {
            fullscreen: true
        }
    },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/init.service */ "./src/app/shared/services/init.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _kart_core_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kart-core/page-header/page-header.component */ "./src/app/kart-core/page-header/page-header.component.ts");
/* harmony import */ var _kart_core_page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kart-core/page-footer/page-footer.component */ "./src/app/kart-core/page-footer/page-footer.component.ts");








function AppComponent_app_page_header_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-header", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.routeOptions.headerTitle);
} }
function AppComponent_app_page_footer_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-footer", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("btns", ctx_r1.routeOptions.footerBtns);
} }
class AppComponent {
    constructor(router, initService, activatedRoute) {
        this.router = router;
        this.initService = initService;
        this.activatedRoute = activatedRoute;
        this.routeOptions = {
            headerTitle: '',
            footerBtns: [],
            fullscreen: false
        };
    }
    ngOnInit() {
        this.initService.initData();
        this.router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                const firstChild = this.activatedRoute.snapshot.firstChild;
                if (firstChild) {
                    this.routeOptions.headerTitle = firstChild.data['title'] || '';
                    this.routeOptions.footerBtns = firstChild.data['footerBtns'] || [];
                    this.routeOptions.fullscreen = !!firstChild.data['fullscreen'];
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_init_service__WEBPACK_IMPORTED_MODULE_2__["InitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 4, consts: [[1, "app-container"], [1, "app-content"], [3, "title", 4, "ngIf"], [1, "app-route-content"], [3, "btns", 4, "ngIf"], [3, "title"], [3, "btns"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_page_header_2_Template, 1, 1, "app-page-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_app_page_footer_5_Template, 1, 1, "app-page-footer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fullscreen", ctx.routeOptions.fullscreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.routeOptions.headerTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.routeOptions.footerBtns && ctx.routeOptions.footerBtns.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _kart_core_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderComponent"], _kart_core_page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_5__["PageFooterComponent"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  display: block;\n  overflow: hidden;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-image: url('wallpaper.png');\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n}\n\n.app-container[_ngcontent-%COMP%]   .app-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  max-width: 1100px;\n  background: rgba(255, 255, 255, 0.05);\n  display: flex;\n  flex-direction: column;\n}\n\n.app-container[_ngcontent-%COMP%]   .app-content.fullscreen[_ngcontent-%COMP%] {\n  max-width: none;\n}\n\n.app-container[_ngcontent-%COMP%]   .app-content[_ngcontent-%COMP%]   .app-route-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQURKOztBQUdJO0VBQ0UsZUFBQTtBQUROOztBQUlJO0VBQ0UsT0FBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtBQUhOIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uYXBwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltZy91aS93YWxscGFwZXIucG5nXCIpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC5hcHAtY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC13aWR0aDogMTEwMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAmLmZ1bGxzY3JlZW4ge1xuICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgIH1cblxuICAgIC5hcHAtcm91dGUtY29udGVudCB7XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_services_init_service__WEBPACK_IMPORTED_MODULE_2__["InitService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: URL_TWITTER, MSG_TWITTER, URL_SITE, URL_JOB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_TWITTER", function() { return URL_TWITTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MSG_TWITTER", function() { return MSG_TWITTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_SITE", function() { return URL_SITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_JOB", function() { return URL_JOB; });
const URL_TWITTER = "";
const MSG_TWITTER = 'https://twitter.com/intent/tweet?text=Je%20viens%20de%20réaliser%20un%20score%20de%20||PTS||pts%20sur%20le%20takima%20kart%20!%20Essaie%20de%20me%20battre%20!&amp;via=takimafr&amp;url=https%3A%2F%2Ftakima.fr/jobs/postule';
const URL_SITE = "https://www.takima.fr/";
const URL_JOB = "https://www.takima.fr/jobs/postuler/job/awesome";


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _kart_core_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kart-core/welcome/welcome.component */ "./src/app/kart-core/welcome/welcome.component.ts");
/* harmony import */ var _kart_core_map_choice_map_choice_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kart-core/map-choice/map-choice.component */ "./src/app/kart-core/map-choice/map-choice.component.ts");
/* harmony import */ var _kart_core_game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kart-core/game/game.component */ "./src/app/kart-core/game/game.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _kart_core_driver_cell_driver_cell_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./kart-core/driver-cell/driver-cell.component */ "./src/app/kart-core/driver-cell/driver-cell.component.ts");
/* harmony import */ var _kart_core_driver_stats_driver_stats_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kart-core/driver-stats/driver-stats.component */ "./src/app/kart-core/driver-stats/driver-stats.component.ts");
/* harmony import */ var _kart_core_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./kart-core/page-header/page-header.component */ "./src/app/kart-core/page-header/page-header.component.ts");
/* harmony import */ var _kart_core_page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./kart-core/page-footer/page-footer.component */ "./src/app/kart-core/page-footer/page-footer.component.ts");
/* harmony import */ var _kart_core_driver_choice_driver_choice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./kart-core/driver-choice/driver-choice.component */ "./src/app/kart-core/driver-choice/driver-choice.component.ts");
/* harmony import */ var _kart_core_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kart-core/about/about.component */ "./src/app/kart-core/about/about.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _shared_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/pipes/time.pipe */ "./src/app/shared/pipes/time.pipe.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _kart_core_pop_result_pop_result_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./kart-core/pop-result/pop-result.component */ "./src/app/kart-core/pop-result/pop-result.component.ts");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _kart_core_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"],
        _kart_core_driver_choice_driver_choice_component__WEBPACK_IMPORTED_MODULE_12__["DriverChoiceComponent"],
        _kart_core_map_choice_map_choice_component__WEBPACK_IMPORTED_MODULE_5__["MapChoiceComponent"],
        _kart_core_game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"],
        _kart_core_driver_cell_driver_cell_component__WEBPACK_IMPORTED_MODULE_8__["DriverCellComponent"],
        _kart_core_driver_stats_driver_stats_component__WEBPACK_IMPORTED_MODULE_9__["DriverStatsComponent"],
        _kart_core_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_10__["PageHeaderComponent"],
        _kart_core_page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_11__["PageFooterComponent"],
        _kart_core_pop_result_pop_result_component__WEBPACK_IMPORTED_MODULE_17__["PopResultComponent"],
        _kart_core_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
        _shared_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_15__["TimePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _kart_core_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"],
                    _kart_core_driver_choice_driver_choice_component__WEBPACK_IMPORTED_MODULE_12__["DriverChoiceComponent"],
                    _kart_core_map_choice_map_choice_component__WEBPACK_IMPORTED_MODULE_5__["MapChoiceComponent"],
                    _kart_core_game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"],
                    _kart_core_driver_cell_driver_cell_component__WEBPACK_IMPORTED_MODULE_8__["DriverCellComponent"],
                    _kart_core_driver_stats_driver_stats_component__WEBPACK_IMPORTED_MODULE_9__["DriverStatsComponent"],
                    _kart_core_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_10__["PageHeaderComponent"],
                    _kart_core_page_footer_page_footer_component__WEBPACK_IMPORTED_MODULE_11__["PageFooterComponent"],
                    _kart_core_pop_result_pop_result_component__WEBPACK_IMPORTED_MODULE_17__["PopResultComponent"],
                    _kart_core_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                    _shared_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_15__["TimePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/kart-core/about/about.component.ts":
/*!****************************************************!*\
  !*** ./src/app/kart-core/about/about.component.ts ***!
  \****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 22, vars: 0, consts: [[1, "about-content"], ["href", "http://conard.jason.free.fr/Perso", "target", "_blank"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " cette exp\u00E9rience vous est offerte par ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Jason Conard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Voici les diff\u00E9rentes technologies utilis\u00E9es pour le d\u00E9veloppement de ce jeu : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " - HTML 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " - SCSS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " - RXJS 6.5.5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " - TypeScript 2.0.0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " - Angular 10 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " - ThreeJS 0.122.0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Amusez-vous bien ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n[_nghost-%COMP%]   .about-content[_ngcontent-%COMP%] {\n  color: white;\n  width: 600px;\n  max-width: 100%;\n  font-size: 24px;\n}\n@media (max-width: 600px) {\n  [_nghost-%COMP%]   .about-content[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n[_nghost-%COMP%]   .about-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cb2468;\n}\n[_nghost-%COMP%]   .about-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:visited {\n  color: #cb2468;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FydC1jb3JlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsYUFBQTtBQUFGO0FBRUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQUo7QUFFSTtFQU5GO0lBT0ksZUFBQTtFQUNKO0FBQ0Y7QUFDSTtFQUNFLGNBQUE7QUFDTjtBQUFNO0VBQ0UsY0FBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAva2FydC1jb3JlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBwYWRkaW5nOiAxMHB4O1xuXG4gIC5hYm91dC1jb250ZW50IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDI0cHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiAjY2IyNDY4O1xuICAgICAgJjp2aXNpdGVkIHtcbiAgICAgICAgY29sb3I6ICNjYjI0Njg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/kart-core/driver-cell/driver-cell.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/kart-core/driver-cell/driver-cell.component.ts ***!
  \****************************************************************/
/*! exports provided: DriverCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverCellComponent", function() { return DriverCellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class DriverCellComponent {
    constructor() {
        this.driver = null;
        this.selected = false;
        this.intervalId = -1;
        this.frame = 0;
        this.frames = [
            '-128px 0', '-64px 0', '-128px 0', '-192px 0'
        ];
    }
    ngOnInit() {
        this.intervalId = setInterval(() => {
            this.frame = (this.frame + 1) % this.frames.length;
        }, 200);
    }
    ngOnDestroy() {
    }
    getBgStyle() {
        return {
            'background-image': 'url("' + this.driver.mainBackground + '")'
        };
    }
    getSpriteStyle() {
        return {
            'background-image': 'url("' + this.driver.sprite.url + '")',
            'background-position': this.frames[this.selected ? this.frame : 0]
        };
    }
}
DriverCellComponent.ɵfac = function DriverCellComponent_Factory(t) { return new (t || DriverCellComponent)(); };
DriverCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DriverCellComponent, selectors: [["app-driver-cell"]], inputs: { driver: "driver", selected: "selected" }, decls: 2, vars: 4, consts: [[1, "driver-cell", 3, "ngStyle"], [1, "driver-cell-sprite", 3, "ngStyle"]], template: function DriverCellComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getBgStyle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getSpriteStyle());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["[_nghost-%COMP%] {\n  margin: 10px;\n  cursor: pointer;\n}\n\n.driver-cell[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  image-rendering: pixelated;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n}\n\n.driver-cell.selected[_ngcontent-%COMP%] {\n  border: 2px solid white;\n}\n\n.driver-cell[_ngcontent-%COMP%]   .driver-cell-sprite[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  image-rendering: pixelated;\n  transform: scale(2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FydC1jb3JlL2RyaXZlci1jZWxsL2RyaXZlci1jZWxsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBR0EsMEJBQUE7RUFDQSxzQkFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFHRTtFQUNFLHVCQUFBO0FBREo7O0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUdBLDBCQUFBO0VBRUEsbUJBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL2thcnQtY29yZS9kcml2ZXItY2VsbC9kcml2ZXItY2VsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWFyZ2luOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcml2ZXItY2VsbCB7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG5cbiAgaW1hZ2UtcmVuZGVyaW5nOiAtbW96LWNyaXNwLWVkZ2VzO1xuICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAmLnNlbGVjdGVkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgfVxuXG4gIC5kcml2ZXItY2VsbC1zcHJpdGUge1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcblxuICAgIGltYWdlLXJlbmRlcmluZzogLW1vei1jcmlzcC1lZGdlcztcbiAgICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcblxuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriverCellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-driver-cell',
                templateUrl: './driver-cell.component.html',
                styleUrls: ['./driver-cell.component.scss']
            }]
    }], function () { return []; }, { driver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/kart-core/driver-choice/driver-choice.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/kart-core/driver-choice/driver-choice.component.ts ***!
  \********************************************************************/
/*! exports provided: DriverChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverChoiceComponent", function() { return DriverChoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_models_footerBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/footerBtn */ "./src/app/shared/models/footerBtn.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_services_driver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/driver.service */ "./src/app/shared/services/driver.service.ts");
/* harmony import */ var _shared_services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_bindings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/bindings.service */ "./src/app/shared/services/bindings.service.ts");
/* harmony import */ var _shared_services_footer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/footer.service */ "./src/app/shared/services/footer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _driver_cell_driver_cell_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../driver-cell/driver-cell.component */ "./src/app/kart-core/driver-cell/driver-cell.component.ts");
/* harmony import */ var _driver_stats_driver_stats_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../driver-stats/driver-stats.component */ "./src/app/kart-core/driver-stats/driver-stats.component.ts");














const _c0 = ["nameInput"];
const _c1 = ["driverList"];
function DriverChoiceComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Veuillez entrer un nom (sans caract\u00E8res sp\u00E9ciaux) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@errorAnim", undefined);
} }
function DriverChoiceComponent_app_driver_cell_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-driver-cell", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DriverChoiceComponent_app_driver_cell_12_Template_app_driver_cell_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const driver_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.selectDriver(driver_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const driver_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("driver", driver_r6)("selected", ctx_r3.selectedDriver && ctx_r3.selectedDriver.id === driver_r6.id);
} }
function DriverChoiceComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@nameAnim", ctx_r4.selectedDriverId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.selectedDriver.name, " ");
} }
function DriverChoiceComponent_app_driver_stats_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-driver-stats", 18);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("driver", ctx_r5.selectedDriver);
} }
class DriverChoiceComponent {
    constructor(driverService, gameService, router, bindingsService, footerService) {
        this.driverService = driverService;
        this.gameService = gameService;
        this.router = router;
        this.bindingsService = bindingsService;
        this.footerService = footerService;
        this.subs = [];
        this.playerName = this.gameService.playerName;
        this.selectedDriver = null;
        this.selectedDriverId = 0;
        this.error = false;
        this.drivers = [];
    }
    ngOnInit() {
        this.subs.push(this.driverService.driversState.subscribe(drivers => {
            this.drivers = drivers;
            this.selectDriver(this.driverService.currentDriver || this.drivers[0]);
            setTimeout(() => {
                this.updatePlayerGrid();
            });
        }));
        this.subs.push(this.footerService.actionState.subscribe(action => {
            if (action === _shared_models_footerBtn__WEBPACK_IMPORTED_MODULE_2__["FooterAction"].game) {
                this.confirm();
            }
        }));
        this.subs.push(this.bindingsService.keydownState.subscribe(keyCode => {
            this.manageKeyboard(keyCode);
        }));
        this.subs.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, 'resize').subscribe(() => {
            this.updatePlayerGrid();
        }));
        this.nameInput.nativeElement.focus();
    }
    confirm() {
        this.error = false;
        if (!this.playerName.trim() || this.playerName.trim().length < 2 || !(/^[a-zA-Z0-9\-]*$/.test(this.playerName))) {
            this.error = true;
            return;
        }
        this.gameService.setPlayerName(this.playerName.trim());
        this.driverService.selectDriver(this.selectedDriver);
        this.router.navigate(['game']);
    }
    ngOnDestroy() {
        this.subs.forEach(sub => sub.unsubscribe());
        this.subs = [];
    }
    selectDriver(driver) {
        this.selectedDriver = driver;
        this.selectedDriverId = this.drivers.findIndex(driver => driver.id === this.selectedDriver.id);
    }
    manageKeyboard(keyCode) {
        if (document.activeElement !== this.nameInput.nativeElement) {
            if (this.playerGrid) {
                let nextDriverIndex = -1;
                switch (keyCode) {
                    case 'ArrowUp':
                        nextDriverIndex = this.selectedDriverId - this.playerGrid.nbItemPerRow;
                        break;
                    case 'ArrowDown':
                        nextDriverIndex = this.selectedDriverId + this.playerGrid.nbItemPerRow;
                        break;
                    case 'ArrowLeft': {
                        if ((this.selectedDriverId % this.playerGrid.nbItemPerRow) > 0) {
                            nextDriverIndex = this.selectedDriverId - 1;
                        }
                        break;
                    }
                    case 'ArrowRight': {
                        if ((this.selectedDriverId % this.playerGrid.nbItemPerRow) < this.playerGrid.nbItemPerRow - 1) {
                            nextDriverIndex = this.selectedDriverId + 1;
                        }
                        break;
                    }
                }
                const driver = this.drivers[nextDriverIndex];
                if (driver) {
                    this.selectDriver(driver);
                }
            }
        }
    }
    getRowWidth() {
        return { 'max-width': this.playerGrid ? (this.playerGrid.rowWidth + 'px') : 'none' };
    }
    updatePlayerGrid() {
        const width = this.driverList.nativeElement.getBoundingClientRect().width;
        const padding = 20;
        const itemWidth = 100;
        const modulo = (width - padding) % itemWidth;
        const rowWidth = (width - padding) - modulo;
        const nbItemPerRow = rowWidth / itemWidth;
        const nbRow = Math.ceil(this.drivers.length / nbItemPerRow);
        this.playerGrid = { nbItemPerRow, nbRow, rowWidth };
    }
}
DriverChoiceComponent.ɵfac = function DriverChoiceComponent_Factory(t) { return new (t || DriverChoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_bindings_service__WEBPACK_IMPORTED_MODULE_7__["BindingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_footer_service__WEBPACK_IMPORTED_MODULE_8__["FooterService"])); };
DriverChoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DriverChoiceComponent, selectors: [["app-driver-choice"]], viewQuery: function DriverChoiceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.nameInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.driverList = _t.first);
    } }, decls: 16, vars: 6, consts: [[1, "player-name"], [1, "player-name-field"], [1, "name-title"], [1, "player-name-input"], ["type", "text", 3, "ngModel", "ngModelChange", "keyup.enter"], ["nameInput", ""], ["class", "name-title-error", 4, "ngIf"], [1, "driver-choice"], [1, "driver-list"], ["driverList", ""], [1, "driver-list-content", 3, "ngStyle"], [3, "driver", "selected", "click", 4, "ngFor", "ngForOf"], [1, "driver-stats"], ["class", "driver-name", 4, "ngIf"], [3, "driver", 4, "ngIf"], [1, "name-title-error"], [3, "driver", "selected", "click"], [1, "driver-name"], [3, "driver"]], template: function DriverChoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Merci de taper ton pr\u00E9nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DriverChoiceComponent_Template_input_ngModelChange_5_listener($event) { return ctx.playerName = $event; })("keyup.enter", function DriverChoiceComponent_Template_input_keyup_enter_5_listener() { return ctx.confirm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DriverChoiceComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DriverChoiceComponent_app_driver_cell_12_Template, 1, 2, "app-driver-cell", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DriverChoiceComponent_div_14_Template, 2, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DriverChoiceComponent_app_driver_stats_15_Template, 1, 1, "app-driver-stats", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.playerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.getRowWidth());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.drivers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedDriver);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedDriver);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _driver_cell_driver_cell_component__WEBPACK_IMPORTED_MODULE_11__["DriverCellComponent"], _driver_stats_driver_stats_component__WEBPACK_IMPORTED_MODULE_12__["DriverStatsComponent"]], styles: [".player-name[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  height: 100px;\n  font-size: 24px;\n  color: white;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.player-name[_ngcontent-%COMP%]   .player-name-field[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 400px;\n  width: calc(100% - 20px);\n}\n.player-name[_ngcontent-%COMP%]   .player-name-field[_ngcontent-%COMP%]   .name-title[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n.player-name[_ngcontent-%COMP%]   .player-name-field[_ngcontent-%COMP%]   .name-title-error[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 0;\n  padding: 10px 10px 0 10px;\n  color: red;\n  font-size: 18px;\n  line-height: 12px;\n}\n.player-name[_ngcontent-%COMP%]   .player-name-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  margin-top: 5px;\n  font-family: \"Visitor\", sans-serif;\n  font-size: 24px;\n  padding: 0 10px;\n}\n.driver-choice[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.driver-choice[_ngcontent-%COMP%]   .driver-list[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 10px;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 10px;\n  color: white;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n.driver-choice[_ngcontent-%COMP%]   .driver-list[_ngcontent-%COMP%]   .driver-list-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.driver-choice[_ngcontent-%COMP%]   .driver-stats[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.driver-choice[_ngcontent-%COMP%]   .driver-stats[_ngcontent-%COMP%]   .driver-name[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 10px;\n  color: white;\n  transform-origin: 50%;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FydC1jb3JlL2RyaXZlci1jaG9pY2UvZHJpdmVyLWNob2ljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtBQURGO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7QUFGSjtBQUlJO0VBQ0UsZUFBQTtBQUZOO0FBS0k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBRUEsZUFBQTtFQUNBLGlCQUFBO0FBSk47QUFPSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUdBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFQTjtBQVlBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQVRGO0FBV0U7RUFDRSxPQUFBO0VBRUEsa0JBQUE7RUFFQSw4QkFBQTtFQUNBLGFBQUE7RUFFQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBYko7QUFlSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBYk47QUFpQkU7RUFDRSxhQUFBO0FBZko7QUFnQkk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFmTiIsImZpbGUiOiJzcmMvYXBwL2thcnQtY29yZS9kcml2ZXItY2hvaWNlL2RyaXZlci1jaG9pY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wbGF5ZXItbmFtZSB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuXG4gIC5wbGF5ZXItbmFtZS1maWVsZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuXG4gICAgLm5hbWUtdGl0bGUge1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgIH1cblxuICAgIC5uYW1lLXRpdGxlLWVycm9yIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMCAxMHB4O1xuICAgICAgY29sb3I6IHJlZDtcblxuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgfVxuXG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG5cblxuICAgICAgZm9udC1mYW1pbHk6ICdWaXNpdG9yJywgc2Fucy1zZXJpZjtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmRyaXZlci1jaG9pY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC5kcml2ZXItbGlzdCB7XG4gICAgZmxleDogMTtcblxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC41KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5kcml2ZXItbGlzdC1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICB9XG5cbiAgLmRyaXZlci1zdGF0cyB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAuZHJpdmVyLW5hbWUge1xuICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gIH1cbn1cbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('nameAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':decrement, :increment', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: 'translate3D(0, 30px, 0) scale(0.3)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: 'translate3D(0,0,0) scale(1)' }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('errorAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: 'translate3D(0, 30px, 0) scale(0.3)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: 'translate3D(0,0,0) scale(1)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: 'translate3D(0, 0, 0) scale(1)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: 'translate3D(0,30px,0) scale(0.3)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriverChoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-driver-choice',
                templateUrl: './driver-choice.component.html',
                styleUrls: ['./driver-choice.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('nameAnim', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':decrement, :increment', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: 'translate3D(0, 30px, 0) scale(0.3)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: 'translate3D(0,0,0) scale(1)' }))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('errorAnim', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: 'translate3D(0, 30px, 0) scale(0.3)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: 'translate3D(0,0,0) scale(1)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0, transform: 'translate3D(0, 0, 0) scale(1)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1, transform: 'translate3D(0,30px,0) scale(0.3)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _shared_services_driver_service__WEBPACK_IMPORTED_MODULE_4__["DriverService"] }, { type: _shared_services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _shared_services_bindings_service__WEBPACK_IMPORTED_MODULE_7__["BindingsService"] }, { type: _shared_services_footer_service__WEBPACK_IMPORTED_MODULE_8__["FooterService"] }]; }, { nameInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nameInput', { static: true }]
        }], driverList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['driverList', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/kart-core/driver-stats/driver-stats.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/kart-core/driver-stats/driver-stats.component.ts ***!
  \******************************************************************/
/*! exports provided: DriverStatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverStatsComponent", function() { return DriverStatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function DriverStatsComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
} if (rf & 2) {
    const cell_r3 = ctx.$implicit;
    const stats_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r2.getDriverStyle(stats_r1.value >= cell_r3));
} }
function DriverStatsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DriverStatsComponent_div_0_div_4_Template, 1, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stats_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.valueCells);
} }
class DriverStatsComponent {
    constructor() {
        this.driver = null;
        this.statsList = [];
        this.valueCells = [1, 2, 3, 4, 5, 6, 7];
    }
    ngOnInit() {
        this.initDriver();
    }
    ngOnChanges(changes) {
        if (changes.driver) {
            this.initDriver();
        }
    }
    initDriver() {
        if (this.driver) {
            const stats = this.driver.stats;
            if (this.statsList.length) {
                this.statsList.forEach(stat => {
                    switch (stat.label) {
                        case "Speed":
                            stat.value = stats.speed;
                            break;
                        case "Acceleration":
                            stat.value = stats.acceleration;
                            break;
                        case "Weight":
                            stat.value = stats.weight;
                            break;
                        case "Handling":
                            stat.value = stats.handling;
                            break;
                        case "Traction":
                            stat.value = stats.traction;
                            break;
                        case "Luck":
                            stat.value = stats.luck;
                            break;
                    }
                });
            }
            else {
                this.statsList = [
                    { label: "Speed", value: stats.speed },
                    { label: "Acceleration", value: stats.acceleration },
                    { label: "Weight", value: stats.weight },
                    { label: "Handling", value: stats.handling },
                    { label: "Traction", value: stats.traction },
                    { label: "Luck", value: stats.luck },
                ];
            }
        }
    }
    getDriverStyle(shown) {
        return !shown ? null : {
            'background-image': 'url("' + this.driver.mainBackground + '")'
        };
    }
}
DriverStatsComponent.ɵfac = function DriverStatsComponent_Factory(t) { return new (t || DriverStatsComponent)(); };
DriverStatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DriverStatsComponent, selectors: [["app-driver-stats"]], inputs: { driver: "driver" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "driver-stats", 4, "ngFor", "ngForOf"], [1, "driver-stats"], [1, "driver-stats-title"], [1, "driver-stats-row"], ["class", "driver-stats-cell", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "driver-stats-cell", 3, "ngStyle"]], template: function DriverStatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DriverStatsComponent_div_0_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statsList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.driver-stats[_ngcontent-%COMP%]   .driver-stats-title[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 24px;\n  margin: 8px 0 0 0;\n}\n\n.driver-stats[_ngcontent-%COMP%]   .driver-stats-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.driver-stats[_ngcontent-%COMP%]   .driver-stats-row[_ngcontent-%COMP%]   .driver-stats-cell[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 25px;\n  transition: background 200ms ease-in-out;\n  border: 2px solid white;\n  image-rendering: pixelated;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FydC1jb3JlL2RyaXZlci1zdGF0cy9kcml2ZXItc3RhdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0Y7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0U7RUFDRSxhQUFBO0FBREo7O0FBR0k7RUFHRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0EsdUJBQUE7RUFFQSwwQkFBQTtFQUNBLHNCQUFBO0FBSE4iLCJmaWxlIjoic3JjL2FwcC9rYXJ0LWNvcmUvZHJpdmVyLXN0YXRzL2RyaXZlci1zdGF0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcml2ZXItc3RhdHMge1xuICAuZHJpdmVyLXN0YXRzLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIG1hcmdpbjogOHB4IDAgMCAwO1xuICB9XG5cbiAgLmRyaXZlci1zdGF0cy1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuZHJpdmVyLXN0YXRzLWNlbGwge1xuICAgICAgLy93aWR0aDogMjVweDtcbiAgICAgIC8vaGVpZ2h0OiAxNXB4O1xuICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwyNTUsMjU1KTtcbiAgICAgIGltYWdlLXJlbmRlcmluZzogLW1vei1jcmlzcC1lZGdlcztcbiAgICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriverStatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-driver-stats',
                templateUrl: './driver-stats.component.html',
                styleUrls: ['./driver-stats.component.scss']
            }]
    }], function () { return []; }, { driver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/kart-core/game/game.component.ts":
/*!**************************************************!*\
  !*** ./src/app/kart-core/game/game.component.ts ***!
  \**************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_racer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/racer */ "./src/app/shared/models/racer.ts");
/* harmony import */ var _shared_models_footerBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/footerBtn */ "./src/app/shared/models/footerBtn.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_models_racerResult__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/models/racerResult */ "./src/app/shared/models/racerResult.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _shared_services_driver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/driver.service */ "./src/app/shared/services/driver.service.ts");
/* harmony import */ var _shared_services_circuit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/circuit.service */ "./src/app/shared/services/circuit.service.ts");
/* harmony import */ var _shared_services_game_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _shared_services_footer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/footer.service */ "./src/app/shared/services/footer.service.ts");
/* harmony import */ var _shared_services_bindings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/services/bindings.service */ "./src/app/shared/services/bindings.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pop_result_pop_result_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pop-result/pop-result.component */ "./src/app/kart-core/pop-result/pop-result.component.ts");
/* harmony import */ var _shared_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/pipes/time.pipe */ "./src/app/shared/pipes/time.pipe.ts");






var degToRad = three__WEBPACK_IMPORTED_MODULE_3__["MathUtils"].degToRad;










const _c0 = ["screen"];
const _c1 = ["parallax"];
function GameComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Chargement en cours ...\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GameComponent_app_pop_result_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-pop-result", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onAction", function GameComponent_app_pop_result_2_Template_app_pop_result_onAction_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onResultAction($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("racer", ctx_r1.racer);
} }
function GameComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" score: ", ctx_r2.racer.points, " pt", ctx_r2.racer.points > 1 ? "s" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx_r2.racer.totalTime), " ");
} }
function GameComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@itemAppear", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r10.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.libelle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r10.effectClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.effect);
} }
function GameComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameComponent_div_4_div_1_Template, 5, 5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.racer.receivedItems);
} }
function GameComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" objectif: ", ctx_r4.objective, " pt", ctx_r4.objective > 1 ? "s" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" temps: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, ctx_r4.timeLimit), " ");
} }
class GameComponent {
    constructor(driverService, circuitService, gameService, foooterService, bindingService) {
        this.driverService = driverService;
        this.circuitService = circuitService;
        this.gameService = gameService;
        this.foooterService = foooterService;
        this.bindingService = bindingService;
        this.CAMERA_HEIGHT = 8;
        this.driver = null;
        this.circuit = null;
        this.isLoading = true;
        this.racer = null;
        this.circuitBack = {};
        this.stereoEnabled = false;
        this.accelerometer = null;
        this.objective = 700;
        this.parallaxInterval = -1;
        this.parStyle = {};
        this.beginTime = 0;
        this.timeLimit = this.gameService.timeLimit;
    }
    ngOnDestroy() {
        this.clearRace();
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.driver = this.driverService.currentDriver;
        this.circuit = this.circuitService.currentCircuit;
        if (!this.driver || !this.circuit) {
            this.foooterService.setAction(_shared_models_footerBtn__WEBPACK_IMPORTED_MODULE_2__["FooterAction"].driver);
            return;
        }
        this.clearRace();
        this.racer = null;
        this.isLoading = true;
        //mode7ctnr = document.getElementById('mode7ctnr');
        this.bindingService.setMode(window['cordova'] ? 'touchscreen' : 'keyboard');
        this.circuitBack = { background: this.circuit.bgColor };
        this.stereoEnabled = false;
        this.accelerometer = null;
        this.objective = 700;
        this.racer = new _shared_models_racer__WEBPACK_IMPORTED_MODULE_1__["Racer"]({
            driver: this.driver,
            circuit: this.circuit,
            rotation: this.circuit.direction,
            x: this.circuit.startPosition.x,
            y: this.circuit.startPosition.y,
            z: this.CAMERA_HEIGHT,
            angle: degToRad(0),
            driftDirection: _shared_models_racer__WEBPACK_IMPORTED_MODULE_1__["RotateDirection"].front,
            accelerationLevel: 0,
            speed: 0,
            ground: 1,
            groundBeforeJump: 1,
            zBeforeJump: 0,
            status: _shared_models_racer__WEBPACK_IMPORTED_MODULE_1__["RacerStatus"].normal,
            driftingTime: -1,
            canJump: true,
            rotateDirection: _shared_models_racer__WEBPACK_IMPORTED_MODULE_1__["RotateDirection"].front,
            bonus: 1,
            bonusTimeout: null,
            design: null,
            points: 0,
            nbCheckpoint: 0,
            turn: 0,
            checkpoint: this.circuit.checkpoints[0],
            totalTime: 0,
            receivedItems: [],
            totalItems: []
        });
        this.beginTime = new Date().getTime();
        this.racer.totalTime = 0;
        const sub = this.gameService.initScene(this.screenRef.nativeElement, this.racer).subscribe(() => {
            this.isLoading = false;
            this.initParallax();
            sub.unsubscribe();
        });
    }
    backToChoice() {
        this.foooterService.setAction(_shared_models_footerBtn__WEBPACK_IMPORTED_MODULE_2__["FooterAction"].driver);
    }
    backToSite() {
        this.foooterService.setAction(_shared_models_footerBtn__WEBPACK_IMPORTED_MODULE_2__["FooterAction"].exit);
    }
    updateBackgroundRotation() {
        const moduloAngle = (this.racer.angle * 180 / Math.PI) % 360;
        const reducedWidth = this.racer.circuit.parallaxSizes.width / 360;
        this.racer.circuit.parallaxes.forEach((para) => {
            para.elem.style.transform = 'translate3d(' + ((para.speed * moduloAngle) * reducedWidth) + 'px, 0, 0)';
        });
    }
    initParallax() {
        const $parallax = this.parallaxRef.nativeElement;
        if (!$parallax) {
            return;
        }
        $parallax.innerHTML = "";
        const parallaxSizes = this.racer.circuit.parallaxSizes;
        const parallaxes = this.racer.circuit.parallaxes;
        parallaxes.forEach((paralax) => {
            const $para = document.createElement('div');
            $para.className = "parallax-ctnr";
            $para.style.width = parallaxSizes.width * 3 + "px";
            $para.style.height = parallaxSizes.height + "px";
            $para.style.willChange = 'transform';
            //$para.className = "pixellated-background parallax-background";
            //$para.style.backgroundImage = "url('"+paralax.img+"')";
            //$para.style.transform = "translate3d(" + parallaxSizes.width * i + "px, 0, 0)";
            //$para.style.backgroundSize = parallaxSizes.width+"px "+parallaxSizes.height+"px";
            paralax.elem = $para;
            // $para.style.transition = 'transform 200ms linear';
            for (let i = -1; i < 2; i++) {
                const $back = document.createElement('div');
                $back.className = "pixellated-background parallax-background";
                $back.style.backgroundImage = "url('" + paralax.img + "')";
                $back.style.transform = "translate3d(" + parallaxSizes.width * i + "px, 0, 0)";
                $back.style.backgroundSize = parallaxSizes.width + "px " + parallaxSizes.height + "px";
                $para.appendChild($back);
            }
            $parallax.appendChild($para);
        });
        clearInterval(this.parallaxInterval);
        this.parallaxInterval = setInterval(() => {
            this.updateBackgroundRotation();
        }, 1000 / 30);
    }
    clearRace() {
        this.parallaxRef.nativeElement.innerHTML = "";
        clearInterval(this.parallaxInterval);
        this.gameService.clearRace();
    }
    onResultAction(resultAction) {
        switch (resultAction) {
            case _shared_models_racerResult__WEBPACK_IMPORTED_MODULE_5__["ResultAction"].retry:
                this.init();
                break;
            case _shared_models_racerResult__WEBPACK_IMPORTED_MODULE_5__["ResultAction"].back_to_website:
                this.foooterService.setAction(_shared_models_footerBtn__WEBPACK_IMPORTED_MODULE_2__["FooterAction"].exit);
                break;
            case _shared_models_racerResult__WEBPACK_IMPORTED_MODULE_5__["ResultAction"].go_to_jobs:
                window.open(_app_constants__WEBPACK_IMPORTED_MODULE_6__["URL_JOB"], '_self');
                break;
            case _shared_models_racerResult__WEBPACK_IMPORTED_MODULE_5__["ResultAction"].tweet:
                this.tweet();
                break;
        }
    }
    tweet() {
        window.open(_app_constants__WEBPACK_IMPORTED_MODULE_6__["MSG_TWITTER"].split('||PTS||').join('' + this.racer.racerResult.totalPts), '_blank');
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_driver_service__WEBPACK_IMPORTED_MODULE_7__["DriverService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_circuit_service__WEBPACK_IMPORTED_MODULE_8__["CircuitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_game_service__WEBPACK_IMPORTED_MODULE_9__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_footer_service__WEBPACK_IMPORTED_MODULE_10__["FooterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_bindings_service__WEBPACK_IMPORTED_MODULE_11__["BindingsService"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], viewQuery: function GameComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.screenRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.parallaxRef = _t.first);
    } }, decls: 18, vars: 8, consts: [["class", "game-loading", 4, "ngIf"], [1, "game-content"], [3, "racer", "onAction", 4, "ngIf"], ["class", "score-panel", 4, "ngIf"], ["class", "received-items", 4, "ngIf"], ["class", "objective-panel", 4, "ngIf"], [1, "back-btn", 3, "click"], ["src", "assets/img/ui/icon-driver.png"], [1, "text"], [1, "back-btn", "site", 3, "click"], ["src", "assets/img/ui/icon-exit.png"], [1, "game-screen", 3, "ngStyle"], ["screen", ""], [1, "screen-parallax"], ["parallax", ""], [1, "game-loading"], [3, "racer", "onAction"], [1, "score-panel"], [1, "score"], [1, "time"], [1, "received-items"], ["class", "received-item", 4, "ngFor", "ngForOf"], [1, "received-item"], [3, "src"], [3, "ngClass"], [1, "objective-panel"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GameComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameComponent_app_pop_result_2_Template, 1, 1, "app-pop-result", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameComponent_div_3_Template, 6, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameComponent_div_5_Template, 6, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_div_click_6_listener() { return ctx.backToChoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "choix du pilote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_Template_div_click_10_listener() { return ctx.backToSite(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "revenir au site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hidden", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.racer && ctx.racer.racerResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.racer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.racer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.racer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.circuitBack);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _pop_result_pop_result_component__WEBPACK_IMPORTED_MODULE_13__["PopResultComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"]], pipes: [_shared_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_14__["TimePipe"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.7);\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .game-loading[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: white;\n  padding: 10px;\n  font-size: 48px;\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%] {\n  position: relative;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .game-content.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .score-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 40px;\n  width: 100%;\n  text-align: center;\n  pointer-events: none;\n  z-index: 2;\n  font-size: 28px;\n  color: white;\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .score-panel[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .received-items[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 60%;\n  text-align: center;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-size: 24px;\n  color: white;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .received-items[_ngcontent-%COMP%]   .received-item[_ngcontent-%COMP%] {\n  position: relative;\n  height: 40px;\n  margin: 5px;\n  background: rgba(255, 255, 255, 0.4);\n  display: flex;\n  align-items: center;\n  padding: 0 10px;\n  letter-spacing: 0.5px;\n  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);\n  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .received-items[_ngcontent-%COMP%]   .received-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30px;\n  margin-right: 10px;\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .received-items[_ngcontent-%COMP%]   .received-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .received-items[_ngcontent-%COMP%]   .received-item[_ngcontent-%COMP%]   span.bonus[_ngcontent-%COMP%] {\n  color: #00ff00;\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .received-items[_ngcontent-%COMP%]   .received-item[_ngcontent-%COMP%]   span.superbonus[_ngcontent-%COMP%] {\n  color: #e8d744;\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .objective-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  z-index: 2;\n  font-size: 28px;\n  color: white;\n  line-height: 24px;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 16;\n  background: #00aa00;\n  color: white;\n  text-align: center;\n  font-size: 24px;\n  padding: 0 10px;\n  height: 40px;\n  min-width: 40px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .back-btn.site[_ngcontent-%COMP%] {\n  bottom: 60px;\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n@media (max-width: 600px) {\n  [_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .game-screen[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: white;\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .game-screen[_ngcontent-%COMP%]   .screen-parallax[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .game-content[_ngcontent-%COMP%]   .game-screen[_ngcontent-%COMP%]   .game-screen-scanlines[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  background-image: url('scanline.png');\n  background-repeat: repeat;\n  opacity: 0.1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FydC1jb3JlL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQ0o7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFFSTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUFBTjtBQUdJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0FBRk47QUFJTTtFQUNFLGVBQUE7QUFGUjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFMTjtBQU9NO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBRUEsd0NBQUE7RUFDQSx5Q0FBQTtBQU5SO0FBUVE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFOVjtBQVNRO0VBQ0UsaUJBQUE7QUFQVjtBQVdVO0VBQ0UsY0FBQTtBQVRaO0FBWVU7RUFDRSxjQUFBO0FBVlo7QUFnQkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQWZOO0FBa0JJO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUVBLFlBQUE7RUFDQSxlQUFBO0VBRUEsZUFBQTtBQW5CTjtBQXFCTTtFQUNFLFlBQUE7QUFuQlI7QUFzQk07RUFDRSxXQUFBO0FBcEJSO0FBdUJNO0VBQ0UsaUJBQUE7QUFyQlI7QUF1QlE7RUFIRjtJQUlJLGFBQUE7RUFwQlI7QUFDRjtBQXdCSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFHQSx1QkFBQTtBQXhCTjtBQTBCTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXhCUjtBQTBCTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FBeEJSIiwiZmlsZSI6InNyYy9hcHAva2FydC1jb3JlL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC43KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAuZ2FtZS1sb2FkaW5nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gIH1cblxuICAuZ2FtZS1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmLmhpZGRlbiB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG5cbiAgICAuc2NvcmUtcGFuZWwge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogNDBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB6LWluZGV4OiAyO1xuXG4gICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgIC5zY29yZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVjZWl2ZWQtaXRlbXMge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB6LWluZGV4OiAzO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAucmVjZWl2ZWQtaXRlbSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcblxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDAgcmdiYSgwLCAwICwwLCAwLjUpO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwIHJnYmEoMCwgMCAsMCwgMC41KTtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcblxuXG5cbiAgICAgICAgICAmLmJvbnVzIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDBmZjAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuc3VwZXJib251cyB7XG4gICAgICAgICAgICBjb2xvcjogI2U4ZDc0NDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAub2JqZWN0aXZlLXBhbmVsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxMHB4O1xuICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgei1pbmRleDogMjtcblxuICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG5cbiAgICAuYmFjay1idG4ge1xuXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDEwcHg7XG4gICAgICBsZWZ0OiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHotaW5kZXg6IDE2O1xuICAgICAgYmFja2dyb3VuZDogIzAwYWEwMDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcblxuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgbWluLXdpZHRoOiA0MHB4O1xuXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICYuc2l0ZSB7XG4gICAgICAgIGJvdHRvbTogNjBweDtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcblxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZ2FtZS1zY3JlZW4ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIC8vd2lkdGg6IDUxMnB4OyAvLyBTTkVTIFJFU09MVVRJT05cbiAgICAgIC8vaGVpZ2h0OiA0NDhweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gICAgICAuc2NyZWVuLXBhcmFsbGF4IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICAuZ2FtZS1zY3JlZW4tc2NhbmxpbmVzIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy91aS9zY2FubGluZS5wbmdcIik7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gICAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('itemAppear', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, left: -400, transform: 'scale(0.3)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, left: 0, transform: 'scale(1)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, left: 0, transform: 'scale(1)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, left: -400, transform: 'scale(0.3)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('itemAppear', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, left: -400, transform: 'scale(0.3)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, left: 0, transform: 'scale(1)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1, left: 0, transform: 'scale(1)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('200ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0, left: -400, transform: 'scale(0.3)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _shared_services_driver_service__WEBPACK_IMPORTED_MODULE_7__["DriverService"] }, { type: _shared_services_circuit_service__WEBPACK_IMPORTED_MODULE_8__["CircuitService"] }, { type: _shared_services_game_service__WEBPACK_IMPORTED_MODULE_9__["GameService"] }, { type: _shared_services_footer_service__WEBPACK_IMPORTED_MODULE_10__["FooterService"] }, { type: _shared_services_bindings_service__WEBPACK_IMPORTED_MODULE_11__["BindingsService"] }]; }, { screenRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['screen', { static: true }]
        }], parallaxRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['parallax', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/kart-core/map-choice/map-choice.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/kart-core/map-choice/map-choice.component.ts ***!
  \**************************************************************/
/*! exports provided: MapChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapChoiceComponent", function() { return MapChoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MapChoiceComponent {
    constructor() { }
    ngOnInit() {
    }
}
MapChoiceComponent.ɵfac = function MapChoiceComponent_Factory(t) { return new (t || MapChoiceComponent)(); };
MapChoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapChoiceComponent, selectors: [["app-map-choice"]], decls: 0, vars: 0, template: function MapChoiceComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2thcnQtY29yZS9tYXAtY2hvaWNlL21hcC1jaG9pY2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapChoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map-choice',
                templateUrl: './map-choice.component.html',
                styleUrls: ['./map-choice.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/kart-core/page-footer/page-footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/kart-core/page-footer/page-footer.component.ts ***!
  \****************************************************************/
/*! exports provided: PageFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageFooterComponent", function() { return PageFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_footer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/footer.service */ "./src/app/shared/services/footer.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function PageFooterComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", btn_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function PageFooterComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageFooterComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const btn_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onBtnClick(btn_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PageFooterComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", btn_r1.background);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", btn_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", btn_r1.name, " ");
} }
class PageFooterComponent {
    constructor(footerService) {
        this.footerService = footerService;
    }
    ngOnInit() {
    }
    onBtnClick(btn) {
        this.footerService.setAction(btn.action);
    }
}
PageFooterComponent.ɵfac = function PageFooterComponent_Factory(t) { return new (t || PageFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_footer_service__WEBPACK_IMPORTED_MODULE_1__["FooterService"])); };
PageFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageFooterComponent, selectors: [["app-page-footer"]], inputs: { btns: "btns" }, decls: 1, vars: 1, consts: [["class", "footer-btn", 3, "background", "click", 4, "ngFor", "ngForOf"], [1, "footer-btn", 3, "click"], ["class", "btn-icon", 4, "ngIf"], [1, "btn-text"], [1, "btn-icon"], [3, "src"]], template: function PageFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageFooterComponent_div_0_Template, 4, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.btns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 60px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  color: white;\n  padding: 0 5px;\n}\n\n.footer-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 3px;\n  height: 30px;\n  padding: 0 5px;\n  color: white;\n  line-height: 12px;\n  font-size: 21px;\n  max-width: 160px;\n  cursor: pointer;\n  margin: 0 5px;\n}\n\n@media (max-width: 600px) {\n  .footer-btn[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.footer-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  height: 30px;\n  display: flex;\n  align-items: center;\n  margin-right: 10px;\n}\n\n.footer-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 24px;\n  image-rendering: pixelated;\n}\n\n@media (max-width: 600px) {\n  .footer-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 16px;\n  }\n}\n\n.footer-btn[_ngcontent-%COMP%]   .btn-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FydC1jb3JlL3BhZ2UtZm9vdGVyL3BhZ2UtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFFQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtFQUVBLGFBQUE7QUFGRjs7QUFJRTtFQWhCRjtJQWlCSSxlQUFBO0VBREY7QUFDRjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtBQUZKOztBQUdJO0VBQ0UsV0FBQTtFQUVBLDBCQUFBO0FBRk47O0FBSU07RUFMRjtJQU1JLFdBQUE7RUFETjtBQUNGOztBQUtFO0VBQ0Usa0JBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL2thcnQtY29yZS9wYWdlLWZvb3Rlci9wYWdlLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCA1cHg7XG59XG5cbi5mb290ZXItYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBoZWlnaHQ6IDMwcHg7XG5cbiAgcGFkZGluZzogMCA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWF4LXdpZHRoOiAxNjBweDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgbWFyZ2luOiAwIDVweDtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cblxuICAuYnRuLWljb24ge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiAyNHB4O1xuXG4gICAgICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5idG4tdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-footer',
                templateUrl: './page-footer.component.html',
                styleUrls: ['./page-footer.component.scss']
            }]
    }], function () { return [{ type: _shared_services_footer_service__WEBPACK_IMPORTED_MODULE_1__["FooterService"] }]; }, { btns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/kart-core/page-header/page-header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/kart-core/page-header/page-header.component.ts ***!
  \****************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PageHeaderComponent {
    constructor() {
        this.title = '';
    }
    ngOnInit() {
    }
}
PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) { return new (t || PageHeaderComponent)(); };
PageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHeaderComponent, selectors: [["app-page-header"]], inputs: { title: "title" }, decls: 2, vars: 1, consts: [[1, "header-title"]], template: function PageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-size: 40px;\n  text-align: center;\n}\n@media (max-width: 600px) {\n  [_nghost-%COMP%] {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FydC1jb3JlL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBRUEsa0JBQUE7QUFBRjtBQUVFO0VBWEY7SUFZSSxlQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2thcnQtY29yZS9wYWdlLWhlYWRlci9wYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiA0MHB4O1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-header',
                templateUrl: './page-header.component.html',
                styleUrls: ['./page-header.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/kart-core/pop-result/pop-result.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/kart-core/pop-result/pop-result.component.ts ***!
  \**************************************************************/
/*! exports provided: PopResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopResultComponent", function() { return PopResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_racerResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/racerResult */ "./src/app/shared/models/racerResult.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/time.pipe */ "./src/app/shared/pipes/time.pipe.ts");





function PopResultComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "F\u00E9licitations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopResultComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "C'\u00E9tait l'\u00E9chauffement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopResultComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", ctx_r2.result.itemPts, "pts ");
} }
function PopResultComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.result.itemPts, "pts ");
} }
function PopResultComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" +", ctx_r4.result.timePts, "pts ");
} }
function PopResultComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.result.timePts, "pts ");
} }
function PopResultComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Je suis s\u00F9r que tu peux r\u00E9cup\u00E9rer plus de bonus. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopResultComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Tu as r\u00E9ussi l'objectif ! Nous avons h\u00E2te de te rencontrer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PopResultComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopResultComponent_div_30_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const btn_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onActionClick(btn_r9.action); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const btn_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", btn_r9.cssClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("win", ctx_r8.win);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](btn_r9.label);
} }
class PopResultComponent {
    constructor() {
        this.win = false;
        this.result = null;
        this.buttons = [{
                action: _shared_models_racerResult__WEBPACK_IMPORTED_MODULE_1__["ResultAction"].back_to_website,
                label: 'Je préfère prendre le bus',
                win: false
            }, {
                action: _shared_models_racerResult__WEBPACK_IMPORTED_MODULE_1__["ResultAction"].retry,
                label: 'La prochaine sera la bonne...',
                win: false
            }, {
                action: _shared_models_racerResult__WEBPACK_IMPORTED_MODULE_1__["ResultAction"].tweet,
                label: 'Tweeter mon résultat !',
                cssClass: 'twitter',
                win: true
            }, {
                action: _shared_models_racerResult__WEBPACK_IMPORTED_MODULE_1__["ResultAction"].retry,
                label: 'Un deuxième tour ?',
                win: true
            }, {
                action: _shared_models_racerResult__WEBPACK_IMPORTED_MODULE_1__["ResultAction"].go_to_jobs,
                label: 'Il y a un job pour toi',
                win: true
            }];
        this.filteredButtons = [];
        this.onAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.result = this.racer.racerResult;
        this.win = this.result.totalPts >= this.result.objectivePts;
        this.filteredButtons = this.buttons.filter(btn => btn.win === this.win);
    }
    ngOnDestroy() {
    }
    onActionClick(resultAction) {
        this.onAction.emit(resultAction);
    }
    gameEndAction(retry) {
        /*if(this.lose) {
          this.lose = false;
          if(retry){
            this.isLoading = true;
              this.clearRace();
              this.init();
          } else {
            //document.location.href = CONFIG.LINK_SITE;
          }
        } else if(this.win) {
          this.win = false;
          if(retry){
            this.isLoading = true;
    
            this.clearRace();
            this.init();
          } else {
            var jobtype = (angular.isUndefined($cookies.get('jobtype')) ? "job" : $cookies.get('jobtype'));
            var score = (vm.finalPoints > vm.objective + (vm.objective * 10 / 100) ? "awesome" : "passed");
            document.location.href = CONFIG.LINK_OFFERS + jobtype + "/" + score;
          }
        }*/
    }
}
PopResultComponent.ɵfac = function PopResultComponent_Factory(t) { return new (t || PopResultComponent)(); };
PopResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopResultComponent, selectors: [["app-pop-result"]], inputs: { racer: "racer" }, outputs: { onAction: "onAction" }, decls: 31, vars: 21, consts: [[1, "pop-content"], [1, "pop-header"], [4, "ngIf"], [1, "pop-desc"], [1, "desc-row"], ["class", "desc-pts-good", 4, "ngIf"], ["class", "desc-pts-bad", 4, "ngIf"], [1, "desc-total"], [1, "desc-total-pts"], ["class", "desc-message", 4, "ngIf"], [1, "pop-actions"], ["class", "pop-action", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "desc-pts-good"], [1, "desc-pts-bad"], [1, "desc-message"], [1, "pop-action", 3, "ngClass"], [1, "pop-action-btn", 3, "click"]], template: function PopResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PopResultComponent_span_2_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PopResultComponent_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Objets r\u00E9colt\u00E9s : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PopResultComponent_span_10_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PopResultComponent_span_11_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Temps : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " (");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PopResultComponent_span_20_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, PopResultComponent_span_21_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PopResultComponent_div_27_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PopResultComponent_div_28_Template, 2, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PopResultComponent_div_30_Template, 4, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pop-header-win", ctx.win);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.win);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.win);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.result.itemNb);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.result.itemPts > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.result.itemPts <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 17, ctx.result.raceTime), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 19, ctx.result.objectiveTime), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.result.timePts > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.result.timePts <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("total-win", ctx.win);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.result.totalPts, " pts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.win);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.win);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filteredButtons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], pipes: [_shared_pipes_time_pipe__WEBPACK_IMPORTED_MODULE_3__["TimePipe"]], styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.pop-content[_ngcontent-%COMP%] {\n  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);\n  overflow: hidden;\n  background: white;\n  max-width: 400px;\n  width: calc(100% - 20px);\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-header[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #CB2468;\n  color: white;\n  font-size: 28px;\n  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.5);\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-header.pop-header-win[_ngcontent-%COMP%] {\n  background: #00aa00;\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-desc[_ngcontent-%COMP%] {\n  color: #222;\n  padding: 10px;\n  font-size: 22px;\n  line-height: 14px;\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-desc[_ngcontent-%COMP%]   .desc-row[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-desc[_ngcontent-%COMP%]   .desc-row[_ngcontent-%COMP%]   .desc-pts-good[_ngcontent-%COMP%] {\n  color: #00aa00;\n  font-weight: bold;\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-desc[_ngcontent-%COMP%]   .desc-row[_ngcontent-%COMP%]   .desc-pts-bad[_ngcontent-%COMP%] {\n  color: #CB2468;\n  font-weight: bold;\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-desc[_ngcontent-%COMP%]   .desc-total[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 22px;\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-desc[_ngcontent-%COMP%]   .desc-total-pts[_ngcontent-%COMP%] {\n  font-size: 38px;\n  margin-bottom: 20px;\n  text-align: center;\n  margin-top: 5px;\n  color: #CB2468;\n  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-desc[_ngcontent-%COMP%]   .desc-total-pts.total-win[_ngcontent-%COMP%] {\n  color: #00aa00;\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-desc[_ngcontent-%COMP%]   .desc-message[_ngcontent-%COMP%] {\n  font-size: 18px;\n  text-align: center;\n  color: #222;\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-actions[_ngcontent-%COMP%]   .pop-action[_ngcontent-%COMP%] {\n  margin: 5px;\n  flex: 1;\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-actions[_ngcontent-%COMP%]   .pop-action.twitter[_ngcontent-%COMP%] {\n  width: 100%;\n  flex: auto;\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-actions[_ngcontent-%COMP%]   .pop-action.twitter[_ngcontent-%COMP%]   .pop-action-btn[_ngcontent-%COMP%] {\n  background: #09F;\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-actions[_ngcontent-%COMP%]   .pop-action.twitter[_ngcontent-%COMP%]   .pop-action-btn.win[_ngcontent-%COMP%] {\n  background: #09F;\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-actions[_ngcontent-%COMP%]   .pop-action[_ngcontent-%COMP%]   .pop-action-btn[_ngcontent-%COMP%] {\n  color: white;\n  background: #CB2468;\n  font-size: 18px;\n  padding: 0 10px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  cursor: pointer;\n  line-height: 11px;\n}\n\n.pop-content[_ngcontent-%COMP%]   .pop-actions[_ngcontent-%COMP%]   .pop-action[_ngcontent-%COMP%]   .pop-action-btn.win[_ngcontent-%COMP%] {\n  background: #00aa00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FydC1jb3JlL3BvcC1yZXN1bHQvcG9wLXJlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLDhCQUFBO0FBRkY7O0FBS0E7RUFDRSx3Q0FBQTtFQUVBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQkFBQTtFQUNBLHdCQUFBO0FBSkY7O0FBT0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBRUEseUNBQUE7QUFQSjs7QUFTSTtFQUNFLG1CQUFBO0FBUE47O0FBWUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQVZKOztBQVlJO0VBQ0Usa0JBQUE7QUFWTjs7QUFXTTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQVRSOztBQVdNO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBVFI7O0FBYUk7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVhOOztBQWNJO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0FBWk47O0FBY007RUFDRSxjQUFBO0FBWlI7O0FBZ0JJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtBQWZOOztBQW1CRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBakJKOztBQWtCSTtFQUNFLFdBQUE7RUFDQSxPQUFBO0FBaEJOOztBQWtCTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBaEJSOztBQWlCUTtFQUNFLGdCQUFBO0FBZlY7O0FBZ0JVO0VBQ0UsZ0JBQUE7QUFkWjs7QUFtQk07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBakJSOztBQW1CUTtFQUNFLG1CQUFBO0FBakJWIiwiZmlsZSI6InNyYy9hcHAva2FydC1jb3JlL3BvcC1yZXN1bHQvcG9wLXJlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ucG9wLWNvbnRlbnQge1xuICBib3gtc2hhZG93OiAycHggMnB4IDAgcmdiYSgwLDAsMCwwLjQpO1xuXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gIG1heC13aWR0aDogNDAwcHg7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcblxuXG4gIC5wb3AtaGVhZGVyIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYmFja2dyb3VuZDogI0NCMjQ2ODtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMCByZ2JhKDAsMCwwLDAuNSk7XG5cbiAgICAmLnBvcC1oZWFkZXItd2luIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwMGFhMDA7XG4gICAgfVxuXG4gIH1cblxuICAucG9wLWRlc2Mge1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuXG4gICAgLmRlc2Mtcm93IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIC5kZXNjLXB0cy1nb29kIHtcbiAgICAgICAgY29sb3I6ICMwMGFhMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgLmRlc2MtcHRzLWJhZCB7XG4gICAgICAgIGNvbG9yOiAjQ0IyNDY4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGVzYy10b3RhbCB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgIH1cblxuICAgIC5kZXNjLXRvdGFsLXB0cyB7XG4gICAgICBmb250LXNpemU6IDM4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgY29sb3I6ICNDQjI0Njg7XG4gICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwIHJnYmEoMCwwLDAsMC4xKTtcblxuICAgICAgJi50b3RhbC13aW4ge1xuICAgICAgICBjb2xvcjogIzAwYWEwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGVzYy1tZXNzYWdlIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgY29sb3I6ICMyMjI7XG4gICAgfVxuICB9XG5cbiAgLnBvcC1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAucG9wLWFjdGlvbiB7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGZsZXg6IDE7XG5cbiAgICAgICYudHdpdHRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICAucG9wLWFjdGlvbi1idG4ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMwOUY7XG4gICAgICAgICAgJi53aW4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzA5RjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnBvcC1hY3Rpb24tYnRuIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjQ0IyNDY4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xuXG4gICAgICAgICYud2luIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBhYTAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pop-result',
                templateUrl: './pop-result.component.html',
                styleUrls: ['./pop-result.component.scss']
            }]
    }], function () { return []; }, { racer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onAction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/kart-core/welcome/welcome.component.ts":
/*!********************************************************!*\
  !*** ./src/app/kart-core/welcome/welcome.component.ts ***!
  \********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 40, vars: 0, consts: [[1, "welcome-description"], [1, "welcome-keys"], [1, "welcome-key"], [1, "key"], [1, "value"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " vous allez desormais etre mis a l'epreuve, pour postuler a nos offres vous devez tout d'abord terminer une course avec le maximum de points possibles, serez-vous a la hauteur? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Vous trouverez sur le chemin de nombreux objets, certains vous donnent des points et des bonus. D'autres vous en font perdre et vous ralentisse. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Vous etes prets ? \u00A0Peut etre pas encore, alors pour vous aider, voici les touches pour jouer : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Sur mobile, la moiti\u00E9 gauche de l'\u00E9cran agit comme un joystick, et la moiti\u00E9 droite concerne le bouton d\u00E9raper. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u2191");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "accelerer/avancer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u2193");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "decelerer/reculer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u2190");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "tourner a gauche");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "tourner a droite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "deraper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n[_nghost-%COMP%]   .welcome-description[_ngcontent-%COMP%] {\n  color: white;\n  width: 800px;\n  max-width: 100%;\n  font-size: 24px;\n}\n@media (max-width: 600px) {\n  [_nghost-%COMP%]   .welcome-description[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n[_nghost-%COMP%]   .welcome-keys[_ngcontent-%COMP%] {\n  color: white;\n  width: 800px;\n  max-width: 100%;\n  font-size: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(255, 255, 255, 0.05);\n}\n@media (max-width: 600px) {\n  [_nghost-%COMP%]   .welcome-keys[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n[_nghost-%COMP%]   .welcome-keys[_ngcontent-%COMP%]   .welcome-key[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 46px;\n  width: 250px;\n  max-width: 100%;\n}\n[_nghost-%COMP%]   .welcome-keys[_ngcontent-%COMP%]   .welcome-key[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  margin-right: 15px;\n  border-radius: 5px;\n  font-family: \"Roboto\", sans-serif;\n  background: #f7faf3;\n  color: #cb2468;\n  box-shadow: 0 6px 0 rgba(255, 255, 255, 0.5);\n  font-size: 18px;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   .welcome-keys[_ngcontent-%COMP%]   .welcome-key[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2FydC1jb3JlL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGFBQUE7QUFBRjtBQUVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUFKO0FBR0k7RUFQRjtJQVFJLGVBQUE7RUFBSjtBQUNGO0FBR0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBS0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLDJDQUFBO0FBTko7QUFISTtFQUxGO0lBTUksZUFBQTtFQU1KO0FBQ0Y7QUFHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsZUFBQTtBQUZOO0FBSU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQUZSO0FBS007RUFDRSxPQUFBO0VBQ0EsaUJBQUE7QUFIUiIsImZpbGUiOiJzcmMvYXBwL2thcnQtY29yZS93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgLndlbGNvbWUtZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcblxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG5cbiAgLndlbGNvbWUta2V5cyB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcblxuICAgIC53ZWxjb21lLWtleSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGhlaWdodDogNDZweDtcblxuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuXG4gICAgICAua2V5IHtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3ZmFmMztcbiAgICAgICAgY29sb3I6ICNjYjI0Njg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cblxuICAgICAgLnZhbHVlIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/models/driver.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/models/driver.ts ***!
  \*****************************************/
/*! exports provided: Driver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Driver", function() { return Driver; });
/* harmony import */ var _driverStats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./driverStats */ "./src/app/shared/models/driverStats.ts");

class Driver {
    constructor(o) {
        this.id = o.id;
        this.name = o.name;
        this.sprite = o.sprite;
        this.mainColor = o.mainColor;
        this.mainBackground = o.mainBackground;
        this.stats = o.stats;
    }
    static fromJson(jsonDriver) {
        return new Driver(Object.assign(Object.assign({}, jsonDriver), { sprite: { url: jsonDriver.sprite, mat: null }, stats: _driverStats__WEBPACK_IMPORTED_MODULE_0__["DriverStats"].fromJson(jsonDriver.stats) }));
    }
}


/***/ }),

/***/ "./src/app/shared/models/driverStats.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/driverStats.ts ***!
  \**********************************************/
/*! exports provided: DriverStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverStats", function() { return DriverStats; });
class DriverStats {
    constructor(o) {
        this.speed = o.speed;
        this.acceleration = o.acceleration;
        this.weight = o.weight;
        this.handling = o.handling;
        this.traction = o.traction;
        this.luck = o.luck;
        this.width = o.width;
    }
    static fromJson(jsonDriverStats) {
        return new DriverStats(jsonDriverStats);
    }
}


/***/ }),

/***/ "./src/app/shared/models/footerBtn.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/footerBtn.ts ***!
  \********************************************/
/*! exports provided: FooterAction, FooterBtn, FOOTER_BTN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterAction", function() { return FooterAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterBtn", function() { return FooterBtn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOTER_BTN", function() { return FOOTER_BTN; });
var FooterAction;
(function (FooterAction) {
    FooterAction[FooterAction["exit"] = 0] = "exit";
    FooterAction[FooterAction["about"] = 1] = "about";
    FooterAction[FooterAction["driver"] = 2] = "driver";
    FooterAction[FooterAction["game"] = 3] = "game";
    FooterAction[FooterAction["help"] = 4] = "help";
})(FooterAction || (FooterAction = {}));
class FooterBtn {
    constructor(o) {
        this.action = o.action;
        this.name = o.name;
        this.icon = o.icon;
        this.background = o.background;
    }
}
const FOOTER_BTN = {
    'EXIT': new FooterBtn({
        action: FooterAction.exit,
        name: 'Revenir sur le site',
        icon: 'assets/img/ui/icon-exit.png',
        background: '#cb2468'
    }),
    'ABOUT': new FooterBtn({
        action: FooterAction.about,
        name: 'A propos',
        icon: 'assets/img/ui/icon-help.png',
        background: '#00aa00'
    }),
    'DRIVER': new FooterBtn({
        action: FooterAction.driver,
        name: 'C\'est parti',
        icon: 'assets/img/ui/icon-driver.png',
        background: '#00aa00'
    }),
    'GAME': new FooterBtn({
        action: FooterAction.game,
        name: 'Choisir ce pilote',
        background: '#00aa00'
    }),
    'HELP': new FooterBtn({
        action: FooterAction.help,
        name: 'Revoir l\'aide',
        icon: 'assets/img/ui/icon-help.png',
        background: '#cb2468'
    })
};


/***/ }),

/***/ "./src/app/shared/models/item.ts":
/*!***************************************!*\
  !*** ./src/app/shared/models/item.ts ***!
  \***************************************/
/*! exports provided: MoveType, ItemType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveType", function() { return MoveType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemType", function() { return ItemType; });
var MoveType;
(function (MoveType) {
    MoveType[MoveType["stay"] = 0] = "stay";
    MoveType[MoveType["comeback"] = 1] = "comeback";
    MoveType[MoveType["path"] = 2] = "path";
})(MoveType || (MoveType = {}));
var ItemType;
(function (ItemType) {
    ItemType[ItemType["malus"] = 0] = "malus";
    ItemType[ItemType["super_malus"] = 1] = "super_malus";
    ItemType[ItemType["bonus"] = 2] = "bonus";
    ItemType[ItemType["super_bonus"] = 3] = "super_bonus";
    ItemType[ItemType["invert"] = 4] = "invert";
    ItemType[ItemType["slow"] = 5] = "slow";
    ItemType[ItemType["speed"] = 6] = "speed";
})(ItemType || (ItemType = {}));


/***/ }),

/***/ "./src/app/shared/models/racer.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/racer.ts ***!
  \****************************************/
/*! exports provided: ROTATION_BASE_RATIO, ROTATION_SPEED_RATIO, ROTATION_HAND_BASE_RATIO, ROTATION_HANDLING_RATIO, DRIFT_BASE_RATIO, DRIFT_TRACTION_RATIO, COUNTER_DRIFT_BASE_RATIO, COUNTER_DRIFT_TRACTION_RATIO, DRIFT_MIN_SPEED, DRIFT_BLUE_TIME, DRIFT_RED_TIME, RATIO_TURBO_DRIFT, TIME_TURBO_DRIFT, RotateDirection, MoveAction, RacerStatus, DriftFire, RACER_PICS, Racer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROTATION_BASE_RATIO", function() { return ROTATION_BASE_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROTATION_SPEED_RATIO", function() { return ROTATION_SPEED_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROTATION_HAND_BASE_RATIO", function() { return ROTATION_HAND_BASE_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROTATION_HANDLING_RATIO", function() { return ROTATION_HANDLING_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRIFT_BASE_RATIO", function() { return DRIFT_BASE_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRIFT_TRACTION_RATIO", function() { return DRIFT_TRACTION_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTER_DRIFT_BASE_RATIO", function() { return COUNTER_DRIFT_BASE_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COUNTER_DRIFT_TRACTION_RATIO", function() { return COUNTER_DRIFT_TRACTION_RATIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRIFT_MIN_SPEED", function() { return DRIFT_MIN_SPEED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRIFT_BLUE_TIME", function() { return DRIFT_BLUE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRIFT_RED_TIME", function() { return DRIFT_RED_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RATIO_TURBO_DRIFT", function() { return RATIO_TURBO_DRIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_TURBO_DRIFT", function() { return TIME_TURBO_DRIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotateDirection", function() { return RotateDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveAction", function() { return MoveAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RacerStatus", function() { return RacerStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriftFire", function() { return DriftFire; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RACER_PICS", function() { return RACER_PICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Racer", function() { return Racer; });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");

const ROTATION_BASE_RATIO = 0.5;
const ROTATION_SPEED_RATIO = 12;
const ROTATION_HAND_BASE_RATIO = 1;
const ROTATION_HANDLING_RATIO = 3;
const DRIFT_BASE_RATIO = 0.8;
const DRIFT_TRACTION_RATIO = 6;
const COUNTER_DRIFT_BASE_RATIO = 0.2;
const COUNTER_DRIFT_TRACTION_RATIO = 18;
const DRIFT_MIN_SPEED = 0.5;
const DRIFT_BLUE_TIME = 1200;
const DRIFT_RED_TIME = 2400;
const RATIO_TURBO_DRIFT = 0.4;
const TIME_TURBO_DRIFT = 750;
var RotateDirection;
(function (RotateDirection) {
    RotateDirection[RotateDirection["front"] = 0] = "front";
    RotateDirection[RotateDirection["left"] = 1] = "left";
    RotateDirection[RotateDirection["right"] = 2] = "right";
})(RotateDirection || (RotateDirection = {}));
var MoveAction;
(function (MoveAction) {
    MoveAction[MoveAction["no_move"] = 0] = "no_move";
    MoveAction[MoveAction["go_forward"] = 1] = "go_forward";
    MoveAction[MoveAction["go_backward"] = 2] = "go_backward";
    MoveAction[MoveAction["turn_left"] = 3] = "turn_left";
    MoveAction[MoveAction["turn_right"] = 4] = "turn_right";
    MoveAction[MoveAction["no_turn"] = 5] = "no_turn";
    MoveAction[MoveAction["jump"] = 6] = "jump";
    MoveAction[MoveAction["object"] = 7] = "object";
})(MoveAction || (MoveAction = {}));
var RacerStatus;
(function (RacerStatus) {
    RacerStatus[RacerStatus["normal"] = 0] = "normal";
    RacerStatus[RacerStatus["drifting"] = 1] = "drifting";
    RacerStatus[RacerStatus["jumping"] = 2] = "jumping";
})(RacerStatus || (RacerStatus = {}));
var DriftFire;
(function (DriftFire) {
    DriftFire[DriftFire["none"] = 0] = "none";
    DriftFire[DriftFire["blue"] = 1] = "blue";
    DriftFire[DriftFire["red"] = 2] = "red";
})(DriftFire || (DriftFire = {}));
const RACER_PICS = {
    'SEE_LEFT': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](1, 0),
    'TURN_LEFT': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](1, 0),
    'SEE_RIGHT': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](3, 0),
    'TURN_RIGHT': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](3, 0),
    'GO_FORWARD': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](2, 0),
    'DRIFT_LEFT_SMOKE': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](0, 1),
    'DRIFT_LEFT_SMOKE2': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](1, 1),
    'DRIFT_LEFT_SMOKE3': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](2, 1),
    'DRIFT_LEFT_BLUE': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](0, 2),
    'DRIFT_LEFT_BLUE2': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](1, 2),
    'DRIFT_LEFT_BLUE3': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](2, 2),
    'DRIFT_LEFT_RED': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](0, 3),
    'DRIFT_LEFT_RED2': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](1, 3),
    'DRIFT_LEFT_RED3': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](2, 3),
    'DRIFT_RIGHT_SMOKE': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](3, 1),
    'DRIFT_RIGHT_SMOKE2': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](4, 1),
    'DRIFT_RIGHT_SMOKE3': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](5, 1),
    'DRIFT_RIGHT_BLUE': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](3, 2),
    'DRIFT_RIGHT_BLUE2': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](4, 2),
    'DRIFT_RIGHT_BLUE3': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](5, 2),
    'DRIFT_RIGHT_RED': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](3, 3),
    'DRIFT_RIGHT_RED2': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](4, 3),
    'DRIFT_RIGHT_RED3': new three__WEBPACK_IMPORTED_MODULE_0__["Vector2"](5, 3)
};
class Racer {
    constructor(o) {
        this.driver = o.driver;
        this.circuit = o.circuit;
        this.x = o.x || 0;
        this.y = o.y || 0;
        this.z = o.z;
        this.rotation = o.rotation;
        this.angle = o.angle || 0;
        this.driftDirection = o.driftDirection;
        this.accelerationLevel = o.accelerationLevel || 0;
        this.speed = o.speed || 0;
        this.ground = o.ground || 0;
        this.groundBeforeJump = o.groundBeforeJump || 0;
        this.zBeforeJump = o.zBeforeJump || 0;
        this.fps = o.fps;
        this.status = o.status;
        this.driftingTime = o.driftingTime;
        this.canJump = o.canJump;
        this.rotateDirection = o.rotateDirection;
        this.bonus = o.bonus;
        this.bonusTimeout = o.bonusTimeout;
        this.design = o.design;
        this.points = o.points;
        this.nbCheckpoint = o.nbCheckpoint;
        this.turn = o.turn;
        this.totalTime = o.totalTime;
        this.checkpoint = o.checkpoint;
        this.receivedItems = o.receivedItems;
        this.totalItems = o.totalItems;
        this.racerResult = o.racerResult;
    }
}


/***/ }),

/***/ "./src/app/shared/models/racerResult.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/models/racerResult.ts ***!
  \**********************************************/
/*! exports provided: ResultAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultAction", function() { return ResultAction; });
var ResultAction;
(function (ResultAction) {
    ResultAction[ResultAction["retry"] = 0] = "retry";
    ResultAction[ResultAction["back_to_website"] = 1] = "back_to_website";
    ResultAction[ResultAction["go_to_jobs"] = 2] = "go_to_jobs";
    ResultAction[ResultAction["tweet"] = 3] = "tweet";
})(ResultAction || (ResultAction = {}));


/***/ }),

/***/ "./src/app/shared/models/requestConfig.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/requestConfig.ts ***!
  \************************************************/
/*! exports provided: RequestConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestConfig", function() { return RequestConfig; });
class RequestConfig {
    constructor(methodParam, urlParam) {
        this.method = methodParam;
        this.url = urlParam;
    }
    setParams(paramsParam) {
        this.params = paramsParam;
    }
    setData(dataParam) {
        this.data = dataParam;
    }
    setHeaders(headersParam) {
        this.headers = headersParam;
    }
}


/***/ }),

/***/ "./src/app/shared/pipes/time.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/time.pipe.ts ***!
  \*******************************************/
/*! exports provided: TimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePipe", function() { return TimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TimePipe {
    transform(time) {
        const seconds = time % 60;
        const minutes = Math.round((time - seconds) / 60);
        return minutes + ':' + (seconds < 10 ? "0" + seconds : seconds);
    }
}
TimePipe.ɵfac = function TimePipe_Factory(t) { return new (t || TimePipe)(); };
TimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "time", type: TimePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'time'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/bindings.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/bindings.service.ts ***!
  \*****************************************************/
/*! exports provided: BindingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingsService", function() { return BindingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_racer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/racer */ "./src/app/shared/models/racer.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




class BindingsService {
    constructor() {
        this.keydownSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keydownState = this.keydownSubject.asObservable();
        this.inverted = false;
        this.invertedTimeout = -1;
        this.ACTIONS = {
            'GO_FORWARD': 'go_forward',
            'GO_BACKWARD': 'go_backward',
            'NO_GO': 'no_go',
            'TURN_LEFT': 'turn_left',
            'TURN_RIGHT': 'turn_right',
            'NO_TURN': 'no_turn',
            'JUMP': 'jump',
            'OBJECT': 'object'
        };
        this.BINDING_TYPE = {
            'KEYBOARD': 'keyboard',
            'KEYBOARD_INVERTED': 'keyboard_inverted',
            'TOUCHSCREEN': 'touchscreen',
            'CARDBOARD': 'cardboard'
        };
        this.GO_FORWARD_ACC = 3;
        this.GO_BACKWARD_ACC = 6;
        this.GO_FORWARD_CB = 1;
        this.GO_BACKWARD_CB = 4;
        this.directionTouches = null;
        this.driftTouches = null;
        this.mode = this.BINDING_TYPE.KEYBOARD;
        this.orientation = screen.orientation ? screen.orientation.angle : 180;
        this.accelerometer = null;
        this.down = {};
        document.addEventListener('keydown', (e) => {
            this.keydownSubject.next(e.code);
            this.down[e.which] = true;
        });
        document.addEventListener('keyup', (e) => {
            this.down[e.which] = false;
        });
    }
    invertBindings(duration) {
        if (!this.inverted) {
            this.inverted = true;
            this.invertedTimeout = setTimeout(() => {
                this.inverted = false;
            }, duration);
        }
    }
    bindTouching(canvas) {
        canvas.addEventListener("touchstart", (e) => {
            const touches = e.touches[e.touches.length - 1];
            const canvasWidth = canvas.getBoundingClientRect().width;
            if (touches.clientX > canvasWidth / 2) {
                if (!this.driftTouches) {
                    this.driftTouches = touches;
                    this.down[68] = true;
                }
            }
            else {
                if (!this.directionTouches) {
                    this.directionTouches = touches;
                }
            }
        }, false);
        canvas.addEventListener("touchend", (e) => {
            const currentFingerReleased = e.changedTouches[0];
            if (this.driftTouches && currentFingerReleased.identifier === this.driftTouches.identifier) {
                this.driftTouches = null;
                this.down[68] = false;
            }
            if (this.directionTouches && currentFingerReleased.identifier === this.directionTouches.identifier) {
                this.directionTouches = null;
                this.down[37] = false;
                this.down[38] = false;
                this.down[39] = false;
                this.down[40] = false;
            }
        }, false);
        canvas.addEventListener("touchmove", (e) => {
            const currentFingerMoved = e.changedTouches[0];
            if (this.directionTouches && currentFingerMoved.identifier === this.directionTouches.identifier) {
                const diffX = currentFingerMoved.clientX - this.directionTouches.clientX;
                const diffY = currentFingerMoved.clientY - this.directionTouches.clientY;
                const angle = Math.asin(diffY / Math.sqrt((diffX * diffX) + (diffY * diffY))) * 180 / Math.PI;
                let computedAngle = angle;
                if (diffX > 0) {
                    computedAngle = 180 - angle;
                }
                else {
                    computedAngle = (360 + angle) % 360;
                }
                this.down[37] = false;
                this.down[38] = false;
                this.down[39] = false;
                this.down[40] = false;
                // SOUTH WEST
                if (computedAngle >= 0 && computedAngle < 67.5) {
                    this.down[37] = true;
                    this.down[40] = true;
                }
                // SOUTH
                if (computedAngle >= 67.5 && computedAngle < 112.5) {
                    this.down[40] = true;
                }
                // SOUTH EAST
                if (computedAngle >= 112.5 && computedAngle < 180) {
                    this.down[40] = true;
                    this.down[39] = true;
                }
                // NORTH EAST
                if (computedAngle >= 180 && computedAngle < 247.5) {
                    this.down[39] = true;
                    this.down[38] = true;
                }
                // NORTH
                if (computedAngle >= 247.5 && computedAngle < 292.5) {
                    this.down[38] = true;
                }
                // NORTH WEST
                if (computedAngle >= 292.5 && computedAngle < 360) {
                    this.down[38] = true;
                    this.down[37] = true;
                }
            }
        }, false);
    }
    /**
     * Set a bind for actions (useful for touchscreen btn)
     * @param input : string
     * @param status : boolean
     */
    setBind(input, status) {
        this.down[input] = status;
    }
    setMode(mode) {
        this.mode = mode;
    }
    getAction() {
        let actions = {};
        let rotation = null;
        if (this.mode === this.BINDING_TYPE.KEYBOARD) {
            if (this.down[this.inverted ? 40 : 38]) {
                actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].go_forward] = true;
            }
            else if (this.down[this.inverted ? 38 : 40]) {
                actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].go_backward] = true;
            }
            else {
                actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].no_move] = true;
            }
            if (this.down[this.inverted ? 39 : 37]) {
                actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].turn_left] = true;
            }
            else if (this.down[this.inverted ? 37 : 39]) {
                actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].turn_right] = true;
            }
            else {
                actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].no_turn] = true;
            }
            if (this.down[68]) {
                actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].jump] = true;
            }
            // TODO OBJ BIND
        }
        else if (this.mode === this.BINDING_TYPE.KEYBOARD_INVERTED) {
        }
        else if (this.mode === this.BINDING_TYPE.TOUCHSCREEN) {
            if (this.accelerometer) {
                if (this.accelerometer.z < this.GO_FORWARD_ACC) {
                    actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].go_backward] = true;
                }
                else if (this.accelerometer.z > this.GO_BACKWARD_ACC) {
                    actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].go_forward] = true;
                }
                else {
                    actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].no_move] = true;
                }
                rotation = this.getCurrentRotation();
                if (rotation && rotation.turn === "left") {
                    actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].turn_left] = true;
                }
                else if (rotation && rotation.turn === "right") {
                    actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].turn_right] = true;
                }
                else {
                    actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].no_turn] = true;
                }
            }
            if (this.down['jump']) {
                actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].jump] = true;
            }
            if (this.down['object']) {
                actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].object] = true;
            }
        }
        else if (this.mode === this.BINDING_TYPE.CARDBOARD) {
            if (this.accelerometer) {
                if (this.accelerometer.z < this.GO_FORWARD_CB) {
                    actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].go_backward] = true;
                }
                else if (this.accelerometer.z > this.GO_BACKWARD_CB) {
                    actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].go_forward] = true;
                }
                else {
                    actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].no_move] = true;
                }
                rotation = this.getCurrentRotation();
                if (rotation && rotation.turn === "left") {
                    actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].turn_left] = true;
                }
                else if (rotation && rotation.turn === "right") {
                    actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].turn_right] = true;
                }
                else {
                    actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].no_turn] = true;
                }
            }
            if (this.down['jump_cardboard']) {
                actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].jump] = true;
            }
            if (this.down['object']) {
                actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].object] = true;
            }
        }
        return actions;
    }
    getCurrentRotation() {
        this.orientation = screen.orientation ? screen.orientation.angle : 180;
        if (!this.accelerometer)
            return null;
        if (this.orientation === 90) {
            if (this.accelerometer.y < -1) {
                return { turn: 'left', ratio: Math.abs(this.accelerometer.y + 1) };
            }
            if (this.accelerometer.y > 1) {
                return { turn: 'right', ratio: Math.abs(this.accelerometer.y - 1) };
            }
        }
        if (this.orientation === 270) {
            if (this.accelerometer.y > 1) {
                return { turn: 'left', ratio: Math.abs(this.accelerometer.y - 1) };
            }
            if (this.accelerometer.y < -1) {
                return { turn: 'right', ratio: Math.abs(this.accelerometer.y + 1) };
            }
        }
        if (this.orientation === 180) {
            if (this.accelerometer.x < -1) {
                return { turn: 'left', ratio: Math.abs(this.accelerometer.x + 1) };
            }
            if (this.accelerometer.x > 1) {
                return { turn: 'right', ratio: Math.abs(this.accelerometer.x - 1) };
            }
        }
        if (this.orientation === 0) {
            if (this.accelerometer.x > 1) {
                return { turn: 'left', ratio: Math.abs(this.accelerometer.x - 1) };
            }
            if (this.accelerometer.x < -1) {
                return { turn: 'right', ratio: Math.abs(this.accelerometer.x + 1) };
            }
        }
        return null;
    }
}
BindingsService.ɵfac = function BindingsService_Factory(t) { return new (t || BindingsService)(); };
BindingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BindingsService, factory: BindingsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BindingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/circuit.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/circuit.service.ts ***!
  \****************************************************/
/*! exports provided: CircuitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircuitService", function() { return CircuitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/item */ "./src/app/shared/models/item.ts");
/* harmony import */ var _models_requestConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/requestConfig */ "./src/app/shared/models/requestConfig.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request.service */ "./src/app/shared/services/request.service.ts");








class CircuitService {
    constructor(requestService) {
        this.requestService = requestService;
        this.circuits = [];
        this.currentCircuit = null;
    }
    setCircuitList(circuits) {
        this.circuits = circuits;
        this.loadCircuitData(circuits[0].link).subscribe(circuit => {
            this.currentCircuit = circuit;
        });
    }
    loadCircuitData(link) {
        const requestConfig = new _models_requestConfig__WEBPACK_IMPORTED_MODULE_4__["RequestConfig"]('GET', link);
        return this.requestService.doRequest(requestConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
            res.body.items.forEach(item => {
                item.move.type = _models_item__WEBPACK_IMPORTED_MODULE_3__["MoveType"][item.move.type];
                item.type = _models_item__WEBPACK_IMPORTED_MODULE_3__["ItemType"][item.type.toLowerCase()];
                item.pos.y = -item.pos.y;
                if (item.move) {
                    item.move.i = 0;
                    item.move.sense = false;
                    if (item.move.path) {
                        item.move.path.forEach(path => {
                            path.y = -path.y;
                        });
                    }
                    if (item.move.goY) {
                        item.move.goY = -item.move.goY;
                    }
                }
            });
            return res.body;
        }));
    }
    getGroundValue(x, y) {
        if (this.currentCircuit && this.currentCircuit.mapGrounds.length && x && y) {
            return this.currentCircuit.mapGrounds[Math.round(x)][Math.round(y)];
        }
        else {
            return 0;
        }
    }
    loadBuildings() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.currentCircuit.buildings.forEach(building => {
                const geometry = new three__WEBPACK_IMPORTED_MODULE_1__["BoxGeometry"](building.sizeX, building.sizeY, building.height);
                const material = new three__WEBPACK_IMPORTED_MODULE_1__["MeshPhongMaterial"]({
                    color: building.color,
                    polygonOffset: true,
                    polygonOffsetFactor: 1,
                    polygonOffsetUnits: 1
                });
                material.transparent = building.opacity < 1;
                material.opacity = building.opacity;
                building.obj = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geometry, material);
                const geo = new three__WEBPACK_IMPORTED_MODULE_1__["EdgesGeometry"](geometry); // or WireframeGeometry
                const mat = new three__WEBPACK_IMPORTED_MODULE_1__["LineBasicMaterial"]({ color: building.color, linewidth: 4 });
                const wireframe = new three__WEBPACK_IMPORTED_MODULE_1__["LineSegments"](geo, mat);
                building.obj.add(wireframe);
                building.obj.position.x = building.x;
                building.obj.position.y = -building.y;
            });
            observer.next(this.currentCircuit.buildings);
            observer.complete();
        });
    }
    loadSprites() {
        const spritesKeys = Object.keys(this.currentCircuit.sprites);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(spritesKeys.map(spriteKey => {
            const sprite = this.currentCircuit.sprites[spriteKey];
            const loader = new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]();
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
                loader.load(sprite.texfile, spriteTex => {
                    if (spriteTex) {
                        spriteTex.magFilter = three__WEBPACK_IMPORTED_MODULE_1__["NearestFilter"];
                        spriteTex.minFilter = three__WEBPACK_IMPORTED_MODULE_1__["NearestFilter"];
                        const texMaterial = new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({
                            map: spriteTex,
                            side: three__WEBPACK_IMPORTED_MODULE_1__["DoubleSide"]
                        });
                        const trackMapping = [
                            new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"](0, 1),
                            new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"](0, 0),
                            new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"](1, 0),
                            new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"](1, 1)
                        ];
                        texMaterial.transparent = true;
                        const texGeometry = new three__WEBPACK_IMPORTED_MODULE_1__["PlaneGeometry"](sprite.width, sprite.height, 1, 1);
                        texGeometry.faceVertexUvs[0][0] = [trackMapping[0], trackMapping[1], trackMapping[3]];
                        texGeometry.faceVertexUvs[0][1] = [trackMapping[1], trackMapping[2], trackMapping[3]];
                        const plane = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](texGeometry, texMaterial);
                        plane.position.x = 0;
                        plane.position.y = 0;
                        plane.position.z = 0;
                        plane.rotation.x = Math.PI / 2.;
                        sprite.obj = plane;
                        sprite.positions.forEach(position => {
                            position.obj = sprite.obj.clone();
                            position.obj.position.set(position.x, -position.y, sprite.height / 2.);
                            if (position.ry) {
                                position.obj.rotation.y = position.ry;
                            }
                        });
                        observer.next(sprite);
                        observer.complete();
                    }
                });
            });
        }));
    }
    loadItems() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.currentCircuit.items.map((item) => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
                const loader = new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]();
                loader.load(item.img, itemTex => {
                    //item.obj = item.buildItem(itemTex);
                    const group = new three__WEBPACK_IMPORTED_MODULE_1__["Object3D"]();
                    //group.items = {};
                    if (itemTex) {
                        itemTex.magFilter = three__WEBPACK_IMPORTED_MODULE_1__["NearestFilter"];
                        itemTex.minFilter = three__WEBPACK_IMPORTED_MODULE_1__["NearestFilter"];
                        const texMaterial = new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({
                            map: itemTex,
                            side: three__WEBPACK_IMPORTED_MODULE_1__["DoubleSide"]
                        });
                        const trackMapping = [
                            new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"](0, 1),
                            new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"](0, 0),
                            new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"](1, 0),
                            new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"](1, 1)
                        ];
                        texMaterial.transparent = true;
                        const texGeometry = new three__WEBPACK_IMPORTED_MODULE_1__["PlaneGeometry"](5, 5, 1, 1);
                        texGeometry.faceVertexUvs[0][0] = [trackMapping[0], trackMapping[1], trackMapping[3]];
                        texGeometry.faceVertexUvs[0][1] = [trackMapping[1], trackMapping[2], trackMapping[3]];
                        const plane = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](texGeometry, texMaterial);
                        plane.position.x = 0;
                        plane.position.y = 0;
                        plane.position.z = 0;
                        group.add(plane);
                        //group.items.plane = plane;
                    }
                    let texColor = 0xcb2468;
                    switch (item.type) {
                        case _models_item__WEBPACK_IMPORTED_MODULE_3__["ItemType"].malus:
                            texColor = 0xff0000;
                            break;
                        case _models_item__WEBPACK_IMPORTED_MODULE_3__["ItemType"].bonus:
                            texColor = 0xcb2468;
                            break;
                        case _models_item__WEBPACK_IMPORTED_MODULE_3__["ItemType"].super_bonus:
                            texColor = 0xe8d744;
                            break;
                        case _models_item__WEBPACK_IMPORTED_MODULE_3__["ItemType"].invert:
                        case _models_item__WEBPACK_IMPORTED_MODULE_3__["ItemType"].slow:
                        case _models_item__WEBPACK_IMPORTED_MODULE_3__["ItemType"].speed:
                            texColor = 0x444444;
                            break;
                    }
                    const geometry = new three__WEBPACK_IMPORTED_MODULE_1__["BoxGeometry"](5, 5, 5);
                    const material = new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ color: texColor });
                    material.transparent = true;
                    material.opacity = 0.4;
                    const cube = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geometry, material);
                    group.add(cube);
                    //group.items.cube = cube;
                    group.position.x = item.pos.x;
                    group.position.y = item.pos.y;
                    group.position.z = 3;
                    group.rotation.x = Math.PI / 2;
                    item.obj = group;
                    item.available = true;
                    if (item.move) {
                        item.move.i = 0;
                        item.move.sense = false;
                    }
                    item.tempPos = Object.assign({}, item.pos);
                    observer.next(group);
                    observer.complete();
                });
            });
        }));
    }
    loadCircuit() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            const mgi = new Image();
            mgi.addEventListener('load', () => {
                let mgc = document.createElement("canvas");
                let mgctx = mgc.getContext("2d");
                mgc.width = mgi.width;
                mgc.height = mgi.height;
                mgctx.drawImage(mgi, 0, 0);
                let mgData = mgctx.getImageData(0, 0, mgc.width, mgc.height).data;
                this.currentCircuit.mapGrounds = [];
                for (let i = 0; i < mgi.width; i++) {
                    this.currentCircuit.mapGrounds[i] = [];
                    for (let j = 0; j < mgi.height; j++) {
                        let index = (j * (mgi.width * 4)) + (i * 4);
                        this.currentCircuit.mapGrounds[i][j] = mgData[index] / 255.;
                    }
                }
                mgc = null;
                mgctx = null;
                mgData = null;
                this.currentCircuit.width = mgi.width;
                this.currentCircuit.height = mgi.height;
                const loader = new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]();
                loader.load(this.currentCircuit.map, tex => {
                    tex.magFilter = three__WEBPACK_IMPORTED_MODULE_1__["NearestFilter"];
                    tex.minFilter = three__WEBPACK_IMPORTED_MODULE_1__["NearestFilter"];
                    const material = new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({
                        map: tex
                    });
                    const trackMapping = [
                        new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"](0, 1),
                        new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"](0, 0),
                        new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"](1, 0),
                        new three__WEBPACK_IMPORTED_MODULE_1__["Vector2"](1, 1)
                    ];
                    const geometry = new three__WEBPACK_IMPORTED_MODULE_1__["PlaneGeometry"](this.currentCircuit.width, this.currentCircuit.height, 1, 1);
                    geometry.faceVertexUvs[0][0] = [trackMapping[0], trackMapping[1], trackMapping[3]];
                    geometry.faceVertexUvs[0][1] = [trackMapping[1], trackMapping[2], trackMapping[3]];
                    const plane = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geometry, material);
                    plane.position.x = this.currentCircuit.width / 2;
                    plane.position.y = -this.currentCircuit.height / 2;
                    this.currentCircuit.three.tex = tex;
                    this.currentCircuit.three.material = material;
                    this.currentCircuit.three.geometry = geometry;
                    this.currentCircuit.three.mesh = plane;
                    this.requestService.getBlob(this.currentCircuit.background).subscribe(blob => {
                        this.currentCircuit.backgroundBlobUrl = window.URL.createObjectURL(blob);
                        const image = new Image();
                        image.addEventListener('load', () => {
                            this.currentCircuit.backgroundImage = image;
                            observer.next(this.currentCircuit);
                            observer.complete();
                        });
                        image.src = this.currentCircuit.backgroundBlobUrl;
                    });
                }, () => { }, () => { observer.error(''); });
            });
            mgi.addEventListener('error', () => {
                observer.error('');
            });
            mgi.src = this.currentCircuit.normales;
        });
    }
}
CircuitService.ɵfac = function CircuitService_Factory(t) { return new (t || CircuitService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"])); };
CircuitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CircuitService, factory: CircuitService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CircuitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/cookie.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/cookie.service.ts ***!
  \***************************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CookieService {
    constructor() { }
    static setCookie(name, value, d, path = '') {
        let expires = `expires=${d.toUTCString()}`;
        let cpath = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }
}
CookieService.ɵfac = function CookieService_Factory(t) { return new (t || CookieService)(); };
CookieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookieService, factory: CookieService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/driver.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/driver.service.ts ***!
  \***************************************************/
/*! exports provided: DriverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverService", function() { return DriverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_driver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/driver */ "./src/app/shared/models/driver.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models_racer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/racer */ "./src/app/shared/models/racer.ts");





class DriverService {
    constructor() {
        this.driversSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.driversState = this.driversSubject.asObservable();
        this.drivers = [];
        this.currentDriver = null;
    }
    loadDrivers(jsonDrivers) {
        this.drivers = jsonDrivers.map(jsonDriver => {
            return _models_driver__WEBPACK_IMPORTED_MODULE_1__["Driver"].fromJson(jsonDriver);
        });
        this.currentDriver = this.drivers[0];
        this.driversSubject.next(this.drivers);
    }
    selectDriver(driver) {
        this.currentDriver = driver;
    }
    getCarMaxSpeed(racer) {
        return (4 + 0.3 * racer.driver.stats.speed) * 40 * (racer.ground || 1);
    }
    getCarMaxBackSpeed(racer) {
        return (4 + 0.3 * racer.driver.stats.speed) * 12 * (racer.ground || 1);
    }
    getCarCurrentAccelerationLevel(method, racer) {
        let nextAccLevel = racer.accelerationLevel;
        if (method === _models_racer__WEBPACK_IMPORTED_MODULE_3__["MoveAction"].go_forward) {
            nextAccLevel = racer.accelerationLevel >= 0 ? racer.accelerationLevel + 1 : racer.accelerationLevel + 3;
        }
        else if (method === _models_racer__WEBPACK_IMPORTED_MODULE_3__["MoveAction"].go_backward) {
            nextAccLevel = racer.accelerationLevel < 0 ? racer.accelerationLevel - 1 : racer.accelerationLevel - 3;
        }
        else if (method === _models_racer__WEBPACK_IMPORTED_MODULE_3__["MoveAction"].no_move) {
            if (racer.accelerationLevel) {
                nextAccLevel = racer.accelerationLevel >= 0 ? racer.accelerationLevel - 1 : racer.accelerationLevel + 1;
            }
        }
        const stats = racer.driver.stats;
        if (stats.acceleration * nextAccLevel <= this.getCarMaxSpeed(racer) && stats.acceleration * nextAccLevel >= -this.getCarMaxBackSpeed(racer)) {
            return nextAccLevel;
        }
        else {
            if (racer.accelerationLevel > 0) {
                return racer.accelerationLevel - 1;
            }
            else {
                return racer.accelerationLevel + 1; // Fix bound out after bonus/malus
            }
        }
    }
    getCarCurrentSpeed(racer) {
        if (racer.bonus > 1 && racer.ground !== 0) {
            return racer.driver.stats.acceleration * racer.accelerationLevel * racer.bonus;
        }
        else {
            return racer.driver.stats.acceleration * racer.accelerationLevel * racer.bonus * racer.ground;
        }
    }
}
DriverService.ɵfac = function DriverService_Factory(t) { return new (t || DriverService)(); };
DriverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DriverService, factory: DriverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DriverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/footer.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/footer.service.ts ***!
  \***************************************************/
/*! exports provided: FooterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterService", function() { return FooterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_footerBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/footerBtn */ "./src/app/shared/models/footerBtn.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class FooterService {
    constructor(router) {
        this.router = router;
        this.actionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.actionState = this.actionSubject.asObservable();
    }
    setAction(action) {
        this.actionSubject.next(action);
        switch (action) {
            case _models_footerBtn__WEBPACK_IMPORTED_MODULE_1__["FooterAction"].about:
                this.router.navigate(['about']);
                break;
            case _models_footerBtn__WEBPACK_IMPORTED_MODULE_1__["FooterAction"].help:
                this.router.navigate(['welcome']);
                break;
            case _models_footerBtn__WEBPACK_IMPORTED_MODULE_1__["FooterAction"].game: break;
            case _models_footerBtn__WEBPACK_IMPORTED_MODULE_1__["FooterAction"].driver:
                this.router.navigate(['driver-choice']);
                break;
            case _models_footerBtn__WEBPACK_IMPORTED_MODULE_1__["FooterAction"].exit:
                window.open(_app_constants__WEBPACK_IMPORTED_MODULE_3__["URL_SITE"], '_self');
                break;
        }
    }
}
FooterService.ɵfac = function FooterService_Factory(t) { return new (t || FooterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
FooterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FooterService, factory: FooterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/game.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/game.service.ts ***!
  \*************************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_racer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/racer */ "./src/app/shared/models/racer.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var three_examples_jsm_effects_StereoEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/effects/StereoEffect */ "./node_modules/three/examples/jsm/effects/StereoEffect.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cookie.service */ "./src/app/shared/services/cookie.service.ts");
/* harmony import */ var _bindings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bindings.service */ "./src/app/shared/services/bindings.service.ts");
/* harmony import */ var _racer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./racer.service */ "./src/app/shared/services/racer.service.ts");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./item.service */ "./src/app/shared/services/item.service.ts");
/* harmony import */ var _circuit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./circuit.service */ "./src/app/shared/services/circuit.service.ts");












class GameService {
    constructor(bindingsService, racerService, itemService, circuitService) {
        this.bindingsService = bindingsService;
        this.racerService = racerService;
        this.itemService = itemService;
        this.circuitService = circuitService;
        this.CAMERA_FOCUS = 80;
        this.CAMERA_MAX = 2500;
        this.CAMERA_BACK = -8;
        this.backgroundRefreshInterval = -1;
        this.physicsInterval = -1;
        this.currentTime = 0;
        this.lastTime = 0;
        this.totalTime = 0;
        this.beginTime = 0;
        this.fps = 0;
        this.fpsTable = [];
        this.shake = 0;
        this.stereoEnabled = false;
        this.timeLimit = 90;
        this.objective = 700;
        this.playerName = "";
    }
    setPlayerName(playerName) {
        this.playerName = playerName;
    }
    initScene(container, racer) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            this.container = container;
            this.racer = racer;
            this.beginTime = new Date().getTime();
            this.camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](100, window.innerWidth / window.innerHeight, 1, this.CAMERA_MAX);
            this.camera.position.set(0, 0, racer.z);
            this.camera.up = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 1);
            this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, this.CAMERA_FOCUS, 0));
            // setInterval( () => {
            //   console.log('(' + this.camera.position.x + ', ' + this.camera.position.y + ')');
            // }, 400);
            const directionalLight = new three__WEBPACK_IMPORTED_MODULE_2__["DirectionalLight"](0xffffff, 0.9);
            directionalLight.position.y = -750;
            directionalLight.position.z = 1500;
            directionalLight.position.x = 750;
            this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
            this.scene.add(directionalLight);
            this.loadResources().subscribe(() => {
                this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({ alpha: true });
                this.renderer.setSize(container.clientWidth, container.clientHeight);
                this.stereoEffect = new three_examples_jsm_effects_StereoEffect__WEBPACK_IMPORTED_MODULE_4__["StereoEffect"](this.renderer);
                this.stereoEffect.setEyeSeparation(1);
                this.stereoEffect.setSize(container.clientWidth, container.clientHeight);
                this.threeCanvas = this.renderer.domElement;
                container.appendChild(this.threeCanvas);
                this.threeCanvas.style.zIndex = '13';
                this.bindingsService.bindTouching(this.threeCanvas);
                this.startAnimate();
                observer.next(this.racer);
                observer.complete();
            });
        });
    }
    loadResources() {
        const loadingObs = [];
        loadingObs.push(this.circuitService.loadCircuit().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(circuit => {
            this.scene.add(circuit.three.mesh);
        })));
        loadingObs.push(this.circuitService.loadItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(objs => {
            objs.forEach(obj => {
                this.scene.add(obj);
            });
        })));
        loadingObs.push(this.circuitService.loadBuildings().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(buildings => {
            buildings.forEach(building => {
                this.scene.add(building.obj);
            });
        })));
        loadingObs.push(this.circuitService.loadSprites().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(sprites => {
            sprites.forEach(sprite => {
                sprite.positions.forEach(position => {
                    this.scene.add(position.obj);
                });
            });
        })));
        loadingObs.push(this.racerService.loadDesignElement(this.racer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(design => {
            this.scene.add(design.obj);
        })));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(loadingObs);
    }
    startAnimate() {
        if (this.physicsInterval >= 0) {
            clearInterval(this.physicsInterval);
            this.physicsInterval = -1;
        }
        //if(this.backgroundRefreshInterval >= 0){
        //  clearInterval(this.backgroundRefreshInterval)
        //  this.backgroundRefreshInterval = -1;
        //}
        this.physicsInterval = setInterval(() => {
            this.updatePhysics();
        }, 1000 / 60);
        //this.backgroundRefreshInterval = setInterval( () => {
        //  this.updateBackgroundRotation();
        //}, 1000/60);
        this.animate();
    }
    animate() {
        this.shake = ((this.shake + 1) % 10);
        this.currentTime = new Date().getTime();
        const total = this.currentTime - this.lastTime;
        this.lastTime = this.currentTime;
        this.totalTime = Math.round((this.currentTime - this.beginTime) / 1000);
        this.racer.totalTime = this.totalTime;
        this.fps = Math.round(1000 / total);
        if (this.fpsTable.length >= 100) {
            this.fpsTable.splice(0, 1);
        }
        this.fpsTable.push(this.fps);
        const sumFPS = this.fpsTable.reduce((lastVal, newVal) => {
            return lastVal + newVal;
        }, 0);
        this.racer.fps = Math.floor(sumFPS / this.fpsTable.length);
        const driverObj = this.racer.design.obj;
        const driverPlane = this.racer.design.plane;
        if (driverObj) {
            const angle = (this.racer.rotation - 90) * Math.PI / 180;
            driverObj.position.x = this.racer.x + (-2 * Math.cos(angle));
            driverObj.position.y = -this.racer.y + (-2 * Math.sin(angle));
            driverPlane.rotation.y = (this.racer.rotation - 180) * Math.PI / 180;
            this.camera.position.x = driverObj.position.x + (this.CAMERA_BACK * Math.cos(angle));
            this.camera.position.y = driverObj.position.y + (this.CAMERA_BACK * Math.sin(angle));
            const lookAt = {
                x: driverObj.position.x + (this.CAMERA_FOCUS * Math.cos(angle)),
                y: driverObj.position.y + (this.CAMERA_FOCUS * Math.sin(angle)),
                z: this.racer.z - 8
            };
            const driftingValue = +(this.racer.status === _models_racer__WEBPACK_IMPORTED_MODULE_1__["RacerStatus"].drifting);
            driverObj.position.x += driftingValue * (+(this.shake > 5)) * 0.1;
            this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](lookAt.x, lookAt.y, lookAt.z));
        }
        this.racer.circuit.items.forEach((item) => {
            if (item.obj) {
                if (item.available) {
                    item.obj.rotation.x += 0.05;
                    item.obj.rotation.y += 0.05;
                    this.itemService.nextFrame(item);
                    item.obj.position.x = item.tempPos.x;
                    item.obj.position.y = item.tempPos.y;
                    const dist = Math.sqrt(Math.pow(item.obj.position.x - this.camera.position.x, 2) + Math.pow(item.obj.position.y - this.camera.position.y, 2));
                    const visible = dist < 300;
                    item.obj.visible = item.available && visible;
                }
                else {
                    item.obj.visible = false;
                }
            }
        });
        if (this.stereoEnabled) {
            this.stereoEffect.render(this.scene, this.camera);
        }
        else {
            this.renderer.render(this.scene, this.camera);
        }
        this.finished = this.isGameFinished();
        if (!this.finished && !this.controllerClosed) {
            this.animation = requestAnimationFrame(() => { this.animate(); });
        }
        else {
            this.finalPoints = this.racer.points + this.timeLimit - this.totalTime;
            this.bonusTime = this.timeLimit - this.totalTime;
            this.racer.racerResult = {
                itemNb: this.racer.totalItems.length,
                itemPts: this.racer.points,
                timePts: this.bonusTime,
                totalPts: this.finalPoints,
                raceTime: this.totalTime,
                objectiveTime: this.timeLimit,
                objectivePts: this.objective
            };
            if (this.finalPoints < this.objective) {
                this.lose = true;
            }
            else {
                this.win = true;
            }
            // Set score in a cookie to send by mail
            const expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 3);
            _cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"].setCookie('score', this.finalPoints.toString(), expireDate, '/');
        }
    }
    updatePhysics() {
        var actions = this.bindingsService.getAction();
        if (actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].go_backward]) {
            this.racerService.move(this.racer, _models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].go_backward);
        }
        if (actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].go_forward]) {
            this.racerService.move(this.racer, _models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].go_forward);
        }
        if (actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].no_move]) {
            this.racerService.move(this.racer, _models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].no_move);
            this.racerService.cancelDrift(this.racer);
        }
        if (actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].turn_left]) {
            this.racerService.rotate(this.racer, _models_racer__WEBPACK_IMPORTED_MODULE_1__["RotateDirection"].left);
        }
        if (actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].turn_right]) {
            this.racerService.rotate(this.racer, _models_racer__WEBPACK_IMPORTED_MODULE_1__["RotateDirection"].right);
        }
        if (actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].no_turn]) {
            this.racerService.rotate(this.racer, _models_racer__WEBPACK_IMPORTED_MODULE_1__["RotateDirection"].front);
        }
        this.defineDriverMaterial(actions);
        if (actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].jump]) {
            this.racerService.jump(this.racer);
        }
        else {
            this.racerService.driftTurbo(this.racer);
        }
        const spriteRotation = (this.racer.rotation - 180) * Math.PI / 180;
        const circuitSpritesKeys = Object.keys(this.racer.circuit.sprites);
        circuitSpritesKeys.forEach(spriteKey => {
            const sprite = this.racer.circuit.sprites[spriteKey];
            sprite.positions.forEach(position => {
                const dist = Math.sqrt(Math.pow(position.x - this.camera.position.x, 2) + Math.pow(-position.y - this.camera.position.y, 2));
                if (sprite.obj) {
                    position.obj.visible = dist < 300;
                    if (sprite.autorotate) {
                        position.obj.rotation.y = spriteRotation;
                    }
                }
            });
        });
    }
    isGameFinished() {
        return this.racer.turn >= 1;
    }
    activateStereo() {
        this.stereoEnabled = !this.stereoEnabled;
        if (!this.stereoEnabled) {
            this.bindingsService.setMode(window['cordova'] ? 'touchscreen' : 'keyboard');
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
        else {
            this.bindingsService.setMode('cardboard');
        }
    }
    defineDriverMaterial(actions) {
        let racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].GO_FORWARD;
        if (this.racer.status === _models_racer__WEBPACK_IMPORTED_MODULE_1__["RacerStatus"].drifting) {
            const frameValue = this.shake > 6 ? 2 : (this.shake < 3 ? 0 : 1);
            const fire = this.racerService.getDriftingFire(this.racer, this.currentTime);
            switch (this.racer.driftDirection) {
                case _models_racer__WEBPACK_IMPORTED_MODULE_1__["RotateDirection"].left: {
                    switch (fire) {
                        case _models_racer__WEBPACK_IMPORTED_MODULE_1__["DriftFire"].none: {
                            switch (frameValue) {
                                case 0:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_LEFT_SMOKE;
                                    break;
                                case 1:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_LEFT_SMOKE2;
                                    break;
                                case 2:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_LEFT_SMOKE3;
                                    break;
                            }
                            break;
                        }
                        case _models_racer__WEBPACK_IMPORTED_MODULE_1__["DriftFire"].red: {
                            switch (frameValue) {
                                case 0:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_LEFT_RED;
                                    break;
                                case 1:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_LEFT_RED2;
                                    break;
                                case 2:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_LEFT_RED3;
                                    break;
                            }
                            break;
                        }
                        case _models_racer__WEBPACK_IMPORTED_MODULE_1__["DriftFire"].blue: {
                            switch (frameValue) {
                                case 0:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_LEFT_BLUE;
                                    break;
                                case 1:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_LEFT_BLUE2;
                                    break;
                                case 2:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_LEFT_BLUE3;
                                    break;
                            }
                            break;
                        }
                    }
                    break;
                }
                case _models_racer__WEBPACK_IMPORTED_MODULE_1__["RotateDirection"].right: {
                    switch (fire) {
                        case _models_racer__WEBPACK_IMPORTED_MODULE_1__["DriftFire"].none: {
                            switch (frameValue) {
                                case 0:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_RIGHT_SMOKE;
                                    break;
                                case 1:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_RIGHT_SMOKE2;
                                    break;
                                case 2:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_RIGHT_SMOKE3;
                                    break;
                            }
                            break;
                        }
                        case _models_racer__WEBPACK_IMPORTED_MODULE_1__["DriftFire"].red: {
                            switch (frameValue) {
                                case 0:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_RIGHT_RED;
                                    break;
                                case 1:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_RIGHT_RED2;
                                    break;
                                case 2:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_RIGHT_RED3;
                                    break;
                            }
                            break;
                        }
                        case _models_racer__WEBPACK_IMPORTED_MODULE_1__["DriftFire"].blue: {
                            switch (frameValue) {
                                case 0:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_RIGHT_BLUE;
                                    break;
                                case 1:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_RIGHT_BLUE2;
                                    break;
                                case 2:
                                    racerPic = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].DRIFT_RIGHT_BLUE3;
                                    break;
                            }
                            break;
                        }
                    }
                    break;
                }
            }
        }
        else {
            if (actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].turn_left]) {
                racerPic = this.racer.speed ? _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].TURN_LEFT : _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].SEE_LEFT;
            }
            else if (actions[_models_racer__WEBPACK_IMPORTED_MODULE_1__["MoveAction"].turn_right]) {
                racerPic = this.racer.speed ? _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].TURN_RIGHT : _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].SEE_RIGHT;
            }
        }
        this.racerService.updateRacerPic(this.racer, racerPic);
    }
    clearRace() {
        if (this.animation) {
            cancelAnimationFrame(this.animation);
            this.animation = null;
        }
        this.finished = true;
        if (this.physicsInterval >= 0) {
            clearInterval(this.physicsInterval);
        }
        if (this.backgroundRefreshInterval >= 0) {
            clearInterval(this.backgroundRefreshInterval);
        }
        if (this.threeCanvas) {
            this.container.removeChild(this.threeCanvas);
            this.threeCanvas = null;
        }
        this.container = null;
        this.camera = null;
        this.scene = null;
        this.renderer = null;
        this.stereoEffect = null;
        this.racer = null;
        this.backgroundRefreshInterval = -1;
        this.physicsInterval = -1;
        this.currentTime = 0;
        this.lastTime = 0;
        this.totalTime = 0;
        this.beginTime = 0;
        this.fps = 0;
        this.fpsTable = [];
        this.shake = 0;
        this.stereoEnabled = false;
        this.finished = false;
        //this.controllerClosed: boolean;
        this.animation = 0;
        this.finalPoints = 0;
        this.timeLimit = 90;
        this.bonusTime = 0;
        this.objective = 700;
        this.lose = false;
        this.win = false;
    }
    setBinding(type, value) {
        this.bindingsService.setBind(type, value);
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_bindings_service__WEBPACK_IMPORTED_MODULE_7__["BindingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_racer_service__WEBPACK_IMPORTED_MODULE_8__["RacerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_item_service__WEBPACK_IMPORTED_MODULE_9__["ItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_circuit_service__WEBPACK_IMPORTED_MODULE_10__["CircuitService"])); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _bindings_service__WEBPACK_IMPORTED_MODULE_7__["BindingsService"] }, { type: _racer_service__WEBPACK_IMPORTED_MODULE_8__["RacerService"] }, { type: _item_service__WEBPACK_IMPORTED_MODULE_9__["ItemService"] }, { type: _circuit_service__WEBPACK_IMPORTED_MODULE_10__["CircuitService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/init.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/init.service.ts ***!
  \*************************************************/
/*! exports provided: InitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitService", function() { return InitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_requestConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/requestConfig */ "./src/app/shared/models/requestConfig.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request.service */ "./src/app/shared/services/request.service.ts");
/* harmony import */ var _circuit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./circuit.service */ "./src/app/shared/services/circuit.service.ts");
/* harmony import */ var _driver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./driver.service */ "./src/app/shared/services/driver.service.ts");







class InitService {
    constructor(requestService, circuitService, driverService) {
        this.requestService = requestService;
        this.circuitService = circuitService;
        this.driverService = driverService;
    }
    initData() {
        const requestConfig = new _models_requestConfig__WEBPACK_IMPORTED_MODULE_1__["RequestConfig"]('GET', 'assets/json/gamedata.json');
        this.requestService.doRequest(requestConfig).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
            this.driverService.loadDrivers(res.body.drivers);
            this.circuitService.setCircuitList(res.body.circuits);
        })).subscribe();
    }
}
InitService.ɵfac = function InitService_Factory(t) { return new (t || InitService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_circuit_service__WEBPACK_IMPORTED_MODULE_4__["CircuitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"])); };
InitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InitService, factory: InitService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] }, { type: _circuit_service__WEBPACK_IMPORTED_MODULE_4__["CircuitService"] }, { type: _driver_service__WEBPACK_IMPORTED_MODULE_5__["DriverService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/item.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/item.service.ts ***!
  \*************************************************/
/*! exports provided: ItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/item */ "./src/app/shared/models/item.ts");



class ItemService {
    constructor() { }
    nextFrame(item) {
        switch (item.move.type) {
            case _models_item__WEBPACK_IMPORTED_MODULE_1__["MoveType"].stay:
                this.stay(item);
                break;
            case _models_item__WEBPACK_IMPORTED_MODULE_1__["MoveType"].comeback:
                this.comeback(item);
                break;
            case _models_item__WEBPACK_IMPORTED_MODULE_1__["MoveType"].path:
                this.path(item);
                break;
        }
        return this;
    }
    stay(item) {
        item.tempPos.x = item.pos.x;
        item.tempPos.y = item.pos.y;
    }
    comeback(item) {
        const move = item.move;
        move.i = move.i || 0;
        if (move.sense) {
            if (move.i < move.iterations) {
                item.tempPos.x -= (move.goX - item.pos.x) / move.iterations;
                item.tempPos.y -= (move.goY - item.pos.y) / move.iterations;
                move.i++;
            }
            else {
                move.i = 0;
                move.sense = false;
            }
        }
        else {
            if (move.i < move.iterations) {
                item.tempPos.x += (move.goX - item.pos.x) / move.iterations;
                item.tempPos.y += (move.goY - item.pos.y) / move.iterations;
                move.i++;
            }
            else {
                move.i = 0;
                move.sense = true;
            }
        }
    }
    path(item) {
        const move = item.move;
        move.i = move.i || 0;
        if (move.iterations && move.path.length) {
            const idOrig = Math.floor(move.i / (move.iterations / move.path.length));
            const idNext = (idOrig + 1) % move.path.length;
            const orig = move.path[idOrig];
            const next = move.path[idNext];
            item.tempPos.x += move.path.length * (next.x - orig.x) / move.iterations;
            item.tempPos.y += move.path.length * (next.y - orig.y) / move.iterations;
            move.i++;
            if (move.i >= move.iterations) {
                move.i = 0;
            }
        }
    }
}
ItemService.ɵfac = function ItemService_Factory(t) { return new (t || ItemService)(); };
ItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ItemService, factory: ItemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/racer.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/racer.service.ts ***!
  \**************************************************/
/*! exports provided: RacerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RacerService", function() { return RacerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_racer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/racer */ "./src/app/shared/models/racer.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/item */ "./src/app/shared/models/item.ts");
/* harmony import */ var _circuit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./circuit.service */ "./src/app/shared/services/circuit.service.ts");
/* harmony import */ var _bindings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bindings.service */ "./src/app/shared/services/bindings.service.ts");
/* harmony import */ var _driver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./driver.service */ "./src/app/shared/services/driver.service.ts");










class RacerService {
    constructor(circuitService, bindingsService, driverService) {
        this.circuitService = circuitService;
        this.bindingsService = bindingsService;
        this.driverService = driverService;
    }
    getGround(x, y) {
        return this.circuitService.getGroundValue(x, y);
    }
    move(racer, moveAction) {
        racer.ground = this.getGround(racer.x, racer.y);
        racer.accelerationLevel = this.driverService.getCarCurrentAccelerationLevel(moveAction, racer);
        this.moveComputing(racer);
    }
    moveComputing(racer) {
        const ground = racer.groundBeforeJump || racer.ground;
        //var cc = {
        //       '50cc': 180,
        //       '100cc': 150,
        //       '150cc': 130,
        //       '200cc': 80
        //     };
        racer.speed = this.driverService.getCarCurrentSpeed(racer) / 180;
        racer.angle = three__WEBPACK_IMPORTED_MODULE_2__["MathUtils"].degToRad(racer.rotation);
        const nextX = racer.x + (Math.sin(racer.angle) * racer.speed);
        const nextY = racer.y + (Math.cos(racer.angle) * racer.speed);
        const nextGround = this.getGround(nextX, nextY);
        if (nextGround > 0.05) {
            this.manageCheckpoints(racer, nextX, nextY);
            this.manageItems(racer);
            racer.x = nextX;
            racer.y = nextY;
        }
        else {
            racer.accelerationLevel = -Math.round(racer.accelerationLevel * ground);
        }
    }
    manageCheckpoints(racer, nextX, nextY) {
        const passTrough = this.isThroughCheckpoint(new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"](racer.x, racer.y), new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"](nextX, nextY), racer.checkpoint.a, racer.checkpoint.b);
        if (passTrough) {
            const cps = racer.circuit.checkpoints;
            racer.nbCheckpoint = racer.nbCheckpoint + 1;
            const cpId = racer.nbCheckpoint % cps.length;
            racer.checkpoint = cps[cpId];
            racer.turn = Math.floor(racer.nbCheckpoint / cps.length);
            console.log('Checkpoints passed : ' + racer.nbCheckpoint + '/' + cps.length);
        }
    }
    manageItems(racer) {
        racer.circuit.items.forEach(item => {
            if (Math.abs(item.tempPos.x - racer.x) < 6 && Math.abs(-item.tempPos.y - racer.y) < 6) {
                this.getItem(racer, item);
            }
        });
    }
    getItem(racer, item) {
        if (item.available) {
            const receivedItem = {
                img: item.img,
                libelle: item.libelle || 'Unknown name',
                effectClass: '',
                effect: ''
            };
            switch (item.type) {
                case _models_item__WEBPACK_IMPORTED_MODULE_5__["ItemType"].super_malus:
                    racer.points = 0;
                    receivedItem.effectClass = 'supermalus';
                    receivedItem.effect = 'pts = 0';
                    break;
                case _models_item__WEBPACK_IMPORTED_MODULE_5__["ItemType"].malus:
                    racer.points -= item.value;
                    receivedItem.effectClass = 'malus';
                    receivedItem.effect = '-' + item.value + 'pt' + (item.value > 1 ? 's' : '');
                    break;
                case _models_item__WEBPACK_IMPORTED_MODULE_5__["ItemType"].bonus:
                    racer.points += item.value;
                    receivedItem.effectClass = 'bonus';
                    receivedItem.effect = '+' + item.value + 'pt' + (item.value > 1 ? 's' : '');
                    break;
                case _models_item__WEBPACK_IMPORTED_MODULE_5__["ItemType"].super_bonus:
                    racer.points += item.value;
                    receivedItem.effectClass = 'superbonus';
                    receivedItem.effect = '+' + item.value + 'pt' + (item.value > 1 ? 's' : '');
                    break;
                case _models_item__WEBPACK_IMPORTED_MODULE_5__["ItemType"].invert:
                    this.bindingsService.invertBindings(item.duration);
                    receivedItem.effectClass = 'supermalus';
                    receivedItem.effect = 'inversion!!';
                    break;
                case _models_item__WEBPACK_IMPORTED_MODULE_5__["ItemType"].slow:
                    this.setBonus(racer, item.value, item.duration);
                    receivedItem.effectClass = 'supermalus';
                    receivedItem.effect = 'lenteur!!';
                    break;
                case _models_item__WEBPACK_IMPORTED_MODULE_5__["ItemType"].speed:
                    this.setBonus(racer, item.value, item.duration);
                    receivedItem.effectClass = 'superbonus';
                    receivedItem.effect = 'boost!!';
                    break;
            }
            racer.receivedItems.unshift(receivedItem);
            racer.totalItems.push(receivedItem);
            setTimeout(() => {
                racer.receivedItems.splice(racer.receivedItems.indexOf(receivedItem), 1);
            }, 1500);
        }
        if (item.timeout && item.available) {
            item.available = false;
            setTimeout(() => {
                item.available = true;
            }, item.timeout);
        }
        else {
            item.available = false;
        }
    }
    isThroughCheckpoint(kartFrom, kartTo, checkPointA, checkPointB) {
        const p1 = kartFrom.x < kartTo.x ? kartFrom : kartTo;
        const p2 = kartFrom.x < kartTo.x ? kartTo : kartFrom;
        const p3 = checkPointA.x < checkPointB.x ? checkPointA : checkPointB;
        const p4 = checkPointA.x < checkPointB.x ? checkPointB : checkPointA;
        const commonDivider = (p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y);
        if (!commonDivider)
            return false;
        const ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / commonDivider;
        const ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / commonDivider;
        return ua > 0 && ua < 1 && ub > 0 && ub < 1;
    }
    rotate(racer, direction) {
        let rotationPerFrame = 0;
        racer.rotateDirection = direction;
        if (direction === _models_racer__WEBPACK_IMPORTED_MODULE_1__["RotateDirection"].front) {
            if (racer.status === _models_racer__WEBPACK_IMPORTED_MODULE_1__["RacerStatus"].drifting) {
                rotationPerFrame = this.getRotationPerFrame(racer);
                if (racer.driftDirection === _models_racer__WEBPACK_IMPORTED_MODULE_1__["RotateDirection"].left) {
                    rotationPerFrame = -rotationPerFrame;
                }
            }
        }
        else {
            rotationPerFrame = this.getRotationPerFrame(racer);
            if (racer.status === _models_racer__WEBPACK_IMPORTED_MODULE_1__["RacerStatus"].jumping && racer.driftDirection === _models_racer__WEBPACK_IMPORTED_MODULE_1__["RotateDirection"].front) {
                racer.driftDirection = direction;
            }
            if (racer.status === _models_racer__WEBPACK_IMPORTED_MODULE_1__["RacerStatus"].drifting) {
                if (racer.driftDirection === _models_racer__WEBPACK_IMPORTED_MODULE_1__["RotateDirection"].front) {
                    racer.driftDirection = direction;
                }
                if (racer.driftDirection === direction) {
                    rotationPerFrame *= _models_racer__WEBPACK_IMPORTED_MODULE_1__["DRIFT_BASE_RATIO"] + racer.driver.stats.traction / _models_racer__WEBPACK_IMPORTED_MODULE_1__["DRIFT_TRACTION_RATIO"];
                }
                else {
                    rotationPerFrame *= -(_models_racer__WEBPACK_IMPORTED_MODULE_1__["COUNTER_DRIFT_BASE_RATIO"] + racer.driver.stats.traction / _models_racer__WEBPACK_IMPORTED_MODULE_1__["COUNTER_DRIFT_TRACTION_RATIO"]);
                }
            }
        }
        if (direction === _models_racer__WEBPACK_IMPORTED_MODULE_1__["RotateDirection"].left) {
            rotationPerFrame = -rotationPerFrame;
        }
        racer.rotation = (racer.rotation - rotationPerFrame + 360) % 360;
    }
    getRotationPerFrame(racer) {
        const speedVar = (!racer.speed ? 0 : _models_racer__WEBPACK_IMPORTED_MODULE_1__["ROTATION_BASE_RATIO"] - Math.abs(racer.speed) / _models_racer__WEBPACK_IMPORTED_MODULE_1__["ROTATION_SPEED_RATIO"]);
        const handlingVar = _models_racer__WEBPACK_IMPORTED_MODULE_1__["ROTATION_HAND_BASE_RATIO"] + racer.driver.stats.handling / _models_racer__WEBPACK_IMPORTED_MODULE_1__["ROTATION_HANDLING_RATIO"];
        return speedVar * handlingVar;
    }
    cancelDrift(racer) {
        if (racer.status === _models_racer__WEBPACK_IMPORTED_MODULE_1__["RacerStatus"].drifting) {
            racer.status = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RacerStatus"].normal;
            racer.driftDirection = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RotateDirection"].front;
            racer.driftingTime = -1;
        }
    }
    jump(racer) {
        let moving = 0;
        if (racer.canJump && racer.status !== _models_racer__WEBPACK_IMPORTED_MODULE_1__["RacerStatus"].drifting && racer.status !== _models_racer__WEBPACK_IMPORTED_MODULE_1__["RacerStatus"].jumping) {
            racer.zBeforeJump = racer.design.obj.position.z;
            moving = racer.design.obj.position.z;
            racer.canJump = false;
            racer.status = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RacerStatus"].jumping;
            racer.groundBeforeJump = racer.ground;
            const jumpIntervalUp = setInterval(() => {
                //Fix javascript number bug (try 3/15+3/15+3/15 on chrome debugger :D )
                moving = Math.round((moving + 3 / 15) * 100) / 100;
                racer.design.obj.position.z = moving;
            }, 10);
            setTimeout(() => {
                clearInterval(jumpIntervalUp);
            }, 140);
            setTimeout(() => {
                const jumpIntervalDown = setInterval(() => {
                    moving = Math.round((moving - 3 / 15) * 100) / 100;
                    racer.design.obj.position.z = moving;
                }, 10);
                setTimeout(() => {
                    clearInterval(jumpIntervalDown);
                }, 140);
            }, 150);
            setTimeout(() => {
                racer.design.obj.position.z = racer.zBeforeJump;
                racer.groundBeforeJump = null;
                if (racer.speed > _models_racer__WEBPACK_IMPORTED_MODULE_1__["DRIFT_MIN_SPEED"] && racer.rotateDirection !== _models_racer__WEBPACK_IMPORTED_MODULE_1__["RotateDirection"].front) {
                    racer.driftDirection = racer.rotateDirection;
                    racer.status = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RacerStatus"].drifting;
                    racer.driftingTime = new Date().getTime();
                }
                else {
                    racer.status = _models_racer__WEBPACK_IMPORTED_MODULE_1__["RacerStatus"].normal;
                }
            }, 301);
            setTimeout(() => {
                racer.canJump = true;
            }, 550);
        }
    }
    getDriftingFire(racer, currentTime) {
        if (racer.status === _models_racer__WEBPACK_IMPORTED_MODULE_1__["RacerStatus"].drifting) {
            const driftingDuration = currentTime - racer.driftingTime;
            if (driftingDuration > _models_racer__WEBPACK_IMPORTED_MODULE_1__["DRIFT_RED_TIME"]) {
                return _models_racer__WEBPACK_IMPORTED_MODULE_1__["DriftFire"].red;
            }
            else if (driftingDuration > _models_racer__WEBPACK_IMPORTED_MODULE_1__["DRIFT_BLUE_TIME"]) {
                return _models_racer__WEBPACK_IMPORTED_MODULE_1__["DriftFire"].blue;
            }
        }
        return _models_racer__WEBPACK_IMPORTED_MODULE_1__["DriftFire"].none;
    }
    driftTurbo(racer) {
        if (racer.driftingTime > 0) {
            const driftingFire = this.getDriftingFire(racer, new Date().getTime());
            this.setBonus(racer, 1 + driftingFire * _models_racer__WEBPACK_IMPORTED_MODULE_1__["RATIO_TURBO_DRIFT"], _models_racer__WEBPACK_IMPORTED_MODULE_1__["TIME_TURBO_DRIFT"]);
        }
        this.cancelDrift(racer);
    }
    setBonus(racer, amount, duration) {
        if (racer.bonusTimeout >= 0) {
            clearTimeout(racer.bonusTimeout);
        }
        racer.bonus = amount;
        racer.bonusTimeout = setTimeout(() => {
            racer.bonus = 1;
        }, duration);
    }
    getGeometryFromRacer(racer, picPos) {
        const spriteCellNb = 10;
        const step = 1 / spriteCellNb;
        const x = picPos.x * step;
        const y = 1 - picPos.y * step;
        const trackMapping = [
            new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"](x, y),
            new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"](x, y - step),
            new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"](x + step, y - step),
            new three__WEBPACK_IMPORTED_MODULE_2__["Vector2"](x + step, y),
        ];
        const carGeometry = new three__WEBPACK_IMPORTED_MODULE_2__["PlaneGeometry"](racer.driver.stats.width * 1.5, racer.driver.stats.width * 1.5, 1, 1);
        carGeometry.faceVertexUvs[0][0] = [trackMapping[0], trackMapping[1], trackMapping[3]];
        carGeometry.faceVertexUvs[0][1] = [trackMapping[1], trackMapping[2], trackMapping[3]];
        return carGeometry;
    }
    updateRacerPic(racer, picPos) {
        racer.design.plane.geometry.dispose();
        const carGeometry = this.getGeometryFromRacer(racer, picPos);
        racer.design.plane.geometry = carGeometry;
        racer.design.geometry = carGeometry;
    }
    loadDesignElement(racer) {
        return this.loadCharacterMaterial(racer).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(material => {
            racer.driver.sprite.mat = material;
            const carGeometry = this.getGeometryFromRacer(racer, _models_racer__WEBPACK_IMPORTED_MODULE_1__["RACER_PICS"].GO_FORWARD);
            const carPlane = new three__WEBPACK_IMPORTED_MODULE_2__["Mesh"](carGeometry, racer.driver.sprite.mat);
            const carObj = new three__WEBPACK_IMPORTED_MODULE_2__["Object3D"]();
            carObj.position.x = racer.x;
            carObj.position.y = -racer.y;
            carObj.position.z = racer.driver.stats.width * 0.75;
            carObj.add(carPlane);
            carPlane.rotation.x = Math.PI / 2;
            racer.design = {
                material: material,
                geometry: carGeometry,
                plane: carPlane,
                obj: carObj
            };
            return racer.design;
        }));
    }
    loadCharacterMaterial(racer) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            const loader = new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]();
            loader.load(racer.driver.sprite.url, (tex) => {
                tex.magFilter = three__WEBPACK_IMPORTED_MODULE_2__["NearestFilter"];
                tex.minFilter = three__WEBPACK_IMPORTED_MODULE_2__["NearestFilter"];
                const mat = new three__WEBPACK_IMPORTED_MODULE_2__["MeshBasicMaterial"]({
                    map: tex,
                    transparent: true,
                    side: three__WEBPACK_IMPORTED_MODULE_2__["DoubleSide"]
                });
                observer.next(mat);
                observer.complete();
            }, () => { }, () => {
                observer.error('ERR_LOAD_MESH');
            });
        });
    }
}
RacerService.ɵfac = function RacerService_Factory(t) { return new (t || RacerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_circuit_service__WEBPACK_IMPORTED_MODULE_6__["CircuitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_bindings_service__WEBPACK_IMPORTED_MODULE_7__["BindingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_driver_service__WEBPACK_IMPORTED_MODULE_8__["DriverService"])); };
RacerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RacerService, factory: RacerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RacerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _circuit_service__WEBPACK_IMPORTED_MODULE_6__["CircuitService"] }, { type: _bindings_service__WEBPACK_IMPORTED_MODULE_7__["BindingsService"] }, { type: _driver_service__WEBPACK_IMPORTED_MODULE_8__["DriverService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/request.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/request.service.ts ***!
  \****************************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class RequestService {
    constructor(http) {
        this.http = http;
    }
    doRequest(requestConfig) {
        const url = requestConfig.url;
        switch (requestConfig.method.toLowerCase()) {
            case 'get':
                return this.doGet(url, requestConfig.params, requestConfig.headers);
            case 'post':
                return this.doPost(url, requestConfig.params, requestConfig.data, requestConfig.headers);
            case 'put':
                return this.doPut(url, requestConfig.params, requestConfig.data);
            default:
                return this.doGet(url, requestConfig.params);
        }
    }
    getBlob(url) {
        return this.http.get(url, {
            responseType: 'blob'
        });
    }
    doGet(url, params, headers) {
        return this.http.get(url, { observe: 'response', params, headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            return this.handleError(err);
        }));
    }
    doPost(url, params, data, headers) {
        return this.http.post(url, data, { params, headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            return this.handleError(err);
        }));
    }
    doPut(url, params, data) {
        return this.http.put(url, data, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            return this.handleError(err);
        }));
    }
    handleError(error) {
        let txt = 'LIB_ERROR_REQUEST_ERROR';
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            txt = 'Error:' + error.error.message;
        }
        else if (typeof error.error === 'string') {
            txt = (error.errorMessage) ? error.errorMessage : error.error;
        }
        else if (error.statusText && typeof error.statusText === 'string') {
            txt = error.statusText;
            if (error.status === 0) {
                txt = 'LIB_ERR_NO_NETWORK';
            }
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(txt);
    }
}
RequestService.ɵfac = function RequestService_Factory(t) { return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
RequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestService, factory: RequestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/ng-awesome-kart/ng-awesome-kart/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map