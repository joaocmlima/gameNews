(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["folder-folder-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFolderFolderPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ folder }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{ folder }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"mapId\" style=\"height: 100%;\"></div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/folder/folder-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/folder/folder-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: FolderPageRoutingModule */

    /***/
    function srcAppFolderFolderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FolderPageRoutingModule", function () {
        return FolderPageRoutingModule;
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


      var _folder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./folder.page */
      "./src/app/folder/folder.page.ts");

      var routes = [{
        path: '',
        component: _folder_page__WEBPACK_IMPORTED_MODULE_3__["FolderPage"]
      }];

      var FolderPageRoutingModule = function FolderPageRoutingModule() {
        _classCallCheck(this, FolderPageRoutingModule);
      };

      FolderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FolderPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/folder/folder.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/folder/folder.module.ts ***!
      \*****************************************/

    /*! exports provided: FolderPageModule */

    /***/
    function srcAppFolderFolderModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FolderPageModule", function () {
        return FolderPageModule;
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


      var _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./folder-routing.module */
      "./src/app/folder/folder-routing.module.ts");
      /* harmony import */


      var _folder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./folder.page */
      "./src/app/folder/folder.page.ts");

      var FolderPageModule = function FolderPageModule() {
        _classCallCheck(this, FolderPageModule);
      };

      FolderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _folder_routing_module__WEBPACK_IMPORTED_MODULE_5__["FolderPageRoutingModule"]],
        declarations: [_folder_page__WEBPACK_IMPORTED_MODULE_6__["FolderPage"]]
      })], FolderPageModule);
      /***/
    },

    /***/
    "./src/app/folder/folder.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/folder/folder.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppFolderFolderPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZm9sZGVyL2ZvbGRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/folder/folder.page.ts":
    /*!***************************************!*\
      !*** ./src/app/folder/folder.page.ts ***!
      \***************************************/

    /*! exports provided: FolderPage */

    /***/
    function srcAppFolderFolderPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FolderPage", function () {
        return FolderPage;
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


      var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! leaflet */
      "./node_modules/leaflet/dist/leaflet-src.js");
      /* harmony import */


      var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);

      var FolderPage = /*#__PURE__*/function () {
        function FolderPage(geolocation, activatedRoute) {
          _classCallCheck(this, FolderPage);

          this.geolocation = geolocation;
          this.activatedRoute = activatedRoute;
        }

        _createClass(FolderPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.folder = this.activatedRoute.snapshot.paramMap.get('id');
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            this.coordinates();
          }
        }, {
          key: "coordinates",
          value: function coordinates() {
            var _this = this;

            this.geolocation.getCurrentPosition().then(function (resp) {
              _this.map = new leaflet__WEBPACK_IMPORTED_MODULE_4__["Map"]("mapId").setView([resp.coords.latitude, resp.coords.longitude], 13);
              Object(leaflet__WEBPACK_IMPORTED_MODULE_4__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY- SA</a>'
              }).addTo(_this.map); // This line is added to add the Tile Layer to our map
              // resp.coords.latitude
              // resp.coords.longitude

              console.log(resp.coords.latitude + " & " + resp.coords.longitude);
            })["catch"](function (error) {
              console.log('Error getting location', error);
            });
          }
        }]);

        return FolderPage;
      }();

      FolderPage.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      };

      FolderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-folder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./folder.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/folder/folder.page.html"))["default"],
        providers: [_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./folder.page.scss */
        "./src/app/folder/folder.page.scss"))["default"]]
      })], FolderPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=folder-folder-module-es5.js.map