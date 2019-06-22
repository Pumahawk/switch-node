"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SelectAll = /** @class */ (function () {
    function SelectAll(primary, secondary) {
        this.primary = primary;
        this.secondary = secondary;
    }
    SelectAll.prototype.triggerPrimary = function () {
        var _this = this;
        if (this.isOn(this.primary)) {
            if (!this.secondary.some(function (n) { return _this.isOn(n); })) {
                this.secondary.forEach(function (n) { return _this.setOn(n); });
            }
        }
        else {
            this.secondary.forEach(function (n) { return _this.setOff(n); });
        }
    };
    SelectAll.prototype.triggerSecondary = function () {
        var _this = this;
        if (this.secondary.some(function (n) { return _this.isOn(n); })) {
            if (!this.isOn(this.primary)) {
                this.setOn(this.primary);
            }
        }
    };
    return SelectAll;
}());
exports.SelectAll = SelectAll;
