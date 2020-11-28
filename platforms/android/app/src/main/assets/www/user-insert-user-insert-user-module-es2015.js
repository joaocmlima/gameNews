(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-insert-user-insert-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/insert-user/insert-user.page.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/insert-user/insert-user.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Cadastrar usuário</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br><br>\n  <form>\n    <ion-item lines=\"full\">\n      <ion-label position=\"fixed\">Email</ion-label>\n      <ion-input name=\"email\" type=\"email\" [(ngModel)]=\"email\" required></ion-input>\n    </ion-item>\n  \n    <ion-item lines=\"full\">\n      <ion-label position=\"fixed\">Senha</ion-label>\n      <ion-input name=\"senha\" [type]=\"type\" [(ngModel)]=\"senha\" required></ion-input>\n      <ion-icon (click)=\"showSenha()\" slot=\"end\" name=\"eye\" [color]=\"colorActive\"></ion-icon>\n    </ion-item>\n\n    <br>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Confirmar senha</ion-label>\n      <ion-input name=\"senha2\" type=\"password\" [(ngModel)]=\"senha2\" required></ion-input>\n    </ion-item>\n  \n    <ion-row>\n      <ion-col>\n        <ion-button expand=\"block\" color=\"secondary\" type=\"submit\" (click)=\"insertUser()\">Cadastrar</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/user/insert-user/insert-user-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/user/insert-user/insert-user-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: InsertUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertUserPageRoutingModule", function() { return InsertUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _insert_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./insert-user.page */ "./src/app/user/insert-user/insert-user.page.ts");




const routes = [
    {
        path: '',
        component: _insert_user_page__WEBPACK_IMPORTED_MODULE_3__["InsertUserPage"]
    }
];
let InsertUserPageRoutingModule = class InsertUserPageRoutingModule {
};
InsertUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InsertUserPageRoutingModule);



/***/ }),

/***/ "./src/app/user/insert-user/insert-user.module.ts":
/*!********************************************************!*\
  !*** ./src/app/user/insert-user/insert-user.module.ts ***!
  \********************************************************/
/*! exports provided: InsertUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertUserPageModule", function() { return InsertUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _insert_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./insert-user-routing.module */ "./src/app/user/insert-user/insert-user-routing.module.ts");
/* harmony import */ var _insert_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insert-user.page */ "./src/app/user/insert-user/insert-user.page.ts");







let InsertUserPageModule = class InsertUserPageModule {
};
InsertUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _insert_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["InsertUserPageRoutingModule"]
        ],
        declarations: [_insert_user_page__WEBPACK_IMPORTED_MODULE_6__["InsertUserPage"]]
    })
], InsertUserPageModule);



/***/ }),

/***/ "./src/app/user/insert-user/insert-user.page.scss":
/*!********************************************************!*\
  !*** ./src/app/user/insert-user/insert-user.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvaW5zZXJ0LXVzZXIvaW5zZXJ0LXVzZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/user/insert-user/insert-user.page.ts":
/*!******************************************************!*\
  !*** ./src/app/user/insert-user/insert-user.page.ts ***!
  \******************************************************/
/*! exports provided: InsertUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertUserPage", function() { return InsertUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_global_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/global/global.service */ "./src/app/global/global.service.ts");
/* harmony import */ var src_app_usuario_autenticacao_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/usuario/autenticacao.service */ "./src/app/usuario/autenticacao.service.ts");







let InsertUserPage = class InsertUserPage {
    constructor(autenticacaoService, router, toastController, global, app) {
        this.autenticacaoService = autenticacaoService;
        this.router = router;
        this.toastController = toastController;
        this.global = global;
        this.app = app;
        this.email = "";
        this.senha = "";
        this.senha2 = "";
        this.mensagem = "";
        this.type = "password";
        this.colorActive = "medium";
    }
    ngOnInit() {
    }
    insertUser() {
        if (this.senha == this.senha2) {
            this.autenticacaoService.insertNoFirebase(this.email, this.senha).then((res) => {
                this.router.navigate(['home']);
                this.global.globalUserLogged = true;
                this.global.globalUser = this.email;
                this.app.setSelected();
            }).catch((error) => {
                this.mensagem = "Erro ao cadastrar usuário\n" + error;
                this.exibeMensagem();
            });
        }
        else {
            this.mensagem = "Senhas não coincidem!";
            this.exibeMensagem();
        }
    }
    exibeMensagem() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: this.mensagem,
                duration: 2000
            });
            toast.present();
        });
    }
    showSenha() {
        if (this.type == "password") {
            this.colorActive = "secondary";
            this.type = "text";
        }
        else {
            this.colorActive = "medium";
            this.type = "password";
        }
    }
};
InsertUserPage.ctorParameters = () => [
    { type: src_app_usuario_autenticacao_service__WEBPACK_IMPORTED_MODULE_6__["AutenticacaoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: src_app_global_global_service__WEBPACK_IMPORTED_MODULE_5__["GlobalService"] },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"] }
];
InsertUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-insert-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./insert-user.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/insert-user/insert-user.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./insert-user.page.scss */ "./src/app/user/insert-user/insert-user.page.scss")).default]
    })
], InsertUserPage);



/***/ })

}]);
//# sourceMappingURL=user-insert-user-insert-user-module-es2015.js.map