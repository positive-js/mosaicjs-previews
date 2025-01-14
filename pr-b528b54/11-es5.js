(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11], {
    /***/
    "W8uo":
    /*!***********************************************************************!*\
      !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-navbar.js ***!
      \***********************************************************************/

    /*! exports provided: McNavbar, McNavbarBrand, McNavbarContainer, McNavbarDivider, McNavbarItem, McNavbarItemBase, McNavbarLogo, McNavbarMixinBase, McNavbarModule, McNavbarTitle, McNavbarToggle, McNavbarToggleBase, McNavbarToggleMixinBase, McVerticalNavbar, ɵa */

    /***/
    function W8uo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbar", function () {
        return McNavbar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarBrand", function () {
        return McNavbarBrand;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarContainer", function () {
        return McNavbarContainer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarDivider", function () {
        return McNavbarDivider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarItem", function () {
        return McNavbarItem;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarItemBase", function () {
        return McNavbarItemBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarLogo", function () {
        return McNavbarLogo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarMixinBase", function () {
        return McNavbarMixinBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarModule", function () {
        return McNavbarModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarTitle", function () {
        return McNavbarTitle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarToggle", function () {
        return McNavbarToggle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarToggleBase", function () {
        return McNavbarToggleBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McNavbarToggleMixinBase", function () {
        return McNavbarToggleMixinBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "McVerticalNavbar", function () {
        return McVerticalNavbar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return toggleVerticalNavbarAnimation;
      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      "u47x");
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/platform */
      "nLfN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      "GSC3");
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      "8LU1");
      /* harmony import */


      var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ptsecurity/mosaic/button */
      "nTjJ");
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      "qyIq");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");

      var _c0 = ["*"];
      var _c1 = [[["", "mc-navbar-container", ""], ["mc-navbar-container"]]];
      var _c2 = ["[mc-navbar-container], mc-navbar-container"];
      var _c3 = [[["", "mc-navbar-container", ""], ["mc-navbar-container"]], [["", "mc-navbar-toggle", ""], ["mc-navbar-toggle"]]];
      var _c4 = ["[mc-navbar-container], mc-navbar-container", "[mc-navbar-toggle], mc-navbar-toggle"];

      function McNavbarToggle_i_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i", 2);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mc-angle-left-M_16", ctx_r0.mcNavbar.expanded)("mc-angle-right-M_16", !ctx_r0.mcNavbar.expanded);
        }
      }

      function McNavbarToggle_ng_content_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0, 1, ["*ngIf", "mcNavbar.expanded"]);
        }
      }

      var _c5 = [[["", "mc-icon", ""]], [["mc-navbar-title"]]];
      var _c6 = ["[mc-icon]", "mc-navbar-title"];
      var _c7 = ".mc-navbar{position:relative}.mc-navbar,.mc-navbar-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mc-navbar-container{flex-shrink:0}";

      var McNavbarLogo = function McNavbarLogo() {
        _classCallCheck(this, McNavbarLogo);

        this.hovered = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
      };

      McNavbarLogo.ɵfac = function McNavbarLogo_Factory(t) {
        return new (t || McNavbarLogo)();
      };

      McNavbarLogo.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: McNavbarLogo,
        selectors: [["mc-navbar-logo"], ["", "mc-navbar-logo", ""]],
        hostAttrs: [1, "mc-navbar-logo"],
        hostBindings: function McNavbarLogo_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function McNavbarLogo_mouseenter_HostBindingHandler() {
              return ctx.hovered.next(true);
            })("mouseleave", function McNavbarLogo_mouseleave_HostBindingHandler() {
              return ctx.hovered.next(false);
            });
          }
        }
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarLogo, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mc-navbar-logo, [mc-navbar-logo]',
            host: {
              "class": 'mc-navbar-logo',
              '(mouseenter)': 'hovered.next(true)',
              '(mouseleave)': 'hovered.next(false)'
            }
          }]
        }], function () {
          return [];
        }, null);
      })();

      var McNavbarTitle = /*#__PURE__*/function () {
        function McNavbarTitle(elementRef) {
          _classCallCheck(this, McNavbarTitle);

          this.elementRef = elementRef;
          this.hovered = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        }

        _createClass(McNavbarTitle, [{
          key: "text",
          get: function get() {
            return this.elementRef.nativeElement.innerText;
          }
        }, {
          key: "getOuterElementWidth",
          value: function getOuterElementWidth() {
            var _window$getComputedSt = window.getComputedStyle(this.elementRef.nativeElement),
                width = _window$getComputedSt.width,
                marginLeft = _window$getComputedSt.marginLeft,
                marginRight = _window$getComputedSt.marginRight;

            return [width, marginLeft, marginRight].reduce(function (acc, item) {
              return acc + parseInt(item) || 0;
            }, 0);
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.outerElementWidth = this.getOuterElementWidth();
          }
        }]);

        return McNavbarTitle;
      }();

      McNavbarTitle.ɵfac = function McNavbarTitle_Factory(t) {
        return new (t || McNavbarTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      McNavbarTitle.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: McNavbarTitle,
        selectors: [["mc-navbar-title"], ["", "mc-navbar-title", ""]],
        hostAttrs: [1, "mc-navbar-title"],
        hostBindings: function McNavbarTitle_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function McNavbarTitle_mouseenter_HostBindingHandler() {
              return ctx.hovered.next(true);
            })("mouseleave", function McNavbarTitle_mouseleave_HostBindingHandler() {
              return ctx.hovered.next(false);
            });
          }
        }
      });
      /** @nocollapse */

      McNavbarTitle.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarTitle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mc-navbar-title, [mc-navbar-title]',
            host: {
              "class": 'mc-navbar-title',
              '(mouseenter)': 'hovered.next(true)',
              '(mouseleave)': 'hovered.next(false)'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, null);
      })();

      var McNavbarBrand = /*#__PURE__*/function () {
        function McNavbarBrand() {
          _classCallCheck(this, McNavbarBrand);

          this.hovered = false;
          this.destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        }

        _createClass(McNavbarBrand, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this = this;

            Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["merge"])(this.logo.hovered, this.title.hovered).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroyed)).subscribe(function (value) {
              return _this.hovered = value;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroyed.next();
            this.destroyed.complete();
          }
        }]);

        return McNavbarBrand;
      }();

      McNavbarBrand.ɵfac = function McNavbarBrand_Factory(t) {
        return new (t || McNavbarBrand)();
      };

      McNavbarBrand.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: McNavbarBrand,
        selectors: [["mc-navbar-brand"], ["", "mc-navbar-brand", ""]],
        contentQueries: function McNavbarBrand_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, McNavbarLogo, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, McNavbarTitle, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.logo = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.title = _t.first);
          }
        },
        hostAttrs: [1, "mc-navbar-brand"],
        hostVars: 2,
        hostBindings: function McNavbarBrand_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mc-hovered", ctx.hovered);
          }
        }
      });
      McNavbarBrand.propDecorators = {
        logo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [McNavbarLogo]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [McNavbarTitle]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarBrand, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mc-navbar-brand, [mc-navbar-brand]',
            host: {
              "class": 'mc-navbar-brand',
              '[class.mc-hovered]': 'hovered'
            }
          }]
        }], function () {
          return [];
        }, {
          logo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [McNavbarLogo]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [McNavbarTitle]
          }]
        });
      })();

      var McNavbarDivider = function McNavbarDivider() {
        _classCallCheck(this, McNavbarDivider);
      };

      McNavbarDivider.ɵfac = function McNavbarDivider_Factory(t) {
        return new (t || McNavbarDivider)();
      };

      McNavbarDivider.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: McNavbarDivider,
        selectors: [["mc-navbar-divider"]],
        hostAttrs: [1, "mc-navbar-divider"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarDivider, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mc-navbar-divider',
            host: {
              "class": 'mc-navbar-divider'
            }
          }]
        }], null, null);
      })();

      var McNavbarItemBase = /*#__PURE__*/function () {
        function McNavbarItemBase(elementRef) {
          _classCallCheck(this, McNavbarItemBase);

          this.elementRef = elementRef;
        }

        _createClass(McNavbarItemBase, [{
          key: "getOuterElementWidth",
          value: function getOuterElementWidth() {
            var _window$getComputedSt2 = window.getComputedStyle(this.elementRef.nativeElement),
                width = _window$getComputedSt2.width,
                marginLeft = _window$getComputedSt2.marginLeft,
                marginRight = _window$getComputedSt2.marginRight;

            return [width, marginLeft, marginRight].reduce(function (acc, item) {
              return acc + parseInt(item);
            }, 0);
          }
        }]);

        return McNavbarItemBase;
      }();

      McNavbarItemBase.ɵfac = function McNavbarItemBase_Factory(t) {
        return new (t || McNavbarItemBase)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      McNavbarItemBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: McNavbarItemBase,
        selectors: [["mc-navbar-item"], ["", "mc-navbar-item", ""], ["mc-navbar-divider"], ["mc-navbar-brand"], ["", "mc-navbar-brand", ""]],
        contentQueries: function McNavbarItemBase_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButtonCssStyler"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
          }
        },
        hostVars: 8,
        hostBindings: function McNavbarItemBase_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mc-vertical", ctx.vertical)("mc-horizontal", ctx.horizontal)("mc-opened", ctx.vertical && !ctx.closed)("mc-closed", ctx.vertical && ctx.closed);
          }
        }
      });
      /** @nocollapse */

      McNavbarItemBase.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };

      McNavbarItemBase.propDecorators = {
        button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButtonCssStyler"]]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarItemBase, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mc-navbar-item, [mc-navbar-item], mc-navbar-divider, mc-navbar-brand, [mc-navbar-brand]',
            host: {
              '[class.mc-vertical]': 'vertical',
              '[class.mc-horizontal]': 'horizontal',
              '[class.mc-opened]': 'vertical && !closed',
              '[class.mc-closed]': 'vertical && closed'
            }
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, {
          button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButtonCssStyler"]]
          }]
        });
      })(); // tslint:disable-next-line:naming-convention


      var McNavbarMixinBase = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisabled"])(McNavbarItemBase);

      var McNavbarItem = /*#__PURE__*/function (_McNavbarMixinBase) {
        _inherits(McNavbarItem, _McNavbarMixinBase);

        var _super = _createSuper(McNavbarItem);

        function McNavbarItem(focusMonitor, elementRef) {
          var _this2;

          _classCallCheck(this, McNavbarItem);

          _this2 = _super.call(this, elementRef);
          _this2.focusMonitor = focusMonitor;
          _this2.elementRef = elementRef;
          _this2._collapsable = true;
          _this2.collapsed = false;
          _this2._collapsedTitle = null;
          _this2._tabIndex = 0;
          return _this2;
        }

        _createClass(McNavbarItem, [{
          key: "collapsable",
          get: function get() {
            return this._collapsable;
          },
          set: function set(value) {
            this._collapsable = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
          }
        }, {
          key: "collapsedTitle",
          get: function get() {
            return this.collapsed ? this._collapsedTitle || this.title.text : null;
          },
          set: function set(value) {
            this._collapsedTitle = value;
          }
        }, {
          key: "tabIndex",
          get: function get() {
            return this.disabled || this.button ? -1 : this._tabIndex;
          },
          set: function set(value) {
            this._tabIndex = value != null ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value) : 0;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.focusMonitor.stopMonitoring(this.elementRef);
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            if (this.button) {
              return;
            }

            this.focusMonitor.monitor(this.elementRef, true);
          }
        }, {
          key: "getTitleWidth",
          value: function getTitleWidth() {
            return this.title.outerElementWidth;
          }
        }]);

        return McNavbarItem;
      }(McNavbarMixinBase);

      McNavbarItem.ɵfac = function McNavbarItem_Factory(t) {
        return new (t || McNavbarItem)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      McNavbarItem.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: McNavbarItem,
        selectors: [["mc-navbar-item"], ["", "mc-navbar-item", ""]],
        contentQueries: function McNavbarItem_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButtonCssStyler"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, McNavbarTitle, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.button = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.title = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.icon = _t.first);
          }
        },
        hostAttrs: [1, "mc-navbar-item"],
        hostVars: 7,
        hostBindings: function McNavbarItem_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("title", ctx.collapsedTitle)("tabindex", ctx.tabIndex)("disabled", ctx.disabled || null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mc-navbar-item_collapsed", ctx.collapsed)("mc-navbar-item_button", ctx.button);
          }
        },
        inputs: {
          disabled: "disabled",
          collapsed: "collapsed",
          collapsable: "collapsable",
          collapsedTitle: "collapsedTitle"
        },
        exportAs: ["mcNavbarItem"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function McNavbarItem_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
          }
        },
        styles: [".mc-navbar-title{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mc-navbar-item{position:relative;display:flex;align-items:center;height:var(--mc-navbar-item-size-height,48px);padding-left:var(--mc-navbar-item-size-padding,16px);padding-right:var(--mc-navbar-item-size-padding,16px)}.mc-navbar-item .mc-icon{min-width:16px;min-height:16px}.mc-navbar-item.mc-vertical .mc-navbar-title{padding-left:26px}.mc-navbar-item.mc-vertical .mc-icon+.mc-navbar-title,.mc-navbar-item.mc-vertical .mc-navbar-title+.mc-icon{padding-left:var(--mc-vertical-navbar-size-icon-margin,10px)}.mc-navbar-item.mc-vertical .mc-badge{position:absolute;display:flex;align-items:center;justify-content:center}.mc-navbar-item.mc-vertical.mc-opened .mc-badge{right:16px;height:24px;padding-right:7px;padding-left:7px}.mc-navbar-item.mc-vertical.mc-closed .mc-badge{top:8px;right:8px;height:16px;padding-right:4px;padding-left:4px}.mc-navbar-item.mc-vertical.mc-closed .mc-navbar-title{display:none}.mc-navbar-item.mc-vertical.mc-closed.mc-navbar-item_button{padding-left:8px;padding-right:8px}.mc-navbar-item.mc-horizontal .mc-icon+.mc-navbar-title,.mc-navbar-item.mc-horizontal .mc-navbar-title+.mc-icon{padding-left:var(--mc-navbar-size-icon-margin,4px)}.mc-navbar-item.mc-horizontal.mc-navbar-item_collapsed .mc-navbar-title{display:none}.mc-navbar-item.mc-navbar-item_button .mc-icon-button{flex:1}.mc-navbar-item.mc-navbar-item_button .mc-icon-button .mc-button-wrapper{justify-content:center}.mc-navbar-item.mc-navbar-item_button .mc-icon-button .mc-button-wrapper .mc-icon.mc-icon_left{margin-left:unset}.mc-navbar-item.mc-navbar-item_button .mc-icon-button .mc-button-wrapper .mc-icon.mc-icon_right{margin-right:unset}a.mc-navbar-item,a.mc-navbar-title{text-decoration:none}", ".mc-navbar-logo{display:flex}.mc-navbar-brand{position:relative;display:flex;align-items:center}.mc-navbar-brand .mc-navbar-title{cursor:pointer}a.mc-navbar-brand{text-decoration:none}.mc-navbar-brand.mc-horizontal{height:var(--mc-navbar-item-size-height,48px);padding-right:var(--mc-navbar-brand-size-margin-right,24px)}.mc-navbar-brand.mc-horizontal .mc-navbar-title{padding-left:var(--mc-navbar-brand-size-padding,12px);padding-right:0}.mc-navbar-brand.mc-vertical{flex-direction:column}.mc-navbar-brand.mc-vertical .mc-navbar-logo{flex-direction:column;height:var(--mc-navbar-item-size-height,48px)}.mc-navbar-brand.mc-vertical .mc-navbar-title{display:flex;align-items:center;height:var(--mc-navbar-item-size-height,48px);padding-left:0}.mc-navbar-brand.mc-vertical.mc-opened{align-items:unset}.mc-navbar-brand.mc-vertical.mc-opened .mc-navbar-item{position:absolute;top:0;right:0}.mc-navbar-brand.mc-vertical.mc-opened .mc-navbar-logo{padding-left:16px;justify-content:flex-end}.mc-navbar-brand.mc-vertical.mc-opened .mc-navbar-title{padding-left:16px}.mc-navbar-brand.mc-vertical.mc-closed{padding:0}.mc-navbar-brand.mc-vertical.mc-closed .mc-navbar-logo{align-items:center;justify-content:center;width:48px}.mc-navbar-brand.mc-vertical.mc-closed .mc-navbar-title{display:none}", ".mc-navbar-divider{display:block}.mc-navbar-divider.mc-vertical{height:1px;margin:8px 16px}.mc-navbar-divider.mc-vertical.mc-closed{margin-right:10px;margin-left:10px}.mc-navbar-divider.mc-horizontal{width:1px;height:28px;margin-left:8px;margin-right:8px}"],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McNavbarItem.ctorParameters = function () {
        return [{
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };

      McNavbarItem.propDecorators = {
        button: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButtonCssStyler"]]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [McNavbarTitle]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [_ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"]]
        }],
        collapsable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        collapsed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        collapsedTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarItem, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mc-navbar-item, [mc-navbar-item]',
            exportAs: 'mcNavbarItem',
            template: "<ng-content></ng-content>",
            host: {
              "class": 'mc-navbar-item',
              '[class.mc-navbar-item_collapsed]': 'collapsed',
              '[class.mc-navbar-item_button]': 'button',
              '[attr.title]': 'collapsedTitle',
              '[attr.tabindex]': 'tabIndex',
              '[attr.disabled]': 'disabled || null'
            },
            inputs: ['disabled'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            styles: [".mc-navbar-title{display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mc-navbar-item{position:relative;display:flex;align-items:center;height:var(--mc-navbar-item-size-height,48px);padding-left:var(--mc-navbar-item-size-padding,16px);padding-right:var(--mc-navbar-item-size-padding,16px)}.mc-navbar-item .mc-icon{min-width:16px;min-height:16px}.mc-navbar-item.mc-vertical .mc-navbar-title{padding-left:26px}.mc-navbar-item.mc-vertical .mc-icon+.mc-navbar-title,.mc-navbar-item.mc-vertical .mc-navbar-title+.mc-icon{padding-left:var(--mc-vertical-navbar-size-icon-margin,10px)}.mc-navbar-item.mc-vertical .mc-badge{position:absolute;display:flex;align-items:center;justify-content:center}.mc-navbar-item.mc-vertical.mc-opened .mc-badge{right:16px;height:24px;padding-right:7px;padding-left:7px}.mc-navbar-item.mc-vertical.mc-closed .mc-badge{top:8px;right:8px;height:16px;padding-right:4px;padding-left:4px}.mc-navbar-item.mc-vertical.mc-closed .mc-navbar-title{display:none}.mc-navbar-item.mc-vertical.mc-closed.mc-navbar-item_button{padding-left:8px;padding-right:8px}.mc-navbar-item.mc-horizontal .mc-icon+.mc-navbar-title,.mc-navbar-item.mc-horizontal .mc-navbar-title+.mc-icon{padding-left:var(--mc-navbar-size-icon-margin,4px)}.mc-navbar-item.mc-horizontal.mc-navbar-item_collapsed .mc-navbar-title{display:none}.mc-navbar-item.mc-navbar-item_button .mc-icon-button{flex:1}.mc-navbar-item.mc-navbar-item_button .mc-icon-button .mc-button-wrapper{justify-content:center}.mc-navbar-item.mc-navbar-item_button .mc-icon-button .mc-button-wrapper .mc-icon.mc-icon_left{margin-left:unset}.mc-navbar-item.mc-navbar-item_button .mc-icon-button .mc-button-wrapper .mc-icon.mc-icon_right{margin-right:unset}a.mc-navbar-item,a.mc-navbar-title{text-decoration:none}", ".mc-navbar-logo{display:flex}.mc-navbar-brand{position:relative;display:flex;align-items:center}.mc-navbar-brand .mc-navbar-title{cursor:pointer}a.mc-navbar-brand{text-decoration:none}.mc-navbar-brand.mc-horizontal{height:var(--mc-navbar-item-size-height,48px);padding-right:var(--mc-navbar-brand-size-margin-right,24px)}.mc-navbar-brand.mc-horizontal .mc-navbar-title{padding-left:var(--mc-navbar-brand-size-padding,12px);padding-right:0}.mc-navbar-brand.mc-vertical{flex-direction:column}.mc-navbar-brand.mc-vertical .mc-navbar-logo{flex-direction:column;height:var(--mc-navbar-item-size-height,48px)}.mc-navbar-brand.mc-vertical .mc-navbar-title{display:flex;align-items:center;height:var(--mc-navbar-item-size-height,48px);padding-left:0}.mc-navbar-brand.mc-vertical.mc-opened{align-items:unset}.mc-navbar-brand.mc-vertical.mc-opened .mc-navbar-item{position:absolute;top:0;right:0}.mc-navbar-brand.mc-vertical.mc-opened .mc-navbar-logo{padding-left:16px;justify-content:flex-end}.mc-navbar-brand.mc-vertical.mc-opened .mc-navbar-title{padding-left:16px}.mc-navbar-brand.mc-vertical.mc-closed{padding:0}.mc-navbar-brand.mc-vertical.mc-closed .mc-navbar-logo{align-items:center;justify-content:center;width:48px}.mc-navbar-brand.mc-vertical.mc-closed .mc-navbar-title{display:none}", ".mc-navbar-divider{display:block}.mc-navbar-divider.mc-vertical{height:1px;margin:8px 16px}.mc-navbar-divider.mc-vertical.mc-closed{margin-right:10px;margin-left:10px}.mc-navbar-divider.mc-horizontal{width:1px;height:28px;margin-left:8px;margin-right:8px}"]
          }]
        }], function () {
          return [{
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, {
          collapsed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          collapsable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          collapsedTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [_ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_6__["McButtonCssStyler"]]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [McNavbarTitle]
          }],
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [_ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"]]
          }]
        });
      })();

      var McNavbarContainer = function McNavbarContainer() {
        _classCallCheck(this, McNavbarContainer);
      };

      McNavbarContainer.ɵfac = function McNavbarContainer_Factory(t) {
        return new (t || McNavbarContainer)();
      };

      McNavbarContainer.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: McNavbarContainer,
        selectors: [["mc-navbar-container"]],
        hostAttrs: [1, "mc-navbar-container"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
          args: [{
            selector: 'mc-navbar-container',
            host: {
              "class": 'mc-navbar-container'
            }
          }]
        }], null, null);
      })();

      var McNavbar = /*#__PURE__*/function () {
        function McNavbar(elementRef) {
          var _this3 = this;

          _classCallCheck(this, McNavbar);

          this.elementRef = elementRef;
          this.resizeStream = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
          this.resizeDebounceInterval = 100;

          this.updateCollapsed = function () {
            var collapseDelta = _this3.totalItemsWidth - _this3.width;
            var needCollapse = collapseDelta > 0;

            if (needCollapse) {
              _this3.collapseItems(collapseDelta);
            } else {
              _this3.unCollapseItems(collapseDelta);
            }
          };

          this.setItemsState = function () {
            Promise.resolve().then(function () {
              var _a;

              return (_a = _this3.navbarBaseItems) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                return item.horizontal = true;
              });
            });
          };

          this.resizeSubscription = this.resizeStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["debounceTime"])(this.resizeDebounceInterval)).subscribe(this.updateCollapsed);
        }

        _createClass(McNavbar, [{
          key: "width",
          get: function get() {
            return this.elementRef.nativeElement.getBoundingClientRect().width;
          }
        }, {
          key: "totalItemsWidth",
          get: function get() {
            return this.navbarBaseItems.reduce(function (acc, item) {
              return acc + item.getOuterElementWidth();
            }, 0);
          }
        }, {
          key: "collapsableItems",
          get: function get() {
            return this.navbarItems.toArray().filter(function (item) {
              return item.icon && item.title && item.collapsable;
            }).reverse();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.setItemsState();
            this.navbarBaseItems.changes.subscribe(this.setItemsState);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // Note: this wait is required for loading and rendering fonts for icons;
            // unfortunately we cannot control font rendering
            setTimeout(this.updateCollapsed);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.resizeSubscription.unsubscribe();
          }
        }, {
          key: "collapseItems",
          value: function collapseItems(collapseDelta) {
            var delta = collapseDelta;
            var unCollapsedItems = this.collapsableItems.filter(function (item) {
              return !item.collapsed;
            });

            var _iterator = _createForOfIteratorHelper(unCollapsedItems),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                item.collapsed = true;
                delta -= item.getTitleWidth();

                if (delta < 0) {
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "unCollapseItems",
          value: function unCollapseItems(collapseDelta) {
            var delta = collapseDelta;
            this.collapsableItems.filter(function (item) {
              return item.collapsed;
            }).forEach(function (item) {
              if (delta + item.getTitleWidth() < 0) {
                item.collapsed = false;
                delta += item.getTitleWidth();
              }
            });
          }
        }]);

        return McNavbar;
      }();

      McNavbar.ɵfac = function McNavbar_Factory(t) {
        return new (t || McNavbar)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      McNavbar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: McNavbar,
        selectors: [["mc-navbar"]],
        contentQueries: function McNavbar_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, McNavbarItemBase, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, McNavbarItem, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.navbarBaseItems = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.navbarItems = _t);
          }
        },
        hostAttrs: [1, "mc-navbar"],
        hostBindings: function McNavbar_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function McNavbar_resize_HostBindingHandler($event) {
              return ctx.resizeStream.next($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
          }
        },
        ngContentSelectors: _c2,
        decls: 1,
        vars: 0,
        template: function McNavbar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
          }
        },
        styles: [_c7],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McNavbar.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };

      McNavbar.propDecorators = {
        navbarBaseItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [McNavbarItemBase, {
            descendants: true
          }]
        }],
        navbarItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [McNavbarItem, {
            descendants: true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mc-navbar',
            template: "<ng-content select=\"[mc-navbar-container], mc-navbar-container\"></ng-content>",
            host: {
              "class": 'mc-navbar',
              '(window:resize)': 'resizeStream.next($event)'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            styles: [".mc-navbar{position:relative}.mc-navbar,.mc-navbar-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mc-navbar-container{flex-shrink:0}"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, {
          navbarBaseItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [McNavbarItemBase, {
              descendants: true
            }]
          }],
          navbarItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [McNavbarItem, {
              descendants: true
            }]
          }]
        });
      })();

      function toggleVerticalNavbarAnimation() {
        return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('toggle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
          width: '48px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({
          width: '240px'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])('0 <=> 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('200ms cubic-bezier(0, 1, 0.5, 1)'))]);
      }

      var McVerticalNavbar = /*#__PURE__*/function () {
        function McVerticalNavbar() {
          var _this4 = this;

          _classCallCheck(this, McVerticalNavbar);

          this._expanded = false;

          this.setItemsState = function () {
            Promise.resolve().then(function () {
              var _a;

              return (_a = _this4.navbarBaseItems) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
                return item.vertical = true;
              });
            });
          };
        }

        _createClass(McVerticalNavbar, [{
          key: "expanded",
          get: function get() {
            return this._expanded;
          },
          set: function set(value) {
            this._expanded = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
            this.setClosedStateForItems(value);
          }
        }, {
          key: "toggle",
          value: function toggle() {
            this.expanded = !this.expanded;
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.setItemsState();
            this.setClosedStateForItems(this.expanded);
            this.navbarBaseItems.changes.subscribe(this.setItemsState);
          }
        }, {
          key: "setClosedStateForItems",
          value: function setClosedStateForItems(value) {
            var _a;

            (_a = this.navbarBaseItems) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
              item.closed = !value;
              setTimeout(function () {
                var _a;

                return (_a = item.button) === null || _a === void 0 ? void 0 : _a.updateClassModifierForIcons();
              });
            });
          }
        }]);

        return McVerticalNavbar;
      }();

      McVerticalNavbar.ɵfac = function McVerticalNavbar_Factory(t) {
        return new (t || McVerticalNavbar)();
      };

      McVerticalNavbar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: McVerticalNavbar,
        selectors: [["mc-vertical-navbar"]],
        contentQueries: function McVerticalNavbar_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, McNavbarItemBase, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.navbarBaseItems = _t);
          }
        },
        hostAttrs: [1, "mc-vertical-navbar"],
        hostVars: 5,
        hostBindings: function McVerticalNavbar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsyntheticHostProperty"]("@toggle", ctx.expanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mc-closed", !ctx.expanded)("mc-opened", ctx.expanded);
          }
        },
        inputs: {
          expanded: "expanded"
        },
        exportAs: ["McVerticalNavbar"],
        ngContentSelectors: _c4,
        decls: 2,
        vars: 0,
        template: function McVerticalNavbar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1, 1);
          }
        },
        styles: [".mc-vertical-navbar{display:flex;flex-direction:column}.mc-vertical-navbar .mc-navbar-container{flex-direction:column;align-items:unset}.mc-vertical-navbar.mc-opened{width:var(--mc-vertical-navbar-size-states-opened-width,240px)}.mc-vertical-navbar.mc-closed{width:var(--mc-vertical-navbar-size-states-closed-width,48px)}"],
        encapsulation: 2,
        data: {
          animation: [toggleVerticalNavbarAnimation()]
        },
        changeDetection: 0
      });
      McVerticalNavbar.propDecorators = {
        expanded: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        navbarBaseItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
          args: [McNavbarItemBase, {
            descendants: true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McVerticalNavbar, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mc-vertical-navbar',
            exportAs: 'McVerticalNavbar',
            template: "\n        <ng-content select=\"[mc-navbar-container], mc-navbar-container\"></ng-content>\n        <ng-content select=\"[mc-navbar-toggle], mc-navbar-toggle\"></ng-content>\n    ",
            host: {
              "class": 'mc-vertical-navbar',
              '[class.mc-closed]': '!expanded',
              '[class.mc-opened]': 'expanded',
              '[@toggle]': 'expanded'
            },
            animations: [toggleVerticalNavbarAnimation()],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            styles: [".mc-vertical-navbar{display:flex;flex-direction:column}.mc-vertical-navbar .mc-navbar-container{flex-direction:column;align-items:unset}.mc-vertical-navbar.mc-opened{width:var(--mc-vertical-navbar-size-states-opened-width,240px)}.mc-vertical-navbar.mc-closed{width:var(--mc-vertical-navbar-size-states-closed-width,48px)}"]
          }]
        }], function () {
          return [];
        }, {
          expanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
          }],
          navbarBaseItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [McNavbarItemBase, {
              descendants: true
            }]
          }]
        });
      })();

      var McNavbarToggleBase = // tslint:disable-next-line:naming-convention
      function McNavbarToggleBase(_elementRef) {
        _classCallCheck(this, McNavbarToggleBase);

        this._elementRef = _elementRef;
      }; // tslint:disable-next-line:naming-convention


      var McNavbarToggleMixinBase = Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_7__["mixinTabIndex"])(Object(_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisabled"])(McNavbarToggleBase));

      var McNavbarToggle = /*#__PURE__*/function (_McNavbarToggleMixinB) {
        _inherits(McNavbarToggle, _McNavbarToggleMixinB);

        var _super2 = _createSuper(McNavbarToggle);

        function McNavbarToggle(mcNavbar, focusMonitor, elementRef) {
          var _this5;

          _classCallCheck(this, McNavbarToggle);

          _this5 = _super2.call(this, elementRef);
          _this5.mcNavbar = mcNavbar;
          _this5.focusMonitor = focusMonitor;
          _this5.elementRef = elementRef;
          return _this5;
        }

        _createClass(McNavbarToggle, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.focusMonitor.stopMonitoring(this.elementRef.nativeElement);
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.focusMonitor.monitor(this.elementRef.nativeElement, true);
          }
        }]);

        return McNavbarToggle;
      }(McNavbarToggleMixinBase);

      McNavbarToggle.ɵfac = function McNavbarToggle_Factory(t) {
        return new (t || McNavbarToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](McVerticalNavbar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
      };

      McNavbarToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: McNavbarToggle,
        selectors: [["mc-navbar-toggle"]],
        contentQueries: function McNavbarToggle_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.customIcon = _t.first);
          }
        },
        hostAttrs: [1, "mc-navbar-item", "mc-navbar-toggle", "mc-vertical"],
        hostVars: 2,
        hostBindings: function McNavbarToggle_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("tabindex", ctx.tabIndex)("disabled", ctx.disabled || null);
          }
        },
        inputs: {
          tabIndex: "tabIndex"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c6,
        decls: 3,
        vars: 2,
        consts: [["mc-icon", "", 3, "mc-angle-left-M_16", "mc-angle-right-M_16", 4, "ngIf"], [4, "ngIf"], ["mc-icon", ""]],
        template: function McNavbarToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"](_c5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, McNavbarToggle_i_0_Template, 1, 4, "i", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, McNavbarToggle_ng_content_2_Template, 1, 0, "ng-content", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.customIcon);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mcNavbar.expanded);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconCSSStyler"]],
        styles: [_c7],
        encapsulation: 2,
        changeDetection: 0
      });
      /** @nocollapse */

      McNavbarToggle.ctorParameters = function () {
        return [{
          type: McVerticalNavbar
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };

      McNavbarToggle.propDecorators = {
        customIcon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
          args: [_ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"]]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'mc-navbar-toggle',
            template: "\n        <i mc-icon\n           [class.mc-angle-left-M_16]=\"mcNavbar.expanded\"\n           [class.mc-angle-right-M_16]=\"!mcNavbar.expanded\"\n           *ngIf=\"!customIcon\">\n        </i>\n\n        <ng-content select=\"[mc-icon]\"></ng-content>\n        <ng-content select=\"mc-navbar-title\" *ngIf=\"mcNavbar.expanded\"></ng-content>\n    ",
            host: {
              "class": 'mc-navbar-item mc-navbar-toggle mc-vertical',
              '[attr.tabindex]': 'tabIndex',
              '[attr.disabled]': 'disabled || null'
            },
            inputs: ['tabIndex'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
            styles: [".mc-navbar{position:relative}.mc-navbar,.mc-navbar-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.mc-navbar-container{flex-shrink:0}"]
          }]
        }], function () {
          return [{
            type: McVerticalNavbar
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
          }];
        }, {
          customIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: [_ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"]]
          }]
        });
      })();

      var McNavbarModule = function McNavbarModule() {
        _classCallCheck(this, McNavbarModule);
      };

      McNavbarModule.ɵfac = function McNavbarModule_Factory(t) {
        return new (t || McNavbarModule)();
      };

      McNavbarModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: McNavbarModule
      });
      McNavbarModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](McNavbarModule, {
          declarations: function declarations() {
            return [McNavbar, McNavbarContainer, McNavbarTitle, McNavbarItem, McNavbarBrand, McNavbarLogo, McNavbarToggle, McVerticalNavbar, McNavbarDivider, McNavbarItemBase];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"]];
          },
          exports: function exports() {
            return [McNavbar, McNavbarContainer, McNavbarTitle, McNavbarItem, McNavbarBrand, McNavbarLogo, McNavbarToggle, McVerticalNavbar, McNavbarDivider, McNavbarItemBase];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McNavbarModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"]],
            exports: [McNavbar, McNavbarContainer, McNavbarTitle, McNavbarItem, McNavbarBrand, McNavbarLogo, McNavbarToggle, McVerticalNavbar, McNavbarDivider, McNavbarItemBase],
            declarations: [McNavbar, McNavbarContainer, McNavbarTitle, McNavbarItem, McNavbarBrand, McNavbarLogo, McNavbarToggle, McVerticalNavbar, McNavbarDivider, McNavbarItemBase]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "quBq":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-navbar.js ***!
      \*******************************************************************************************************/

    /*! exports provided: NavbarExamplesModule, NavbarOverviewExample, NavbarVerticalExample */

    /***/
    function quBq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarExamplesModule", function () {
        return NavbarExamplesModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarOverviewExample", function () {
        return NavbarOverviewExample;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarVerticalExample", function () {
        return NavbarVerticalExample;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ptsecurity/mosaic/button */
      "nTjJ");
      /* harmony import */


      var _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ptsecurity/mosaic/dropdown */
      "8sAt");
      /* harmony import */


      var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ptsecurity/mosaic/icon */
      "GSC3");
      /* harmony import */


      var _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ptsecurity/mosaic/navbar */
      "W8uo");
      /**
       * @title Navbar
       */


      var NavbarOverviewExample = function NavbarOverviewExample() {
        _classCallCheck(this, NavbarOverviewExample);
      };

      NavbarOverviewExample.ɵfac = function NavbarOverviewExample_Factory(t) {
        return new (t || NavbarOverviewExample)();
      };

      NavbarOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NavbarOverviewExample,
        selectors: [["navbar-overview-example"]],
        decls: 42,
        vars: 1,
        consts: [[1, "demo-container"], ["mc-icon", "mc-bento_16"], ["href", "https://www.ptsecurity.com/", "mc-navbar-logo", ""], ["height", "32", "viewBox", "0 0 32 32", "width", "32", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "none", "fill-rule", "evenodd"], ["d", "m0 32h32v-32h-32z", "fill", "#c00"], ["d", "m11.7013126 2.13713398h3.4056699v5.22500971c.0083884 1.2815534 1.0494758 2.31984466 2.3304078 2.32543689v-1.89825242c-.2370486-.00528156-.4296699-.19231068-.432466-.42718447v-5.22500971h3.4050485v-1.89794175h-8.7086602zm-3.29065629-1.89806602h-5.95976699-.0167767c-1.28062136.00590291-2.3192233 1.04978641-2.32481553 2.33351456h1.89794174c.00590292-.23735922.19262136-.42407767.42687379-.43557281h5.97654369c.24295146 0 .44054369.19821359.44054369.44427184v.97646602c0 .23735923-.19759223.43867961-.44054369.43867961l-5.97654369.00248544c-1.28062136.01118447-2.3192233 1.04667961-2.32481553 2.33071845v3.35782524h1.89794174v-3.35782524c.00590292-.23207767.19262136-.42438835.42687379-.42718447h5.97654369c1.28932039 0 2.34190289-1.05227184 2.34190289-2.34469903v-.97646602c0-1.29242718-1.0525825-2.34221359-2.34190289-2.34221359", "fill", "#fff", "transform", "translate(5.592 10.889)"], ["href", "https://www.ptsecurity.com/", "mc-navbar-title", ""], [1, "mc-active"], ["mc-icon", "mc-info_16"], ["mc-icon", "mc-calendar_16"], [1, "mc-progress"], ["mc-icon", "mc-download_16"], ["disabled", "", 1, "mc-progress"], ["mc-icon", "mc-clock_16"], ["disabled", ""], ["mc-icon", "mc-search_16"], ["mc-icon", "mc-gear_16"], [3, "collapsedTitle"]],
        template: function NavbarOverviewExample_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mc-navbar-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mc-navbar-brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "svg", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "g", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mc-navbar-item", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Left icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Left icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mc-navbar-item", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "In-progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mc-navbar-item", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Disabled in-progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mc-navbar-item", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Right Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mc-navbar-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mc-navbar-item", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Right Icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsedTitle", "custom title");
          }
        },
        directives: [_ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbar"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarContainer"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarItem"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarItemBase"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconCSSStyler"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarBrand"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarLogo"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarTitle"]],
        styles: [".demo-container[_ngcontent-%COMP%]{margin-bottom:10px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarOverviewExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'navbar-overview-example',
            templateUrl: 'navbar-overview-example.html',
            styleUrls: ['navbar-overview-example.css']
          }]
        }], null, null);
      })();

      function NavbarVerticalExample_i_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 33);
        }
      }

      function NavbarVerticalExample_i_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 34);
        }
      }

      function NavbarVerticalExample_i_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 33);
        }
      }

      function NavbarVerticalExample_i_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 34);
        }
      }

      function NavbarVerticalExample_span_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u041D\u043E\u0432\u044B\u0439 \u0438\u043D\u0446\u0438\u0434\u0435\u043D\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }
      /**
       * @title Vertical Navbar
       */


      var NavbarVerticalExample = /*#__PURE__*/function () {
        function NavbarVerticalExample() {
          _classCallCheck(this, NavbarVerticalExample);
        }

        _createClass(NavbarVerticalExample, [{
          key: "onItemClick",
          value: function onItemClick(event) {
            alert("innerText: ".concat(event.target.innerText));
          }
        }]);

        return NavbarVerticalExample;
      }();

      NavbarVerticalExample.ɵfac = function NavbarVerticalExample_Factory(t) {
        return new (t || NavbarVerticalExample)();
      };

      NavbarVerticalExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: NavbarVerticalExample,
        selectors: [["navbar-vertical-example"]],
        decls: 85,
        vars: 21,
        consts: [[1, "demo-container"], [3, "overlapTriggerY", "overlapTriggerX"], ["appDropdown", "mcDropdown"], ["mc-dropdown-item", ""], ["firstDropdown", "mcDropdown"], ["secondDropdown", "mcDropdown"], [1, "layout-align-space-between"], ["verticalNavbar", ""], [3, "mcDropdownTriggerFor"], ["appDropdownTrigger", "mcDropdownTrigger"], ["mc-icon", "mc-bento_16"], ["href", "https://www.ptsecurity.com/", "mc-navbar-logo", ""], ["height", "32", "viewBox", "0 0 32 32", "width", "32", "xmlns", "http://www.w3.org/2000/svg"], ["fill", "none", "fill-rule", "evenodd"], ["d", "m0 32h32v-32h-32z", "fill", "#c00"], ["d", "m11.7013126 2.13713398h3.4056699v5.22500971c.0083884 1.2815534 1.0494758 2.31984466 2.3304078 2.32543689v-1.89825242c-.2370486-.00528156-.4296699-.19231068-.432466-.42718447v-5.22500971h3.4050485v-1.89794175h-8.7086602zm-3.29065629-1.89806602h-5.95976699-.0167767c-1.28062136.00590291-2.3192233 1.04978641-2.32481553 2.33351456h1.89794174c.00590292-.23735922.19262136-.42407767.42687379-.43557281h5.97654369c.24295146 0 .44054369.19821359.44054369.44427184v.97646602c0 .23735923-.19759223.43867961-.44054369.43867961l-5.97654369.00248544c-1.28062136.01118447-2.3192233 1.04667961-2.32481553 2.33071845v3.35782524h1.89794174v-3.35782524c.00590292-.23207767.19262136-.42438835.42687379-.42718447h5.97654369c1.28932039 0 2.34190289-1.05227184 2.34190289-2.34469903v-.97646602c0-1.29242718-1.0525825-2.34221359-2.34190289-2.34221359", "fill", "#fff", "transform", "translate(5.592 10.889)"], ["href", "https://www.ptsecurity.com/", "mc-navbar-title", ""], ["mc-icon", "mc-calendar_16"], ["firstDropdownTrigger", "mcDropdownTrigger"], ["mc-icon", "mc-ellipsis_16", 4, "ngIf"], [1, "layout-row", "flex", "layout-align-space-between", "layout-align-center-center"], ["mc-icon", "mc-angle-right-L_16", 4, "ngIf"], ["mc-icon", "mc-folder-opened_16"], ["secondDropdownTrigger", "mcDropdownTrigger"], [1, "layout", "flex", "layout-align-space-between", "layout-align-center-center"], [3, "click"], ["mc-button", "", 3, "color"], ["mc-icon", "mc-info_16"], [4, "ngIf"], ["mc-icon", "mc-search_16"], ["mc-icon", "mc-bell-o_16"], [1, "mc-badge", "mc-badge_error"], [3, "click", "keydown.space"], ["mc-icon", "mc-ellipsis_16"], ["mc-icon", "mc-angle-right-L_16"]],
        template: function NavbarVerticalExample_Template(rf, ctx) {
          if (rf & 1) {
            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-dropdown", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Point 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Point 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Point 3");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mc-dropdown", 1, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Point 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Point 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mc-dropdown", 1, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Point 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Point 2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mc-vertical-navbar", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mc-navbar-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mc-navbar-brand");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mc-navbar-item", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "svg", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "g", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "path", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "path", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Application Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mc-navbar-item", 8, 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, NavbarVerticalExample_i_41_Template, 1, 0, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0433\u043E");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, NavbarVerticalExample_i_45_Template, 1, 0, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "\u0418\u043D\u0446\u0438\u0434\u0435\u043D\u0442\u044B");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mc-navbar-item", 8, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, NavbarVerticalExample_i_52_Template, 1, 0, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "\u0415\u0449\u0435");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, NavbarVerticalExample_i_56_Template, 1, 0, "i", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mc-navbar-item", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarVerticalExample_Template_mc_navbar_item_click_57_listener($event) {
              return ctx.onItemClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "i", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, NavbarVerticalExample_span_60_Template, 2, 0, "span", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mc-navbar-container");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "\u041F\u043E\u0438\u0441\u043A");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "mc-navbar-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "\u0421\u043F\u0440\u0430\u0432\u043A\u0430");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mc-navbar-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "i", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "\u041F\u0440\u043E\u0444\u0438\u043B\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "mc-navbar-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "mc-navbar-toggle", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarVerticalExample_Template_mc_navbar_toggle_click_82_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);

              return _r3.toggle();
            })("keydown.space", function NavbarVerticalExample_Template_mc_navbar_toggle_keydown_space_82_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

              var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);

              return _r3.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "mc-navbar-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26);

            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](40);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](51);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlapTriggerY", true)("overlapTriggerX", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlapTriggerY", true)("overlapTriggerX", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("overlapTriggerY", true)("overlapTriggerX", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-active", _r4.opened);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-active", _r5.opened);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r3.expanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.expanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-active", _r8.opened);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcDropdownTriggerFor", _r2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r3.expanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.expanded);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.expanded);
          }
        },
        directives: [_ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_3__["McDropdown"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_3__["McDropdownItem"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McVerticalNavbar"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarContainer"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarBrand"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarItemBase"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarItem"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_3__["McDropdownTrigger"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconCSSStyler"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarLogo"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButton"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonCssStyler"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarDivider"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarToggle"]],
        styles: [".demo-container[_ngcontent-%COMP%]{margin-bottom:10px}.mc-vertical-navbar[_ngcontent-%COMP%]{height:700px}"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarVerticalExample, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'navbar-vertical-example',
            templateUrl: 'navbar-vertical-example.html',
            styleUrls: ['navbar-vertical-example.css']
          }]
        }], null, null);
      })();

      var EXAMPLES = [NavbarOverviewExample, NavbarVerticalExample];

      var NavbarExamplesModule = function NavbarExamplesModule() {
        _classCallCheck(this, NavbarExamplesModule);
      };

      NavbarExamplesModule.ɵfac = function NavbarExamplesModule_Factory(t) {
        return new (t || NavbarExamplesModule)();
      };

      NavbarExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: NavbarExamplesModule
      });
      NavbarExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_3__["McDropdownModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NavbarExamplesModule, {
          declarations: [NavbarOverviewExample, NavbarVerticalExample],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_3__["McDropdownModule"]],
          exports: [NavbarOverviewExample, NavbarVerticalExample]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarExamplesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _ptsecurity_mosaic_navbar__WEBPACK_IMPORTED_MODULE_5__["McNavbarModule"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_4__["McIconModule"], _ptsecurity_mosaic_button__WEBPACK_IMPORTED_MODULE_2__["McButtonModule"], _ptsecurity_mosaic_dropdown__WEBPACK_IMPORTED_MODULE_3__["McDropdownModule"]],
            declarations: EXAMPLES,
            exports: EXAMPLES
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-navbar.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=11-es5.js.map