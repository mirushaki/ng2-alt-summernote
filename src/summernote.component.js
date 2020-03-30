/// <reference path="../summernote.d.ts" />
"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var core_1 = require("@angular/core");

var forms_1 = require("@angular/forms");

var SUMMERNOTE_VALUE_ACCESSOR = {
  provide: forms_1.NG_VALUE_ACCESSOR,
  useExisting: core_1.forwardRef(function () {
    return SummernoteComponent;
  }),
  multi: true
};

var SummernoteComponent = /*#__PURE__*/function () {
  function SummernoteComponent(element) {
    _classCallCheck(this, SummernoteComponent);

    this.element = element;
    this.emptyChange = new core_1.EventEmitter();
    this._disabled = false;

    this.onTouched = function () {};

    this.onChange = function () {};
  }

  _createClass(SummernoteComponent, [{
    key: "refreshOptions",
    value: function refreshOptions() {
      $(this.element.nativeElement).find('.summernote').summernote(this.options);
      if (this.options.tooltip != undefined && !this.options.tooltip) $(this.element.nativeElement).find('.note-editor button.note-btn').tooltip('destroy');
    }
  }, {
    key: "addCallbacks",
    value: function addCallbacks() {
      var _this = this;

      this.options.callbacks = {
        onChange: function onChange(contents, $editable) {
          _this.refreshEmpty();

          _this.onChange(contents);
        },
        onBlur: function onBlur() {
          _this.onTouched();
        }
      };
    }
  }, {
    key: "refreshEmpty",
    value: function refreshEmpty() {
      this.empty = $(this.element.nativeElement).find('.summernote').summernote('isEmpty');
    }
  }, {
    key: "ngOnInit",
    value: function ngOnInit() {
      if (this.options == null) {
        this.options = {};
      }

      this.refreshEmpty();
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      $(this.element.nativeElement).find('.summernote').summernote('destroy');
    }
  }, {
    key: "writeValue",
    value: function writeValue(code) {
      this.value = code;
      $(this.element.nativeElement).find('.summernote').summernote('code', code);
      this.refreshEmpty();
    }
  }, {
    key: "getCode",
    value: function getCode() {
      return $(this.element.nativeElement).find('.summernote').summernote('code');
    }
  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChange = fn;
    }
  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouched = fn;
    }
  }, {
    key: "options",
    set: function set(options) {
      this._options = options;
      this.addCallbacks();
      this.refreshOptions();
    },
    get: function get() {
      return this._options || {};
    }
  }, {
    key: "disabled",
    set: function set(disabled) {
      if (disabled != null) {
        this._disabled = disabled;
        $(this.element.nativeElement).find('.summernote').summernote(disabled ? 'disable' : 'enable');
        this.refreshOptions();
      }
    },
    get: function get() {
      return this._disabled;
    }
  }, {
    key: "empty",
    get: function get() {
      return this._empty;
    },
    set: function set(value) {
      if (this._empty != value) {
        this._empty = value;
        this.emptyChange.emit(value);
      }
    }
  }, {
    key: "value",
    set: function set(value) {
      this._value = value;
    },
    get: function get() {
      return this._value;
    }
  }]);

  return SummernoteComponent;
}();

__decorate([core_1.Input(), __metadata("design:type", Object), __metadata("design:paramtypes", [Object])], SummernoteComponent.prototype, "options", null);

__decorate([core_1.Input(), __metadata("design:type", Boolean), __metadata("design:paramtypes", [Boolean])], SummernoteComponent.prototype, "disabled", null);

__decorate([core_1.Output(), __metadata("design:type", core_1.EventEmitter)], SummernoteComponent.prototype, "emptyChange", void 0);

SummernoteComponent = __decorate([core_1.Component({
  selector: 'summernote',
  template: '<div class="summernote"></div>',
  providers: [SUMMERNOTE_VALUE_ACCESSOR]
}), __metadata("design:paramtypes", [core_1.ElementRef])], SummernoteComponent);
exports.SummernoteComponent = SummernoteComponent;