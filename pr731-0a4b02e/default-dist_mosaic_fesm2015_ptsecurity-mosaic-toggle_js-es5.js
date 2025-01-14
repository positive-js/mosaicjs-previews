(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmosaic"] = self["webpackChunkmosaic"] || []).push([["default-dist_mosaic_fesm2015_ptsecurity-mosaic-toggle_js"], {
    /***/
    84031:
    /*!**********************************************************!*\
      !*** ./dist/mosaic/fesm2015/ptsecurity-mosaic-toggle.js ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "McToggleBase": function McToggleBase() {
          return (
            /* binding */
            _McToggleBase
          );
        },

        /* harmony export */
        "McToggleChange": function McToggleChange() {
          return (
            /* binding */
            _McToggleChange
          );
        },

        /* harmony export */
        "McToggleComponent": function McToggleComponent() {
          return (
            /* binding */
            _McToggleComponent
          );
        },

        /* harmony export */
        "McToggleMixinBase": function McToggleMixinBase() {
          return (
            /* binding */
            _McToggleMixinBase
          );
        },

        /* harmony export */
        "McToggleModule": function McToggleModule() {
          return (
            /* binding */
            _McToggleModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      51606);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ptsecurity/mosaic/core */
      46872);
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/animations */
      97175);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      1707);

      var _c0 = ["input"];
      var _c1 = ["*"];
      var nextUniqueId = 0;

      var _McToggleBase = // tslint:disable-next-line: naming-convention
      function _McToggleBase(_elementRef) {
        _classCallCheck(this, _McToggleBase);

        this._elementRef = _elementRef;
      }; // tslint:disable-next-line: naming-convention


      var _McToggleMixinBase = (0, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.mixinTabIndex)((0, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)((0, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisabled)(_McToggleBase), _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.ThemePalette.Primary));

      var _McToggleChange = function _McToggleChange() {
        _classCallCheck(this, _McToggleChange);
      };

      var _McToggleComponent = /*#__PURE__*/function (_McToggleMixinBase2) {
        _inherits(_McToggleComponent, _McToggleMixinBase2);

        var _super = _createSuper(_McToggleComponent);

        function _McToggleComponent( // tslint:disable-next-line:naming-convention
        _elementRef, _focusMonitor, _changeDetectorRef) {
          var _this;

          _classCallCheck(this, _McToggleComponent);

          _this = _super.call(this, _elementRef);
          _this._elementRef = _elementRef;
          _this._focusMonitor = _focusMonitor;
          _this._changeDetectorRef = _changeDetectorRef;
          _this.labelPosition = 'right';
          _this.ariaLabel = '';
          _this.ariaLabelledby = null;
          _this.name = null;
          _this._disabled = false;
          _this._checked = false;
          _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          _this.uniqueId = "mc-toggle-".concat(++nextUniqueId); // tslint:disable-next-line:no-empty

          _this.onTouchedCallback = function () {}; // tslint:disable-next-line:no-empty


          _this.onChangeCallback = function (_) {};

          _this.id = _this.uniqueId;

          _this._focusMonitor.monitor(_this._elementRef.nativeElement, true);

          return _this;
        }

        _createClass(_McToggleComponent, [{
          key: "inputId",
          get: function get() {
            return "".concat(this.id || this.uniqueId, "-input");
          }
        }, {
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            if (value !== this._disabled) {
              this._disabled = value;

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "checked",
          get: function get() {
            return this._checked;
          },
          set: function set(value) {
            if (value !== this._checked) {
              this._checked = value;

              this._changeDetectorRef.markForCheck();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef.nativeElement);
          }
        }, {
          key: "focus",
          value: function focus() {
            this._focusMonitor.focusVia(this.inputElement.nativeElement, 'keyboard');
          }
        }, {
          key: "getAriaChecked",
          value: function getAriaChecked() {
            return this.checked;
          }
        }, {
          key: "onChangeEvent",
          value: function onChangeEvent(event) {
            event.stopPropagation();
            this.updateModelValue();
            this.emitChangeEvent();
          }
        }, {
          key: "onLabelTextChange",
          value: function onLabelTextChange() {
            this._changeDetectorRef.markForCheck();
          }
        }, {
          key: "onInputClick",
          value: function onInputClick(event) {
            event.stopPropagation();
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.checked = !!value;
          }
        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChangeCallback = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouchedCallback = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }, {
          key: "updateModelValue",
          value: function updateModelValue() {
            this._checked = !this.checked;
            this.onTouchedCallback();
          }
        }, {
          key: "emitChangeEvent",
          value: function emitChangeEvent() {
            var event = new _McToggleChange();
            event.source = this;
            event.checked = this.checked;
            this.onChangeCallback(this.checked);
            this.change.emit(event);
          }
        }]);

        return _McToggleComponent;
      }(_McToggleMixinBase);
      /** @nocollapse */


      _McToggleComponent.ɵfac = function McToggleComponent_Factory(t) {
        return new (t || _McToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
      };
      /** @nocollapse */


      _McToggleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _McToggleComponent,
        selectors: [["mc-toggle"]],
        viewQuery: function McToggleComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
          }
        },
        hostAttrs: [1, "mc-toggle"],
        hostVars: 6,
        hostBindings: function McToggleComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mc-disabled", ctx.disabled)("mc-active", ctx.checked);
          }
        },
        inputs: {
          color: "color",
          tabIndex: "tabIndex",
          labelPosition: "labelPosition",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          id: "id",
          name: "name",
          value: "value",
          disabled: "disabled",
          checked: "checked"
        },
        outputs: {
          change: "change"
        },
        exportAs: ["mcToggle"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
          useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function () {
            return _McToggleComponent;
          }),
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 11,
        vars: 17,
        consts: [[1, "mc-toggle-layout"], [1, "mc-toggle__container"], ["type", "checkbox", "role", "switch", 1, "mc-toggle-input", "cdk-visually-hidden", 3, "id", "checked", "disabled", "tabIndex", "click", "change"], ["input", ""], [1, "mc-toggle-bar-container"], [1, "mc-toggle__overlay"], [1, "mc-toggle-bar"], [1, "mc-toggle__circle"], [1, "mc-toggle__content"], [1, "mc-toggle-label", 3, "cdkObserveContent"]],
        template: function McToggleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function McToggleComponent_Template_input_click_2_listener($event) {
              return ctx.onInputClick($event);
            })("change", function McToggleComponent_Template_input_change_2_listener($event) {
              return ctx.onChangeEvent($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function McToggleComponent_Template_span_cdkObserveContent_9_listener() {
              return ctx.onLabelTextChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("for", ctx.inputId);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("left", ctx.labelPosition === "left");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.inputId)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("value", ctx.value)("name", ctx.name)("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-checked", ctx.getAriaChecked());

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@switch", ctx.checked);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("left", ctx.labelPosition === "left")("right", ctx.labelPosition === "right");
          }
        },
        styles: [".mc-toggle{display:inline-block}.mc-toggle .mc-toggle-layout{cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mc-toggle .mc-toggle-bar{position:relative;border-width:1px;border-style:solid}.mc-toggle .mc-toggle-bar.mc-toggle-label-position-left{order:1}.mc-toggle .mc-toggle-bar-container{position:relative}.mc-toggle__container{display:flex;align-items:center;position:relative}.mc-toggle__container.left{flex-direction:row-reverse}.mc-toggle__content.left{margin-right:8px;margin-right:var(--mc-toggle-size-label-margin, 8px)}.mc-toggle__content.right{margin-left:8px;margin-left:var(--mc-toggle-size-label-margin, 8px)}.mc-toggle__circle{position:absolute;border-width:1px;border-style:solid;border-radius:100%;margin-top:-1px;margin-left:-1px;transform:translate(-1px)}.mc-toggle__overlay{position:absolute;top:0;left:0;z-index:1}.mc-toggle:not(.mc-toggle_small) .mc-toggle-bar{height:16px;height:var(--mc-toggle-size-height, 16px);width:28px;width:var(--mc-toggle-size-width, 28px);border-radius:9px;border-radius:var(--mc-toggle-size-border-radius, 9px)}.mc-toggle:not(.mc-toggle_small) .mc-toggle__overlay{border-radius:9px;border-radius:var(--mc-toggle-size-border-radius, 9px);height:16px;height:var(--mc-toggle-size-height, 16px);width:28px;width:var(--mc-toggle-size-width, 28px)}.mc-toggle:not(.mc-toggle_small) .mc-toggle__circle{height:16px;height:var(--mc-toggle-size-height, 16px);width:16px;width:var(--mc-toggle-size-height, 16px)}.mc-toggle.mc-toggle_small .mc-toggle-bar{height:14px;height:var(--mc-toggle-small-size-height, 14px);width:24px;width:var(--mc-toggle-small-size-width, 24px);border-radius:8px;border-radius:var(--mc-toggle-small-size-border-radius, 8px)}.mc-toggle.mc-toggle_small .mc-toggle__overlay{border-radius:8px;border-radius:var(--mc-toggle-small-size-border-radius, 8px);height:14px;height:var(--mc-toggle-small-size-height, 14px);width:24px;width:var(--mc-toggle-small-size-width, 24px)}.mc-toggle.mc-toggle_small .mc-toggle__circle{height:14px;height:var(--mc-toggle-small-size-height, 14px);width:14px;width:var(--mc-toggle-small-size-height, 14px)}.mc-toggle:not(.mc-disabled){cursor:pointer}\n"],
        encapsulation: 2,
        data: {
          animation: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('switch', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('true', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
            left: '50%'
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('false', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
            left: '1px'
          })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('true <=> false', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('150ms'))])]
        },
        changeDetection: 0
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_McToggleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
          args: [{
            selector: 'mc-toggle',
            exportAs: 'mcToggle',
            templateUrl: './toggle.component.html',
            styleUrls: ['./toggle.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
            inputs: ['color', 'tabIndex'],
            host: {
              "class": 'mc-toggle',
              '[id]': 'id',
              '[attr.id]': 'id',
              '[class.mc-disabled]': 'disabled',
              '[class.mc-active]': 'checked'
            },
            animations: [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('switch', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('true', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
              left: '50%'
            })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('false', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
              left: '1px'
            })), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('true <=> false', (0, _angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('150ms'))])],
            providers: [{
              provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
              useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function () {
                return _McToggleComponent;
              }),
              multi: true
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
          }];
        }, {
          inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['input', {
              "static": false
            }]
          }],
          labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['aria-labelledby']
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
          }]
        });
      })();

      var _McToggleModule = function _McToggleModule() {
        _classCallCheck(this, _McToggleModule);
      };
      /** @nocollapse */


      _McToggleModule.ɵfac = function McToggleModule_Factory(t) {
        return new (t || _McToggleModule)();
      };
      /** @nocollapse */


      _McToggleModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _McToggleModule
      });
      /** @nocollapse */

      _McToggleModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.McCommonModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_McToggleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.McCommonModule],
            exports: [_McToggleComponent],
            declarations: [_McToggleComponent]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    }
  }]);
})();
//# sourceMappingURL=default-dist_mosaic_fesm2015_ptsecurity-mosaic-toggle_js-es5.js.map