(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-insert-user-insert-user-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user/insert-user/insert-user.page.html":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/insert-user/insert-user.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserInsertUserInsertUserPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Cadastrar usuário</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input name=\"email\" type=\"email\" [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n  \n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Senha</ion-label>\n      <ion-input name=\"senha\" type=\"password\" [(ngModel)]=\"senha\"></ion-input>\n    </ion-item>\n  \n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" color=\"secondary\" type=\"submit\" (click)=\"insertUser()\">Cadastrar</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/user/insert-user/insert-user-routing.module.ts":
    /*!****************************************************************!*\
      !*** ./src/app/user/insert-user/insert-user-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: InsertUserPageRoutingModule */

    /***/
    function srcAppUserInsertUserInsertUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsertUserPageRoutingModule", function () {
        return InsertUserPageRoutingModule;
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


      var _insert_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./insert-user.page */
      "./src/app/user/insert-user/insert-user.page.ts");

      var routes = [{
        path: '',
        component: _insert_user_page__WEBPACK_IMPORTED_MODULE_3__["InsertUserPage"]
      }];

      var InsertUserPageRoutingModule = function InsertUserPageRoutingModule() {
        _classCallCheck(this, InsertUserPageRoutingModule);
      };

      InsertUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InsertUserPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/user/insert-user/insert-user.module.ts":
    /*!********************************************************!*\
      !*** ./src/app/user/insert-user/insert-user.module.ts ***!
      \********************************************************/

    /*! exports provided: InsertUserPageModule */

    /***/
    function srcAppUserInsertUserInsertUserModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsertUserPageModule", function () {
        return InsertUserPageModule;
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


      var _insert_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./insert-user-routing.module */
      "./src/app/user/insert-user/insert-user-routing.module.ts");
      /* harmony import */


      var _insert_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./insert-user.page */
      "./src/app/user/insert-user/insert-user.page.ts");

      var InsertUserPageModule = function InsertUserPageModule() {
        _classCallCheck(this, InsertUserPageModule);
      };

      InsertUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _insert_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["InsertUserPageRoutingModule"]],
        declarations: [_insert_user_page__WEBPACK_IMPORTED_MODULE_6__["InsertUserPage"]]
      })], InsertUserPageModule);
      /***/
    },

    /***/
    "./src/app/user/insert-user/insert-user.page.scss":
    /*!********************************************************!*\
      !*** ./src/app/user/insert-user/insert-user.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserInsertUserInsertUserPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvaW5zZXJ0LXVzZXIvaW5zZXJ0LXVzZXIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/user/insert-user/insert-user.page.ts":
    /*!******************************************************!*\
      !*** ./src/app/user/insert-user/insert-user.page.ts ***!
      \******************************************************/

    /*! exports provided: InsertUserPage */

    /***/
    function srcAppUserInsertUserInsertUserPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsertUserPage", function () {
        return InsertUserPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_usuario_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/usuario/autenticacao.service */
      "./src/app/usuario/autenticacao.service.ts");

      var InsertUserPage = /*#__PURE__*/function () {
        function InsertUserPage(autenticacaoService, router, toastController) {
          _classCallCheck(this, InsertUserPage);

          this.autenticacaoService = autenticacaoService;
          this.router = router;
          this.toastController = toastController;
          this.email = "";
          this.senha = "";
          this.mensagem = "";
        }

        _createClass(InsertUserPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "insertUser",
          value: function insertUser() {
            var _this = this;

            this.autenticacaoService.insertNoFirebase(this.email, this.senha).then(function (res) {
              _this.router.navigate(['home/' + _this.email]);
            })["catch"](function (error) {
              _this.mensagem = "Erro ao cadastrar usuário";

              _this.exibeMensagem();
            });
          }
        }, {
          key: "exibeMensagem",
          value: function exibeMensagem() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: this.mensagem,
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return InsertUserPage;
      }();

      InsertUserPage.ctorParameters = function () {
        return [{
          type: src_app_usuario_autenticacao_service__WEBPACK_IMPORTED_MODULE_4__["AutenticacaoService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }];
      };

      InsertUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-insert-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./insert-user.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user/insert-user/insert-user.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./insert-user.page.scss */
        "./src/app/user/insert-user/insert-user.page.scss"))["default"]]
      })], InsertUserPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-insert-user-insert-user-module-es5.js.map