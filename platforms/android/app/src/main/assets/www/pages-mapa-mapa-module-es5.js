(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-mapa-mapa-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mapa/mapa.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mapa/mapa.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesMapaMapaPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Mapa</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div id=\"mapId\" style=\"height: 100%;\"></div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/mapa/mapa-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/mapa/mapa-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: MapaPageRoutingModule */

    /***/
    function srcAppPagesMapaMapaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapaPageRoutingModule", function () {
        return MapaPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _mapa_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mapa.page */
      "./src/app/pages/mapa/mapa.page.ts");

      var routes = [{
        path: '',
        component: _mapa_page__WEBPACK_IMPORTED_MODULE_3__["MapaPage"]
      }];

      var MapaPageRoutingModule = function MapaPageRoutingModule() {
        _classCallCheck(this, MapaPageRoutingModule);
      };

      MapaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MapaPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/mapa/mapa.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/mapa/mapa.module.ts ***!
      \*******************************************/

    /*! exports provided: MapaPageModule */

    /***/
    function srcAppPagesMapaMapaModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapaPageModule", function () {
        return MapaPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mapa-routing.module */
      "./src/app/pages/mapa/mapa-routing.module.ts");
      /* harmony import */


      var _mapa_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mapa.page */
      "./src/app/pages/mapa/mapa.page.ts");

      var MapaPageModule = function MapaPageModule() {
        _classCallCheck(this, MapaPageModule);
      };

      MapaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mapa_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapaPageRoutingModule"]],
        declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_6__["MapaPage"]]
      })], MapaPageModule);
      /***/
    },

    /***/
    "./src/app/pages/mapa/mapa.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/mapa/mapa.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesMapaMapaPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcGEvbWFwYS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/mapa/mapa.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/mapa/mapa.page.ts ***!
      \*****************************************/

    /*! exports provided: MapaPage */

    /***/
    function srcAppPagesMapaMapaPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapaPage", function () {
        return MapaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! leaflet */
      "./node_modules/leaflet/dist/leaflet-src.js");
      /* harmony import */


      var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);

      var MapaPage = /*#__PURE__*/function () {
        function MapaPage(geolocation, activatedRoute, loadingController) {
          _classCallCheck(this, MapaPage);

          this.geolocation = geolocation;
          this.activatedRoute = activatedRoute;
          this.loadingController = loadingController;
        }

        _createClass(MapaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.efeitoLoading();
            this.loadMap();
          }
        }, {
          key: "loadMap",
          value: function loadMap() {
            var _this = this;

            this.geolocation.getCurrentPosition().then(function (resp) {
              _this.map = new leaflet__WEBPACK_IMPORTED_MODULE_5__["Map"]("mapId").setView([resp.coords.latitude, resp.coords.longitude], 17);
              Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY- SA</a>'
              }).addTo(_this.map); // This line is added to add the Tile Layer to our map

              var newMarker = Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["marker"])([resp.coords.latitude, resp.coords.longitude]).addTo(_this.map); //This like make a marker on the location

              newMarker.bindPopup("Sua localização").openPopup(); // resp.coords.latitude
              // resp.coords.longitude

              console.log(resp.coords.latitude + " & " + resp.coords.longitude);
            })["catch"](function (error) {
              console.log('Error getting location', error);
            });
          }
        }, {
          key: "efeitoLoading",
          value: function efeitoLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading, _yield$loading$onDidD, role, data;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        message: 'Carregando as notícias',
                        duration: 4000
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      _context.next = 7;
                      return loading.onDidDismiss();

                    case 7:
                      _yield$loading$onDidD = _context.sent;
                      role = _yield$loading$onDidD.role;
                      data = _yield$loading$onDidD.data;

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return MapaPage;
      }();

      MapaPage.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }];
      };

      MapaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mapa',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mapa.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/mapa/mapa.page.html"))["default"],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mapa.page.scss */
        "./src/app/pages/mapa/mapa.page.scss"))["default"]]
      })], MapaPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-mapa-mapa-module-es5.js.map