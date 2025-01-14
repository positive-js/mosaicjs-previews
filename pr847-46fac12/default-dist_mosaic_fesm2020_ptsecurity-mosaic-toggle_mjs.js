"use strict";
(self["webpackChunkmosaic_docs"] = self["webpackChunkmosaic_docs"] || []).push([["default-dist_mosaic_fesm2020_ptsecurity-mosaic-toggle_mjs"],{

/***/ 62833:
/*!***********************************************************!*\
  !*** ./dist/mosaic/fesm2020/ptsecurity-mosaic-toggle.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "McToggleBase": () => (/* binding */ McToggleBase),
/* harmony export */   "McToggleChange": () => (/* binding */ McToggleChange),
/* harmony export */   "McToggleComponent": () => (/* binding */ McToggleComponent),
/* harmony export */   "McToggleMixinBase": () => (/* binding */ McToggleMixinBase),
/* harmony export */   "McToggleModule": () => (/* binding */ McToggleModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ 62304);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);








const _c0 = ["input"];
const _c1 = ["*"];
let nextUniqueId = 0;

class McToggleBase {
  // tslint:disable-next-line: naming-convention
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

} // tslint:disable-next-line: naming-convention


const McToggleMixinBase = (0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.mixinTabIndex)((0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.mixinColor)((0,_ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.mixinDisabled)(McToggleBase), _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.ThemePalette.Primary));

class McToggleChange {}

class McToggleComponent extends McToggleMixinBase {
  constructor( // tslint:disable-next-line:naming-convention
  _elementRef, _focusMonitor, _changeDetectorRef) {
    super(_elementRef);
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this._changeDetectorRef = _changeDetectorRef;
    this.labelPosition = 'right';
    this.ariaLabel = '';
    this.ariaLabelledby = null;
    this.name = null;
    this._disabled = false;
    this._checked = false;
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.uniqueId = `mc-toggle-${++nextUniqueId}`; // tslint:disable-next-line:no-empty

    this.onTouchedCallback = () => {}; // tslint:disable-next-line:no-empty


    this.onChangeCallback = _ => {};

    this.id = this.uniqueId;

    this._focusMonitor.monitor(this._elementRef.nativeElement, true);
  }

  get inputId() {
    return `${this.id || this.uniqueId}-input`;
  }

  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    if (value !== this._disabled) {
      this._disabled = value;

      this._changeDetectorRef.markForCheck();
    }
  }

  get checked() {
    return this._checked;
  }

  set checked(value) {
    if (value !== this._checked) {
      this._checked = value;

      this._changeDetectorRef.markForCheck();
    }
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef.nativeElement);
  }

  focus() {
    this._focusMonitor.focusVia(this.inputElement.nativeElement, 'keyboard');
  }

  getAriaChecked() {
    return this.checked;
  }

  onChangeEvent(event) {
    event.stopPropagation();
    this.updateModelValue();
    this.emitChangeEvent();
  }

  onLabelTextChange() {
    this._changeDetectorRef.markForCheck();
  }

  onInputClick(event) {
    event.stopPropagation();
  }

  writeValue(value) {
    this.checked = !!value;
  }

  registerOnChange(fn) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }

  updateModelValue() {
    this._checked = !this.checked;
    this.onTouchedCallback();
  }

  emitChangeEvent() {
    const event = new McToggleChange();
    event.source = this;
    event.checked = this.checked;
    this.onChangeCallback(this.checked);
    this.change.emit(event);
  }

}
/** @nocollapse */

/** @nocollapse */


McToggleComponent.ɵfac = function McToggleComponent_Factory(t) {
  return new (t || McToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
/** @nocollapse */

/** @nocollapse */


McToggleComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: McToggleComponent,
  selectors: [["mc-toggle"]],
  viewQuery: function McToggleComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

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
    useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => McToggleComponent),
    multi: true
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 11,
  vars: 17,
  consts: [[1, "mc-toggle-layout"], [1, "mc-toggle__container"], ["type", "checkbox", "role", "switch", 1, "mc-toggle-input", "cdk-visually-hidden", 3, "id", "checked", "disabled", "tabIndex", "click", "change"], ["input", ""], [1, "mc-toggle-bar-container"], [1, "mc-toggle__overlay"], [1, "mc-toggle-bar"], [1, "mc-toggle__circle"], [1, "mc-toggle__content"], [1, "mc-toggle-label", 3, "cdkObserveContent"]],
  template: function McToggleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 0)(1, "div", 1)(2, "input", 2, 3);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cdkObserveContent", function McToggleComponent_Template_span_cdkObserveContent_9_listener() {
        return ctx.onLabelTextChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
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
  styles: [".mc-toggle{display:inline-block}.mc-toggle .mc-toggle-layout{cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mc-toggle .mc-toggle-bar{position:relative;border-width:1px;border-style:solid}.mc-toggle .mc-toggle-bar.mc-toggle-label-position-left{order:1}.mc-toggle .mc-toggle-bar-container{position:relative}.mc-toggle__container{display:flex;align-items:center;position:relative}.mc-toggle__container.left{flex-direction:row-reverse}.mc-toggle__content.left{margin-right:var(--mc-toggle-size-label-margin, 8px)}.mc-toggle__content.right{margin-left:var(--mc-toggle-size-label-margin, 8px)}.mc-toggle__circle{position:absolute;border-width:1px;border-style:solid;border-radius:100%;margin-top:-1px;margin-left:-1px;transform:translate(-1px)}.mc-toggle__overlay{position:absolute;top:0;left:0;z-index:1}.mc-toggle:not(.mc-toggle_small) .mc-toggle-bar{height:var(--mc-toggle-size-height, 16px);width:var(--mc-toggle-size-width, 28px);border-radius:var(--mc-toggle-size-border-radius, 9px)}.mc-toggle:not(.mc-toggle_small) .mc-toggle__overlay{border-radius:var(--mc-toggle-size-border-radius, 9px);height:var(--mc-toggle-size-height, 16px);width:var(--mc-toggle-size-width, 28px)}.mc-toggle:not(.mc-toggle_small) .mc-toggle__circle{height:var(--mc-toggle-size-height, 16px);width:var(--mc-toggle-size-height, 16px)}.mc-toggle.mc-toggle_small .mc-toggle-bar{height:var(--mc-toggle-small-size-height, 14px);width:var(--mc-toggle-small-size-width, 24px);border-radius:var(--mc-toggle-small-size-border-radius, 8px)}.mc-toggle.mc-toggle_small .mc-toggle__overlay{border-radius:var(--mc-toggle-small-size-border-radius, 8px);height:var(--mc-toggle-small-size-height, 14px);width:var(--mc-toggle-small-size-width, 24px)}.mc-toggle.mc-toggle_small .mc-toggle__circle{height:var(--mc-toggle-small-size-height, 14px);width:var(--mc-toggle-small-size-height, 14px)}.mc-toggle:not(.mc-disabled){cursor:pointer}\n"],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('switch', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      left: '50%'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      left: '1px'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('true <=> false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('150ms'))])]
  },
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McToggleComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
    args: [{
      selector: 'mc-toggle',
      exportAs: 'mcToggle',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewEncapsulation.None,
      inputs: ['color', 'tabIndex'],
      host: {
        class: 'mc-toggle',
        '[id]': 'id',
        '[attr.id]': 'id',
        '[class.mc-disabled]': 'disabled',
        '[class.mc-active]': 'checked'
      },
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('switch', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        left: '50%'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        left: '1px'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('true <=> false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('150ms'))])],
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(() => McToggleComponent),
        multi: true
      }],
      template: "<label [attr.for]=\"inputId\" class=\"mc-toggle-layout\">\n    <div class=\"mc-toggle__container\" [class.left]=\"labelPosition === 'left'\">\n        <input #input\n               type=\"checkbox\"\n               role=\"switch\"\n               class=\"mc-toggle-input cdk-visually-hidden\"\n               [id]=\"inputId\"\n               [checked]=\"checked\"\n               [attr.value]=\"value\"\n               [disabled]=\"disabled\"\n               [attr.name]=\"name\"\n               [tabIndex]=\"tabIndex\"\n               [attr.aria-label]=\"ariaLabel || null\"\n               [attr.aria-labelledby]=\"ariaLabelledby\"\n               [attr.aria-checked]=\"getAriaChecked()\"\n               (click)=\"onInputClick($event)\"\n               (change)=\"onChangeEvent($event)\"/>\n        <div class=\"mc-toggle-bar-container\">\n            <div class=\"mc-toggle__overlay\"></div>\n            <div class=\"mc-toggle-bar\">\n                <div class=\"mc-toggle__circle\" [@switch]=\"checked\"></div>\n            </div>\n        </div>\n        <div class=\"mc-toggle__content\"\n             [class.left]=\"labelPosition === 'left'\"\n             [class.right]=\"labelPosition === 'right'\">\n            <span class=\"mc-toggle-label\" (cdkObserveContent)=\"onLabelTextChange()\">\n                <ng-content></ng-content>\n            </span>\n        </div>\n    </div>\n</label>\n",
      styles: [".mc-toggle{display:inline-block}.mc-toggle .mc-toggle-layout{cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mc-toggle .mc-toggle-bar{position:relative;border-width:1px;border-style:solid}.mc-toggle .mc-toggle-bar.mc-toggle-label-position-left{order:1}.mc-toggle .mc-toggle-bar-container{position:relative}.mc-toggle__container{display:flex;align-items:center;position:relative}.mc-toggle__container.left{flex-direction:row-reverse}.mc-toggle__content.left{margin-right:var(--mc-toggle-size-label-margin, 8px)}.mc-toggle__content.right{margin-left:var(--mc-toggle-size-label-margin, 8px)}.mc-toggle__circle{position:absolute;border-width:1px;border-style:solid;border-radius:100%;margin-top:-1px;margin-left:-1px;transform:translate(-1px)}.mc-toggle__overlay{position:absolute;top:0;left:0;z-index:1}.mc-toggle:not(.mc-toggle_small) .mc-toggle-bar{height:var(--mc-toggle-size-height, 16px);width:var(--mc-toggle-size-width, 28px);border-radius:var(--mc-toggle-size-border-radius, 9px)}.mc-toggle:not(.mc-toggle_small) .mc-toggle__overlay{border-radius:var(--mc-toggle-size-border-radius, 9px);height:var(--mc-toggle-size-height, 16px);width:var(--mc-toggle-size-width, 28px)}.mc-toggle:not(.mc-toggle_small) .mc-toggle__circle{height:var(--mc-toggle-size-height, 16px);width:var(--mc-toggle-size-height, 16px)}.mc-toggle.mc-toggle_small .mc-toggle-bar{height:var(--mc-toggle-small-size-height, 14px);width:var(--mc-toggle-small-size-width, 24px);border-radius:var(--mc-toggle-small-size-border-radius, 8px)}.mc-toggle.mc-toggle_small .mc-toggle__overlay{border-radius:var(--mc-toggle-small-size-border-radius, 8px);height:var(--mc-toggle-small-size-height, 14px);width:var(--mc-toggle-small-size-width, 24px)}.mc-toggle.mc-toggle_small .mc-toggle__circle{height:var(--mc-toggle-small-size-height, 14px);width:var(--mc-toggle-small-size-height, 14px)}.mc-toggle:not(.mc-disabled){cursor:pointer}\n"]
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
        static: false
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

class McToggleModule {}
/** @nocollapse */

/** @nocollapse */


McToggleModule.ɵfac = function McToggleModule_Factory(t) {
  return new (t || McToggleModule)();
};
/** @nocollapse */

/** @nocollapse */


McToggleModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: McToggleModule
});
/** @nocollapse */

/** @nocollapse */

McToggleModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.McCommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](McToggleModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.A11yModule, _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_0__.McCommonModule],
      exports: [McToggleComponent],
      declarations: [McToggleComponent]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-dist_mosaic_fesm2020_ptsecurity-mosaic-toggle_mjs.js.map