(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "N3I7":
/*!***************************************************************************!*\
  !*** ./dist/mosaic/__ivy_ngcc__/fesm2015/ptsecurity-mosaic-timepicker.js ***!
  \***************************************************************************/
/*! exports provided: AM_PM_FORMAT_REGEXP, DEFAULT_TIME_FORMAT, HOURS_MINUTES_REGEXP, HOURS_MINUTES_SECONDS_REGEXP, HOURS_ONLY_REGEXP, HOURS_PER_DAY, MC_TIMEPICKER_VALIDATORS, MC_TIMEPICKER_VALUE_ACCESSOR, MINUTES_PER_HOUR, McTimepicker, McTimepickerModule, SECONDS_PER_MINUTE, TIMEFORMAT_PLACEHOLDERS, TimeFormats, TimeParts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AM_PM_FORMAT_REGEXP", function() { return AM_PM_FORMAT_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_TIME_FORMAT", function() { return DEFAULT_TIME_FORMAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOURS_MINUTES_REGEXP", function() { return HOURS_MINUTES_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOURS_MINUTES_SECONDS_REGEXP", function() { return HOURS_MINUTES_SECONDS_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOURS_ONLY_REGEXP", function() { return HOURS_ONLY_REGEXP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOURS_PER_DAY", function() { return HOURS_PER_DAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MC_TIMEPICKER_VALIDATORS", function() { return MC_TIMEPICKER_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MC_TIMEPICKER_VALUE_ACCESSOR", function() { return MC_TIMEPICKER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUTES_PER_HOUR", function() { return MINUTES_PER_HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McTimepicker", function() { return McTimepicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McTimepickerModule", function() { return McTimepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECONDS_PER_MINUTE", function() { return SECONDS_PER_MINUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIMEFORMAT_PLACEHOLDERS", function() { return TIMEFORMAT_PLACEHOLDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFormats", function() { return TimeFormats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeParts", function() { return TimeParts; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/cdk/datetime */ "Vue8");
/* harmony import */ var _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ptsecurity/cdk/keycodes */ "SfmH");
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ "qyIq");
/* harmony import */ var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ptsecurity/mosaic/form-field */ "20Zt");
/* harmony import */ var _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ptsecurity/mosaic/tooltip */ "341e");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "qCKp");













// tslint:disable:naming-convention


var TimeParts;
(function (TimeParts) {
    TimeParts[TimeParts["hours"] = 0] = "hours";
    TimeParts[TimeParts["minutes"] = 1] = "minutes";
    TimeParts[TimeParts["seconds"] = 2] = "seconds";
})(TimeParts || (TimeParts = {}));
var TimeFormats;
(function (TimeFormats) {
    TimeFormats["HHmmss"] = "HH:mm:ss";
    TimeFormats["HHmm"] = "HH:mm";
})(TimeFormats || (TimeFormats = {}));
const TIMEFORMAT_PLACEHOLDERS = {
    [TimeFormats.HHmmss]: 'чч:мм:сс',
    [TimeFormats.HHmm]: 'чч:мм'
};
const DEFAULT_TIME_FORMAT = TimeFormats.HHmm;
const HOURS_MINUTES_SECONDS_REGEXP = /^([0-1][0-9]|2[0-3]):?([0-5][0-9]):?([0-5][0-9])?$/;
const HOURS_MINUTES_REGEXP = /^([0-1][0-9]|2[0-3]):?([0-5][0-9])?$/;
const HOURS_ONLY_REGEXP = /^([0-1][0-9]|2[0-3]):?$/;
const AM_PM_FORMAT_REGEXP = /^([0-1]?[0-9]):([0-5]?[0-9]) ([ap][m]?$)/i;
const SECONDS_PER_MINUTE = 59;
const MINUTES_PER_HOUR = 59;
const HOURS_PER_DAY = 23;

/** @docs-private */
const MC_TIMEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => McTimepicker),
    multi: true
};
/** @docs-private */
const MC_TIMEPICKER_VALIDATORS = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => McTimepicker),
    multi: true
};
let uniqueComponentIdSuffix = 0;
const shortFormatSize = 5;
const fullFormatSize = 8;
class McTimepicker {
    constructor(elementRef, renderer, dateAdapter) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.dateAdapter = dateAdapter;
        /**
         * Implemented as part of McFormFieldControl.
         * @docs-private
         */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        /**
         * Implemented as part of McFormFieldControl.
         * @docs-private
         */
        this.focused = false;
        /**
         * Implemented as part of McFormFieldControl.
         * @docs-private
         */
        this.controlType = 'timepicker';
        this._placeholder = TIMEFORMAT_PLACEHOLDERS[DEFAULT_TIME_FORMAT];
        this._format = DEFAULT_TIME_FORMAT;
        this._min = null;
        this._max = null;
        this.incorrectInput = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.uid = `mc-timepicker-${uniqueComponentIdSuffix++}`;
        this.lastValueValid = false;
        this.defaultPlaceholder = true;
        this.onInput = () => {
            const formattedValue = this.formatUserInput(this.viewValue);
            const newTimeObj = this.getDateFromTimeString(formattedValue);
            this.lastValueValid = !!newTimeObj;
            if (!newTimeObj) {
                this.onChange(null);
                return;
            }
            const selectionStart = this.selectionStart;
            const selectionEnd = this.selectionEnd;
            this.setViewValue(this.getTimeStringFromDate(newTimeObj, this.format));
            this.selectionStart = selectionStart;
            this.selectionEnd = selectionEnd;
            this.createSelectionOfTimeComponentInInput(selectionStart + 1);
            this.value = newTimeObj;
            this.onChange(newTimeObj);
            this.stateChanges.next();
        };
        this.parseValidator = () => {
            return this.focused ||
                this.empty ||
                this.lastValueValid ? null : { mcTimepickerParse: { text: this.viewValue } };
        };
        this.minValidator = (control) => {
            const controlValue = this.getValidDateOrNull(this.dateAdapter.deserialize(control.value));
            return (!this.min || !controlValue || this.compareTime(this.min, controlValue) <= 0) ?
                null :
                { mcTimepickerLowerThenMin: { min: this.min, actual: controlValue } };
        };
        this.maxValidator = (control) => {
            const controlValue = this.getValidDateOrNull(this.dateAdapter.deserialize(control.value));
            return (!this.max || !controlValue || this.compareTime(this.max, controlValue) >= 0) ?
                null :
                { mcTimepickerHigherThenMax: { max: this.max, actual: controlValue } };
        };
        // tslint:disable-next-line:no-empty
        this.validatorOnChange = () => { };
        if (!this.dateAdapter) {
            throw Error(`McTimepicker: No provider found for DateAdapter. You must import one of the existing ` +
                `modules at your application root or provide a custom implementation or use exists ones.`);
        }
        this.validator = _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([this.parseValidator, this.minValidator, this.maxValidator]);
        this.onChange = rxjs__WEBPACK_IMPORTED_MODULE_11__["noop"];
        // Force setter to be called in case id was not specified.
        this.id = this.id;
    }
    /**
     * Implemented as part of McFormFieldControl.
     * @docs-private
     */
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(value) {
        this._placeholder = value;
        this.defaultPlaceholder = false;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        // Browsers may not fire the blur event if the input is disabled too quickly.
        // Reset from here to ensure that the element doesn't become stuck.
        if (this.focused) {
            this.focused = false;
        }
        this.stateChanges.next();
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value || this.uid;
    }
    /**
     * Implemented as part of McFormFieldControl.
     * @docs-private
     */
    get required() {
        return this._required;
    }
    set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
    }
    get format() {
        return this._format;
    }
    set format(formatValue) {
        this._format = Object
            .keys(TimeFormats)
            .map((timeFormatKey) => TimeFormats[timeFormatKey])
            .indexOf(formatValue) > -1 ? formatValue : DEFAULT_TIME_FORMAT;
        if (this.defaultPlaceholder) {
            this._placeholder = TIMEFORMAT_PLACEHOLDERS[this._format];
        }
        if (this.value) {
            this.updateView();
        }
    }
    get min() {
        return this._min;
    }
    set min(value) {
        this._min = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
        this.validatorOnChange();
    }
    get max() {
        return this._max;
    }
    set max(value) {
        this._max = this.getValidDateOrNull(this.dateAdapter.deserialize(value));
        this.validatorOnChange();
    }
    get value() {
        return this._value;
    }
    set value(value) {
        const newValue = this.dateAdapter.deserialize(value);
        this.lastValueValid = !newValue || this.dateAdapter.isValid(newValue);
        this._value = this.getValidDateOrNull(newValue);
        this.updateView();
    }
    set mcValidationTooltip(tooltip) {
        if (!tooltip) {
            return;
        }
        tooltip.mcMouseEnterDelay = _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__["validationTooltipShowDelay"];
        tooltip.mcTrigger = 'manual';
        tooltip.mcTooltipClass = 'mc-tooltip_warning';
        tooltip.initElementRefListeners();
        this.incorrectInput.subscribe(() => {
            if (tooltip.isTooltipOpen) {
                return;
            }
            tooltip.show();
            setTimeout(() => tooltip.hide(), _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_8__["validationTooltipHideDelay"]);
        });
    }
    get hasSelection() {
        return this.selectionStart !== this.selectionEnd;
    }
    get isFullFormat() {
        return this.format === TimeFormats.HHmmss;
    }
    get isShortFormat() {
        return this.format === TimeFormats.HHmm;
    }
    get viewValue() {
        return this.elementRef.nativeElement.value;
    }
    get ngControl() {
        return this.control;
    }
    /**
     * Implemented as part of McFormFieldControl.
     * @docs-private
     */
    get empty() {
        return !this.viewValue && !this.isBadInput();
    }
    get selectionStart() {
        return this.elementRef.nativeElement.selectionStart;
    }
    set selectionStart(value) {
        this.elementRef.nativeElement.selectionStart = value;
    }
    get selectionEnd() {
        return this.elementRef.nativeElement.selectionEnd;
    }
    set selectionEnd(value) {
        this.elementRef.nativeElement.selectionEnd = value;
    }
    ngOnDestroy() {
        this.stateChanges.complete();
    }
    getSize() {
        return this.isFullFormat ? fullFormatSize : shortFormatSize;
    }
    focus() {
        this.elementRef.nativeElement.focus();
    }
    focusChanged(isFocused) {
        if (isFocused !== this.focused) {
            this.focused = isFocused;
            this.onTouched();
            this.stateChanges.next();
        }
    }
    onBlur() {
        this.focusChanged(false);
        this.onInput();
    }
    onPaste($event) {
        $event.preventDefault();
        const value = this.formatUserPaste($event.clipboardData.getData('text'));
        const newTimeObj = this.getDateFromTimeString(value);
        if (!newTimeObj) {
            return;
        }
        this.setViewValue(this.getTimeStringFromDate(newTimeObj, this.format));
        this.value = newTimeObj;
        this.onChange(newTimeObj);
        this.stateChanges.next();
    }
    /**
     * Implemented as part of McFormFieldControl.
     * @docs-private
     */
    onContainerClick() {
        this.focus();
    }
    onKeyDown(event) {
        // tslint:disable-next-line: deprecation
        const keyCode = event.keyCode;
        if (Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["isLetterKey"])(event) && !event.ctrlKey && !event.metaKey) {
            event.preventDefault();
            this.incorrectInput.emit();
        }
        else if ((Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["hasModifierKey"])(event) && (Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["isVerticalMovement"])(keyCode) || Object(_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["isHorizontalMovement"])(keyCode))) ||
            event.ctrlKey || event.metaKey ||
            [_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["DELETE"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["BACKSPACE"]].includes(keyCode)) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["noop"])();
        }
        else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["SPACE"]) {
            this.spaceKeyHandler(event);
        }
        else if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["HOME"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["PAGE_UP"]].includes(keyCode)) {
            this.createSelectionOfTimeComponentInInput(0);
        }
        else if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["END"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["PAGE_DOWN"]].includes(keyCode)) {
            this.createSelectionOfTimeComponentInInput(this.viewValue.length);
        }
        else if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["UP_ARROW"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["DOWN_ARROW"]].includes(keyCode)) {
            event.preventDefault();
            this.verticalArrowKeyHandler(keyCode);
        }
        else if ([_ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["LEFT_ARROW"], _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["RIGHT_ARROW"]].includes(keyCode)) {
            this.horizontalArrowKeyHandler(keyCode);
        }
        else if (/^\D$/.test(event.key)) {
            event.preventDefault();
            const newValue = this.getNewValue(event.key, this.selectionStart);
            const formattedValue = this.replaceSymbols(newValue);
            if (newValue !== formattedValue) {
                this.setViewValue(formattedValue);
                setTimeout(this.onInput);
            }
            else {
                this.incorrectInput.emit();
            }
        }
        else {
            setTimeout(this.onInput);
        }
    }
    validate(control) {
        this.setControl(control);
        return this.validator ? this.validator(control) : null;
    }
    registerOnValidatorChange(fn) {
        this.validatorOnChange = fn;
    }
    writeValue(value) {
        this.value = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    formatUserPaste(value) {
        var _a;
        if (value.match(AM_PM_FORMAT_REGEXP)) {
            return value;
        }
        const match = value.match(/^(\D+)?(?<hours>\d+)?(\D+)?(\D+)?(?<minutes>\d+)?(\D+)?(\D+)?(?<seconds>\d+)?(\D+)?$/);
        if (!((_a = match === null || match === void 0 ? void 0 : match.groups) === null || _a === void 0 ? void 0 : _a.hours)) {
            this.setViewValue(value);
            return value;
        }
        return this.replaceNumbers(Object.values(match.groups)
            // tslint:disable-next-line:no-magic-numbers
            .map((group) => (group || '').padStart(2, '0'))
            .join(':'));
    }
    formatUserInput(value) {
        return this.replaceNumbers(this.replaceSymbols(value));
    }
    replaceSymbols(value) {
        let formattedValue = value;
        const match = value.match(/^(\d\d:){0,2}(?<number>[0-9])(?<symbol>\W)(:\d\d){0,2}$/);
        if (match === null || match === void 0 ? void 0 : match.groups) {
            const { number, symbol } = match.groups;
            formattedValue = value.replace(number + symbol, `0${number}`);
        }
        return formattedValue;
    }
    replaceNumbers(value) {
        let formattedValue = value;
        const match = value.match(/^(?<hours>\d{0,4}):?(?<minutes>\d{0,4}):?(?<seconds>\d{0,4})$/);
        if (match === null || match === void 0 ? void 0 : match.groups) {
            const { hours, minutes, seconds } = match.groups;
            if (hours.length && parseInt(hours) > HOURS_PER_DAY) {
                formattedValue = formattedValue.replace(hours, HOURS_PER_DAY.toString());
            }
            if (minutes.length && parseInt(minutes) > MINUTES_PER_HOUR) {
                formattedValue = formattedValue.replace(minutes, MINUTES_PER_HOUR.toString());
            }
            if (seconds.length && parseInt(seconds) > SECONDS_PER_MINUTE) {
                formattedValue = formattedValue.replace(seconds, SECONDS_PER_MINUTE.toString());
            }
        }
        return formattedValue;
    }
    /** Checks whether the input is invalid based on the native validation. */
    isBadInput() {
        const validity = this.elementRef.nativeElement.validity;
        return validity && validity.badInput;
    }
    spaceKeyHandler(event) {
        event.preventDefault();
        if (this.selectionStart === this.selectionEnd) {
            const value = this.getNewValue(event.key, this.selectionStart);
            const formattedValue = this.replaceSymbols(value);
            if (value !== formattedValue) {
                this.setViewValue(formattedValue);
                setTimeout(this.onInput);
            }
        }
        else if (this.selectionStart !== this.selectionEnd) {
            let cursorPos = this.selectionStart;
            const nextDividerPos = this.viewValue.indexOf(':', cursorPos);
            cursorPos = nextDividerPos ? nextDividerPos + 1 : 0;
            this.createSelectionOfTimeComponentInInput(cursorPos);
        }
    }
    getNewValue(key, position) {
        return [this.viewValue.slice(0, position), key, this.viewValue.slice(position)].join('');
    }
    verticalArrowKeyHandler(keyCode) {
        if (!this.value) {
            return;
        }
        let changedTime;
        const newEditParams = this.getTimeEditMetrics(this.selectionStart);
        if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["UP_ARROW"]) {
            changedTime = this.incrementTime(this.value, newEditParams.modifiedTimePart);
        }
        if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["DOWN_ARROW"]) {
            changedTime = this.decrementTime(this.value, newEditParams.modifiedTimePart);
        }
        this.value = changedTime;
        this.selectionStart = newEditParams.cursorStartPosition;
        this.selectionEnd = newEditParams.cursorEndPosition;
        this.onChange(changedTime);
        this.stateChanges.next();
    }
    horizontalArrowKeyHandler(keyCode) {
        if (!this.value) {
            return;
        }
        let cursorPos = this.selectionStart;
        if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["LEFT_ARROW"]) {
            cursorPos = cursorPos === 0 ? this.viewValue.length : cursorPos - 1;
        }
        else if (keyCode === _ptsecurity_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["RIGHT_ARROW"]) {
            const nextDividerPos = this.viewValue.indexOf(':', cursorPos);
            cursorPos = nextDividerPos ? nextDividerPos + 1 : 0;
        }
        this.createSelectionOfTimeComponentInInput(cursorPos);
    }
    createSelectionOfTimeComponentInInput(cursorPos) {
        setTimeout(() => {
            const newEditParams = this.getTimeEditMetrics(cursorPos);
            this.selectionStart = newEditParams.cursorStartPosition;
            this.selectionEnd = newEditParams.cursorEndPosition;
        });
    }
    incrementTime(dateVal, whatToIncrement = TimeParts.seconds) {
        let hours = this.dateAdapter.getHours(dateVal);
        let minutes = this.dateAdapter.getMinutes(dateVal);
        let seconds = this.dateAdapter.getSeconds(dateVal);
        switch (whatToIncrement) {
            case TimeParts.hours:
                hours++;
                break;
            case TimeParts.minutes:
                minutes++;
                break;
            case TimeParts.seconds:
                seconds++;
                break;
            default:
        }
        if (seconds > SECONDS_PER_MINUTE) {
            seconds = 0;
        }
        if (minutes > MINUTES_PER_HOUR) {
            minutes = 0;
        }
        if (hours > HOURS_PER_DAY) {
            hours = 0;
        }
        return this.dateAdapter.createDateTime(this.dateAdapter.getYear(this.value), this.dateAdapter.getMonth(this.value), this.dateAdapter.getDate(this.value), hours, minutes, seconds, this.dateAdapter.getMilliseconds(this.value));
    }
    decrementTime(dateVal, whatToDecrement = TimeParts.seconds) {
        let hours = this.dateAdapter.getHours(dateVal);
        let minutes = this.dateAdapter.getMinutes(dateVal);
        let seconds = this.dateAdapter.getSeconds(dateVal);
        switch (whatToDecrement) {
            case TimeParts.hours:
                hours--;
                break;
            case TimeParts.minutes:
                minutes--;
                break;
            case TimeParts.seconds:
                seconds--;
                break;
            default:
        }
        if (seconds < 0) {
            seconds = SECONDS_PER_MINUTE;
        }
        if (minutes < 0) {
            minutes = MINUTES_PER_HOUR;
        }
        if (hours < 0) {
            hours = HOURS_PER_DAY;
        }
        return this.dateAdapter.createDateTime(this.dateAdapter.getYear(this.value), this.dateAdapter.getMonth(this.value), this.dateAdapter.getDate(this.value), hours, minutes, seconds, this.dateAdapter.getMilliseconds(this.value));
    }
    /**
     * @description Get params for arrow-keys (up/down) time valie edit.
     * @param cursorPosition Current cursor position in timeString
     */
    getTimeEditMetrics(cursorPosition) {
        const timeString = this.viewValue;
        let modifiedTimePart;
        let cursorStartPosition;
        let cursorEndPosition;
        const hoursIndex = 0;
        const minutesIndex = timeString.indexOf(':', hoursIndex + 1);
        const secondsIndex = minutesIndex !== -1 ? timeString.indexOf(':', minutesIndex + 1) : -1;
        if (secondsIndex !== -1 && cursorPosition > secondsIndex) {
            modifiedTimePart = TimeParts.seconds;
            cursorStartPosition = secondsIndex + 1;
            cursorEndPosition = timeString.length;
        }
        else if (minutesIndex !== -1 && cursorPosition > minutesIndex) {
            modifiedTimePart = TimeParts.minutes;
            cursorStartPosition = minutesIndex + 1;
            cursorEndPosition = secondsIndex > -1 ? secondsIndex : timeString.length;
        }
        else {
            modifiedTimePart = TimeParts.hours;
            cursorStartPosition = hoursIndex;
            cursorEndPosition = minutesIndex !== -1 ? minutesIndex : timeString.length;
        }
        return { modifiedTimePart, cursorStartPosition, cursorEndPosition };
    }
    /**
     * @description Create time string for displaying inside input element of UI
     */
    getTimeStringFromDate(value, timeFormat) {
        if (!value || !this.dateAdapter.isValid(value)) {
            return '';
        }
        return this.dateAdapter.format(value, timeFormat);
    }
    getDateFromTimeString(timeString) {
        if (!timeString) {
            return null;
        }
        const HMS = timeString.match(HOURS_MINUTES_SECONDS_REGEXP);
        const HM = timeString.match(HOURS_MINUTES_REGEXP);
        const H = timeString.match(HOURS_ONLY_REGEXP);
        const amPm = timeString.match(AM_PM_FORMAT_REGEXP);
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        // tslint:disable:no-magic-numbers
        if (amPm) {
            hours = Number(amPm[1]);
            minutes = Number(amPm[2]);
            if (/[p]/i.test(amPm[3]) || (/[a]/i.test(amPm[3]) && hours === 12)) {
                hours += 12;
            }
        }
        else if (HMS) {
            hours = Number(HMS[1]);
            minutes = Number(HMS[2]);
            seconds = Number(HMS[3]);
        }
        else if (HM) {
            hours = Number(HM[1]);
            minutes = Number(HM[2]);
        }
        else if (H) {
            hours = Number(H[1]);
        }
        else {
            return null;
        }
        // tslint:enable
        const resultDate = this.dateAdapter.createDateTime(this.dateAdapter.getYear(this.value), this.dateAdapter.getMonth(this.value), this.dateAdapter.getDate(this.value), hours, minutes || 0, seconds || 0, this.dateAdapter.getMilliseconds(this.value));
        return this.getValidDateOrNull(resultDate);
    }
    compareTime(first, second) {
        const result = this.dateAdapter.getHours(first) - this.dateAdapter.getHours(second) ||
            this.dateAdapter.getMinutes(first) - this.dateAdapter.getMinutes(second);
        if (TimeFormats.HHmm === this.format) {
            return result;
        }
        else if (TimeFormats.HHmmss === this.format) {
            return result || this.dateAdapter.getSeconds(first) - this.dateAdapter.getSeconds(second);
        }
        else {
            throw Error(`Unknown format: ${this.format}`);
        }
    }
    getValidDateOrNull(obj) {
        return (this.dateAdapter.isDateInstance(obj) && this.dateAdapter.isValid(obj)) ? obj : null;
    }
    setViewValue(value) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
    }
    updateView() {
        const formattedValue = this.getTimeStringFromDate(this.value, this.format);
        this.setViewValue(formattedValue);
    }
    setControl(control) {
        if (!this.control) {
            this.control = control;
        }
    }
}
McTimepicker.ɵfac = function McTimepicker_Factory(t) { return new (t || McTimepicker)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], 8)); };
McTimepicker.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: McTimepicker, selectors: [["input", "mcTimepicker", ""]], hostAttrs: [1, "mc-input", "mc-timepicker"], hostVars: 6, hostBindings: function McTimepicker_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("blur", function McTimepicker_blur_HostBindingHandler() { return ctx.onBlur(); })("focus", function McTimepicker_focus_HostBindingHandler() { return ctx.focusChanged(true); })("paste", function McTimepicker_paste_HostBindingHandler($event) { return ctx.onPaste($event); })("keydown", function McTimepicker_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx.id)("placeholder", ctx.placeholder)("disabled", ctx.disabled || null)("required", ctx.required)("size", ctx.getSize())("autocomplete", "off");
    } }, inputs: { value: "value", id: "id", placeholder: "placeholder", disabled: "disabled", required: "required", format: "format", min: "min", max: "max", mcValidationTooltip: "mcValidationTooltip" }, outputs: { incorrectInput: "incorrectInput" }, exportAs: ["mcTimepicker"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            MC_TIMEPICKER_VALIDATORS,
            MC_TIMEPICKER_VALUE_ACCESSOR,
            { provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_9__["McFormFieldControl"], useExisting: McTimepicker }
        ])] });
/** @nocollapse */
McTimepicker.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
McTimepicker.propDecorators = {
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    mcValidationTooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    incorrectInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McTimepicker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'input[mcTimepicker]',
                exportAs: 'mcTimepicker',
                host: {
                    class: 'mc-input mc-timepicker',
                    // Native input properties that are overwritten by Angular inputs need to be synced with
                    // the native input element. Otherwise property bindings for those don't work.
                    '[attr.id]': 'id',
                    '[attr.placeholder]': 'placeholder',
                    '[attr.disabled]': 'disabled || null',
                    '[attr.required]': 'required',
                    '[attr.size]': 'getSize()',
                    '[attr.autocomplete]': '"off"',
                    '(blur)': 'onBlur()',
                    '(focus)': 'focusChanged(true)',
                    '(paste)': 'onPaste($event)',
                    '(keydown)': 'onKeyDown($event)'
                },
                providers: [
                    MC_TIMEPICKER_VALIDATORS,
                    MC_TIMEPICKER_VALUE_ACCESSOR,
                    { provide: _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_9__["McFormFieldControl"], useExisting: McTimepicker }
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }] }]; }, { incorrectInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], format: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], mcValidationTooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

class McTimepickerModule {
}
McTimepickerModule.ɵfac = function McTimepickerModule_Factory(t) { return new (t || McTimepickerModule)(); };
McTimepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: McTimepickerModule });
McTimepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](McTimepickerModule, { declarations: function () { return [McTimepicker]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]; }, exports: function () { return [McTimepicker]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](McTimepickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
                    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["PlatformModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                declarations: [McTimepicker],
                exports: [McTimepicker]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ "hu/b":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@ptsecurity/mosaic-examples/fesm2015/ptsecurity-mosaic-examples-mosaic-timepicker.js ***!
  \***********************************************************************************************************/
/*! exports provided: TimepickerExamplesModule, TimepickerOverviewExample, TimepickerRangeExample, TimepickerValidationSymbolsExample, TimepickerVariationsExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerExamplesModule", function() { return TimepickerExamplesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerOverviewExample", function() { return TimepickerOverviewExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerRangeExample", function() { return TimepickerRangeExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerValidationSymbolsExample", function() { return TimepickerValidationSymbolsExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepickerVariationsExample", function() { return TimepickerVariationsExample; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ptsecurity/mosaic-luxon-adapter/adapter */ "O2sr");
/* harmony import */ var _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ptsecurity/mosaic/checkbox */ "UYLH");
/* harmony import */ var _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ptsecurity/mosaic/form-field */ "20Zt");
/* harmony import */ var _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ptsecurity/mosaic/icon */ "GSC3");
/* harmony import */ var _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ptsecurity/mosaic/input */ "PryY");
/* harmony import */ var _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ptsecurity/mosaic/radio */ "BRpl");
/* harmony import */ var _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ptsecurity/mosaic/select */ "CUtc");
/* harmony import */ var _ptsecurity_mosaic_timepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ptsecurity/mosaic/timepicker */ "N3I7");
/* harmony import */ var _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ptsecurity/mosaic/tooltip */ "341e");
/* harmony import */ var _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ptsecurity/cdk/datetime */ "Vue8");
/* harmony import */ var _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ptsecurity/mosaic/core */ "qyIq");


























function TimepickerOverviewExample_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 11);
} }
/**
 * @title Timepicker overview
 */
class TimepickerOverviewExample {
    constructor(adapter) {
        this.adapter = adapter;
        this.isDisabled = false;
        this.isIconVisible = true;
        this.timeFormat = 'HH:mm';
        this.value = this.adapter.today();
    }
}
TimepickerOverviewExample.ɵfac = function TimepickerOverviewExample_Factory(t) { return new (t || TimepickerOverviewExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"])); };
TimepickerOverviewExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TimepickerOverviewExample, selectors: [["timepicker-overview-example"]], decls: 16, vars: 9, consts: [[1, "example-timepicker-group"], [1, "example-timepicker__controls"], [1, ""], [3, "value", "valueChange"], ["value", "HH:mm"], ["value", "HH:mm:ss"], [1, "", 3, "ngModel", "ngModelChange"], ["mcTooltip", "", 1, "example-timepicker-element", 3, "mcTitle"], ["tooltip", "mcTooltip"], ["mcPrefix", "", "mc-icon", "mc-clock_16", 4, "ngIf"], ["mcTimepicker", "", 3, "ngModel", "disabled", "format", "mcValidationTooltip", "ngModelChange"], ["mcPrefix", "", "mc-icon", "mc-clock_16"]], template: function TimepickerOverviewExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mc-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mc-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function TimepickerOverviewExample_Template_mc_select_valueChange_3_listener($event) { return ctx.timeFormat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mc-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "HH:mm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mc-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "HH:mm:ss");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mc-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TimepickerOverviewExample_Template_mc_checkbox_ngModelChange_8_listener($event) { return ctx.isIconVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Show icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mc-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TimepickerOverviewExample_Template_mc_checkbox_ngModelChange_10_listener($event) { return ctx.isDisabled = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mc-form-field", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TimepickerOverviewExample_i_14_Template, 1, 0, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TimepickerOverviewExample_Template_input_ngModelChange_15_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.timeFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.isIconVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isIconVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.value)("disabled", ctx.isDisabled)("format", ctx.timeFormat)("mcValidationTooltip", _r0);
    } }, directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_9__["McSelect"], _ptsecurity_mosaic_core__WEBPACK_IMPORTED_MODULE_13__["McOption"], _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_4__["McCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_11__["McTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _ptsecurity_mosaic_timepicker__WEBPACK_IMPORTED_MODULE_10__["McTimepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McPrefix"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"]], styles: [".example-timepicker-group[_ngcontent-%COMP%]{display:block}.example-timepicker-element[_ngcontent-%COMP%]{margin-top:32px;margin-bottom:10px}.example-timepicker__controls[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:120px}.example-timepicker__controls[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-bottom:16px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimepickerOverviewExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'timepicker-overview-example',
                templateUrl: 'timepicker-overview-example.html',
                styleUrls: ['timepicker-overview-example.css']
            }]
    }], function () { return [{ type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"] }]; }, null); })();

/**
 * @title Timepicker range
 */
class TimepickerRangeExample {
    constructor(adapter) {
        this.adapter = adapter;
        this.format = 'HH:mm:ss';
        this.startTime = this.adapter.today().startOf('day');
        this.endTime = this.adapter.today();
        this.time = this.adapter.today().startOf('hour');
    }
    getStartTime() {
        return this.startTime ? this.startTime.toFormat(this.format) : '';
    }
    getEndTime() {
        return this.endTime ? this.endTime.toFormat(this.format) : '';
    }
}
TimepickerRangeExample.ɵfac = function TimepickerRangeExample_Factory(t) { return new (t || TimepickerRangeExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"])); };
TimepickerRangeExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TimepickerRangeExample, selectors: [["timepicker-range-example"]], decls: 18, vars: 7, consts: [[1, "example-timepicker-group"], [1, "example-timepicker-element"], ["for", "Time", 1, "flex-35", "mc-form-label"], ["mcTooltip", "", 3, "mcTitle"], ["tooltip", "mcTooltip"], ["mcPrefix", "", "mc-icon", "mc-clock_16"], ["mcTimepicker", "", "id", "Time", 3, "min", "max", "ngModel", "mcValidationTooltip", "ngModelChange"], ["for", "startTime", 1, "flex-35", "mc-form-label"], ["mcTimepicker", "", "id", "startTime", 3, "ngModel", "ngModelChange"], ["for", "endTime", 1, "flex-35", "mc-form-label"], ["mcTimepicker", "", "id", "endTime", 3, "ngModel", "ngModelChange"]], template: function TimepickerRangeExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0440\u0435\u043C\u044F \u043C\u0435\u0436\u0434\u0443 min \u0438 max");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mc-form-field", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TimepickerRangeExample_Template_input_ngModelChange_7_listener($event) { return ctx.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "min");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TimepickerRangeExample_Template_input_ngModelChange_12_listener($event) { return ctx.startTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "max");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mc-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TimepickerRangeExample_Template_input_ngModelChange_17_listener($event) { return ctx.endTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("min", ctx.getStartTime())("max", ctx.getEndTime())("ngModel", ctx.time)("mcValidationTooltip", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.startTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.endTime);
    } }, directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_11__["McTooltip"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McPrefix"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"], _ptsecurity_mosaic_timepicker__WEBPACK_IMPORTED_MODULE_10__["McTimepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["MinValidator"], _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["MaxValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".example-timepicker-group[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column}.example-timepicker-element[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:10px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimepickerRangeExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'timepicker-range-example',
                templateUrl: 'timepicker-range-example.html',
                styleUrls: ['timepicker-range-example.css']
            }]
    }], function () { return [{ type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"] }]; }, null); })();

/**
 * @title Timepicker overview
 */
class TimepickerValidationSymbolsExample {
    constructor(adapter) {
        this.adapter = adapter;
        this.time = this.adapter.today().startOf('hour');
    }
}
TimepickerValidationSymbolsExample.ɵfac = function TimepickerValidationSymbolsExample_Factory(t) { return new (t || TimepickerValidationSymbolsExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"])); };
TimepickerValidationSymbolsExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TimepickerValidationSymbolsExample, selectors: [["timepicker-validation-symbols-example"]], decls: 5, vars: 4, consts: [[1, "docs-row"], ["mcTooltip", "", 3, "mcTitle"], ["tooltip", "mcTooltip"], ["mcPrefix", "", "mc-icon", "mc-clock_16"], ["mcTimepicker", "", 3, "ngModel", "format", "mcValidationTooltip", "ngModelChange"]], template: function TimepickerValidationSymbolsExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-form-field", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TimepickerValidationSymbolsExample_Template_input_ngModelChange_4_listener($event) { return ctx.time = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.time)("format", "HH:mm")("mcValidationTooltip", _r0);
    } }, directives: [_ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_11__["McTooltip"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McPrefix"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"], _ptsecurity_mosaic_timepicker__WEBPACK_IMPORTED_MODULE_10__["McTimepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimepickerValidationSymbolsExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'timepicker-validation-symbols-example',
                templateUrl: 'timepicker-validation-symbols-example.html',
                styleUrls: ['timepicker-validation-symbols-example.css']
            }]
    }], function () { return [{ type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"] }]; }, null); })();

/**
 * @title Timepicker overview
 */
class TimepickerVariationsExample {
    constructor(adapter) {
        this.adapter = adapter;
        this.timeFormat = 'HH:mm';
        this.value = this.adapter.today();
    }
}
TimepickerVariationsExample.ɵfac = function TimepickerVariationsExample_Factory(t) { return new (t || TimepickerVariationsExample)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"])); };
TimepickerVariationsExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TimepickerVariationsExample, selectors: [["timepicker-variations-example"]], decls: 10, vars: 5, consts: [[1, "example-timepicker-group"], [3, "ngModel", "ngModelChange"], ["value", "HH:mm", 1, "example-radio-button"], ["value", "HH:mm:ss", 1, "example-radio-button"], ["mcTooltip", "", 1, "example-timepicker-element", 3, "mcTitle"], ["tooltip", "mcTooltip"], ["mcPrefix", "", "mc-icon", "mc-clock_16"], ["mcTimepicker", "", 3, "ngModel", "format", "mcValidationTooltip", "ngModelChange"]], template: function TimepickerVariationsExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mc-radio-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TimepickerVariationsExample_Template_mc_radio_group_ngModelChange_1_listener($event) { return ctx.timeFormat = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mc-radio-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "HH:mm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mc-radio-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "HH:mm:ss");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mc-form-field", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function TimepickerVariationsExample_Template_input_ngModelChange_9_listener($event) { return ctx.value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.timeFormat);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mcTitle", "\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.value)("format", ctx.timeFormat)("mcValidationTooltip", _r0);
    } }, directives: [_ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioButton"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormField"], _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_11__["McTooltip"], _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McPrefix"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIcon"], _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconCSSStyler"], _ptsecurity_mosaic_timepicker__WEBPACK_IMPORTED_MODULE_10__["McTimepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]], styles: [".mc-radio-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.mc-radio-button[_ngcontent-%COMP%]{margin-bottom:8px}.block[_ngcontent-%COMP%]{border:1px solid #000;padding:8px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimepickerVariationsExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'timepicker-variations-example',
                templateUrl: 'timepicker-variations-example.html',
                styleUrls: ['timepicker-variations-example.css']
            }]
    }], function () { return [{ type: _ptsecurity_cdk_datetime__WEBPACK_IMPORTED_MODULE_12__["DateAdapter"] }]; }, null); })();

const EXAMPLES = [
    TimepickerOverviewExample,
    TimepickerRangeExample,
    TimepickerVariationsExample,
    TimepickerValidationSymbolsExample
];
class TimepickerExamplesModule {
}
TimepickerExamplesModule.ɵfac = function TimepickerExamplesModule_Factory(t) { return new (t || TimepickerExamplesModule)(); };
TimepickerExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TimepickerExamplesModule });
TimepickerExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["McLuxonDateModule"],
            _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_11__["McToolTipModule"],
            _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_4__["McCheckboxModule"],
            _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_9__["McSelectModule"],
            _ptsecurity_mosaic_timepicker__WEBPACK_IMPORTED_MODULE_10__["McTimepickerModule"],
            _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"],
            _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"],
            _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"],
            _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TimepickerExamplesModule, { declarations: [TimepickerOverviewExample,
        TimepickerRangeExample,
        TimepickerVariationsExample,
        TimepickerValidationSymbolsExample], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["McLuxonDateModule"],
        _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_11__["McToolTipModule"],
        _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_4__["McCheckboxModule"],
        _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_9__["McSelectModule"],
        _ptsecurity_mosaic_timepicker__WEBPACK_IMPORTED_MODULE_10__["McTimepickerModule"],
        _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"],
        _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"],
        _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"],
        _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioModule"]], exports: [TimepickerOverviewExample,
        TimepickerRangeExample,
        TimepickerVariationsExample,
        TimepickerValidationSymbolsExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TimepickerExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ptsecurity_mosaic_luxon_adapter_adapter__WEBPACK_IMPORTED_MODULE_3__["McLuxonDateModule"],
                    _ptsecurity_mosaic_tooltip__WEBPACK_IMPORTED_MODULE_11__["McToolTipModule"],
                    _ptsecurity_mosaic_checkbox__WEBPACK_IMPORTED_MODULE_4__["McCheckboxModule"],
                    _ptsecurity_mosaic_select__WEBPACK_IMPORTED_MODULE_9__["McSelectModule"],
                    _ptsecurity_mosaic_timepicker__WEBPACK_IMPORTED_MODULE_10__["McTimepickerModule"],
                    _ptsecurity_mosaic_input__WEBPACK_IMPORTED_MODULE_7__["McInputModule"],
                    _ptsecurity_mosaic_form_field__WEBPACK_IMPORTED_MODULE_5__["McFormFieldModule"],
                    _ptsecurity_mosaic_icon__WEBPACK_IMPORTED_MODULE_6__["McIconModule"],
                    _ptsecurity_mosaic_radio__WEBPACK_IMPORTED_MODULE_8__["McRadioModule"]
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ptsecurity-mosaic-examples-mosaic-timepicker.js.map


/***/ })

}]);
//# sourceMappingURL=17-es2015.js.map