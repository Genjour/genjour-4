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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-top:45px;\">\r\n<router-outlet></router-outlet>\r\n</div>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_feeds_feeds_component__ = __webpack_require__("../../../../../src/app/components/feeds/feeds.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_article_article_component__ = __webpack_require__("../../../../../src/app/components/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_journals_journals_component__ = __webpack_require__("../../../../../src/app/components/journals/journals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_genjourist_genjourist_component__ = __webpack_require__("../../../../../src/app/components/genjourist/genjourist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_support_support_article_support_article_component__ = __webpack_require__("../../../../../src/app/components/support/support-article/support-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_support_support_quotation_support_quotation_component__ = __webpack_require__("../../../../../src/app/components/support/support-quotation/support-quotation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_category_category_component__ = __webpack_require__("../../../../../src/app/components/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_infinite_scroll__ = __webpack_require__("../../../../ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_journals_service__ = __webpack_require__("../../../../../src/app/services/journals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_profile_service__ = __webpack_require__("../../../../../src/app/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_support_service__ = __webpack_require__("../../../../../src/app/services/support.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_genjourist_service__ = __webpack_require__("../../../../../src/app/services/genjourist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_socket_socket_service__ = __webpack_require__("../../../../../src/app/services/socket/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_category_category_service__ = __webpack_require__("../../../../../src/app/services/category/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_script_loader_service__ = __webpack_require__("../../../../../src/app/services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_feeds_feeds_service__ = __webpack_require__("../../../../../src/app/services/feeds/feeds.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_quotations_service__ = __webpack_require__("../../../../../src/app/services/quotations.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_search_search_service__ = __webpack_require__("../../../../../src/app/services/search/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__gaurds_auth_gaurd__ = __webpack_require__("../../../../../src/app/gaurds/auth.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__gaurds_protected_gaurd__ = __webpack_require__("../../../../../src/app/gaurds/protected.gaurd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_write_article_write_article_component__ = __webpack_require__("../../../../../src/app/components/write-article/write-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_write_quotation_write_quotation_component__ = __webpack_require__("../../../../../src/app/components/write-quotation/write-quotation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__directives_pipes_summary_pipe__ = __webpack_require__("../../../../../src/app/directives/pipes/summary.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_settings_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_profile_age_category_pipe__ = __webpack_require__("../../../../../src/app/components/profile/age-category.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_edit_article_edit_article_edit_article_component__ = __webpack_require__("../../../../../src/app/components/edit/article/edit-article/edit-article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_edit_quotation_edit_quotation_edit_quotation_component__ = __webpack_require__("../../../../../src/app/components/edit/quotation/edit-quotation/edit-quotation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_feeds_new_user_recommend_user_recommend_user_component__ = __webpack_require__("../../../../../src/app/components/feeds/new user/recommend-user/recommend-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_support_supportbtn_support_btn_support_btn_component__ = __webpack_require__("../../../../../src/app/components/support/supportbtn/support-btn/support-btn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_feeds_new_user_article_recommendation_article_recommendation_component__ = __webpack_require__("../../../../../src/app/components/feeds/new user/article-recommendation/article-recommendation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_navbar_search_search_component__ = __webpack_require__("../../../../../src/app/components/navbar/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__node_modules_ng2_cloudinary__ = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_47_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__directives_pipes_profile_img_pipe__ = __webpack_require__("../../../../../src/app/directives/pipes/profile-img.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















































var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_journals_journals_component__["a" /* JournalsComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__gaurds_protected_gaurd__["a" /* ProtectedGaurd */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_34__gaurds_protected_gaurd__["a" /* ProtectedGaurd */]] },
    { path: 'feeds', component: __WEBPACK_IMPORTED_MODULE_7__components_feeds_feeds_component__["a" /* FeedsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__gaurds_auth_gaurd__["a" /* AuthGaurd */]] },
    { path: 'category/:categoryName', component: __WEBPACK_IMPORTED_MODULE_17__components_category_category_component__["a" /* CategoryComponent */] },
    { path: 'genjourist/:id', component: __WEBPACK_IMPORTED_MODULE_14__components_genjourist_genjourist_component__["a" /* GenjouristComponent */] },
    { path: 'genjourist', component: __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__gaurds_auth_gaurd__["a" /* AuthGaurd */]] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_38__components_settings_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__gaurds_auth_gaurd__["a" /* AuthGaurd */]] },
    { path: 'journal/:articleId', component: __WEBPACK_IMPORTED_MODULE_10__components_article_article_component__["a" /* ArticleComponent */] },
    { path: 'write-article', component: __WEBPACK_IMPORTED_MODULE_35__components_write_article_write_article_component__["a" /* WriteArticleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__gaurds_auth_gaurd__["a" /* AuthGaurd */]] },
    { path: 'write-quotation', component: __WEBPACK_IMPORTED_MODULE_36__components_write_quotation_write_quotation_component__["a" /* WriteQuotationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__gaurds_auth_gaurd__["a" /* AuthGaurd */]] },
    { path: 'edit/article/:articleId', component: __WEBPACK_IMPORTED_MODULE_40__components_edit_article_edit_article_edit_article_component__["a" /* EditArticleComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__gaurds_auth_gaurd__["a" /* AuthGaurd */]] },
    { path: 'edit/quotation/:quotationId', component: __WEBPACK_IMPORTED_MODULE_41__components_edit_quotation_edit_quotation_edit_quotation_component__["a" /* EditQuotationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_33__gaurds_auth_gaurd__["a" /* AuthGaurd */]] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_feeds_feeds_component__["a" /* FeedsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_article_article_component__["a" /* ArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_journals_journals_component__["a" /* JournalsComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_write_article_write_article_component__["a" /* WriteArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_write_quotation_write_quotation_component__["a" /* WriteQuotationComponent */],
                __WEBPACK_IMPORTED_MODULE_37__directives_pipes_summary_pipe__["a" /* SummaryPipe */],
                __WEBPACK_IMPORTED_MODULE_14__components_genjourist_genjourist_component__["a" /* GenjouristComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_support_support_article_support_article_component__["a" /* SupportArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_support_support_quotation_support_quotation_component__["a" /* SupportQuotationComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_settings_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_profile_age_category_pipe__["a" /* AgeCategoryPipe */],
                __WEBPACK_IMPORTED_MODULE_40__components_edit_article_edit_article_edit_article_component__["a" /* EditArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_edit_quotation_edit_quotation_edit_quotation_component__["a" /* EditQuotationComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_feeds_new_user_recommend_user_recommend_user_component__["a" /* RecommendUserComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_support_supportbtn_support_btn_support_btn_component__["a" /* SupportBtnComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_feeds_new_user_article_recommendation_article_recommendation_component__["a" /* ArticleRecommendationComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_navbar_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_48__directives_pipes_profile_img_pipe__["a" /* ProfileImgPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_18_ngx_infinite_scroll__["a" /* InfiniteScrollModule */],
                __WEBPACK_IMPORTED_MODULE_46__node_modules_ng2_cloudinary__["c" /* Ng2CloudinaryModule */],
                __WEBPACK_IMPORTED_MODULE_47_ng2_file_upload__["FileUploadModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_21__services_post_service__["a" /* PostService */],
                __WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_33__gaurds_auth_gaurd__["a" /* AuthGaurd */],
                __WEBPACK_IMPORTED_MODULE_34__gaurds_protected_gaurd__["a" /* ProtectedGaurd */],
                __WEBPACK_IMPORTED_MODULE_22__services_journals_service__["a" /* JournalsService */],
                __WEBPACK_IMPORTED_MODULE_23__services_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_24__services_support_service__["a" /* SupportService */],
                __WEBPACK_IMPORTED_MODULE_25__services_genjourist_service__["a" /* GenjouristService */],
                __WEBPACK_IMPORTED_MODULE_26__services_article_service__["a" /* ArticleService */],
                __WEBPACK_IMPORTED_MODULE_27__services_socket_socket_service__["a" /* SocketService */],
                __WEBPACK_IMPORTED_MODULE_28__services_category_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_29__services_script_loader_service__["a" /* ScriptLoaderService */],
                __WEBPACK_IMPORTED_MODULE_30__services_feeds_feeds_service__["a" /* FeedsService */],
                __WEBPACK_IMPORTED_MODULE_31__services_quotations_service__["a" /* QuotationsService */],
                __WEBPACK_IMPORTED_MODULE_32__services_search_search_service__["a" /* SearchService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/article/article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-widget19 .m-widget19__content .m-widget19__header .m-widget19__user-img .m-widget19__img{\r\n    width:5.2rem;\r\n}\r\n.m-header--fixed .m-body{\r\n    padding:0 !important;\r\n}\r\n\r\n.offset-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  \r\n  .offset-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  \r\n  .offset-3 {\r\n    margin-left: 25%;\r\n  }\r\n  \r\n  .offset-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  \r\n  .offset-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  \r\n  .offset-6 {\r\n    margin-left: 50%;\r\n  }\r\n  \r\n  .offset-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  \r\n  .offset-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  \r\n  .offset-9 {\r\n    margin-left: 75%;\r\n  }\r\n  \r\n  .offset-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  \r\n  .offset-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n\r\n  .offset-sm-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-sm-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  .offset-sm-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  .offset-sm-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-sm-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  .offset-sm-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  .offset-sm-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-sm-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  .offset-sm-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  .offset-sm-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-sm-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  .offset-sm-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n\r\n.offset-md-0 {\r\n    margin-left: 0;\r\n  }\r\n  .offset-md-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  .offset-md-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  .offset-md-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-md-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  .offset-md-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  .offset-md-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-md-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  .offset-md-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  .offset-md-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-md-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  .offset-md-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"m-page--fluid m--skin- m-content--skin-light2 m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default m-scroll-top--shown\">\r\n    <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body \">\r\n      <div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\r\n        <!-- BEGIN: Subheader -->\r\n        <div class=\"row\">\r\n              <div class=\"col-md-9 col-xs-12 m-subheader m--padding-50 \">\r\n                  <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height \">\r\n                      <div class=\"m-portlet__head m-portlet__head--fit\">\r\n                        <div class=\"m-portlet__head-caption\">\r\n                          <div class=\"m-portlet__head-action\">\r\n                            <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-brand\">\r\n                              {{articleData?.category}}\r\n                            </button>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"m-portlet__body\">\r\n                        <div class=\"m-widget19\">    \r\n                              <div class=\"m-widget19__pic m-portlet-fit--top m-portlet-fit--sides\" style=\"min-height: 286px\">\r\n                                <img src=\"assets/{{articleData?.imgUrl}}\" alt=\"\">\r\n                                <h3 class=\"m-widget19__title m--font-light\">\r\n                                  {{articleData?.title}}\r\n                                </h3>\r\n                                <div class=\"m-widget19__shadow\"></div>\r\n                              </div>\r\n      \r\n                              <div class=\"m-widget19__content\">\r\n                                <div class=\"m-widget19__header\">\r\n                                  <div class=\"m-widget19__user-img\">\r\n                                    <a [routerLink]=\"['/genjourist',articleData?.genjouristId]\"><img class=\"m-widget19__img\" src=\"assets/app/media/img//users/user1.jpg\" alt=\"\"></a>\r\n                                  </div>\r\n                                  <div class=\"m-widget19__info\">\r\n                                    <span class=\"m-widget19__username\">\r\n                                       <a [routerLink]=\"['/genjourist',articleData?.genjouristId]\">{{articleData?.genjourist}}</a>\r\n                                    </span>\r\n                                    <br>\r\n                                    <span class=\"m-badge m-badge--danger m-badge--wide\">\r\n                                        14-30\r\n                                    </span>\r\n                                  </div>\r\n\r\n                                </div>\r\n                                  <div class=\"row\">\r\n                                      <!-- <app-support-article [articleId]=\"articleData?.articleId\" [userId]=\"articleData?.genjouristId\" ></app-support-article>   -->\r\n                                  </div>\r\n                                <div class=\"\">\r\n                                  \r\n                                      <div [innerHtml]=\"articleData.content\"></div>\r\n                                     <!-- {{articleData?.content}} -->\r\n                                  \r\n                                </div>\r\n      \r\n                              </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>           \r\n              </div>\r\n              <div class=\"col-md-3 m--padding-30\">\r\n                <app-sidenav></app-sidenav>\r\n              </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12 m-subheader \">\r\n              <div class=\"d-flex align-items-center\">\r\n                <div class=\"mr-auto\">\r\n                  <h3 class=\"m-subheader__title \">\r\n                    Recommended\r\n                  </h3>\r\n                </div>\r\n                <div>\r\n                </div>\r\n              </div>\r\n    \r\n                <!--Begin::Main Portlet-->\r\n              <div class=\"m-content\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                    <!--begin:: Widgets/Blog-->\r\n                   \r\n                        <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height \">\r\n                            <div class=\"m-portlet__head m-portlet__head--fit\">\r\n                              <div class=\"m-portlet__head-caption\">\r\n                                <div class=\"m-portlet__head-action\">\r\n                                  <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-brand\">\r\n                                    Life\r\n                                  </button>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"m-portlet__body\">\r\n                              <div class=\"m-widget19\">\r\n                                  <a href=\"post\">\r\n                                    <div class=\"m-widget19__pic m-portlet-fit--top m-portlet-fit--sides\" style=\"min-height-: 286px\">\r\n                                      <img src=\"assets/app/media/img//blog/blog1.jpg\" alt=\"\">\r\n                                      <h3 class=\"m-widget19__title m--font-light\">\r\n                                        Introducing New Feature\r\n                                      </h3>\r\n                                      <div class=\"m-widget19__shadow\"></div>\r\n                                    </div>\r\n                                  </a>\r\n                                    <div class=\"m-widget19__content\">\r\n                                      <div class=\"m-widget19__header\">\r\n                                        <div class=\"m-widget19__user-img\">\r\n                                          <a href=\"annakrox\"><img class=\"m-widget19__img\" src=\"assets/app/media/img//users/user1.jpg\" alt=\"\"></a>\r\n                                        </div>\r\n                                        <div class=\"m-widget19__info\">\r\n                                          <span class=\"m-widget19__username\">\r\n                                             <a href=\"annakrox\">Anna Krox</a>\r\n                                          </span>\r\n                                          <br>\r\n                                          <span class=\"m-widget19__time\">\r\n                                            UX/UI Designer, Google\r\n                                          </span>\r\n                                        </div>\r\n                                      </div>\r\n                                    <a href=\"post\">\r\n                                      <div class=\"m-widget19__body m-nav__link-text\">\r\n                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text \r\n                                      </div>\r\n                                    </a>\r\n                                    </div>\r\n                                    <div>\r\n<!-- \r\n                                    <app-support-article [articleId]=\"articleData.articleId\" [userId]=\"user?.genjouristId\">\r\n                              \r\n                                      </app-support-article> -->\r\n                                    </div> \r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                \r\n                    <!--end:: Widgets/Blog-->\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                          <!--begin:: Widgets/Blog-->\r\n                          <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height \">\r\n                              <div class=\"m-portlet__head m-portlet__head--fit\">\r\n                                <div class=\"m-portlet__head-caption\">\r\n                                  <div class=\"m-portlet__head-action\">\r\n                                    <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-brand\">\r\n                                      Life\r\n                                    </button>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"m-portlet__body\">\r\n                                <div class=\"m-widget19\">\r\n                                    <a href=\"post\">\r\n                                      <div class=\"m-widget19__pic m-portlet-fit--top m-portlet-fit--sides\" style=\"min-height-: 286px\">\r\n                                        <img src=\"assets/app/media/img//blog/blog1.jpg\" alt=\"\">\r\n                                        <h3 class=\"m-widget19__title m--font-light\">\r\n                                          Introducing New Feature\r\n                                        </h3>\r\n                                        <div class=\"m-widget19__shadow\"></div>\r\n                                      </div>\r\n                                    </a>\r\n                                      <div class=\"m-widget19__content\">\r\n                                        <div class=\"m-widget19__header\">\r\n                                          <div class=\"m-widget19__user-img\">\r\n                                            <a href=\"annakrox\"><img class=\"m-widget19__img\" src=\"assets/app/media/img//users/user1.jpg\" alt=\"\"></a>\r\n                                          </div>\r\n                                          <div class=\"m-widget19__info\">\r\n                                            <span class=\"m-widget19__username\">\r\n                                               <a href=\"annakrox\">Anna Krox</a>\r\n                                            </span>\r\n                                            <br>\r\n                                            <span class=\"m-widget19__time\">\r\n                                              UX/UI Designer, Google\r\n                                            </span>\r\n                                          </div>\r\n                                        </div>\r\n                                      <a href=\"post\">\r\n                                        <div class=\"m-widget19__body m-nav__link-text\">\r\n                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text \r\n                                        </div>\r\n                                      </a>\r\n                                      </div>\r\n                                    \r\n                                  <div class=\"m-widget19__action\">\r\n                                      <div class=\"m--margin-top-5 m--margin-bottom-5 \">\r\n                                          <div class=\"m-btn-group m-btn-group--pill btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n                                            <button type=\"button\" class=\"m-btn btn btn-secondary\">\r\n                                              <i class=\"la la-file-text-o\"></i> Support \r\n                                            </button>\r\n                                            <div class=\"m-btn-group btn-group\" role=\"group\">\r\n                                              <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary m-btn m-btn--pill-last dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                                  <i class=\"flaticon-network\"></i> Replicate\r\n                                              </button>\r\n                                              <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\" x-placement=\"top-start\" style=\"position: absolute; transform: translate3d(0px, -176px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                                                <a class=\"dropdown-item\" href=\"#\">\r\n                                                  Dropdown link\r\n                                                </a>\r\n                                                <a class=\"dropdown-item\" href=\"#\">\r\n                                                  Dropdown link\r\n                                                </a>\r\n                                                <a class=\"dropdown-item\" href=\"#\">\r\n                                                  Dropdown link\r\n                                                </a>\r\n                                                <a class=\"dropdown-item\" href=\"#\">\r\n                                                  Dropdown link\r\n                                                </a>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                          </div>\r\n                          <!--end:: Widgets/Blog-->\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                      <!--begin:: Widgets/Blog-->\r\n                \r\n                          <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height \">\r\n                              <div class=\"m-portlet__head m-portlet__head--fit\">\r\n                                <div class=\"m-portlet__head-caption\">\r\n                                  <div class=\"m-portlet__head-action\">\r\n                                    <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-brand\">\r\n                                      Life\r\n                                    </button>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"m-portlet__body\">\r\n                                <div class=\"m-widget19\">\r\n                                    <a href=\"post\">\r\n                                      <div class=\"m-widget19__pic m-portlet-fit--top m-portlet-fit--sides\" style=\"min-height-: 286px\">\r\n                                        <img src=\"assets/app/media/img//blog/blog1.jpg\" alt=\"\">\r\n                                        <h3 class=\"m-widget19__title m--font-light\">\r\n                                          Introducing New Feature\r\n                                        </h3>\r\n                                        <div class=\"m-widget19__shadow\"></div>\r\n                                      </div>\r\n                                    </a>\r\n                                      <div class=\"m-widget19__content\">\r\n                                        <div class=\"m-widget19__header\">\r\n                                          <div class=\"m-widget19__user-img\">\r\n                                            <a href=\"annakrox\"><img class=\"m-widget19__img\" src=\"assets/app/media/img//users/user1.jpg\" alt=\"\"></a>\r\n                                          </div>\r\n                                          <div class=\"m-widget19__info\">\r\n                                            <span class=\"m-widget19__username\">\r\n                                                <a href=\"annakrox\">Anna Krox</a>\r\n                                            </span>\r\n                                            <br>\r\n                                            <span class=\"m-widget19__time\">\r\n                                              UX/UI Designer, Google\r\n                                            </span>\r\n                                          </div>\r\n                                        </div>\r\n                                      <a href=\"post\">\r\n                                        <div class=\"m-widget19__body m-nav__link-text\">\r\n                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text \r\n                                        </div>\r\n                                      </a>\r\n                                      </div>\r\n                                    \r\n                                  <div class=\"m-widget19__action\">\r\n                                      <div class=\"m--margin-top-5 m--margin-bottom-5 \">\r\n                                          <div class=\"m-btn-group m-btn-group--pill btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n                                            <button type=\"button\" class=\"m-btn btn btn-secondary\">\r\n                                              <i class=\"la la-file-text-o\"></i> Support \r\n                                            </button>\r\n                                            <div class=\"m-btn-group btn-group\" role=\"group\">\r\n                                              <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary m-btn m-btn--pill-last dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                                  <i class=\"flaticon-network\"></i> Replicate\r\n                                              </button>\r\n                                              <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\" x-placement=\"top-start\" style=\"position: absolute; transform: translate3d(0px, -176px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                                                <a class=\"dropdown-item\" href=\"#\">\r\n                                                  Dropdown link\r\n                                                </a>\r\n                                                <a class=\"dropdown-item\" href=\"#\">\r\n                                                  Dropdown link\r\n                                                </a>\r\n                                                <a class=\"dropdown-item\" href=\"#\">\r\n                                                  Dropdown link\r\n                                                </a>\r\n                                                <a class=\"dropdown-item\" href=\"#\">\r\n                                                  Dropdown link\r\n                                                </a>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                          </div>\r\n                  \r\n                      <!--end:: Widgets/Blog-->\r\n                  </div>     \r\n                  <div class=\"col-md-3\">\r\n                      <!--begin:: Widgets/Blog-->\r\n                \r\n                          <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height \">\r\n                              <div class=\"m-portlet__head m-portlet__head--fit\">\r\n                                <div class=\"m-portlet__head-caption\">\r\n                                  <div class=\"m-portlet__head-action\">\r\n                                    <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-brand\">\r\n                                      Life\r\n                                    </button>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"m-portlet__body\">\r\n                                <div class=\"m-widget19\">\r\n                                    <a href=\"post\">\r\n                                      <div class=\"m-widget19__pic m-portlet-fit--top m-portlet-fit--sides\" style=\"min-height-: 286px\">\r\n                                        <img src=\"assets/app/media/img//blog/blog1.jpg\" alt=\"\">\r\n                                        <h3 class=\"m-widget19__title m--font-light\">\r\n                                          Introducing New Feature\r\n                                        </h3>\r\n                                        <div class=\"m-widget19__shadow\"></div>\r\n                                      </div>\r\n                                    </a>\r\n                                      <div class=\"m-widget19__content\">\r\n                                        <div class=\"m-widget19__header\">\r\n                                          <div class=\"m-widget19__user-img\">\r\n                                            <a href=\"annakrox\"><img class=\"m-widget19__img\" src=\"assets/app/media/img//users/user1.jpg\" alt=\"\"></a>\r\n                                          </div>\r\n                                          <div class=\"m-widget19__info\">\r\n                                            <span class=\"m-widget19__username\">\r\n                                                <a href=\"annakrox\">Anna Krox</a>\r\n                                            </span>\r\n                                            <br>\r\n                                            <span class=\"m-widget19__time\">\r\n                                              UX/UI Designer, Google\r\n                                            </span>\r\n                                          </div>\r\n                                        </div>\r\n                                      <a href=\"post\">\r\n                                        <div class=\"m-widget19__body m-nav__link-text\">\r\n                                          Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it to make text \r\n                                        </div>\r\n                                      </a>\r\n                                      </div>\r\n                                    \r\n                                  <div class=\"m-widget19__action\">\r\n                                      <div class=\"m--margin-top-5 m--margin-bottom-5 \">\r\n                                          <div class=\"m-btn-group m-btn-group--pill btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n                                            <button type=\"button\" class=\"m-btn btn btn-secondary\">\r\n                                              <i class=\"la la-file-text-o\"></i> Support \r\n                                            </button>\r\n                                            <div class=\"m-btn-group btn-group\" role=\"group\">\r\n                                              <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-secondary m-btn m-btn--pill-last dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                                                  <i class=\"flaticon-network\"></i> Replicate\r\n                                              </button>\r\n                                              <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\" x-placement=\"top-start\" style=\"position: absolute; transform: translate3d(0px, -176px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n                                                <a class=\"dropdown-item\" href=\"#\">\r\n                                                  Dropdown link\r\n                                                </a>\r\n                                                <a class=\"dropdown-item\" href=\"#\">\r\n                                                  Dropdown link\r\n                                                </a>\r\n                                                <a class=\"dropdown-item\" href=\"#\">\r\n                                                  Dropdown link\r\n                                                </a>\r\n                                                <a class=\"dropdown-item\" href=\"#\">\r\n                                                  Dropdown link\r\n                                                </a>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                          </div>\r\n                  \r\n                      <!--end:: Widgets/Blog-->\r\n                  </div>           \r\n                </div>\r\n              </div>\r\n                <!--End::Main Portlet-->\r\n          \r\n                <!--End::Main Portlet-->\r\n            </div>\r\n        </div>\r\n        <!-- END: Subheader -->\r\n  \r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_genjourist_service__ = __webpack_require__("../../../../../src/app/services/genjourist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_support_service__ = __webpack_require__("../../../../../src/app/services/support.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_article_service__ = __webpack_require__("../../../../../src/app/services/article.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArticleComponent = (function () {
    function ArticleComponent(genjouristService, route, authService, supportService, router, articleService) {
        this.genjouristService = genjouristService;
        this.route = route;
        this.authService = authService;
        this.supportService = supportService;
        this.router = router;
        this.articleService = articleService;
    }
    //articleId:any = this.route.snapshot.params.articleId;
    ArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.article(this.route.snapshot.params.articleId).subscribe(function (data) {
            _this.articleData = data;
            console.log(_this.articleData);
        });
    };
    ArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-article',
            template: __webpack_require__("../../../../../src/app/components/article/article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/article/article.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_genjourist_service__["a" /* GenjouristService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_support_service__["a" /* SupportService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_article_service__["a" /* ArticleService */]])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/category/category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    text-decoration: none;\r\n}\r\n\r\na:active{\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n    <div style=\"margin-top:90px;\" ></div>\r\n<!-- ===================================== GLOBAL ==================================== -->\r\n\r\n\r\n    <div class=\"container\">    \r\n        <div class=\"card-columns\">\r\n            <div *ngFor=\"let journal of journals\">\r\n                \r\n                <div *ngIf=\"journal.type == 1; then article else quotation\" ></div>\r\n\r\n                <ng-template #article >\r\n                    <div class=\"card\">\r\n                        <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height \">\r\n                            <div class=\"m-portlet__head m-portlet__head--fit\">\r\n                            <div class=\"m-portlet__head-caption\">\r\n                                <div class=\"m-portlet__head-action\">\r\n                                <a [routerLink]=\"['/category',journal?.category]\">\r\n                                <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-brand\">\r\n                                    {{journal?.category}}\r\n                                </button>\r\n                                </a>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"m-portlet__body\">\r\n                            <div class=\"m-widget19\">\r\n                                <a [routerLink]=\"['/journal',journal?.journalId]\">\r\n                                    <div class=\"m-widget19__pic m-portlet-fit--top m-portlet-fit--sides\" style=\"min-height:-286px;\">\r\n                                    <img src= \"{{journal?.imgUrl}}\" alt=\"\">\r\n                                    <h3 class=\"m-widget19__title m--font-light\">\r\n                                        {{journal?.title}}\r\n                                    </h3>\r\n                                    <div class=\"m-widget19__shadow\"></div>\r\n                                    </div>\r\n                                </a>\r\n                                    <div class=\"m-widget19__content\">\r\n                                    <div class=\"m-widget19__header\">\r\n                                        <div class=\"m-widget19__user-img\">\r\n                                        <a [routerLink]=\"['/genjourist',journal?.genjouristId]\"><img class=\"m-widget19__img\" src=\"assets/app/media/img//users/user1.jpg\" alt=\"\"></a>\r\n                                        </div>\r\n                                        <div class=\"m-widget19__info\">\r\n                                        <span class=\"m-widget19__username\">\r\n                                            <a [routerLink]=\"['/genjourist',journal?.genjouristId]\">{{journal?.genjourist}}</a>\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"m-widget19__time\">\r\n                                            {{journal?.date | date:'medium' }}\r\n                                        </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <a [routerLink]=\"['/journal',journal?.journalId]\">\r\n                                        <div class=\"m-widget19__body m-nav__link-text\">\r\n                                            <div [innerHTML]=\" journal?.content | summary \"></div>\r\n                                        </div>\r\n                                    </a>\r\n                                    </div>\r\n                                \r\n                                <div class=\"m-widget19__action\">\r\n                                    <div class=\"m--margin-top-5 m--margin-bottom-5 m--margin-right-15\">\r\n                                    <div>\r\n                                        <app-support-article [journalId]=\"journal.journalId\" [userId]=\"user?.genjouristId\">\r\n                                        \r\n                                        </app-support-article>   \r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            </div> \r\n                        </div>\r\n                    </div>\r\n                    \r\n                </ng-template>\r\n\r\n                <ng-template #quotation >\r\n                    <div class=\"card\">\r\n                        <div class=\"m-portlet m-portlet--bordered-semi\">\r\n                            <div class=\"m-portlet__head\">\r\n                                <div class=\"m-portlet__head-caption\">\r\n                                <div class=\"m-portlet__head-title\">\r\n                                    <h3 class=\"m-portlet__head-text\">\r\n                                        <a [routerLink]=\"['/category',journal?.category]\">\r\n                                        <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-info\">\r\n                                            {{journal?.category}}\r\n                                        </button>\r\n                                        </a>\r\n                                    </h3>\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"m-portlet__body\">\r\n                                <!--begin::Widget 7-->\r\n                                <div class=\"m-widget7 m-widget7--skin-dark\">\r\n                                <div class=\"m-widget7__desc\">\r\n                                        <blockquote class=\"blockquote\">{{journal.content}} </blockquote>\r\n                                </div>\r\n                                <div class=\"m-widget7__user\">\r\n                                    <div class=\"m-widget7__user-img\">\r\n                                    <img class=\"m-widget7__img\" src=\"../../assets/app/media/img//users/100_3.jpg\" alt=\"\">\r\n                                    </div>\r\n                                    <div class=\"m-widget7__info\">\r\n                                    <span class=\"m-widget7__username\">\r\n                                        {{journal.genjourist}}\r\n                                    </span>\r\n                                    <br>\r\n                                    <span class=\"m-widget7__time\">\r\n                                        3 days ago\r\n                                    </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-widget7__button\">\r\n                                    <app-support-article [journalId]=\"journal.journalId\" [userId]=\"user?.genjouristId\">\r\n                                    \r\n                                    </app-support-article>  \r\n                                </div>\r\n                                </div>\r\n                                <!--end::Widget 7-->\r\n                            </div>\r\n                            </div>\r\n                    </div> \r\n                </ng-template>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_category_category_service__ = __webpack_require__("../../../../../src/app/services/category/category.service.ts");
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



var CategoryComponent = (function () {
    function CategoryComponent(categoryService, route) {
        this.categoryService = categoryService;
        this.route = route;
        this.journals = [];
        this.quotationContents = [];
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.JournalsByCategory(this.route.snapshot.params.categoryName).subscribe(function (data) {
            _this.journals = data;
        });
    };
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category',
            template: __webpack_require__("../../../../../src/app/components/category/category.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_category_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit/article/edit-article/edit-article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit/article/edit-article/edit-article.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n  <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body\">\r\n\r\n\t\t\t\t<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\r\n\t\t\t\t\t<div class=\"m-content\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-portlet\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t  Edit an article\r\n\t\t\t\t\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!--begin::Form-->\r\n\t\t\t\t\t\t\t\t\t<form enctype=\"multipart/form-data\" class=\"m-form m-form--fit m-form--label-align-right m-form--group-seperator\" method=\"POST\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tArticle Title:\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t  <input class=\"form-control m-input\" type=\"text\" [(ngModel)]=\"draftData.title\" name=\"title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease enter article title\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTags:\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" [(ngModel)]=\"draftData.tags\" name=\"tags\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tEx. - life,genjour\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tFeatured Image:\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tFile Browser\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-file\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <input [(ngModel)]=\"image\" type=\"file\" name=\"image\" >\t\t-->\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input  id=\"photo\" type=\"file\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-s\"  (click)=\"upload()\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button> <br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf = \"imgUrl\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input hidden [disabled]=\"!xyz\" [(ngModel)]=\"imgUrl\" name=\"imgUrl\"/> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n                      <div class=\"form-group1 m-form__group row\">\r\n                        <label class=\"col-lg-2 col-form-label\" for=\"caterogySelection\">\r\n                          Category\r\n                        </label>\r\n                        <select [(ngModel)]=\"draftData.category\" name=\"category\" class=\"custom-select\">\r\n                          <option selected=\"\">\r\n                            Choose category\r\n                          </option>\r\n                          <option value=\"Life\">\r\n                            Life\r\n                          </option>\r\n                          <option value=\"Economics\">\r\n                            Economics\r\n                          </option>\r\n                          <option value=\"Society\">\r\n                            Society\r\n                          </option>\r\n                          <option value=\"Controversy\">\r\n                            Controversy\r\n                          </option>\r\n                          <option value=\"Politics\">\r\n                            Politics\r\n                          </option>\r\n                          <option value=\"Self-Help\">\r\n                            Self-Help\r\n                          </option>\r\n                          <option value=\"Philosophy\">\r\n                            Philosophy\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group m-form__group--last form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tArticle Content\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"summernote\"></div> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control m-input\"  rows=\"8\" [(ngModel)]=\"draftData.content\" name=\"content\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__no-border m-portlet__foot--fit\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions m-form__actions--solid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-2\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 style=\"color:red\">{{throwStatus}}</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button (click)= \"draft(draftData.articleId)\" type=\"reset\" class=\"btn btn-info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDraft\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button (click)= \"articleSubmit(draftData.articleId)\" type=\"submit\" class=\"btn btn-primary\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPublish\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/']\" class=\"btn btn-danger\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t<!--end::Form-->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/edit/article/edit-article/edit-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_genjourist_service__ = __webpack_require__("../../../../../src/app/services/genjourist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_draftArticles__ = __webpack_require__("../../../../../src/app/components/models/draftArticles.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditArticleComponent = (function () {
    function EditArticleComponent(genjouristService, route, router) {
        this.genjouristService = genjouristService;
        this.route = route;
        this.router = router;
        this.draftData = new __WEBPACK_IMPORTED_MODULE_3__models_draftArticles__["a" /* draftArticles */]();
    }
    EditArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.genjouristService.getDraftArticles(this.route.snapshot.params.articleId).subscribe(function (data) {
            console.log(data);
            _this.draftData = data;
        });
    };
    EditArticleComponent.prototype.draft = function (articleId) {
        var _this = this;
        var article = {
            title: this.draftData.title,
            tags: this.draftData.tags,
            category: this.draftData.category,
            content: this.draftData.content,
            status: false,
        };
        this.genjouristService.draftArticles(articleId, article).subscribe(function (data) {
            if (data.success) {
                console.log('Yeah updated');
                _this.router.navigate(['/genjourist']);
            }
            else {
                console.log('cant update');
            }
        });
    };
    EditArticleComponent.prototype.articleSubmit = function (articleId) {
        var _this = this;
        var article = {
            title: this.draftData.title,
            tags: this.draftData.tags,
            category: this.draftData.category,
            content: this.draftData.content,
            status: true,
        };
        this.genjouristService.updateArticle(articleId, article).subscribe(function (data) {
            if (data.success) {
                console.log('Yeah updated');
                _this.router.navigate(['/genjourist']);
            }
            else {
                console.log('cant update');
            }
        });
    };
    EditArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-article',
            template: __webpack_require__("../../../../../src/app/components/edit/article/edit-article/edit-article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edit/article/edit-article/edit-article.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_genjourist_service__["a" /* GenjouristService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EditArticleComponent);
    return EditArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/edit/quotation/edit-quotation/edit-quotation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit/quotation/edit-quotation/edit-quotation.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  edit-quotation works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/edit/quotation/edit-quotation/edit-quotation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditQuotationComponent; });
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

var EditQuotationComponent = (function () {
    function EditQuotationComponent() {
    }
    EditQuotationComponent.prototype.ngOnInit = function () {
    };
    EditQuotationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-quotation',
            template: __webpack_require__("../../../../../src/app/components/edit/quotation/edit-quotation/edit-quotation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/edit/quotation/edit-quotation/edit-quotation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditQuotationComponent);
    return EditQuotationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/feeds/feeds.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a{\r\n    text-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/feeds/feeds.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\r\n  <div class=\"m-subheader\">\r\n\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n\r\n    <!-- Old User -->\r\n    <div *ngIf=\"!newUserStatus; then newUser else oldUser\"></div>\r\n\r\n    <ng-template #newUser>\r\n      <div class=\"col-md-8 m--margin-top-10 m--margin-left-40\">\r\n        here will be random posts according to categories\r\n      </div>\r\n    </ng-template>\r\n    \r\n    <!-- Old User -->\r\n    <ng-template #oldUser >\r\n      <div class=\"col-md-8 m--margin-top-10 m--margin-left-40\">\r\n          <div class=\"card-columns\">\r\n              <div *ngFor=\"let journal of journals\">\r\n                  \r\n                  <div *ngIf=\"journal.type == 1; then article else quotation\" ></div>\r\n  \r\n                  <ng-template #article >\r\n                      <div class=\"card\">\r\n                          <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height \">\r\n                              <div class=\"m-portlet__head m-portlet__head--fit\">\r\n                              <div class=\"m-portlet__head-caption\">\r\n                                  <div class=\"m-portlet__head-action\">\r\n                                  <a [routerLink]=\"['/category',journal?.category]\">\r\n                                  <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-brand\">\r\n                                      {{journal?.category}}\r\n                                  </button>\r\n                                  </a>\r\n                                  </div>\r\n                              </div>\r\n                              </div>\r\n                              <div class=\"m-portlet__body\">\r\n                              <div class=\"m-widget19\">\r\n                                  <a [routerLink]=\"['/journal',journal?.journalId]\">\r\n                                      <div class=\"m-widget19__pic m-portlet-fit--top m-portlet-fit--sides\" style=\"min-height:-286px;\">\r\n                                      <img src= \"{{journal?.imgUrl}}\" alt=\"\">\r\n                                      <h3 class=\"m-widget19__title m--font-light\">\r\n                                          {{journal?.title}}\r\n                                      </h3>\r\n                                      <div class=\"m-widget19__shadow\"></div>\r\n                                      </div>\r\n                                  </a>\r\n                                      <div class=\"m-widget19__content\">\r\n                                      <div class=\"m-widget19__header\">\r\n                                          <div class=\"m-widget19__user-img\">\r\n                                          <a [routerLink]=\"['/genjourist',journal?.genjouristId]\"><img class=\"m-widget19__img\" src=\"assets/app/media/img//users/user1.jpg\" alt=\"\"></a>\r\n                                          </div>\r\n                                          <div class=\"m-widget19__info\">\r\n                                          <span class=\"m-widget19__username\">\r\n                                              <a [routerLink]=\"['/genjourist',journal?.genjouristId]\">{{journal?.genjourist}}</a>\r\n                                          </span>\r\n                                          <br>\r\n                                          <span class=\"m-widget19__time\">\r\n                                              {{journal?.date | date:'medium' }}\r\n                                          </span>\r\n                                          </div>\r\n                                      </div>\r\n                                      <a [routerLink]=\"['/journal',journal?.journalId]\">\r\n                                          <div class=\"m-widget19__body m-nav__link-text\">\r\n                                              <div [innerHTML]=\" journal?.content | summary \"></div>\r\n                                          </div>\r\n                                      </a>\r\n                                      </div>\r\n                                  \r\n                                  <div class=\"m-widget19__action\">\r\n                                      <div class=\"m--margin-top-5 m--margin-bottom-5 m--margin-right-15\">\r\n                                      <div>\r\n                                          <app-support-article [journalId]=\"journal.journalId\" [userId]=\"user?.genjouristId\">\r\n                                          \r\n                                          </app-support-article>   \r\n                                      </div>\r\n                                      </div>\r\n                                  </div>\r\n                              </div>\r\n                              </div> \r\n                          </div>\r\n                      </div>\r\n                      \r\n                  </ng-template>\r\n  \r\n                  <ng-template #quotation >\r\n                      <div class=\"card\">\r\n                          <div class=\"m-portlet m-portlet--bordered-semi\">\r\n                              <div class=\"m-portlet__head\">\r\n                                  <div class=\"m-portlet__head-caption\">\r\n                                  <div class=\"m-portlet__head-title\">\r\n                                      <h3 class=\"m-portlet__head-text\">\r\n                                          <a [routerLink]=\"['/category',journal?.category]\">\r\n                                          <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-info\">\r\n                                              {{journal?.category}}\r\n                                          </button>\r\n                                          </a>\r\n                                      </h3>\r\n                                  </div>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"m-portlet__body\">\r\n                                  <!--begin::Widget 7-->\r\n                                  <div class=\"m-widget7 m-widget7--skin-dark\">\r\n                                  <div class=\"m-widget7__desc\">\r\n                                          <blockquote class=\"blockquote\">{{journal.content}} </blockquote>\r\n                                  </div>\r\n                                  <div class=\"m-widget7__user\">\r\n                                      <div class=\"m-widget7__user-img\">\r\n                                      <img class=\"m-widget7__img\" src=\"../../assets/app/media/img//users/100_3.jpg\" alt=\"\">\r\n                                      </div>\r\n                                      <div class=\"m-widget7__info\">\r\n                                      <span class=\"m-widget7__username\">\r\n                                          {{journal.genjourist}}\r\n                                      </span>\r\n                                      <br>\r\n                                      <span class=\"m-widget7__time\">\r\n                                          3 days ago\r\n                                      </span>\r\n                                      </div>\r\n                                  </div>\r\n                                  <div class=\"m-widget7__button\">\r\n                                      <app-support-article [journalId]=\"journal.journalId\" [userId]=\"user?.genjouristId\">\r\n                                      \r\n                                      </app-support-article>  \r\n                                  </div>\r\n                                  </div>\r\n                                  <!--end::Widget 7-->\r\n                              </div>\r\n                              </div>\r\n                      </div> \r\n                  </ng-template>\r\n  \r\n              </div>\r\n          </div>\r\n      </div>\r\n    </ng-template>\r\n    <div class=\"col-xl-3 m--margin-10\">\r\n      <app-recommend-user></app-recommend-user>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/feeds/feeds.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_feeds_feeds_service__ = __webpack_require__("../../../../../src/app/services/feeds/feeds.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedsComponent = (function () {
    function FeedsComponent(feedsService, authService) {
        this.feedsService = feedsService;
        this.authService = authService;
        this.newUserStatus = true;
    }
    FeedsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.userSubject.subscribe(function (data) {
            _this.user = data;
            console.log(_this.user.supporting.length);
            if (_this.user.supporting.length == 0) {
                _this.newUserStatus = false;
            }
            _this.feedsService.journalFeeds(_this.user.genjouristId).subscribe(function (data) {
                _this.journals = data;
                //console.log(data);
            });
        });
    };
    FeedsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-feeds',
            template: __webpack_require__("../../../../../src/app/components/feeds/feeds.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/feeds/feeds.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_feeds_feeds_service__["a" /* FeedsService */],
            __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], FeedsComponent);
    return FeedsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/feeds/new user/article-recommendation/article-recommendation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/feeds/new user/article-recommendation/article-recommendation.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  article-recommendation works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/feeds/new user/article-recommendation/article-recommendation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleRecommendationComponent; });
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

var ArticleRecommendationComponent = (function () {
    function ArticleRecommendationComponent() {
    }
    ArticleRecommendationComponent.prototype.ngOnInit = function () {
    };
    ArticleRecommendationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-article-recommendation',
            template: __webpack_require__("../../../../../src/app/components/feeds/new user/article-recommendation/article-recommendation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/feeds/new user/article-recommendation/article-recommendation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleRecommendationComponent);
    return ArticleRecommendationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/feeds/new user/recommend-user/recommend-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a, a:hover, a:link, a:active, a:visited{\r\n    color:#575962;\r\n    text-decoration: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/feeds/new user/recommend-user/recommend-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-portlet\">\r\n  <div class=\"m-portlet__head\">\r\n    <div class=\"m-portlet__head-caption\">\r\n      <div class=\"m-portlet__head-title\">\r\n        <h3 class=\"m-portlet__head-text\">\r\n          Recommended users\r\n        </h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"m-portlet__body\">\r\n      <div class=\"m-widget4\">\r\n          <!--begin::Widget 14 Item-->\r\n          <div *ngFor=\"let recommendedUser of recommendedUsers\" class=\"m-widget4__item\">\r\n            <div class=\"m-widget4__img m-widget4__img--pic\">\r\n              <img src=\"{{recommendedUser.profileImg}}\" alt=\"\">\r\n            </div>\r\n            <div class=\"m-widget4__info\">\r\n              <span class=\"m-widget4__title\">\r\n                <a [routerLink]=\"['/genjourist',recommendedUser.genjouristId]\">{{recommendedUser.name}}</a>\r\n              </span>\r\n              <br>\r\n              <span class=\"m-widget4__sub\">\r\n                  <span class=\"m-badge  m-badge--info m-badge--wide\">{{recommendedUser.dob | ageCategory}}</span>\r\n              </span>\r\n            </div>\r\n            <div class=\"m-widget4__ext\">\r\n              <app-support-btn></app-support-btn>\r\n            </div>\r\n          </div>\r\n          <!--end::Widget 14 Item-->       \r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/feeds/new user/recommend-user/recommend-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_genjourist_service__ = __webpack_require__("../../../../../src/app/services/genjourist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecommendUserComponent = (function () {
    function RecommendUserComponent(genjouristService, authService) {
        this.genjouristService = genjouristService;
        this.authService = authService;
    }
    RecommendUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.userSubject.subscribe(function (data) {
            _this.user = data;
            _this.genjouristService.recommendedUser(_this.user.genjouristId).subscribe(function (data) {
                _this.recommendedUsers = data;
                //console.log(data);
            });
        });
    };
    RecommendUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-recommend-user',
            template: __webpack_require__("../../../../../src/app/components/feeds/new user/recommend-user/recommend-user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/feeds/new user/recommend-user/recommend-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_genjourist_service__["a" /* GenjouristService */],
            __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */]])
    ], RecommendUserComponent);
    return RecommendUserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/genjourist/genjourist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a, a:link, a:visited, a:hover {\r\n    text-decoration: none;\r\n    color:#333439;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/genjourist/genjourist.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div  class=\"profileContainer\">\r\n  <div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\r\n    <!-- BEGIN: Subheader -->\r\n    <div class=\"m-subheader\">\r\n\r\n    </div> \r\n    <!-- END: Subheader -->\r\n    <div class=\"m-content m--margin-top-15 m--margin-25\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-4\">\r\n          <div class=\"m-portlet m-portlet--full-height  \">\r\n            <div class=\"m-portlet__body\">\r\n              <div class=\"m-card-profile\">\r\n                <div class=\"m-card-profile__title m--hide\">\r\n                  Profile\r\n                </div>\r\n                <div class=\"m-card-profile__pic\">\r\n                  <div class=\"m-card-profile__pic-wrapper\">\r\n                    <img src=\"{{genjouristData?.profileImg}}\" alt=\"\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"m-card-profile__details\">\r\n                    <span class=\"m-card-profile__name\">\r\n                      Genjourist {{genjouristData?.name}}\r\n                    </span>\r\n                  </div>\r\n                  <br>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"m-widget19__stats text-center\">\r\n                            <h3 class=\"m--font-brand\">\r\n                               {{supporterNumber}} \r\n                            </h3>\r\n                            <span class=\"m-widget19__comment\">\r\n                              Supporters\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <div class=\"m-widget19__stats text-center\">\r\n                            <h3 class=\"m--font-brand\">\r\n                                {{supportingNumber}}  \r\n                            </h3>\r\n                            <span class=\"m-widget19__comment\">\r\n                              Supporting\r\n                            </span>\r\n                        </div>\r\n                    </div>                     \r\n                </div>\r\n              </div>\r\n              <div class=\"m-separator\"></div>\r\n              <button type=\"button\" (click)=\"support(user?.genjouristId,genjouristData.genjouristId)\" class=\"btn m-btn--square  btn-primary btn-block\">\r\n                <div *ngIf=\"supportStatus\">Support</div>\r\n                <div *ngIf=\"!supportStatus\"> Stop Supporting</div>\r\n              </button>\r\n              <div *ngIf = \"!selfSupportAlert\">You cannot support your self :-)</div>\r\n              <ul class=\"m-nav m-nav--hover-bg m-portlet-fit--sides\">\r\n                <li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n                <li class=\"m-nav__section m--hide\">\r\n                  <span class=\"m-nav__section-text\">\r\n                    Section\r\n                  </span>\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                  <a class=\"m-nav__link\">\r\n                    <i class=\"m-nav__link-icon flaticon-profile-1\"></i>\r\n                    <span class=\"m-nav__link-title\">\r\n                      <span class=\"m-nav__link-wrap\">\r\n                        <span class=\"m-nav__link-text\">\r\n                          Age\r\n                        </span>\r\n                        <span class=\"m-nav__link-badge\">\r\n                          <span class=\"m-badge m-badge--success m-badge--wide\">\r\n                            {{genjouristData?.dob | ageCategory}}\r\n                          </span>\r\n                        </span>\r\n                      </span>\r\n                    </span>\r\n                  </a>\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                  <a class=\"m-nav__link\">\r\n                    <i class=\"m-nav__link-icon flaticon-share\"></i>\r\n                    <span class=\"m-nav__link-title\">\r\n                      <span class=\"m-nav__link-wrap\">\r\n                        <span class=\"m-nav__link-text\">\r\n                          Gender\r\n                        </span>\r\n                        <span class=\"m-nav__link-badge\">\r\n                          <span class=\"m-badge m-badge--info m-badge--wide\">\r\n                            {{genjouristData?.gender}}\r\n                          </span>\r\n                        </span>\r\n                      </span>\r\n                    </span>\r\n                  </a>\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                  <a  class=\"m-nav__link\">\r\n                    <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n                    <span class=\"m-nav_link-wrap\">\r\n                      <span class=\"m-nav__link-text\">\r\n                          Phone Number\r\n                        </span>\r\n                        <span class=\"m--pull-right p-details\">\r\n                            +8989565623\r\n                        </span>\r\n                    </span>\r\n                  </a>\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                  <a class=\"m-nav__link\">\r\n                    <i class=\"m-nav__link-icon flaticon-graphic-2\"></i>\r\n                    <span class=\"m-nav_link-wrap\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Email\r\n                          </span>\r\n                          <span class=\"m--pull-right p-details\">\r\n                              {{genjouristData?.email}}\r\n                          </span>\r\n                      </span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-9 col-lg-8\">\r\n          <div class=\"m-content\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg\">\r\n                <!--begin::Portlet-->\r\n                <div class=\"m-portlet\">\r\n                  <div class=\"m-portlet__body\">\r\n                    <ul class=\"nav nav-tabs  m-tabs-line\" role=\"tablist\">\r\n                      <li class=\"nav-item m-tabs__item\">\r\n                        <a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#m_tabs_6_1\" role=\"tab\">\r\n                          Articles\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"nav-item m-tabs__item\">\r\n                        <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_tabs_6_2\" role=\"tab\">\r\n                          Quotes\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"nav-item m-tabs__item\">\r\n                        <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_tabs_6_3\" role=\"tab\">\r\n                          Surpporters\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"nav-item m-tabs__item\">\r\n                        <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_tabs_6_4\" role=\"tab\">\r\n                          Supporting\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                      <div class=\"tab-pane active\" id=\"m_tabs_6_1\" role=\"tabpanel\">\r\n                          <div class=\"m--pull-right\">\r\n                              <ul class=\"m-portlet__nav\">\r\n                                <li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n                                  <a href=\"#\" class=\"m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand\">\r\n                                    Sort\r\n                                  </a>\r\n                                  <div class=\"m-dropdown__wrapper\">\r\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\" style=\"left: auto; right: 36.5px;\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                      <div class=\"m-dropdown__body\">\r\n                                        <div class=\"m-dropdown__content\">\r\n                                          <ul class=\"m-nav\">\r\n                                            <li class=\"m-nav__item\">\r\n                                              <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-share\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                  Yesterday\r\n                                                </span>\r\n                                              </a>\r\n                                            </li>\r\n                                            <li class=\"m-nav__item\">\r\n                                              <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                  Week\r\n                                                </span>\r\n                                              </a>\r\n                                            </li>\r\n                                            <li class=\"m-nav__item\">\r\n                                              <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-info\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                  Month\r\n                                                </span>\r\n                                              </a>\r\n                                            </li>\r\n                                            <li class=\"m-nav__item\">\r\n                                              <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                  Year\r\n                                                </span>\r\n                                              </a>\r\n                                            </li>\r\n                                          </ul>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </li>\r\n                              </ul>\r\n                          </div>\r\n                          <div class=\"m-widget5\">\r\n                            <div class=\"m-widget5__item\" *ngFor=\"let journal of journals\">\r\n                              <div class=\"m-widget5__pic\">\r\n                                <img class=\"m-widget7__img\" src=\"assets/app/media/img/products/product6.jpg\" alt=\"\">\r\n                              </div>\r\n                              <div class=\"m-widget5__content\">\r\n                                <h4 class=\"m-widget5__title\">\r\n                                 <a [routerLink]=\"['/journal',journal.articleId]\" > {{journal.title}} </a>\r\n                                </h4>\r\n                                <span class=\"m-widget5__desc\">\r\n                                  {{journal.content | summary}}\r\n                                </span>\r\n                                <div class=\"m-widget5__info\">\r\n                                  <span class=\"m-widget5__info-date m--font-info\">\r\n                                    {{journal.date | date:'medium' }}\r\n                                  </span>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"m-widget5__stats1\">\r\n                                <span class=\"m-widget5__number\">\r\n                                  {{journal.supportNumber}}\r\n                                </span>\r\n                                <br>\r\n                                <span class=\"m-widget5__sales\">\r\n                                  supports\r\n                                </span>\r\n                              </div>\r\n                              <div class=\"m-widget5__stats2\">\r\n                                <span class=\"m-widget5__number\">\r\n                                  {{journal.replicateNumber}}\r\n                                </span>\r\n                                <br>\r\n                                <span class=\"m-widget5__votes\">\r\n                                  replicates\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"tab-pane\" id=\"m_tabs_6_2\" role=\"tabpanel\">\r\n                          <div class=\"m--pull-right\">\r\n                              <ul class=\"m-portlet__nav\">\r\n                                <li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n                                  <a href=\"#\" class=\"m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand\">\r\n                                    Sort\r\n                                  </a>\r\n                                  <div class=\"m-dropdown__wrapper\">\r\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\" style=\"left: auto; right: 36.5px;\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                      <div class=\"m-dropdown__body\">\r\n                                        <div class=\"m-dropdown__content\">\r\n                                          <ul class=\"m-nav\">\r\n                                            <li class=\"m-nav__item\">\r\n                                              <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-share\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                  Yesterday\r\n                                                </span>\r\n                                              </a>\r\n                                            </li>\r\n                                            <li class=\"m-nav__item\">\r\n                                              <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                  Week\r\n                                                </span>\r\n                                              </a>\r\n                                            </li>\r\n                                            <li class=\"m-nav__item\">\r\n                                              <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-info\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                  Month\r\n                                                </span>\r\n                                              </a>\r\n                                            </li>\r\n                                            <li class=\"m-nav__item\">\r\n                                              <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                  Year\r\n                                                </span>\r\n                                              </a>\r\n                                            </li>\r\n                                          </ul>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </li>\r\n                              </ul>\r\n                          </div>\r\n                          <div class=\"m-widget5\">\r\n                            <div class=\"m-widget5__item\" *ngFor=\"let quotation of quotations\">\r\n                              <div class=\"m-widget5__content m-widget2__item m-widget2__item--primary\">\r\n                                <h4 class=\"m-widget5__title\">\r\n                                  {{quotation.title}}\r\n                                </h4>\r\n                                <span class=\"m-widget5__title\">\r\n                                  {{quotation.content}}\r\n                                </span>\r\n                                <div class=\"m-widget5__info\">\r\n                                  <span class=\"m-widget5__info-date m--font-info\">\r\n                                    {{quotation.date | date:'medium' }}\r\n                                  </span>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"m-widget5__stats1\">\r\n                                <span class=\"m-widget5__number\">\r\n                                  {{quotation.supportNumber}}\r\n                                </span>\r\n                                <br>\r\n                                <span class=\"m-widget5__sales\">\r\n                                  supports\r\n                                </span>\r\n                              </div>\r\n                              <div class=\"m-widget5__stats2\">\r\n                                <span class=\"m-widget5__number\">\r\n                                  {{quotation.replicateNumber}}\r\n                                </span>\r\n                                <br>\r\n                                <span class=\"m-widget5__votes\">\r\n                                  replicates\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"tab-pane\" id=\"m_tabs_6_3\" role=\"tabpanel\">\r\n                            <div class=\"m-portlet__body\">\r\n                                  <div class=\"m-widget4\" *ngFor = \"let supportersList of supportersLists\">\r\n                                    <div>{{supportingListsStatus}}</div>\r\n                                    <div class=\"m-widget4__item\">\r\n                                      <div class=\"m-widget4__img m-widget4__img--pic\">\r\n                                        <img src=\"{{supportersList.details.profileImg}}\" alt=\"\">\r\n                                      </div>\r\n                                      <div class=\"m-widget4__info\">\r\n                                        <span class=\"m-widget4__title\">\r\n                                          <a [routerLink]=\"['/genjourist',supportersList.details.genjouristId]\" (click)=\"refreshUser()\">\r\n                                            {{supportersList.details.name}}\r\n                                          </a>\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"m-widget4__sub\">\r\n                                            <span class=\"m-badge m-badge--brand m-badge--wide\">\r\n                                              14-30\r\n                                            </span>\r\n                                        </span>\r\n                                      </div>\r\n                                      <div class=\"m-widget4__ext\">\r\n                                        <a href=\"#\" class=\"m-btn m-btn--pill m-btn--hover-brand btn btn-sm btn-secondary\">\r\n                                          Follow\r\n                                        </a>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                \r\n                            </div>\r\n                      </div>\r\n                      <div class=\"tab-pane\" id=\"m_tabs_6_4\" role=\"tabpanel\">\r\n                            <div class=\"m-portlet__body\">\r\n                                  <div class=\"m-widget4\" *ngFor = \"let supportingList of supportingLists\">\r\n                                    <div class=\"m-widget4__item\">\r\n                                      <div class=\"m-widget4__img m-widget4__img--pic\">\r\n                                        <img src=\"{{supportingList.details.profileImg}}\" alt=\"\">\r\n                                      </div>\r\n                                      <div class=\"m-widget4__info\">\r\n                                        <span class=\"m-widget4__title\">\r\n                                          <a [routerLink]=\"['/genjourist',supportingList.details.genjouristId]\" (click)=\"refreshUser()\">\r\n                                            {{supportingList.details.name}}\r\n                                          </a>\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"m-widget4__sub\">\r\n                                            <span class=\"m-badge m-badge--brand m-badge--wide\">\r\n                                              14-30\r\n                                            </span>\r\n                                        </span>\r\n                                      </div>\r\n                                      <div class=\"m-widget4__ext\">\r\n                                        <a href=\"#\" class=\"m-btn m-btn--pill m-btn--hover-brand btn btn-sm btn-secondary\">\r\n                                          Follow\r\n                                        </a>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n          \r\n                \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/genjourist/genjourist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenjouristComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_genjourist_service__ = __webpack_require__("../../../../../src/app/services/genjourist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_support_service__ = __webpack_require__("../../../../../src/app/services/support.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_socket_socket_service__ = __webpack_require__("../../../../../src/app/services/socket/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GenjouristComponent = (function () {
    function GenjouristComponent(genjouristService, route, authService, supportService, router, socketService) {
        this.genjouristService = genjouristService;
        this.route = route;
        this.authService = authService;
        this.supportService = supportService;
        this.router = router;
        this.socketService = socketService;
        this.selfSupportAlert = true;
        this.supportersLists = [];
        this.supportingLists = [];
    }
    GenjouristComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.userSubject.subscribe(function (user) {
            _this.user = user;
            //console.log(this.user);       
            _this.genjouristService.genjouristProfile(_this.route.snapshot.params.id).subscribe(function (genjourist) {
                _this.genjouristData = genjourist;
                // console.log(this.genjouristData);
                //======================================================================================================
                // ========================================= Support Status ============================================
                var n = _this.user.supporting;
                if (n.includes(_this.route.snapshot.params.id) == true) {
                    _this.supportStatus = false;
                }
                else {
                    _this.supportStatus = true;
                }
                //======================================================================================================
                if (_this.supporterNumber == null) {
                    _this.supporterNumber = 0;
                }
                if (_this.supportingNumber == null) {
                    _this.supportingNumber = 0;
                }
            });
            _this.genjouristService.articles(_this.route.snapshot.params.id).subscribe(function (article) {
                _this.journals = article.filter(function (x) { return x.status == true; });
            });
            _this.genjouristService.quotation(_this.route.snapshot.params.id).subscribe(function (quotation) {
                _this.quotations = quotation.filter(function (x) { return x.status == true; });
            });
        });
        //=================================================================================================
        //======================================= LIST ====================================================
        //=================================================================================================
        this.genjouristService.getSupportingList(this.route.snapshot.params.id).subscribe(function (data) {
            _this.supportingLists = data;
            _this.supportingNumber = data.length;
            //console.log(this.supportingLists);
        });
        this.genjouristService.getSupportersList(this.route.snapshot.params.id).subscribe(function (data) {
            _this.supportersLists = data;
            _this.supporterNumber = data.length;
            //console.log(this.supportersLists)
        });
    };
    GenjouristComponent.prototype.support = function (userId, genjouristId) {
        var _this = this;
        if (this.authService.loggedIn()) {
            if (userId == genjouristId) {
                //console.log('You cannot like your own profile');
                this.selfSupportAlert = false;
                return this.selfSupportAlert;
            }
            // ========================================= Support Status ===========================================
            if (this.supportStatus === true) {
                this.supportStatus = false;
            }
            else if (this.supportStatus === false) {
                this.supportStatus = true;
            }
            //============================================ Support Code ============================================
            this.supportService.supportGenjourist(userId, genjouristId).subscribe(function (data) {
                // this.supporterNumber = data.msg;
                console.log(data.msg);
                _this.genjouristService.genjouristProfile(_this.route.snapshot.params.id).subscribe(function (data) {
                    console.log(data.supporters.length);
                    _this.supporterNumber = data.supporters.length;
                });
            });
            //========================================= Supporting Code ============================================
            this.supportService.supportingGenjourist(userId, genjouristId).subscribe(function (data) {
                //this.supportingNumber = data.msg;
                console.log(data.msg);
            });
            this.genjouristService.genjouristProfile(this.route.snapshot.params.id).subscribe(function (data) {
                console.log(data.supporters.length);
                _this.supportingNumber = data.supporting.length;
            });
        }
        else {
            this.router.navigate(['/login']);
            console.log('first logged in then support us');
        }
    };
    GenjouristComponent.prototype.refreshUser = function () {
        var _this = this;
        this.ngOnInit();
        this.genjouristService.getSupportingList(this.route.snapshot.params.id).subscribe(function (data) {
            _this.supportingLists = data;
            //console.log(this.supportingLists);
        });
    };
    GenjouristComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-genjourist',
            template: __webpack_require__("../../../../../src/app/components/genjourist/genjourist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/genjourist/genjourist.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_genjourist_service__["a" /* GenjouristService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_support_service__["a" /* SupportService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_socket_socket_service__["a" /* SocketService */]])
    ], GenjouristComponent);
    return GenjouristComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/journals/journals.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\na, a:link, a:active, a:hover, a:visited {\r\n  color:#575962;\r\n  text-decoration: none;\r\n}\r\n\r\n.m-scroll-bottom {\r\n    width: 40px;\r\n    height: 40px;\r\n    position: fixed;\r\n    top: 90px;\r\n    right: 20px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    \r\n    padding-top: 9px;\r\n    z-index: 1;\r\n    border-radius: 100%; }\r\n    .m-scroll-bottom > i {\r\n      font-size: 1.3rem; }\r\n    .m-scroll-bottom:hover {\r\n      text-decoration: none; }\r\n    .m-scroll-bottom--shown .m-scroll-bottom {\r\n      display: block; }\r\n  \r\n  .m-scroll-bottom {\r\n    background: #fff;\r\n    box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.2); }\r\n    .m-scroll-bottom > i {\r\n      color: #cfcedb; }\r\n    .m-scroll-bottom:hover > i {\r\n      color: #716aca; }\r\n  \r\n  .m-scroll-bottom.m-scroll-bottom--skin-dark {\r\n    background: #555;\r\n    box-shadow: 0px 0px 15px 1px rgba(113, 106, 202, 0.4); }\r\n    .m-scroll-bottom.m-scroll-bottom--skin-dark > i {\r\n      color: #dfdff1; }\r\n    .m-scroll-bottom.m-scroll-bottom--skin-dark:hover > i {\r\n      color: #716aca; }\r\n\r\n/* .card-block{\r\n  padding: 2rem 2rem;\r\n} */\r\n\r\n.card-columns {\r\n\r\n  -webkit-column-count: 4;\r\n\r\n          column-count: 4;\r\n  -webkit-column-gap: 1.25rem;\r\n          column-gap: 1.25rem;\r\n}\r\n\r\n\r\n \r\n@media (max-width: 450px) {\r\n  .card-columns {\r\n    -webkit-column-count: 1;\r\n    column-count: 1;\r\n    -webkit-column-gap: 1.25rem;\r\n    column-gap: 1.25rem;\r\n  }\r\n  .card-columns .card {\r\n    display: inline-block;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/journals/journals.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n    <div style=\"margin-top:90px;\" ></div>\r\n    <div class=\"m-scroll-bottom m-scroll-bottom--skin-bottom--skin-dark \" data-toggle=\"m-tooltip\" data-placement=\"left\" title=\"Global/Circle\" (click)=\"toggle()\">\r\n        <i *ngIf=\"status\" class=\"la la-globe\"></i>\r\n        <i *ngIf=\"!status\" class=\"la la-circle\"></i>\r\n    </div>\r\n\r\n<!-- ===================================== GLOBAL ==================================== -->\r\n\r\n<div *ngIf=\"status\">\r\n    <div class=\"container\">    \r\n        <!--\r\n        <div *ngIf=\"status\" >global</div>\r\n        <div *ngIf=\"!status\" >circle</div>\r\n        <app-articles *ngIf=\"status\" ></app-articles>\r\n        <app-feeds *ngIf=\"!status\" ></app-feeds> -->\r\n        <!-- <app-quotations></app-quotations>  -->\r\n        <div class=\"card-columns\">\r\n            <div *ngFor=\"let journal of journals\">\r\n                \r\n                <div *ngIf=\"journal.type == 1; then article else quotation\" ></div>\r\n\r\n                <ng-template #article >\r\n                    <div class=\"card\">\r\n                        <div class=\"m-portlet m-portlet--bordered-semi m-portlet--full-height \">\r\n                            <div class=\"m-portlet__head m-portlet__head--fit\">\r\n                            <div class=\"m-portlet__head-caption\">\r\n                                <div class=\"m-portlet__head-action\">\r\n                                <a [routerLink]=\"['/category',journal?.category]\">\r\n                                <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-brand\">\r\n                                    {{journal?.category}}\r\n                                </button>\r\n                                </a>\r\n                                </div>\r\n                            </div>\r\n                            </div>\r\n                            <div class=\"m-portlet__body\">\r\n                            <div class=\"m-widget19\">\r\n                                <a [routerLink]=\"['/journal',journal?.journalId]\">\r\n                                    <div class=\"m-widget19__pic m-portlet-fit--top m-portlet-fit--sides\" style=\"min-height:-286px;\">\r\n                                    <img src= \"{{journal?.imgUrl}}\" alt=\"\">\r\n                                    <h3 class=\"m-widget19__title m--font-light\">\r\n                                        {{journal?.title}}\r\n                                    </h3>\r\n                                    <div class=\"m-widget19__shadow\"></div>\r\n                                    </div>\r\n                                </a>\r\n                                    <div class=\"m-widget19__content\">\r\n                                    <div class=\"m-widget19__header\">\r\n                                        <div class=\"m-widget19__user-img\">\r\n                                        <a [routerLink]=\"['/genjourist',journal?.genjouristId]\"><img class=\"m-widget19__img\" src=\"{{journal.details.profileImg}}\" alt=\"\"></a>\r\n                                        </div>\r\n                                        <div class=\"m-widget19__info\">\r\n                                        <span class=\"m-widget19__username\">\r\n                                            <a [routerLink]=\"['/genjourist',journal?.genjouristId]\">{{journal?.genjourist}}</a>\r\n                                        </span>\r\n                                        <br>\r\n                                        <span class=\"m-widget19__time\">\r\n                                            {{journal?.date | date:'medium' }}\r\n                                        </span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <a [routerLink]=\"['/journal',journal?.journalId]\">\r\n                                        <div class=\"m-widget19__body m-nav__link-text\">\r\n                                            <div [innerHTML]=\" journal?.content | summary \"></div>\r\n                                        </div>\r\n                                    </a>\r\n                                    </div>\r\n                                \r\n                                <div class=\"m-widget19__action\">\r\n                                    <div class=\"m--margin-top-5 m--margin-bottom-5 m--margin-right-15\">\r\n                                    <div>\r\n                                        <app-support-article [journalId]=\"journal.journalId\" [userId]=\"user?.genjouristId\">\r\n                                        \r\n                                        </app-support-article>   \r\n                                    </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            </div> \r\n                        </div>\r\n                    </div>\r\n                    \r\n                </ng-template>\r\n\r\n                <ng-template #quotation >\r\n                    <div class=\"card\">\r\n                        <div class=\"m-portlet m-portlet--bordered-semi\">\r\n                            <div class=\"m-portlet__head\">\r\n                                <div class=\"m-portlet__head-caption\">\r\n                                <div class=\"m-portlet__head-title\">\r\n                                    <h3 class=\"m-portlet__head-text\">\r\n                                        <a [routerLink]=\"['/category',journal?.category]\">\r\n                                        <button type=\"button\" class=\"btn btn-sm m-btn--pill  btn-info\">\r\n                                            {{journal?.category}}\r\n                                        </button>\r\n                                        </a>\r\n                                    </h3>\r\n                                </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"m-portlet__body\">\r\n                                <!--begin::Widget 7-->\r\n                                <div class=\"m-widget7 m-widget7--skin-dark\">\r\n                                <div class=\"m-widget7__desc\">\r\n                                        <blockquote class=\"blockquote\">{{journal.content}} </blockquote>\r\n                                </div>\r\n                                <div class=\"m-widget7__user\">\r\n                                    <div class=\"m-widget7__user-img\">\r\n                                    <img class=\"m-widget7__img\" src=\"{{journal.details.profileImg}}\" alt=\"\">\r\n                                    </div>\r\n                                    <div class=\"m-widget7__info\">\r\n                                    <a [routerLink]=\"['/genjourist',journal.genjouristId]\" >\r\n                                        <span class=\"m-widget7__username\">\r\n                                            {{journal.genjourist}}\r\n                                        </span>\r\n                                    </a>\r\n                                    <br>\r\n                                    <span class=\"m-widget7__time\">\r\n                                        3 days ago\r\n                                    </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-widget7__button\">\r\n                                    <app-support-article [journalId]=\"journal.journalId\" [userId]=\"user?.genjouristId\">\r\n                                    \r\n                                    </app-support-article>  \r\n                                </div>\r\n                                </div>\r\n                                <!--end::Widget 7-->\r\n                            </div>\r\n                            </div>\r\n                    </div> \r\n                </ng-template>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- ===================================== CIRCLE ==================================== -->    \r\n\r\n<div *ngIf=\"!status\">\r\n    <app-feeds></app-feeds>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/journals/journals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_journals_service__ = __webpack_require__("../../../../../src/app/services/journals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JournalsComponent = (function () {
    function JournalsComponent(authService, router, journalService) {
        this.authService = authService;
        this.router = router;
        this.journalService = journalService;
        this.status = true;
        this.journals = [];
    }
    JournalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.userSubject.subscribe(function (data) {
            _this.user = data;
        });
        this.journalService.getJournal().subscribe(function (data) {
            _this.journals = data;
            console.log(_this.journals);
        });
    };
    JournalsComponent.prototype.toggle = function () {
        if (this.authService.loggedIn()) {
            if (this.status == true) {
                this.status = false;
            }
            else if (this.status == false) {
                this.status = true;
            }
        }
        else {
            this.status = true;
            this.router.navigate(['/login']);
        }
    };
    JournalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-journals',
            template: __webpack_require__("../../../../../src/app/components/journals/journals.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/journals/journals.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__services_journals_service__["a" /* JournalsService */]])
    ], JournalsComponent);
    return JournalsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-grid.m-grid--hor:not(.m-grid--desktop):not(.m-grid--desktop-and-tablet):not(.m-grid--tablet):not(.m-grid--tablet-and-mobile):not(.m-grid--mobile).m-grid--root {\r\n    \r\n    height: 100vh;\r\n}\r\n\r\nbody{\r\n    margin-top:-45px;\r\n}\r\n\r\n.m-login.m-login--1 .m-login__wrapper{\r\n    padding : 10% 2rem 2rem 2rem;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"m--skin- m-header--fixed m-header--fixed-mobile m-aside-left--enabled m-aside-left--skin-dark m-aside-left--offcanvas m-footer--push m-aside--offcanvas-default\"  >\r\n\t<!-- begin:: Page -->\r\n\t<div class=\"m-grid m-grid--hor m-grid--root m-page\">\r\n\t\t<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--singin\" id=\"m_login\">\r\n\t\t\t<div class=\"m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside\">\r\n\t\t\t\t<div class=\"m-stack m-stack--hor m-stack--desktop\">\r\n\t\t\t\t\t<div class=\"m-stack__item m-stack__item--fluid\">\r\n\t\t\t\t\t\t<div class=\"m-login__wrapper\">\r\n\t\t\t\t\t\t\t<div class=\"m-login__logo\">\r\n\t\t\t\t\t\t\t\t<a [routerLink]=\"['/']\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"assets/img/genjour.png\" height=\"110\">\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"m-login__signin\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-login__head\">\r\n\t\t\t\t\t\t\t\t\t<h3 class=\"m-login__title\">\r\n\t\t\t\t\t\t\t\t\t\tSign In To Genjour\r\n\t\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<form class=\"m-login__form m-form\" (submit)=\"Login()\"> \r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input\" type=\"text\" [(ngModel)]=\"username\" placeholder=\"Username\" name=\"username\" autocomplete=\"off\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group\">\r\n\t\t\t\t\t\t\t\t\t\t<input class=\"form-control m-input m-login__form-input--last\" [(ngModel)]=\"password\" type=\"password\" placeholder=\"Password\" name=\"password\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div style=\"color:red;\">{{checkStatus}}</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row m-login__form-sub\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col m--align-left\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"m-checkbox m-checkbox--focus\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"remember\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tRemember me\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span></span>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col m--align-right\">\r\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"m-link\">\r\n\t\t\t\t\t\t\t\t\t\t\t\tForget Password ?\r\n\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-login__form-action\">\r\n\t\t\t\t\t\t\t\t\t\t<button  type=\"submit\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\r\n\t\t\t\t\t\t\t\t\t\t\tSign In\r\n\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t<div class=\"m-stack__item m-stack__item--center\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-login__account\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"m-login__account-msg\">\r\n\t\t\t\t\t\t\t\t\t\t\tDon't have an account yet ?\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/register']\" id=\"m_login_signup\" class=\"m-link m-link--focus m-login__account-link\">\r\n\t\t\t\t\t\t\t\t\t\t\tSign Up\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1\tm-login__content\" style=\"background-image: url(../../../assets/app/media/img//bg/bg-4.jpg)\">\r\n\t\t\t\t<div class=\"m-grid__item m-grid__item--middle\">\r\n\t\t\t\t\t<h3 class=\"m-login__welcome\">\r\n\t\t\t\t\t\tGenjour <br> <del>Social</del> Societal Network \r\n\t\t\t\t\t</h3>\r\n\t\t\t\t\t<p class=\"m-login__msg\">\r\n\t\t\t\t\t\tMeet people with similar ideologies and beliefs. <br>\r\n            \t\t\tLet's make a better society to live in.Lets talk out our true emotions. <br>\r\n            \t\t\tConnect better and let's bridge the gap between the opinions by writing in the Generations' Journal.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<script src=\"../../../assets/snippets/pages/user/login.js\" type=\"text/javascript\"></script>\r\n</body>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
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
    function LoginComponent(authService, router, validateService) {
        this.authService = authService;
        this.router = router;
        this.validateService = validateService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Login = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        if (this.username == undefined || this.password == undefined) {
            this.checkStatus = "Enter Username & Password Correctly";
            return false;
        }
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success == false) {
                _this.checkStatus = data.msg;
                console.log(_this.checkStatus);
            }
            else if (data.success == true) {
                _this.authService.storeUserData(data.token, data.user);
                _this.router.navigate(['feeds']);
            }
            else {
                console.log("Inncoret Username or password");
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__services_validate_service__["a" /* ValidateService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/models/draftArticles.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return draftArticles; });
var draftArticles = (function () {
    function draftArticles() {
    }
    return draftArticles;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    text-decoration:none;\r\n}\r\n.m-header-search .m-header-search__wrapper{\r\n    background-color:transparent;\r\n    border:1px solid #e8e7f4;\r\n}\r\n\r\n  \r\n\r\n@media all and (max-width: 479px) {\r\n.m-header-search__form{\r\n    visibility:hidden;\r\n}\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"m-grid__item m-header \"  >\r\n  <div class=\"m-container m-container--fluid m-container--full-height\">\r\n    <div class=\"m-stack m-stack--ver m-stack--desktop\">\r\n      <!-- BEGIN: Brand -->\r\n      <div class=\"m-stack__item m-brand  m-brand--skin-light \">\r\n        <div class=\"m-stack m-stack--ver m-stack--general  m-stack--inline\">\r\n          <div class=\"m-stack__item m-stack__item--middle m-brand__logo\">\r\n            <a [routerLink]=\"['/']\" class=\"m-brand__logo-wrapper\">\r\n              <img alt=\"\" height=\"45\" src=\"assets/img/logo-dark.png\"/>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- END: Brand -->\r\n      <div class=\"m-stack__item m-stack__item--fluid m-header-head\" id=\"m_header_nav\">\r\n        <div id=\"m_header_topbar\" class=\"m-topbar m-stack m-stack--ver m-stack--general\">\r\n            <div class=\"m-stack__item m-stack__item--middle m-dropdown--skin-light m-header-search m-header-search--expandable\" id=\"m_quicksearch\" data-search-type=\"default\">\r\n              <app-search></app-search>\r\n            </div>\r\n          <div class=\"m-stack__item m-topbar__nav-wrapper\">\r\n            <ul class=\"m-topbar__nav m-nav m-nav--inline\">\r\n              \r\n              <li class=\"m--margin-top-5 m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-center \tm-dropdown--mobile-full-width\" data-dropdown-toggle=\"click\" data-dropdown-persistent=\"true\">\r\n                  <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n                      <div class=\"btn btn-secondary m-btn m-btn--icon m-btn--pill\">\r\n                          <i class=\"m-menu__link-icon flaticon-edit-1\"></i>\r\n                      </div>   \r\n                  </a>  \r\n                <div class=\"m-dropdown__wrapper\">\r\n                  <div class=\"m-dropdown__inner\">\r\n                      <div class=\"m-dropdown__body m-dropdown__body--paddingless\">\r\n                          <div class=\"m-dropdown__content\">\r\n                            <div class=\"m-scrollable\" data-scrollable=\"false\" data-max-height=\"380\" data-mobile-max-height=\"200\">\r\n                              <div class=\"m-nav-grid m-nav-grid--skin-light\">\r\n                                <div class=\"m-nav-grid__row\">\r\n                                  <a [routerLink] = \"['/write-article']\" class=\"m-nav-grid__item\">\r\n                                    <i class=\"m-nav-grid__icon flaticon-file\"></i>\r\n                                    <span class=\"m-nav-grid__text\">\r\n                                      Article\r\n                                    </span>\r\n                                  </a>\r\n                                  <a [routerLink] = \"['/write-quotation']\"  class=\"m-nav-grid__item\">\r\n                                    <i class=\"m-nav-grid__icon la\tla-quote-left m--margin-bottom-15\"></i>\r\n                                    <span class=\"m-nav-grid__text\">\r\n                                      Quotation\r\n                                    </span>\r\n                                  </a>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li *ngIf=\"authService.loggedIn()\" class=\"m-nav__item m-topbar__notifications m-topbar__notifications--img m-dropdown m-dropdown--large m-dropdown--header-bg-fill m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push \tm-dropdown--mobile-full-width\" data-dropdown-toggle=\"click\" data-dropdown-persistent=\"true\">\r\n                  <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\" id=\"m_topbar_notification_icon\">\r\n                    <span class=\"m-nav__link-badge m-badge m-badge--dot m-badge--dot-small m-badge--danger\"></span>\r\n                    <span class=\"m-nav__link-icon\">\r\n                      <i class=\"flaticon-music-2\"></i>\r\n                    </span>\r\n                  </a>\r\n                  <div class=\"m-dropdown__wrapper\">\r\n                      <span class=\"m-dropdown__arrow m-dropdown__arrow--right\"></span>\r\n                    <div class=\"m-dropdown__inner\">\r\n                      <div class=\"m-dropdown__header m--align-center\" style=\"background: url(assets/app/media/img/misc/notification_bg.jpg); background-size: cover;\">\r\n                        <span class=\"m-dropdown__header-title\">\r\n                          9 New\r\n                        </span>\r\n                        <span class=\"m-dropdown__header-subtitle\">\r\n                          User Notifications\r\n                        </span>\r\n                      </div>\r\n                      <div class=\"m-dropdown__body\">\r\n                        <div class=\"m-dropdown__content\">\r\n                          <ul class=\"nav nav-tabs m-tabs m-tabs-line m-tabs-line--brand\" role=\"tablist\">\r\n                            <li class=\"nav-item m-tabs__item\">\r\n                              <a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#topbar_notifications_notifications\" role=\"tab\">\r\n                                Alerts\r\n                              </a>\r\n                            </li>\r\n                            <li class=\"nav-item m-tabs__item\">\r\n                              <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#topbar_notifications_events\" role=\"tab\">\r\n                                Events\r\n                              </a>\r\n                            </li>\r\n                            <li class=\"nav-item m-tabs__item\">\r\n                              <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#topbar_notifications_logs\" role=\"tab\">\r\n                                Logs\r\n                              </a>\r\n                            </li>\r\n                          </ul>\r\n                          <div class=\"tab-content\">\r\n                            <div class=\"tab-pane active\" id=\"topbar_notifications_notifications\" role=\"tabpanel\">\r\n                              <div class=\"m-scrollable\" data-scrollable=\"true\" data-max-height=\"250\" data-mobile-max-height=\"200\">\r\n                                <div class=\"m-list-timeline m-list-timeline--skin-light\">\r\n                                  <div class=\"m-list-timeline__items\">\r\n                                    <div class=\"m-list-timeline__item\">\r\n                                      <span class=\"m-list-timeline__badge -m-list-timeline__badge--state-success\"></span>\r\n                                      <span class=\"m-list-timeline__text\">\r\n                                        12 new users registered\r\n                                      </span>\r\n                                      <span class=\"m-list-timeline__time\">\r\n                                        Just now\r\n                                      </span>\r\n                                    </div>\r\n                                    <div class=\"m-list-timeline__item\">\r\n                                      <span class=\"m-list-timeline__badge\"></span>\r\n                                      <span class=\"m-list-timeline__text\">\r\n                                        System shutdown\r\n                                        <span class=\"m-badge m-badge--success m-badge--wide\">\r\n                                          pending\r\n                                        </span>\r\n                                      </span>\r\n                                      <span class=\"m-list-timeline__time\">\r\n                                        14 mins\r\n                                      </span>\r\n                                    </div>\r\n                                    <div class=\"m-list-timeline__item\">\r\n                                      <span class=\"m-list-timeline__badge\"></span>\r\n                                      <span class=\"m-list-timeline__text\">\r\n                                        New invoice received\r\n                                      </span>\r\n                                      <span class=\"m-list-timeline__time\">\r\n                                        20 mins\r\n                                      </span>\r\n                                    </div>\r\n                                    <div class=\"m-list-timeline__item\">\r\n                                      <span class=\"m-list-timeline__badge\"></span>\r\n                                      <span class=\"m-list-timeline__text\">\r\n                                        DB overloaded 80%\r\n                                        <span class=\"m-badge m-badge--info m-badge--wide\">\r\n                                          settled\r\n                                        </span>\r\n                                      </span>\r\n                                      <span class=\"m-list-timeline__time\">\r\n                                        1 hr\r\n                                      </span>\r\n                                    </div>\r\n                                    <div class=\"m-list-timeline__item\">\r\n                                      <span class=\"m-list-timeline__badge\"></span>\r\n                                      <span class=\"m-list-timeline__text\">\r\n                                        System error -\r\n                                        <a href=\"#\" class=\"m-link\">\r\n                                          Check\r\n                                        </a>\r\n                                      </span>\r\n                                      <span class=\"m-list-timeline__time\">\r\n                                        2 hrs\r\n                                      </span>\r\n                                    </div>\r\n                                    <div class=\"m-list-timeline__item m-list-timeline__item--read\">\r\n                                      <span class=\"m-list-timeline__badge\"></span>\r\n                                      <span href=\"\" class=\"m-list-timeline__text\">\r\n                                        New order received\r\n                                        <span class=\"m-badge m-badge--danger m-badge--wide\">\r\n                                          urgent\r\n                                        </span>\r\n                                      </span>\r\n                                      <span class=\"m-list-timeline__time\">\r\n                                        7 hrs\r\n                                      </span>\r\n                                    </div>\r\n                                    <div class=\"m-list-timeline__item m-list-timeline__item--read\">\r\n                                      <span class=\"m-list-timeline__badge\"></span>\r\n                                      <span class=\"m-list-timeline__text\">\r\n                                        Production server down\r\n                                      </span>\r\n                                      <span class=\"m-list-timeline__time\">\r\n                                        3 hrs\r\n                                      </span>\r\n                                    </div>\r\n                                    <div class=\"m-list-timeline__item\">\r\n                                      <span class=\"m-list-timeline__badge\"></span>\r\n                                      <span class=\"m-list-timeline__text\">\r\n                                        Production server up\r\n                                      </span>\r\n                                      <span class=\"m-list-timeline__time\">\r\n                                        5 hrs\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"tab-pane\" id=\"topbar_notifications_events\" role=\"tabpanel\">\r\n                              <div class=\"m-scrollable\" m-scrollabledata-scrollable=\"true\" data-max-height=\"250\" data-mobile-max-height=\"200\">\r\n                                <div class=\"m-list-timeline m-list-timeline--skin-light\">\r\n                                  <div class=\"m-list-timeline__items\">\r\n                                    <div class=\"m-list-timeline__item\">\r\n                                      <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\r\n                                      <a href=\"\" class=\"m-list-timeline__text\">\r\n                                        New order received\r\n                                      </a>\r\n                                      <span class=\"m-list-timeline__time\">\r\n                                        Just now\r\n                                      </span>\r\n                                    </div>\r\n                                    <div class=\"m-list-timeline__item\">\r\n                                      <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-danger\"></span>\r\n                                      <a href=\"\" class=\"m-list-timeline__text\">\r\n                                        New invoice received\r\n                                      </a>\r\n                                      <span class=\"m-list-timeline__time\">\r\n                                        20 mins\r\n                                      </span>\r\n                                    </div>\r\n                                    <div class=\"m-list-timeline__item\">\r\n                                      <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-success\"></span>\r\n                                      <a href=\"\" class=\"m-list-timeline__text\">\r\n                                        Production server up\r\n                                      </a>\r\n                                      <span class=\"m-list-timeline__time\">\r\n                                        5 hrs\r\n                                      </span>\r\n                                    </div>\r\n                                    <div class=\"m-list-timeline__item\">\r\n                                      <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n                                      <a href=\"\" class=\"m-list-timeline__text\">\r\n                                        New order received\r\n                                      </a>\r\n                                      <span class=\"m-list-timeline__time\">\r\n                                        7 hrs\r\n                                      </span>\r\n                                    </div>\r\n                                    <div class=\"m-list-timeline__item\">\r\n                                      <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n                                      <a href=\"\" class=\"m-list-timeline__text\">\r\n                                        System shutdown\r\n                                      </a>\r\n                                      <span class=\"m-list-timeline__time\">\r\n                                        11 mins\r\n                                      </span>\r\n                                    </div>\r\n                                    <div class=\"m-list-timeline__item\">\r\n                                      <span class=\"m-list-timeline__badge m-list-timeline__badge--state1-info\"></span>\r\n                                      <a href=\"\" class=\"m-list-timeline__text\">\r\n                                        Production server down\r\n                                      </a>\r\n                                      <span class=\"m-list-timeline__time\">\r\n                                        3 hrs\r\n                                      </span>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"tab-pane\" id=\"topbar_notifications_logs\" role=\"tabpanel\">\r\n                              <div class=\"m-stack m-stack--ver m-stack--general\" style=\"min-height: 180px;\">\r\n                                <div class=\"m-stack__item m-stack__item--center m-stack__item--middle\">\r\n                                  <span class=\"\">\r\n                                    All caught up!\r\n                                    <br>\r\n                                    No new logs.\r\n                                  </span>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </li>\r\n              <li  *ngIf=\"authService.loggedIn()\" class=\"m-nav__item m-topbar__user-profile m-topbar__user-profile--img  m-dropdown m-dropdown--medium m-dropdown--arrow m-dropdown--header-bg-fill m-dropdown--align-right m-dropdown--mobile-full-width m-dropdown--skin-light\" data-dropdown-toggle=\"click\">\r\n                <a href=\"#\" class=\"m-nav__link m-dropdown__toggle\">\r\n                  <span class=\"m-topbar__userpic\">\r\n                    <img src=\"{{user?.profileImg}}\" class=\"m--img-rounded m--marginless m--img-centered\" alt=\"\"/>\r\n                  </span>\r\n                </a>\r\n                <div class=\"m-dropdown__wrapper\">\r\n                  <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\"></span>\r\n                  <div class=\"m-dropdown__inner\">\r\n                    <div class=\"m-dropdown__header m--align-center\" style=\"background: url(assets/app/media/img/misc/user_profile_bg.jpg); background-size: cover;\">\r\n                      <div class=\"m-card-user m-card-user--skin-dark\">\r\n                        <div class=\"m-card-user__pic\">\r\n                          <img src=\"{{user?.profileImg}}\" class=\"m--img-rounded m--marginless\" alt=\"\"/>\r\n                        </div>\r\n                        <div class=\"m-card-user__details\">\r\n                          <span class=\"m-card-user__name m--font-weight-500\">\r\n                            {{user?.name}}\r\n                          </span>\r\n                          <div class=\"m-card-user__email m--font-weight-300 m-link\">\r\n                            {{user?.email}}\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"m-dropdown__body\">\r\n                      <div class=\"m-dropdown__content\">\r\n                        <ul class=\"m-nav m-nav--skin-light\">\r\n                          <li class=\"m-nav__section m--hide\">\r\n                            <span class=\"m-nav__section-text\">\r\n                              Section\r\n                            </span>\r\n                          </li>\r\n                          <li class=\"m-nav__item\">\r\n                            <a [routerLink]=\"['/genjourist']\" class=\"m-nav__link\">\r\n                              <i class=\"m-nav__link-icon flaticon-profile-1\"></i>\r\n                              <span class=\"m-nav__link-title\">\r\n                                <span class=\"m-nav__link-wrap\">\r\n                                  <span class=\"m-nav__link-text\">\r\n                                    My Profile\r\n                                  </span>\r\n                                  <span class=\"m-nav__link-badge\">\r\n                                    <span class=\"m-badge m-badge--success\">\r\n                                      2\r\n                                    </span>\r\n                                  </span>\r\n                                </span>\r\n                              </span>\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"m-nav__item\">\r\n                            <a [routerLink]=\"['/feeds']\" class=\"m-nav__link\">\r\n                              <i class=\"m-nav__link-icon flaticon-share\"></i>\r\n                              <span class=\"m-nav__link-text\">\r\n                                Feeds\r\n                              </span>\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"m-nav__item\">\r\n                            <a [routerLink]=\"['/settings']\" class=\"m-nav__link\">\r\n                              <i class=\"m-nav__link-icon flaticon-settings\"></i>\r\n                              <span class=\"m-nav__link-text\">\r\n                                Settings\r\n                              </span>\r\n                            </a>\r\n                          </li>\r\n                          <li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n                          <li class=\"m-nav__item\">\r\n                            <a (click)=\"logout()\" class=\"btn m-btn--pill    btn-secondary m-btn m-btn--custom m-btn--label-brand m-btn--bolder\">\r\n                                <i class=\"m-nav__link-icon la la-lock\"></i> Logout\r\n                            </a>\r\n                          </li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </li>\r\n              <li  *ngIf=\"!authService.loggedIn()\" class=\"m-nav__item\">\r\n                <span class=\"m--margin-top-5 m-nav__link\">\r\n                  <a [routerLink]=\"['/login']\" class=\"btn btn-secondary m-btn m-btn--icon m-btn--pill\">\r\n                      <span>\r\n                        <i class=\"m-nav__link-icon la la-key\"></i> Login\r\n                      </span>\r\n                    </a>\r\n                </span>\r\n              </li>\r\n              <li  *ngIf=\"!authService.loggedIn()\" class=\"m-nav__item\">\r\n                <span class=\"m--margin-top-5 m-nav__link\">\r\n                  <a [routerLink]=\"['/register']\"  class=\"btn btn-secondary m-btn m-btn--icon m-btn--pill\">\r\n                      <span>\r\n                        <i class=\"m-nav__link-icon la la-pencil-square\"></i> Sign Up\r\n                      </span>\r\n                    </a>\r\n                </span>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <!-- END: Topbar -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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



var NavbarComponent = (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getGenjourist().subscribe(function (profile) {
            _this.user = profile.user;
            _this.authService.userDataBridge(_this.user);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        console.log('User is logged out');
        this.router.navigate(['/']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-header-search .m-header-search__wrapper{\r\n    background-color: #fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"m-header-search__form\">\r\n    <div class=\"m-header-search__wrapper\">\r\n      <span class=\"m-header-search__icon-search\" id=\"m_quicksearch_search\">\r\n        <i class=\"flaticon-search\"></i>\r\n      </span>\r\n      <span class=\"m-header-search__input-wrapper\">\r\n        <input (keyup)=\"searchTerm$.next($event.target.value)\" autocomplete=\"off\" type=\"text\" name=\"search\" class=\"m-header-search__input\" value=\"\" placeholder=\"Search...\" id=\"m_quicksearch_input\">\r\n      </span>\r\n      <span class=\"m-header-search__icon-close\" id=\"m_quicksearch_close\">\r\n        <i class=\"la la-remove\"></i>\r\n      </span>\r\n      <span class=\"m-header-search__icon-cancel\" id=\"m_quicksearch_cancel\">\r\n        <i class=\"la la-remove\"></i>\r\n      </span>\r\n    </div>\r\n  </form>\r\n\r\n  <ul *ngIf=\"results\">\r\n      <li *ngFor=\"let result of results | slice:0:9\">\r\n        <a href=\"{{ result.latest }}\" target=\"_blank\">\r\n          {{ result.name }}\r\n        </a>\r\n      </li>\r\n  </ul>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_search_service__ = __webpack_require__("../../../../../src/app/services/search/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
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
    function SearchComponent(searchService) {
        var _this = this;
        this.searchService = searchService;
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.searchService.search(this.searchTerm$)
            .subscribe(function (results) {
            _this.results = results.results;
            console.log(results);
        });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/components/navbar/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_search_search_service__["a" /* SearchService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/age-category.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgeCategoryPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AgeCategoryPipe = (function () {
    function AgeCategoryPipe() {
    }
    AgeCategoryPipe.prototype.transform = function (value, args) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        var diff = yyyy - value.substr(0, 4);
        if (diff >= 9 && diff <= 13) {
            return "9-13";
        }
        else if (diff >= 14 && diff <= 30) {
            return "14-30";
        }
        else if (diff >= 30 && diff <= 50) {
            return "30-50";
        }
        else if (diff > 50) {
            return "50+";
        }
        else {
            return "kid";
        }
    };
    AgeCategoryPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'ageCategory'
        })
    ], AgeCategoryPipe);
    return AgeCategoryPipe;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profileContainer{\r\n    background-color: #F2F3F8;\r\n}\r\n\r\n.p-details{\r\n    color: #7b7e8a;\r\n}\r\n\r\na, a:link, a:visited, a:hover {\r\n    text-decoration: none;\r\n    color:#333439;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div  *ngIf=\"user\" class=\"profileContainer\">\r\n  <div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\r\n    <!-- BEGIN: Subheader -->\r\n    <div class=\"m-subheader\">\r\n\r\n    </div>\r\n    <!-- END: Subheader -->\r\n    <div class=\"m-content m--margin-top-15 m--margin-25\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xl-3 col-lg-4\">\r\n          <div class=\"m-portlet m-portlet--full-height  \">\r\n            <div class=\"m-portlet__body\">\r\n              <div class=\"m-card-profile\">\r\n                <div class=\"m-card-profile__title m--hide\">\r\n                  Profile\r\n                </div>\r\n                <div class=\"m-card-profile__pic\">\r\n                  <div class=\"m-card-profile__pic-wrapper\">\r\n                    <img src=\"{{user.profileImg}}\" alt=\"\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"m-card-profile__details\">\r\n                    <span class=\"m-card-profile__name\">\r\n                      Genjourist {{user.name}}\r\n                    </span>\r\n                  </div>\r\n                  <br>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"m-widget19__stats text-center\">\r\n                            <h3 class=\"m--font-brand\">\r\n                              {{supportersNumber}}\r\n                            </h3>\r\n                            <span class=\"m-widget19__comment\">\r\n                              Supporters\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <div class=\"m-widget19__stats text-center\">\r\n                            <h3 class=\"m--font-brand\">\r\n                                {{supportingNumber}}\r\n                              </h3>\r\n                            <span class=\"m-widget19__comment\">\r\n                              Supporting\r\n                            </span>\r\n                        </div>\r\n                    </div>    \r\n                                     \r\n                </div>\r\n              </div>\r\n              <div class=\"m-separator\"></div>\r\n              <a [routerLink] = \"['/genjourist',user.genjouristId]\" style=\"color:white\" class=\"btn m-btn--square  btn-brand btn-block\">\r\n                  View Your Profile\r\n              </a>\r\n              <ul class=\"m-nav m-nav--hover-bg m-portlet-fit--sides\">\r\n                <li class=\"m-nav__separator m-nav__separator--fit\"></li>\r\n                <li class=\"m-nav__section m--hide\">\r\n                  <span class=\"m-nav__section-text\">\r\n                    Section\r\n                  </span>\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                  <a class=\"m-nav__link\">\r\n                    <i class=\"m-nav__link-icon flaticon-calendar-2\"></i>\r\n                    <span class=\"m-nav__link-title\">\r\n                      <span class=\"m-nav__link-wrap\">\r\n                        <span class=\"m-nav__link-text\">\r\n                          Age\r\n                        </span>\r\n                        <span class=\"m-nav__link-badge\">\r\n                          <span class=\"m-badge m-badge--success m-badge--wide\">\r\n                            {{user.dob | ageCategory }}\r\n                          </span>\r\n                        </span>\r\n                      </span>\r\n                    </span>\r\n                  </a>\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                  <a class=\"m-nav__link\">\r\n                    <i class=\"m-nav__link-icon flaticon-user\"></i>\r\n                    <span class=\"m-nav__link-title\">\r\n                      <span class=\"m-nav__link-wrap\">\r\n                        <span class=\"m-nav__link-text\">\r\n                          Gender\r\n                        </span>\r\n                        <span class=\"m-nav__link-badge\">\r\n                          <span class=\"m-badge m-badge--info m-badge--wide\">\r\n                            {{user.gender}}\r\n                          </span>\r\n                        </span>\r\n                      </span>\r\n                    </span>\r\n                  </a>\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                  <a  class=\"m-nav__link\">\r\n                    <i class=\"m-nav__link-icon la la-phone\"></i>\r\n                    <span class=\"m-nav_link-wrap\">\r\n                      <span class=\"m-nav__link-text\">\r\n                          Phone Number\r\n                        </span>\r\n                        <span class=\"m--pull-right p-details\">\r\n                            +8989565623\r\n                        </span>\r\n                    </span>\r\n                  </a>\r\n                </li>\r\n                <li class=\"m-nav__item\">\r\n                  <a class=\"m-nav__link\">\r\n                    <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n                    <span class=\"m-nav_link-wrap\">\r\n                        <span class=\"m-nav__link-text\">\r\n                            Email\r\n                          </span>\r\n                          <span class=\"m--pull-right p-details\">\r\n                              {{user.email}}\r\n                          </span>\r\n                      </span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xl-9 col-lg-8\">\r\n          <div class=\"m-content\">\r\n            <div class=\"row\">\r\n              <div class=\"col-lg\">\r\n                <!--begin::Portlet-->\r\n                <div class=\"m-portlet\">\r\n                  <div class=\"m-portlet__body\">\r\n                    <ul class=\"nav nav-tabs  m-tabs-line\" role=\"tablist\">\r\n                      <li class=\"nav-item m-tabs__item\">\r\n                        <a class=\"nav-link m-tabs__link active\" data-toggle=\"tab\" href=\"#m_tabs_6_1\" role=\"tab\">\r\n                          Articles\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"nav-item m-tabs__item\">\r\n                        <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_tabs_6_2\" role=\"tab\">\r\n                          Quotes\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"nav-item m-tabs__item\">\r\n                        <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_tabs_6_3\" role=\"tab\">\r\n                          Surpporters\r\n                        </a>\r\n                      </li>\r\n                      <li class=\"nav-item m-tabs__item\">\r\n                        <a class=\"nav-link m-tabs__link\" data-toggle=\"tab\" href=\"#m_tabs_6_4\" role=\"tab\">\r\n                          Supporting\r\n                        </a>\r\n                      </li>\r\n                    </ul>\r\n                    <div class=\"tab-content\">\r\n                      <div class=\"tab-pane active\" id=\"m_tabs_6_1\" role=\"tabpanel\">\r\n                          <div class=\"m--pull-right\">\r\n                              <ul class=\"m-portlet__nav\">\r\n                                <li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n                                  <a href=\"#\" class=\"m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand\">\r\n                                    Sort\r\n                                  </a>\r\n                                  <div class=\"m-dropdown__wrapper\">\r\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\" style=\"left: auto; right: 36.5px;\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                      <div class=\"m-dropdown__body\">\r\n                                        <div class=\"m-dropdown__content\">\r\n                                          <ul class=\"m-nav\">\r\n                                            <li class=\"m-nav__item\">\r\n                                              <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-share\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                  Yesterday\r\n                                                </span>\r\n                                              </a>\r\n                                            </li>\r\n                                            <li class=\"m-nav__item\">\r\n                                              <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                  Week\r\n                                                </span>\r\n                                              </a>\r\n                                            </li>\r\n                                            <li class=\"m-nav__item\">\r\n                                              <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-info\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                  Month\r\n                                                </span>\r\n                                              </a>\r\n                                            </li>\r\n                                            <li class=\"m-nav__item\">\r\n                                              <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                  Year\r\n                                                </span>\r\n                                              </a>\r\n                                            </li>\r\n                                          </ul>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </li>\r\n                              </ul>\r\n                            </div>\r\n                            <div class=\"m-widget5\">\r\n                              <div class=\"m-widget5__item\" *ngFor=\"let journal of journals\">\r\n                                <div class=\"m-widget5__pic\">\r\n                                  <img class=\"m-widget7__img\" src=\"assets/app/media/img//products/product6.jpg\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"m-widget5__content\">\r\n                                   <h4 class=\"m-widget5__title\">\r\n                                      <a [routerLink]=\"['/journal',journal.articleId]\"> {{journal.title}} </a>\r\n                                  </h4>\r\n                                  <span class=\"m-widget5__desc\">\r\n                                    {{journal.content | summary}}\r\n                                  </span>\r\n                                  <div class=\"m-widget5__info\">\r\n                                    <span class=\"m-widget5__info-date m--font-info\">\r\n                                      {{journal.date | date:'medium' }}\r\n                                    </span>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"m-widget5__stats1\">\r\n                                    <div>\r\n                                        <a [routerLink]=\"['/edit/article/',journal.articleId]\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\" title=\"Edit details\"><i class=\"la la-edit\"></i></a>\r\n                                    </div>\r\n                                    <div>\r\n                                        <a (click)=\"deleteArticle(journal.articleId)\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill m--margin-top-10\" title=\"Delete\"><i class=\"la la-trash\"></i></a>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"m-widget5__stats1\">\r\n                                  <span class=\"m-widget5__number\"> \r\n                                    {{journal.supportNumber}}\r\n                                  </span>\r\n                                  <br>\r\n                                  <span class=\"m-widget5__sales\">\r\n                                    supports\r\n                                  </span>\r\n                                </div>\r\n                                <div class=\"m-widget5__stats2\">\r\n                                  <span class=\"m-widget5__number\">\r\n                                    {{journal.replicateNumber}}\r\n                                  </span>\r\n                                  <br>\r\n                                  <span class=\"m-widget5__votes\">\r\n                                    replicates\r\n                                  </span>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                      </div>\r\n                      <div class=\"tab-pane\" id=\"m_tabs_6_2\" role=\"tabpanel\">\r\n                          <div class=\"m--pull-right\">\r\n                              <ul class=\"m-portlet__nav\">\r\n                                <li class=\"m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n                                  <a href=\"#\" class=\"m-portlet__nav-link m-dropdown__toggle dropdown-toggle btn btn--sm m-btn--pill btn-secondary m-btn m-btn--label-brand\">\r\n                                    Sort\r\n                                  </a>\r\n                                  <div class=\"m-dropdown__wrapper\">\r\n                                    <span class=\"m-dropdown__arrow m-dropdown__arrow--right m-dropdown__arrow--adjust\" style=\"left: auto; right: 36.5px;\"></span>\r\n                                    <div class=\"m-dropdown__inner\">\r\n                                      <div class=\"m-dropdown__body\">\r\n                                        <div class=\"m-dropdown__content\">\r\n                                          <ul class=\"m-nav\">\r\n                                            <li class=\"m-nav__item\">\r\n                                              <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-share\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                  Yesterday\r\n                                                </span>\r\n                                              </a>\r\n                                            </li>\r\n                                            <li class=\"m-nav__item\">\r\n                                              <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-chat-1\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                  Week\r\n                                                </span>\r\n                                              </a>\r\n                                            </li>\r\n                                            <li class=\"m-nav__item\">\r\n                                              <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-info\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                  Month\r\n                                                </span>\r\n                                              </a>\r\n                                            </li>\r\n                                            <li class=\"m-nav__item\">\r\n                                              <a href=\"\" class=\"m-nav__link\">\r\n                                                <i class=\"m-nav__link-icon flaticon-lifebuoy\"></i>\r\n                                                <span class=\"m-nav__link-text\">\r\n                                                  Year\r\n                                                </span>\r\n                                              </a>\r\n                                            </li>\r\n                                          </ul>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </li>\r\n                              </ul>\r\n                          </div>\r\n                          <div class=\"m-widget5\">\r\n                            <div class=\"m-widget5__item\" *ngFor=\"let quotation of quotations\">\r\n                              <div class=\"m-widget5__content m-widget2__item m-widget2__item--primary\">\r\n                                <span class=\"m-widget5__title\">\r\n                                  {{quotation.quote}}\r\n                                </span>\r\n                                <div class=\"m-widget5__info\">\r\n                                  <span class=\"m-widget5__info-date m--font-info\">\r\n                                    {{quotation.date | date:'medium' }}\r\n                                  </span>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"m-widget5__stats1\">\r\n                                  <div>\r\n                                      <a [routerLink]=\"['/edit/quotation/',quotation.quotationId]\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill\" title=\"Edit details\"><i class=\"la la-edit\"></i></a>\r\n                                  </div>\r\n                                  <div>\r\n                                      <a (click)=\"deleteQuotation(quotation.quotationId)\" class=\"m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill m--margin-top-10\" title=\"Delete\"><i class=\"la la-trash\"></i></a>\r\n                                  </div>\r\n                              </div>\r\n                              <div class=\"m-widget5__stats1\">\r\n                                <span class=\"m-widget5__number\">\r\n                                  {{quotation.supportNumber}}\r\n                                </span>\r\n                                <br>\r\n                                <span class=\"m-widget5__sales\">\r\n                                  supports\r\n                                </span>\r\n                              </div>\r\n                              <div class=\"m-widget5__stats2\">\r\n                                <span class=\"m-widget5__number\">\r\n                                  {{quotation.replicateNumber}}\r\n                                </span>\r\n                                <br>\r\n                                <span class=\"m-widget5__votes\">\r\n                                  replicates\r\n                                </span>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                      </div>\r\n                  <div class=\"tab-pane\" id=\"m_tabs_6_3\" role=\"tabpanel\">\r\n                    <div class=\"m-portlet__body\">\r\n                      <div class=\"m-widget4\" *ngFor = \"let supportersList of supportersLists\">\r\n                        <div class=\"m-widget4__item\">\r\n                          <div class=\"m-widget4__img m-widget4__img--pic\">\r\n                            <img src=\"{{supportersList.details.profileImg}}\" alt=\"\">\r\n                          </div>\r\n                          <div class=\"m-widget4__info\">\r\n                            <span class=\"m-widget4__title\">\r\n                              <a [routerLink]=\"['/genjourist',supportersList.details.genjouristId]\">\r\n                                {{supportersList.details.name}}\r\n                              </a>\r\n                            </span>\r\n                            <br>\r\n                            <span class=\"m-widget4__sub\">\r\n                                <span class=\"m-badge m-badge--brand m-badge--wide\">\r\n                                  {{supportersList.details.dob | ageCategory}}\r\n                                </span>\r\n                            </span>\r\n                          </div>\r\n                          <div class=\"m-widget4__ext\">\r\n                              <app-support-btn [supportGenjouristId]=\"supportersList.details.genjouristId\" [userId]=\"user.genjouristId\" ></app-support-btn>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"tab-pane\" id=\"m_tabs_6_4\" role=\"tabpanel\">\r\n                        <div class=\"m-portlet__body\">\r\n                            <div class=\"m-widget4\" *ngFor = \"let supportingList of supportingLists\">\r\n                              <div class=\"m-widget4__item\">\r\n                                <div class=\"m-widget4__img m-widget4__img--pic\">\r\n                                  <img src=\"{{supportingList.details.profileImg}}\" alt=\"\">\r\n                                </div>\r\n                                <div class=\"m-widget4__info\">\r\n                                  <span class=\"m-widget4__title\">\r\n                                    <a [routerLink]=\"['/genjourist',supportingList.details.genjouristId]\" (click)=\"refreshUser()\">\r\n                                      {{supportingList.details.name}}\r\n                                    </a>\r\n                                  </span>\r\n                                  <br>\r\n                                  <span class=\"m-widget4__sub\">\r\n                                      <span class=\"m-badge m-badge--brand m-badge--wide\">\r\n                                          {{supportingList.details.dob | ageCategory}}\r\n                                      </span>\r\n                                  </span>\r\n                                </div>\r\n                                <div class=\"m-widget4__ext\">\r\n                                  <app-support-btn [supportGenjouristId]=\"supportingList.details.genjouristId\" [userId]=\"user.genjouristId\" ></app-support-btn>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n          \r\n                \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_profile_service__ = __webpack_require__("../../../../../src/app/services/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_genjourist_service__ = __webpack_require__("../../../../../src/app/services/genjourist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(authService, router, profileService, genjouristService, route) {
        this.authService = authService;
        this.router = router;
        this.profileService = profileService;
        this.genjouristService = genjouristService;
        this.route = route;
        this.supportersLists = [];
        this.supportingLists = [];
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.userSubject.subscribe(function (data) {
            _this.user = data;
            _this.profileService.articles(_this.user.genjouristId).subscribe(function (article) {
                _this.journals = article;
            });
            _this.profileService.quotation(_this.user.genjouristId).subscribe(function (quotation) {
                _this.quotations = quotation;
            });
            //=================================================================================================
            //======================================= Support Numbers =========================================
            //=================================================================================================
            _this.supportersNumber = _this.user.length;
            _this.supportingNumber = _this.user.length;
            //=================================================================================================
            //======================================= LIST ====================================================
            //=================================================================================================
            _this.genjouristService.getSupportingList(_this.user.genjouristId).subscribe(function (data) {
                _this.supportingLists = data;
                _this.supportingNumber = data.length;
                //console.log(this.supportingLists);
            });
            _this.genjouristService.getSupportersList(_this.user.genjouristId).subscribe(function (data) {
                _this.supportersLists = data;
                _this.supportersNumber = data.length;
                //console.log(this.supportersLists)
            });
        });
    };
    ProfileComponent.prototype.deleteArticle = function (articleId) {
        var _this = this;
        if (confirm('Are you sure you want to delete this article?')) {
            this.genjouristService.deleteArticle(articleId).subscribe(function (data) {
                console.log(data);
                _this.profileService.articles(_this.user.genjouristId).subscribe(function (article) {
                    _this.journals = article;
                });
            });
        }
        else {
            console.log('cannot do anything');
        }
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_4__services_genjourist_service__["a" /* GenjouristService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".m-login.m-login--1 .m-login__wrapper{\r\n    padding:0 2rem 2rem 2rem;\r\n}\r\n\r\n.m-radio-inline{\r\n    display:inline-block;\r\n}\r\n\r\nbody{\r\n    margin-top:-45px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"m-grid m-grid--hor m-grid--root m-page\">\r\n  <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-grid--tablet-and-mobile m-grid--hor-tablet-and-mobile m-login m-login--1 m-login--singin\" id=\"m_login\">\r\n    <div class=\"m-grid__item m-grid__item--order-tablet-and-mobile-2 m-login__aside\">\r\n      <div class=\"m-stack m-stack--hor m-stack--desktop\">\r\n        <div class=\"m-stack__item m-stack__item--fluid\">\r\n          <div class=\"m-login__wrapper\">\r\n            <div class=\"m-login__logo\">\r\n              <a  [routerLink]=\"['/']\">\r\n                <img src=\"assets/img/genjour.png\" height=\"110\">\r\n              </a>\r\n            </div>\r\n            <div class=\"m-signup\">\r\n              <div class=\"m-login__head\">\r\n                <h3 class=\"m-login__title\">\r\n                  Sign Up\r\n                </h3>\r\n                <div class=\"m-login__desc\">\r\n                  Enter your details to create your account:\r\n                </div>\r\n              </div>\r\n              <form class=\"m-login__form m-form\" (submit) = \"register()\">\r\n                <div class=\"form-group m-form__group\">\r\n                  <input class=\"form-control m-input\" [(ngModel)]=\"fullname\" type=\"text\" placeholder=\"Full Name\" name=\"fullname\">\r\n                </div>\r\n                <div class=\"form-group m-form__group\">\r\n                  <input class=\"form-control m-input\" [(ngModel)]=\"email\" type=\"text\" placeholder=\"Email\" name=\"email\" autocomplete=\"off\">\r\n                </div>\r\n                <div class=\"form-group m-form__group\">\r\n                  <input class=\"form-control m-input\" [(ngModel)]=\"username\" type=\"text\" placeholder=\"Username\" name=\"username\">\r\n                </div>\r\n                <div class=\"form-group m-form__group\">\r\n                  <input class=\"form-control m-input m-login__form-input--last\" [(ngModel)]=\"password\" type=\"password\" placeholder=\"Password\" name=\"password\">\r\n                </div>\r\n                <div class=\"form-group m-form__group\">\r\n                  <div class=\"m-radio-inline\">\r\n                      <label class=\"m-radio m-radio--solid\">\r\n                        <input type=\"radio\" name=\"gender\" [(ngModel)]=\"gender\" checked value=\"Male\">\r\n                        Male\r\n                        <span></span>\r\n                      </label>\r\n                      <label class=\"m-radio m-radio--solid\">\r\n                        <input type=\"radio\" name=\"gender\" [(ngModel)]=\"gender\" value=\"Female\">\r\n                        Female\r\n                        <span></span>\r\n                      </label>\r\n                      <label class=\"m-radio m-radio--solid\">\r\n                          <input type=\"radio\" name=\"gender\" [(ngModel)]=\"gender\" value=\"Other\">\r\n                          Other\r\n                          <span></span>\r\n                      </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"m-login__head\" style=\"text-align:center;\">\r\n                  <div class=\"m-login__desc\">Birth Date</div>\r\n                  <input class=\"form-control m-input\" type=\"date\" name=\"dob\" [(ngModel)]=\"dob\" [value]=\"2011-08-19\" id=\"example-date-input\">\r\n                </div>\r\n                <div style=\"color:red\">\r\n                  {{checkStatus}}\r\n                </div>\r\n                <div class=\"row form-group m-form__group m-login__form-sub\">\r\n                  <div class=\"col m--align-left\">\r\n                    <label class=\"m-checkbox m-checkbox--focus\">\r\n                      <input type=\"checkbox\" name=\"agree\">\r\n                      I Agree the\r\n                      <a href=\"#\" class=\"m-link m-link--focus\">\r\n                        terms and conditions\r\n                      </a>\r\n                      .\r\n                      <span></span>\r\n                    </label>\r\n                    <span class=\"m-form__help\"></span>\r\n                  </div>\r\n                </div>\r\n                <div class=\"m-login__form-action\">\r\n                  <button type=\"submit\" class=\"btn btn-focus m-btn m-btn--pill m-btn--custom m-btn--air\">\r\n                    Sign Up\r\n                  </button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"m-stack__item m-stack__item--center\">\r\n          <div class=\"m-login__account\">\r\n            <span class=\"m-login__account-msg\">\r\n              Already have account\r\n            </span>\r\n            &nbsp;&nbsp;\r\n            <a [routerLink]=\"['/login']\" id=\"m_login_signup\" class=\"m-link m-link--focus m-login__account-link\">\r\n              Sign In\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--center m-grid--hor m-grid__item--order-tablet-and-mobile-1\tm-login__content\" style=\"background-image: url(../../../assets/app/media/img//bg/bg-4.jpg)\">\r\n      <div class=\"m-grid__item m-grid__item--middle\">\r\n        <h3 class=\"m-login__welcome\">\r\n            Genjour <br> <del>Social</del> Societal Network\r\n        </h3>\r\n        <p class=\"m-login__msg\">\r\n            Meet people with similar ideologies and beliefs. <br>\r\n            Let's make a better society to live in.Lets talk out our true emotions. <br>\r\n            Connect better and let's bridge the gap between the opinions by writing in the Generations' Journal.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</body>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var user = {
            name: this.fullname,
            email: this.email,
            password: this.password,
            username: this.username,
            gender: this.gender,
            dob: this.dob,
        };
        // check required fields
        if (user.name == undefined || user.email == undefined || user.password == undefined || user.username == undefined || user.gender == undefined || user.dob == undefined) {
            console.log("please fill all fields");
            this.checkStatus = "Please fill all fields";
            return false;
        }
        //check email 
        if (!this.validateService.validateEmail(user.email)) {
            console.log("Email is not valid");
            this.checkStatus = "Email is not valid";
            return false;
        }
        //register new user here api from services
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                console.log('user is register');
                _this.router.navigate(['/login']);
            }
            else {
                console.log('not registered');
                _this.router.navigate(['/']);
            }
        });
        console.log(user);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/settings/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"m-subheader\">\r\n\r\n</div>\r\n<div *ngIf=\"user\" class=\"m-content m--margin-20\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xl-12 col-lg-12\">\r\n\r\n      <div class=\"m-portlet m-portlet--full-height \">\r\n          <div class=\"m-portlet__head\">\r\n              <div class=\"m-portlet__head-caption\">\r\n                <div class=\"m-portlet__head-title\">\r\n                  <h3 class=\"m-portlet__head-text\">\r\n                    Settings \r\n                  </h3>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n        <form class=\"m-form m-form--fit m-form--label-align-right\">\r\n          <div class=\"m-portlet__body\">\r\n              <div class=\"form-group m-form__group row\">\r\n                  <label for=\"example-text-input\" class=\"col-3 col-form-label\">\r\n                    Profile Image\r\n                  </label>\r\n                      <div class=\"col-6 col-xs-12 col-sm-12\" style=\"text-align:center;\">\r\n                        <img src=\"{{user.profileImg}}\" alt=\"profile pic\">\r\n                        <br>\r\n                        <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" class=\"m--margin-10\">\r\n                        <button class=\"btn btn-accent m-btn\" (click)=upload()>Upload</button>\r\n                      </div>\r\n                </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <label for=\"example-text-input\" class=\"col-3 col-form-label\">\r\n                Full Name\r\n              </label>\r\n              <div class=\"col-6\">\r\n                <input class=\"form-control m-input\" type=\"text\" value=\"{{user.name}}\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <label for=\"example-text-input\" class=\"col-3 col-form-label\">\r\n                Username\r\n              </label>\r\n              <div class=\"col-6\">\r\n                <input class=\"form-control m-input\" [disabled]=\"usernameEdit == true\" type=\"text\" value=\"{{user.username}}\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <label for=\"example-text-input\" class=\"col-3 col-form-label\">\r\n                Email\r\n              </label>\r\n              <div class=\"col-6\">\r\n                <input class=\"form-control m-input\" disabled type=\"email\" value=\"{{user.email}}\">\r\n                <span class=\"m-form__help\">\r\n                  If you want your invoices addressed to a company. Leave blank to use your full name.\r\n                </span>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group m-form__group row\">\r\n              <label for=\"example-text-input\" class=\"col-3 col-form-label\">\r\n                Phone No.\r\n              </label>\r\n              <div class=\"col-6\">\r\n                <input class=\"form-control m-input\" type=\"text\" value=\"{{user?.contactNumber}}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"m-portlet__foot m-portlet__foot--fit\">\r\n            <div class=\"m-form__actions\">\r\n              <div class=\"row\">\r\n                <div class=\"col-3\"></div>\r\n                <div class=\"col-6\">\r\n                  <button type=\"reset\" class=\"btn btn-accent m-btn m-btn--air m-btn--custom\">\r\n                    Save changes\r\n                  </button>\r\n                  &nbsp;&nbsp;\r\n                  <button type=\"reset\" class=\"btn btn-secondary m-btn m-btn--air m-btn--custom\">\r\n                    Cancel\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/settings/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_genjourist_service__ = __webpack_require__("../../../../../src/app/services/genjourist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_cloudinary__ = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsComponent = (function () {
    function SettingsComponent(authService, genjouristService) {
        var _this = this;
        this.authService = authService;
        this.genjouristService = genjouristService;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_3_ng2_cloudinary__["b" /* CloudinaryUploader */](new __WEBPACK_IMPORTED_MODULE_3_ng2_cloudinary__["a" /* CloudinaryOptions */]({ cloudName: 'dzmob0mk9', uploadPreset: 'yezel8lw' }));
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            _this.cloudinaryImage = JSON.parse(response);
            return { item: item, response: response, status: status, headers: headers };
        };
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.userSubject.subscribe(function (data) {
            _this.user = data;
        });
    };
    SettingsComponent.prototype.upload = function () {
        var _this = this;
        this.uploader.uploadAll();
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            console.log(res);
            _this.profileImg = res.url;
            _this.genjouristService.changeProfileImage(_this.user.genjouristId, res.url).subscribe(function (data) {
                if (data.sucess) {
                    console.log('successfully uploaded');
                }
                else {
                    console.log('something is wrong');
                }
            });
        };
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/components/settings/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/settings/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__services_genjourist_service__["a" /* GenjouristService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"m-portlet m-portlet m--margin-top-20\">\r\n        <div class=\"m-portlet__head\">\r\n          <div class=\"m-portlet__head-caption\">\r\n            <div class=\"m-portlet__head-title\">\r\n              <h3 class=\"m-portlet__head-text\">\r\n                Quotes\r\n              </h3>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"m-portlet__body\">\r\n          <div class=\"m-widget3\">\r\n            <div class=\"m-widget3__item\">\r\n              <div class=\"m-widget3__header\">\r\n                <div class=\"m-widget3__user-img\">\r\n                  <img class=\"m-widget3__img\" src=\"assets/app/media/img/users/user1.jpg\" alt=\"\">\r\n                </div>\r\n                <div class=\"m-widget3__info\">\r\n                  <span class=\"m-widget3__username m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push\" data-dropdown-toggle=\"hover\" aria-expanded=\"true\">\r\n                    Melania Trump\r\n                  </span>\r\n                  <br>\r\n                  <span class=\"m-widget3__time\">\r\n                    2 day ago\r\n                  </span>\r\n                </div>\r\n                <span class=\"m-widget3__status m--font-brand\">\r\n                    Life\r\n                </span>\r\n              </div>\r\n              <div class=\"m-widget3__body\">\r\n                <p class=\"m-widget3__text\">\r\n                  Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat volutpat.\r\n                </p>\r\n              </div>\r\n              <div class=\"row m--block-center\">\r\n                  <div class=\"m--margin-top-5 m--margin-bottom-5 \">\r\n                    <!-- <app-support-article [articleId]=\"articleData?.articleId\" [userId]=\"articleData?.genjouristId\" ></app-support-article>   -->\r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
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

var SidenavComponent = (function () {
    function SidenavComponent() {
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/support/support-article/support-article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span{\r\n    cursor:pointer;\r\n}\r\n\r\n.m-stack__item:hover{\r\n    \r\n}\r\n\r\na, a:active, a:link, a:visited{\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/support/support-article/support-article.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-stack m-stack--ver m-stack--general\">\r\n    <div class=\"m-stack__item m-stack__item--center m-stack__item--middle m-stack__item--fluid\">\r\n            <span (click)=\"support(journalId,userId)\">\r\n                <span *ngIf=\"!supportStatus\"><i class=\"m-menu__link-icon fa fa-thumbs-o-up\"></i></span> \r\n                <span *ngIf=\"supportStatus\"><i class=\"m-menu__link-icon fa \tfa-thumbs-up\"></i></span>\r\n                {{supporterNumber}}    \r\n            </span>\r\n    </div>\r\n    <div class=\"m-stack__item m-stack__item--center m-stack__item--middle m-stack__item--fluid\">\r\n            <span data-toggle=\"modal\" data-target=\"#m_modal_4\"> <i class=\"m-menu__link-icon flaticon-network\"> </i> </span> \r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"m_modal_4\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">\r\n                        Replicate\r\n                    </h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                        <span aria-hidden=\"true\">\r\n                            &times;\r\n                        </span>\r\n                    </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <div class=\"m-widget17__item\">\r\n                                    <span class=\"m-widget17__icon\">\r\n                                            <i class=\"socicon-whatsapp\"></i>\r\n                                    </span>\r\n                                    <span class=\"m-widget17__subtitle\">\r\n                                        <a href=\"whatsapp://send?text=http://localhost:4200/journal/{{articleId}}\">Whatsapp</a>    \r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <div class=\"m-widget17__item\">\r\n                                    <span class=\"m-widget17__icon\">\r\n                                            <i class=\"socicon-facebook\"></i>\r\n                                    </span>\r\n                                    <span (click)=\"facebookShare(articleId)\" class=\"m-widget17__subtitle\">\r\n                                        Facebook\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <div class=\"m-widget17__item\">\r\n                                    <span class=\"m-widget17__icon\">\r\n                                            <i class=\"socicon-twitter\"></i>\r\n                                    </span>\r\n                                    <span (click)=\"twitterShare(articleId)\" class=\"m-widget17__subtitle\">\r\n                                        Twitter\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                    <div class=\"m-widget17__item\">\r\n                                            <span class=\"m-widget17__icon\">\r\n                                                    <i class=\"socicon-googleplus\"></i>\r\n                                            </span>\r\n                                            <span (click)=\"googlePlusShare(articleId)\" class=\"m-widget17__subtitle\">\r\n                                                Google Plus\r\n                                            </span>\r\n                                    </div>\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                    <div class=\"m-widget17__item\">\r\n                                            <span class=\"m-widget17__icon\">\r\n                                                <i class=\"la la-copy\"></i>\r\n                                            </span>\r\n                                            <span (click)=\"copyLink(articleId)\" class=\"m-widget17__subtitle\">\r\n                                                Copy Link\r\n                                            </span>\r\n                                    </div>\r\n                                    \r\n                            </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/support/support-article/support-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_journals_service__ = __webpack_require__("../../../../../src/app/services/journals.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_support_service__ = __webpack_require__("../../../../../src/app/services/support.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SupportArticleComponent = (function () {
    function SupportArticleComponent(journalsService, authService, router, supportService) {
        this.journalsService = journalsService;
        this.authService = authService;
        this.router = router;
        this.supportService = supportService;
        this.supporters = [];
    }
    SupportArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.supportService.journalSupporters(this.journalId).subscribe(function (data) {
            //console.log(data);
            _this.supporterNumber = data.length;
            //-----------------------------------support button animatation--------------------------------
            for (var x = 0; x < data.length; x++) {
                var n = data[0].genjouristId;
                if (n == _this.userId) {
                    _this.supportStatus = true;
                }
                else {
                    _this.supportStatus = false;
                }
            }
            //---------------------------------end support button animatation--------------------------------
        });
    };
    SupportArticleComponent.prototype.support = function (journalId, userId) {
        var _this = this;
        //-----------------------------------support button animatation--------------------------------
        if (this.authService.loggedIn()) {
            if (this.supportStatus == true) {
                this.supportStatus = false;
            }
            else {
                this.supportStatus = true;
            }
            //----------------------------------- end button animatation--------------------------------
            this.supportService.supportJournal(journalId, userId).subscribe(function (data) {
                //console.log(data);
                _this.supportService.journalSupporters(_this.journalId).subscribe(function (data) {
                    //console.log(data);
                    _this.supporterNumber = data.length;
                });
            });
        }
        else {
            this.router.navigate(['/login']);
            console.log('first logged in then support us');
        }
    };
    SupportArticleComponent.prototype.facebookShare = function (journalId) {
        var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + 'http://localhost:4200/journal/' + journalId, 'facebook-popup', 'height=350,width=600');
        if (facebookWindow.focus) {
            facebookWindow.focus();
        }
        return false;
    };
    SupportArticleComponent.prototype.twitterShare = function (journalId) {
        var twitterWindow = window.open('https://twitter.com/share?url=' + 'http://localhost:4200/journal/' + journalId, 'twitter-popup', 'height=350,width=600');
        if (twitterWindow.focus) {
            twitterWindow.focus();
        }
        return false;
    };
    SupportArticleComponent.prototype.whatsappShare = function (journalId) {
        console.log(journalId);
    };
    SupportArticleComponent.prototype.googlePlusShare = function (journalId) {
        var googleWindpw = window.open('https://plus.google.com/share?url=' + 'http://localhost:4200/journal/' + journalId, 'twitter-popup', 'height=550,width=400');
        if (googleWindpw.focus) {
            googleWindpw.focus();
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SupportArticleComponent.prototype, "journalId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SupportArticleComponent.prototype, "userId", void 0);
    SupportArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-support-article',
            template: __webpack_require__("../../../../../src/app/components/support/support-article/support-article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/support/support-article/support-article.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_journals_service__["a" /* JournalsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_support_service__["a" /* SupportService */]])
    ], SupportArticleComponent);
    return SupportArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/support/support-quotation/support-quotation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/support/support-quotation/support-quotation.component.html":
/***/ (function(module, exports) {

module.exports = "<span  (click)=\"support()\"> Support </span> | <span (click)=\"replicate()\"> Replicate </span>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/support/support-quotation/support-quotation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportQuotationComponent; });
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

var SupportQuotationComponent = (function () {
    function SupportQuotationComponent() {
    }
    SupportQuotationComponent.prototype.ngOnInit = function () {
    };
    SupportQuotationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-support-quotation',
            template: __webpack_require__("../../../../../src/app/components/support/support-quotation/support-quotation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/support/support-quotation/support-quotation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SupportQuotationComponent);
    return SupportQuotationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/support/supportbtn/support-btn/support-btn.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/support/supportbtn/support-btn/support-btn.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"supportGen(userId,supportGenjouristId)\" class=\"m-btn m-btn--pill m-btn--hover-brand btn btn-sm btn-secondary\">\r\n    <div *ngIf=\"supportStatus\">Support</div>\r\n    <div *ngIf=\"!supportStatus\">Stop Supporting</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/support/supportbtn/support-btn/support-btn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportBtnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_support_service__ = __webpack_require__("../../../../../src/app/services/support.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SupportBtnComponent = (function () {
    function SupportBtnComponent(authService, router, supportService) {
        this.authService = authService;
        this.router = router;
        this.supportService = supportService;
        this.supporting = [];
    }
    SupportBtnComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.userSubject.subscribe(function (data) {
            _this.user = data;
            console.log(data.supporting);
            console.log("supporting id " + _this.supportGenjouristId);
            var arr = data.supporting;
            var found = arr.find(function (found) { return found == _this.supportGenjouristId; });
            console.log(found);
            if (found != undefined) {
                _this.supportStatus = false;
            }
            else {
                _this.supportStatus = true;
            }
        });
    };
    SupportBtnComponent.prototype.supportGen = function (userId, supportGenjouristId) {
        //console.log("userId "+userId+" genjouristId "+supportGenjouristId);
        if (this.authService.loggedIn()) {
            // ========================================= Support Status ===========================================
            if (this.supportStatus === true) {
                this.supportStatus = false;
            }
            else if (this.supportStatus === false) {
                this.supportStatus = true;
            }
            //============================================ Support Code ============================================
            this.supportService.supportGenjourist(userId, supportGenjouristId).subscribe(function (data) {
                // this.supporterNumber = data.msg;
                console.log(data.msg);
            });
            //========================================= Supporting Code ============================================
            this.supportService.supportingGenjourist(userId, supportGenjouristId).subscribe(function (data) {
                //this.supportingNumber = data.msg;
                console.log(data.msg);
            });
        }
        else {
            this.router.navigate(['/login']);
            console.log('first logged in then support us');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SupportBtnComponent.prototype, "supportGenjouristId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SupportBtnComponent.prototype, "userId", void 0);
    SupportBtnComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-support-btn',
            template: __webpack_require__("../../../../../src/app/components/support/supportbtn/support-btn/support-btn.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/support/supportbtn/support-btn/support-btn.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_support_service__["a" /* SupportService */]])
    ], SupportBtnComponent);
    return SupportBtnComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/write-article/write-article.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/write-article/write-article.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n  <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body\">\r\n\r\n\t\t\t\t<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\r\n\t\t\t\t\t<div class=\"m-content\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-portlet\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t  Write an article\r\n\t\t\t\t\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!--begin::Form-->\r\n\t\t\t\t\t\t\t\t\t<form enctype=\"multipart/form-data\" class=\"m-form m-form--fit m-form--label-align-right m-form--group-seperator\" method=\"POST\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tArticle Title:\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" [(ngModel)]=\"title\" name=\"title\" placeholder=\"Title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tPlease enter article title\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTags:\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control m-input\" [(ngModel)]=\"tags\" name=\"tags\" placeholder=\"Tags\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tEx. - life,genjour\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tFeatured Image:\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"exampleInputEmail1\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tFile Browser\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"custom-file\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <input [(ngModel)]=\"image\" type=\"file\" name=\"image\" >\t\t-->\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"file\" ng2FileSelect [uploader]=\"uploader\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input  id=\"photo\" type=\"file\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success btn-s\" [disabled]=\"imgStatus\" (click)=\"upload()\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tUpload\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</button> <br>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div *ngIf = \"imgUrl\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input  [disabled]=\"!xyz\" [(ngModel)]=\"imgUrl\" name=\"imgUrl\"/> \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n                      <div class=\"form-group1 m-form__group row\">\r\n                        <label class=\"col-lg-2 col-form-label\" for=\"caterogySelection\">\r\n                          Category\r\n                        </label>\r\n                        <select [(ngModel)]=\"category\" name=\"category\" class=\"custom-select\">\r\n                          <option selected=\"\">\r\n                            Choose category\r\n                          </option>\r\n                          <option value=\"Life\">\r\n                            Life\r\n                          </option>\r\n                          <option value=\"Economics\">\r\n                            Economics\r\n                          </option>\r\n                          <option value=\"Society\">\r\n                            Society\r\n                          </option>\r\n                          <option value=\"Controversy\">\r\n                            Controversy\r\n                          </option>\r\n                          <option value=\"Politics\">\r\n                            Politics\r\n                          </option>\r\n                          <option value=\"Self-Help\">\r\n                            Self-Help\r\n                          </option>\r\n                          <option value=\"Philosophy\">\r\n                            Philosophy\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__group m-form__group--last form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tArticle Content\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-8\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"summernote\"></div> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea class=\"form-control m-input\"  rows=\"8\" [(ngModel)]=\"content\" name=\"content\"></textarea>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__no-border m-portlet__foot--fit\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions m-form__actions--solid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-2\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 style=\"color:red\">{{throwStatus}}</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button (click)= \"articleSave()\" type=\"reset\" class=\"btn btn-info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSave\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button (click)= \"articleSubmit()\" type=\"submit\" class=\"btn btn-primary\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPublish\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/']\" class=\"btn btn-danger\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t<!--end::Form-->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/write-article/write-article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriteArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_script_loader_service__ = __webpack_require__("../../../../../src/app/services/script-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_cloudinary__ = __webpack_require__("../../../../ng2-cloudinary/dist/esm/src/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WriteArticleComponent = (function () {
    function WriteArticleComponent(authService, router, postService, el, script) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.postService = postService;
        this.el = el;
        this.script = script;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_5_ng2_cloudinary__["b" /* CloudinaryUploader */](new __WEBPACK_IMPORTED_MODULE_5_ng2_cloudinary__["a" /* CloudinaryOptions */]({ cloudName: 'dzmob0mk9', uploadPreset: 'yezel8lw' }));
        this.imgStatus = false;
        //Override onSuccessItem function to record cloudinary response data
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            //response is the cloudinary response
            //see http://cloudinary.com/documentation/upload_images#upload_response
            _this.cloudinaryImage = JSON.parse(response);
            return { item: item, response: response, status: status, headers: headers };
        };
    }
    WriteArticleComponent.prototype.ngOnInit = function () {
    };
    WriteArticleComponent.prototype.ngAfterViewInit = function () {
        this.script.load('.m-grid__item.m-grid__item--fluid.m-wrapper', 'assets/demo/default/custom/components/forms/widgets/summernote.js');
    };
    WriteArticleComponent.prototype.upload = function () {
        var _this = this;
        this.uploader.uploadAll();
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            var res = JSON.parse(response);
            console.log(res);
            _this.imgUrl = res.url;
            _this.imgStatus = true;
        };
    };
    WriteArticleComponent.prototype.articleSubmit = function () {
        //var markup = $('.summernote').summernote('code');  //this is summercode editor code
        var _this = this;
        //this.upload();
        var article = {
            title: this.title,
            tags: this.tags,
            category: this.category,
            imgUrl: this.imgUrl,
            content: this.content,
            status: true,
        };
        console.log(article);
        if (article.title == undefined || article.tags == undefined || article.content == undefined || article.category == undefined) {
            this.throwStatus = "Please fill all fields";
            return false;
        }
        else if (this.imgStatus == false) {
            console.log('please upload image');
        }
        else {
            this.authService.postArticle(article).subscribe(function (data) {
                if (data.success) {
                    console.log('article is posted');
                    _this.router.navigate(['/']);
                }
                else {
                    console.log('unable to post this article');
                    _this.router.navigate(['/write-article']);
                }
            });
        }
    };
    WriteArticleComponent.prototype.articleSave = function () {
        var _this = this;
        var article = {
            title: this.title,
            tags: this.tags,
            category: this.category,
            imgUrl: this.imgUrl,
            content: this.content,
            status: false,
        };
        this.authService.saveArticle(article).subscribe(function (data) {
            if (data.success) {
                console.log('article is successfully saved');
                _this.router.navigate(['/']);
            }
            else {
                console.log('unable to post this article something went wrong');
                _this.router.navigate(['/write-article']);
            }
        });
    };
    WriteArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-write-article',
            template: __webpack_require__("../../../../../src/app/components/write-article/write-article.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/write-article/write-article.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_4__services_script_loader_service__["a" /* ScriptLoaderService */]])
    ], WriteArticleComponent);
    return WriteArticleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/write-quotation/write-quotation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/write-quotation/write-quotation.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n  <div class=\"m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body\">\r\n\r\n\t\t\t\t<div class=\"m-grid__item m-grid__item--fluid m-wrapper\">\r\n\t\t\t\t\t<div class=\"m-content\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"m-portlet\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__head\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__head-caption\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__head-title\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-portlet__head-icon m--hide\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<h3 class=\"m-portlet__head-text\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t  Write Quotation\r\n\t\t\t\t\t\t\t\t\t\t\t\t</h3>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!--begin::Form-->\r\n\t\t\t\t\t\t\t\t\t<form class=\"m-form m-form--fit m-form--label-align-right m-form--group-seperator\" >\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__body\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tQuote:\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-9\">\r\n                          <div class=\"col-lg-6 col-md-9 col-sm-12\">\r\n                            <textarea class=\"form-control m-input\" [(ngModel)]=\"quote\" name=\"quote\" id=\"m_autosize_1\" maxlength=\"350\" rows=\"3\" style=\"overflow: hidden; word-wrap: break-word; resize: none; height: 88px;\"></textarea>\r\n                          </div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group m-form__group row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"col-lg-2 col-form-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tTags:\r\n\t\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control m-input\" [(ngModel)]=\"tags\" name=\"tags\" placeholder=\"Tags\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"m-form__help\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tEx. - life,genjour\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n                      <div class=\"form-group1 m-form__group row\">\r\n                        <label class=\"col-lg-2 col-form-label m-input\"  for=\"caterogySelection\">\r\n                          Choose category\r\n                        </label>\r\n                        <select class=\"custom-select\" [(ngModel)]=\"category\" name=\"category\">\r\n                          <option selected=\"\">\r\n                            Options\r\n                          </option>\r\n                          <option value=\"Life\">\r\n                            Life\r\n                          </option>\r\n                          <option value=\"Economics\">\r\n                            Economics\r\n                          </option>\r\n                          <option value=\"Society\">\r\n                            Society\r\n                          </option>\r\n                          <option value=\"Controversy3\">\r\n                            Controversy\r\n                          </option>\r\n                          <option value=\"Politics\">\r\n                            Politics\r\n                          </option>\r\n                          <option value=\"Self-Help\">\r\n                            Self-Help\r\n                          </option>\r\n                          <option value=\"Philosophy\">\r\n                            Philosophy\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"m-portlet__foot m-portlet__no-border m-portlet__foot--fit\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"m-form__actions m-form__actions--solid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-2\"></div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 style=\"color:red\">{{throwStatus}}</h4>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button (click)= \"quotationSave()\" type=\"reset\" class=\"btn btn-info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSave\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button (click)= \"quotationSubmit()\" type=\"submit\" class=\"btn btn-primary\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPublish\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/']\" class=\"btn btn-danger\"  >\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t\t\t<!--end::Form-->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/write-quotation/write-quotation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WriteQuotationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__("../../../../../src/app/services/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WriteQuotationComponent = (function () {
    function WriteQuotationComponent(validateService, postService, router, auhtService) {
        this.validateService = validateService;
        this.postService = postService;
        this.router = router;
        this.auhtService = auhtService;
    }
    WriteQuotationComponent.prototype.ngOnInit = function () {
    };
    WriteQuotationComponent.prototype.quotationSubmit = function () {
        var _this = this;
        var quotation = {
            quote: this.quote,
            tags: this.tags,
            category: this.category,
            status: true,
        };
        if (quotation.quote == undefined || quotation.tags == undefined || quotation.category == undefined) {
            this.throwStatus = "Please fill all fields";
            return false;
        }
        else {
            this.auhtService.postQuotation(quotation).subscribe(function (data) {
                if (data.success) {
                    console.log('quotation is posted');
                    _this.router.navigate(['/']);
                }
                else {
                    console.log('unable to post this quotation');
                    _this.router.navigate(['/write-quotation']);
                }
            });
        }
    };
    WriteQuotationComponent.prototype.quotationSave = function () {
        var _this = this;
        var quotation = {
            quote: this.quote,
            tags: this.tags,
            category: this.category,
            status: false,
        };
        this.auhtService.postQuotation(quotation).subscribe(function (data) {
            if (data.success) {
                console.log('quotation is posted');
                _this.router.navigate(['/']);
            }
            else {
                console.log('unable to post this quotation');
                _this.router.navigate(['/write-quotation']);
            }
        });
    };
    WriteQuotationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-write-quotation',
            template: __webpack_require__("../../../../../src/app/components/write-quotation/write-quotation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/write-quotation/write-quotation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], WriteQuotationComponent);
    return WriteQuotationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/directives/pipes/profile-img.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileImgPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfileImgPipe = (function () {
    function ProfileImgPipe() {
    }
    ProfileImgPipe.prototype.transform = function (value, args) {
        return null;
    };
    ProfileImgPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'profileImg'
        })
    ], ProfileImgPipe);
    return ProfileImgPipe;
}());



/***/ }),

/***/ "../../../../../src/app/directives/pipes/summary.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SummaryPipe = (function () {
    function SummaryPipe() {
    }
    SummaryPipe.prototype.transform = function (value, args) {
        if (!value)
            return null;
        return value.substr(0, 100) + '...';
    };
    SummaryPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'summary'
        })
    ], SummaryPipe);
    return SummaryPipe;
}());



/***/ }),

/***/ "../../../../../src/app/gaurds/auth.gaurd.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGaurd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGaurd = (function () {
    function AuthGaurd(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGaurd.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGaurd = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGaurd);
    return AuthGaurd;
}());



/***/ }),

/***/ "../../../../../src/app/gaurds/protected.gaurd.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtectedGaurd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProtectedGaurd = (function () {
    function ProtectedGaurd(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProtectedGaurd.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']);
            return false;
        }
        else {
            return true;
        }
    };
    ProtectedGaurd = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ProtectedGaurd);
    return ProtectedGaurd;
}());



/***/ }),

/***/ "../../../../../src/app/services/article.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
    }
    ArticleService.prototype.getArticles = function () {
        return this.http.get('/articles').map(function (response) { return response.json(); });
    };
    ArticleService.prototype.article = function (articleId) {
        return this.http.get("/journal/" + articleId).map(function (res) { return res.json(); });
    };
    ArticleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.userSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.post('/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        return this.http.post('/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.postQuotation = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'Application/json');
        return this.http.post('/journal/add/quotation', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.postArticle = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'Application/json');
        return this.http.post('/journal/add/article', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.saveArticle = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'Application/json');
        return this.http.post('/journal/add/article', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getGenjourist = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'Application/json');
        return this.http.get('/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.userDataBridge = function (data) {
        this.userSubject.next(data);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('userinfo', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/category/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.JournalsByCategory = function (category) {
        return this.http.get('/journals/' + category)
            .map(function (response) { return response.json(); });
    };
    CategoryService.prototype.quotationContent = function (category) {
        return this.http.get('/quotations/' + category)
            .map(function (response) { return response.json(); });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "../../../../../src/app/services/feeds/feeds.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedsService = (function () {
    function FeedsService(http) {
        this.http = http;
    }
    FeedsService.prototype.journalFeeds = function (userId) {
        return this.http.get("/journals/feeds/" + userId)
            .map(function (response) { return response.json(); });
    };
    FeedsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], FeedsService);
    return FeedsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/genjourist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenjouristService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GenjouristService = (function () {
    function GenjouristService(http) {
        this.http = http;
    }
    GenjouristService.prototype.genjouristProfile = function (genjouristId) {
        return this.http.get("/genjourist/" + genjouristId).map(function (res) { return res.json(); });
    };
    GenjouristService.prototype.articles = function (genjouristId) {
        return this.http.get("/genjourist/article/" + genjouristId).map(function (response) { return response.json(); });
    };
    GenjouristService.prototype.quotation = function (genjouristId) {
        return this.http.get("/genjourist/quotation/" + genjouristId).map(function (response) { return response.json(); });
    };
    GenjouristService.prototype.getSupportingList = function (userId) {
        return this.http.get("/supportingList/" + userId).map(function (res) { return res.json(); });
    };
    GenjouristService.prototype.getSupportersList = function (userId) {
        return this.http.get("/supportersList/" + userId).map(function (res) { return res.json(); });
    };
    GenjouristService.prototype.getDraftArticles = function (articleId) {
        return this.http.get("/edit/article/" + articleId).map(function (res) { return res.json(); });
    };
    GenjouristService.prototype.getDraftQuotation = function (quotationId) {
        return this.http.get("/edit/quotation/" + quotationId).map(function (res) { return res.json(); });
    };
    GenjouristService.prototype.deleteArticle = function (articleId) {
        return this.http.delete("/delete/article/" + articleId).map(function (res) { return res.json(); });
    };
    GenjouristService.prototype.draftArticles = function (articleId, article) {
        return this.http.put("/update/article/" + articleId, article).map(function (res) { return res.json(); });
    };
    GenjouristService.prototype.updateArticle = function (articleId, article) {
        return this.http.put("/update/article/" + articleId, article).map(function (res) { return res.json(); });
    };
    GenjouristService.prototype.recommendedUser = function (userId) {
        return this.http.get("/recommended/users/" + userId).map(function (res) { return res.json(); });
    };
    GenjouristService.prototype.changeProfileImage = function (genjouristId, imgAddress) {
        return this.http.put("/genjourist/profileImage/" + genjouristId, imgAddress).map(function (res) { return res.json(); });
    };
    GenjouristService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], GenjouristService);
    return GenjouristService;
}());



/***/ }),

/***/ "../../../../../src/app/services/journals.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JournalsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JournalsService = (function () {
    function JournalsService(http) {
        this.http = http;
    }
    JournalsService.prototype.getJournal = function () {
        return this.http.get("/journal").map(function (res) { return res.json(); });
    };
    JournalsService.prototype.getJournalById = function (journalId) {
        return this.http.get("/journal/" + journalId).map(function (res) { return res.json(); });
    };
    JournalsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], JournalsService);
    return JournalsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = (function () {
    function PostService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    PostService.prototype.PostImage = function (formData) {
        return this.http.post('/articleImage', formData)
            .map(function (res) { return res; });
    };
    PostService.prototype.postQuotation = function (quotation) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'Application/json');
        return this.http.post('/quotation', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "../../../../../src/app/services/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileService = (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.articles = function (genjouristId) {
        //console.log(genjouristId);
        return this.http.get('/genjourist/article/' + genjouristId)
            .map(function (response) { return response.json(); });
    };
    ProfileService.prototype.quotation = function (genjouristId) {
        return this.http.get('/genjourist/quotation/' + genjouristId)
            .map(function (response) { return response.json(); });
    };
    ProfileService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "../../../../../src/app/services/quotations.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuotationsService = (function () {
    function QuotationsService(http) {
        this.http = http;
    }
    QuotationsService.prototype.getQuotations = function () {
        return this.http.get("/quotations")
            .map(function (res) { return res.json(); });
    };
    QuotationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], QuotationsService);
    return QuotationsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/script-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScriptLoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ScriptLoaderService = (function () {
    function ScriptLoaderService() {
        this._scripts = [];
    }
    ScriptLoaderService.prototype.load = function (tag) {
        var _this = this;
        var scripts = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scripts[_i - 1] = arguments[_i];
        }
        this.tag = tag;
        scripts.forEach(function (script) { return _this._scripts[script] = { src: script, loaded: false }; });
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptLoaderService.prototype.loadScript = function (src) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //resolve if already loaded
            if (_this._scripts[src].loaded) {
                resolve({ script: src, loaded: true, status: 'Already Loaded' });
            }
            else {
                //load script
                var script = __WEBPACK_IMPORTED_MODULE_1_jquery__('<script/>')
                    .attr('type', 'text/javascript')
                    .attr('src', _this._scripts[src].src);
                __WEBPACK_IMPORTED_MODULE_1_jquery__(_this.tag).append(script);
                resolve({ script: src, loaded: true, status: 'Loaded' });
            }
        });
    };
    ScriptLoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ScriptLoaderService);
    return ScriptLoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/services/search/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.baseUrl = '/search';
        this.queryUrl = '/user=';
    }
    SearchService.prototype.search = function (terms) {
        var _this = this;
        return terms.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.searchEntries(term); });
    };
    SearchService.prototype.searchEntries = function (term) {
        return this.http
            .get(this.baseUrl + this.queryUrl + term)
            .map(function (res) { return res.json(); });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "../../../../../src/app/services/socket/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService() {
        this.url = '';
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__(this.url);
    }
    SocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "../../../../../src/app/services/support.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var webUrl = "http://localhost:3000";
var SupportService = (function () {
    function SupportService(http) {
        this.http = http;
    }
    SupportService.prototype.supportJournal = function (journalId, genjouristId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        var URL = "/support/journal/" + journalId + "/" + genjouristId;
        // console.log(URL);
        return this.http.post(URL, { headers: headers }).map(function (res) { return res.json(); });
    };
    SupportService.prototype.journalSupporters = function (journalId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        var URL = "/journal/supportersList/" + journalId;
        // console.log(URL);
        return this.http.get(URL, { headers: headers }).map(function (res) { return res.json(); });
    };
    SupportService.prototype.supportGenjourist = function (userId, genjouristId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        var URL = "/support/genjourist/" + userId + "/" + genjouristId;
        return this.http.post(URL, { headers: headers }).map(function (res) { return res.json(); });
    };
    SupportService.prototype.supportingGenjourist = function (userId, genjouristId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'Application/json');
        var URL = "/supporting/genjourist/" + userId + "/" + genjouristId;
        return this.http.post(URL, { headers: headers }).map(function (res) { return res.json(); });
    };
    SupportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], SupportService);
    return SupportService;
}());



/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
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

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.checkLogin = function (user) {
        if (user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.checkRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.password == undefined || user.username == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email.toLowerCase());
    };
    ValidateService.prototype.checkQuotation = function (quotation) {
        if (quotation.title == undefined || quotation.category == " " || quotation.quote == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map