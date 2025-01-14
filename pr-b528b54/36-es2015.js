(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "Onsr":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-tags.js ***!
  \*****************************************************************************************************/
/*! exports provided: TagsAutocompleteExample, TagsExamplesModule, TagsInputExample, TagsListExample, TagsOverviewExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsAutocompleteExample", function() { return TagsAutocompleteExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsExamplesModule", function() { return TagsExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsInputExample", function() { return TagsInputExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsListExample", function() { return TagsListExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsOverviewExample", function() { return TagsOverviewExample; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ptsecurity_mosaic_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic/autocomplete */ "pQot");
/* harmony import */ var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/mosaic/form-field */ "20Zt");
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ "GSC3");
/* harmony import */ var _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/tags */ "Chhf");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ "qyIq");
/* harmony import */ var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ptsecurity/cdk/keycodes */ "SfmH");



















const _c0 = ["tagList"];
const _c1 = ["tagInput"];
const _c2 = ["autocomplete"];
function TagsAutocompleteExample_mc_tag_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-tag", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function TagsAutocompleteExample_mc_tag_3_Template_mc_tag_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const tag_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onRemove(tag_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tag_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tag_r6, " ");
} }
const _c3 = function (a1) { return { new: true, value: a1 }; };
function TagsAutocompleteExample_mc_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c3, _r2.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u0421\u043E\u0437\u0434\u0430\u0442\u044C: ", _r2.value, " ");
} }
function TagsAutocompleteExample_mc_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tag_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r9);
} }
/**
 * @title Basic tags autocomplete
 */
class TagsAutocompleteExample {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.allTags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8', 'tag9', 'tag10'];
        this.filteredTagsByInput = [];
        this.selectedTags = ['tag1'];
    }
    ngAfterViewInit() {
        this.filteredTags = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["merge"])(this.tagList.tagChanges.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((selectedTags) => {
            const values = selectedTags.map((tag) => tag.value);
            return this.allTags.filter((tag) => !values.includes(tag));
        })), this.control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((value) => {
            const typedText = (value && value.new) ? value.value : value;
            this.filteredTagsByInput = typedText ?
                this.filter(typedText) : this.allTags.slice();
            return this.filteredTagsByInput.filter(
            // @ts-ignore
            (tag) => !this.selectedTags.includes(tag));
        })));
    }
    addOnBlurFunc(event) {
        const target = event.relatedTarget;
        if (!target || target.tagName !== 'MC-OPTION') {
            const mcTagEvent = {
                input: this.tagInput.nativeElement,
                value: this.tagInput.nativeElement.value
            };
            this.onCreate(mcTagEvent);
        }
    }
    onCreate(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            const isOptionSelected = this.autocomplete.options.some((option) => option.selected);
            if (!isOptionSelected) {
                this.selectedTags.push(value.trim());
            }
        }
        if (input) {
            input.value = '';
        }
        this.control.setValue(null);
    }
    onSelect(event) {
        event.option.deselect();
        if (event.option.value.new) {
            this.selectedTags.push(event.option.value.value);
        }
        else {
            this.selectedTags.push(event.option.value);
        }
        this.tagInput.nativeElement.value = '';
        this.control.setValue(null);
    }
    onRemove(fruit) {
        const index = this.selectedTags.indexOf(fruit);
        if (index >= 0) {
            this.selectedTags.splice(index, 1);
        }
    }
    filter(value) {
        const filterValue = value.toLowerCase();
        return this.allTags.filter((tag) => tag.toLowerCase().indexOf(filterValue) === 0);
    }
}
TagsAutocompleteExample.ɵfac = function TagsAutocompleteExample_Factory(t) { return new (t || TagsAutocompleteExample)(); };
TagsAutocompleteExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TagsAutocompleteExample, selectors: [["tags-autocomplete-example"]], viewQuery: function TagsAutocompleteExample_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tagList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tagInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.autocomplete = _t.first);
    } }, decls: 11, vars: 9, consts: [["tagList", ""], [3, "value", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New tag...", 3, "formControl", "mcAutocomplete", "mcTagInputFor", "mcTagInputAddOnBlur", "mcTagInputTokenEnd", "blur"], ["tagInput", ""], [3, "optionSelected"], ["autocomplete", ""], [3, "value", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value", "removed"], ["mc-icon", "mc-close-S_16", "mcTagRemove", ""], [3, "value"]], template: function TagsAutocompleteExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-tag-list", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TagsAutocompleteExample_mc_tag_3_Template, 3, 2, "mc-tag", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mcTagInputTokenEnd", function TagsAutocompleteExample_Template_input_mcTagInputTokenEnd_4_listener($event) { return ctx.onCreate($event); })("blur", function TagsAutocompleteExample_Template_input_blur_4_listener($event) { return ctx.addOnBlurFunc($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mc-autocomplete", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function TagsAutocompleteExample_Template_mc_autocomplete_optionSelected_6_listener($event) { return ctx.onSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, TagsAutocompleteExample_mc_option_8_Template, 2, 4, "mc-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TagsAutocompleteExample_mc_option_9_Template, 2, 2, "mc-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedTags);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.control)("mcAutocomplete", _r3)("mcTagInputFor", _r0)("mcTagInputAddOnBlur", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, ctx.filteredTags));
    } }, directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormField"], _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTagList"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ptsecurity_mosaic_autocomplete__WEBPACK_IMPORTED_MODULE_3__["McAutocompleteTrigger"], _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTagInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _ptsecurity_mosaic_autocomplete__WEBPACK_IMPORTED_MODULE_3__["McAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTag"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconCSSStyler"], _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTagRemove"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_9__["McOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["AsyncPipe"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagsAutocompleteExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'tags-autocomplete-example',
                templateUrl: 'tags-autocomplete-example.html',
                styleUrls: ['tags-autocomplete-example.css']
            }]
    }], null, { tagList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['tagList', { static: false }]
        }], tagInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['tagInput', { static: false }]
        }], autocomplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['autocomplete', { static: false }]
        }] }); })();

function TagsInputExample_mc_tag_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-tag", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function TagsInputExample_mc_tag_3_Template_mc_tag_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const tag_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onRemoveTag(tag_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tag_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tag_r2, " ");
} }
/**
 * @title Basic tags input
 */
class TagsInputExample {
    constructor() {
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.tags = ['tag', 'tag1', 'tag2', 'tag3', 'tag4'];
        this.separatorKeysCodes = [_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["COMMA"]];
    }
    onCreate(event) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            this.tags.push(value.trim());
        }
        if (input) {
            input.value = '';
        }
    }
    onRemoveTag(tag) {
        const index = this.tags.indexOf(tag);
        if (index >= 0) {
            this.tags.splice(index, 1);
        }
    }
    onClear() {
        this.tags.length = 0;
    }
}
TagsInputExample.ɵfac = function TagsInputExample_Factory(t) { return new (t || TagsInputExample)(); };
TagsInputExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TagsInputExample, selectors: [["tags-input-example"]], decls: 6, vars: 4, consts: [["tagList", ""], [3, "value", "removed", 4, "ngFor", "ngForOf"], ["placeholder", "New tag...", 3, "formControl", "mcTagInputFor", "mcTagInputSeparatorKeyCodes", "mcTagInputTokenEnd"], [3, "click"], [3, "value", "removed"], ["mc-icon", "mc-close-S_16", "mcTagRemove", ""]], template: function TagsInputExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-tag-list", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TagsInputExample_mc_tag_3_Template, 3, 2, "mc-tag", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mcTagInputTokenEnd", function TagsInputExample_Template_input_mcTagInputTokenEnd_4_listener($event) { return ctx.onCreate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mc-cleaner", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TagsInputExample_Template_mc_cleaner_click_5_listener() { return ctx.onClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.control)("mcTagInputFor", _r0)("mcTagInputSeparatorKeyCodes", ctx.separatorKeysCodes);
    } }, directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormField"], _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTagList"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTagInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McCleaner"], _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTag"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconCSSStyler"], _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTagRemove"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagsInputExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'tags-input-example',
                templateUrl: 'tags-input-example.html',
                styleUrls: ['tags-input-example.css']
            }]
    }], null, null); })();

function TagsListExample_mc_tag_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-tag", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("removed", function TagsListExample_mc_tag_1_Template_mc_tag_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const tag_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onRemoveTag(tag_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tag_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tag_r1, " ");
} }
/**
 * @title Basic tags list
 */
class TagsListExample {
    constructor() {
        this.simpleTags = ['tag', 'tag1', 'tag2', 'tag3', 'tag4'];
    }
    onRemoveTag(tag) {
        const index = this.simpleTags.indexOf(tag);
        if (index >= 0) {
            this.simpleTags.splice(index, 1);
        }
    }
}
TagsListExample.ɵfac = function TagsListExample_Factory(t) { return new (t || TagsListExample)(); };
TagsListExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TagsListExample, selectors: [["tags-list-example"]], decls: 2, vars: 1, consts: [[3, "value", "removed", 4, "ngFor", "ngForOf"], [3, "value", "removed"], ["mc-icon", "mc-close-S_16", "mcTagRemove", ""]], template: function TagsListExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-tag-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TagsListExample_mc_tag_1_Template, 3, 2, "mc-tag", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.simpleTags);
    } }, directives: [_ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTagList"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTag"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconCSSStyler"], _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTagRemove"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagsListExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'tags-list-example',
                templateUrl: 'tags-list-example.html',
                styleUrls: ['tags-list-example.css']
            }]
    }], null, null); })();

/**
 * @title Basic tags
 */
class TagsOverviewExample {
}
TagsOverviewExample.ɵfac = function TagsOverviewExample_Factory(t) { return new (t || TagsOverviewExample)(); };
TagsOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TagsOverviewExample, selectors: [["tags-overview-example"]], decls: 124, vars: 33, consts: [["mc-icon", "mc-close-S_16"], [1, "mc-hovered"], [1, "mc-focused"], [3, "disabled"], [3, "color"], [1, "mc-hovered", 3, "color"], [1, "mc-focused", 3, "color"], [3, "color", "disabled"], [1, "mc-tag_mono"], [1, "mc-hovered", "mc-tag_mono"], [1, "mc-focused", "mc-tag_mono"], [1, "mc-tag_mono", 3, "disabled"], [1, "mc-tag_mono", 3, "color"], [1, "mc-tag_mono", "mc-hovered", 3, "color"], [1, "mc-tag_mono", "mc-focused", 3, "color"], [1, "mc-tag_mono", 3, "color", "disabled"], [1, "mc-tag_caps"], [1, "mc-hovered", "mc-tag_caps"], [1, "mc-focused", "mc-tag_caps"], [1, "mc-tag_caps", 3, "disabled"], [1, "mc-tag_caps", 3, "color"], [1, "mc-hovered", "mc-tag_caps", 3, "color"], [1, "mc-focused", "mc-tag_caps", 3, "color"], [1, "mc-tag_caps", 3, "color", "disabled"]], template: function TagsOverviewExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mc-tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Normal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-tag", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Hovered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mc-tag", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Focused ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mc-tag", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mc-tag", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Normal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mc-tag", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Hovered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mc-tag", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Focused ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mc-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mc-tag", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Normal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mc-tag", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Hovered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mc-tag", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Focused ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mc-tag", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " mono\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mc-tag", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Normal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "mc-tag", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Hovered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mc-tag", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Focused ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mc-tag", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mc-tag", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Normal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mc-tag", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Hovered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mc-tag", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Focused ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mc-tag", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mc-tag", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Normal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "mc-tag", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Hovered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "mc-tag", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Focused ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "mc-tag", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, " CAPS\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "mc-tag", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Normal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "mc-tag", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Hovered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "mc-tag", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Focused ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "mc-tag", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "mc-tag", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "Normal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "mc-tag", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Hovered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "mc-tag", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Focused ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "mc-tag", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "mc-tag", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Normal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "mc-tag", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Hovered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "mc-tag", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Focused ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](120, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "mc-tag", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Disabled ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary")("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "error")("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary")("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "error")("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "primary")("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", "error")("disabled", true);
    } }, directives: [_ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTag"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconCSSStyler"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagsOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'tags-overview-example',
                templateUrl: 'tags-overview-example.html',
                styleUrls: ['tags-overview-example.css']
            }]
    }], null, null); })();

const EXAMPLES = [
    TagsOverviewExample,
    TagsInputExample,
    TagsListExample,
    TagsAutocompleteExample
];
class TagsExamplesModule {
}
TagsExamplesModule.ɵfac = function TagsExamplesModule_Factory(t) { return new (t || TagsExamplesModule)(); };
TagsExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TagsExamplesModule });
TagsExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ptsecurity_mosaic_autocomplete__WEBPACK_IMPORTED_MODULE_3__["McAutocompleteModule"],
            _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTagsModule"],
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TagsExamplesModule, { declarations: [TagsOverviewExample,
        TagsInputExample,
        TagsListExample,
        TagsAutocompleteExample], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ptsecurity_mosaic_autocomplete__WEBPACK_IMPORTED_MODULE_3__["McAutocompleteModule"],
        _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTagsModule"],
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconModule"]], exports: [TagsOverviewExample,
        TagsInputExample,
        TagsListExample,
        TagsAutocompleteExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TagsExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_4__["McFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ptsecurity_mosaic_autocomplete__WEBPACK_IMPORTED_MODULE_3__["McAutocompleteModule"],
                    _ptsecurity_mosaic_tags__WEBPACK_IMPORTED_MODULE_6__["McTagsModule"],
                    _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_5__["McIconModule"]
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-tags.js.map


/***/ })

}]);
//# sourceMappingURL=36-es2015.js.map