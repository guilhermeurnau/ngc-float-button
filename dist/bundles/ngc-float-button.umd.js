(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/material'), require('rxjs/Subject'), require('rxjs/BehaviorSubject')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@angular/material', 'rxjs/Subject', 'rxjs/BehaviorSubject'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.floatbutton = {}),global.ng.core,global.common,global.material,global.Subject,global.Rx));
}(this, (function (exports,core,common,material,Subject,BehaviorSubject) { 'use strict';

/* created by @GustavoCostaW https://github.com/gustavocostaw/ngc-float-button  */
var NgcFloatItemButtonComponent = /** @class */ (function () {
    function NgcFloatItemButtonComponent() {
        this.color = 'white';
        this.clicked = new core.EventEmitter();
        this.disabled = false;
    }
    NgcFloatItemButtonComponent.prototype.emitClickEvent = function ($event) {
        if (this.disabled)
            return this.disabled;
        this.clicked.emit($event);
    };
    NgcFloatItemButtonComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngc-float-item-button',
                    styles: ["\n\n  .item {\n    width:250px;\n    height: 40px;\n    left:-203px;\n    transform: translate3d(0, 0, 0);\n    transition: transform, opacity ease-out 200ms;\n    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition-duration: 180ms;\n    position: absolute;\n    cursor: pointer;\n    top:5px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n\n  .item.disabled {\n    pointer-events: none;\n  }\n\n  .item.disabled .fab-item {\n    background-color: lightgray;\n  }\n\n  .content {\n    background: #333333;\n    margin-right: 50px;\n    line-height: 25px;\n    color: white;\n    padding: 2px 7px;\n    border-radius: 3px;\n    display: none;\n    font-size: 12px;\n    height: 25px;\n    margin-top: 4px;\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n  }\n\n  .fab-item {\n    right: 0;\n    background: white;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    color: #797979;\n    text-align: center;\n    cursor: pointer;\n    line-height: 50px;\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n  }\n\n\n  "],
                    template: "\n    <div #elementref class=\"item {{ disabled ? 'disabled' : ''}}\"\n    (click)=\"emitClickEvent($event)\">\n        <div class=\"content-wrapper\" #contentref>\n          <div class=\"content\" [style.display]=\"content ? 'block' : 'none'\">{{content}}</div>\n        </div>\n        <a class=\"fab-item\" [style.backgroundColor]=\"color\">\n           <mat-icon> {{ icon }} </mat-icon>\n        </a>\n    </div>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    NgcFloatItemButtonComponent.ctorParameters = function () { return []; };
    NgcFloatItemButtonComponent.propDecorators = {
        'icon': [{ type: core.Input },],
        'content': [{ type: core.Input },],
        'color': [{ type: core.Input },],
        'clicked': [{ type: core.Output },],
        'disabled': [{ type: core.Input },],
        'elementref': [{ type: core.ViewChild, args: ['elementref',] },],
        'contentref': [{ type: core.ViewChild, args: ['contentref',] },],
    };
    return NgcFloatItemButtonComponent;
}());

/* created by @GustavoCostaW https://github.com/gustavocostaw/ngc-float-button  */
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var NgcFloatButtonComponent = /** @class */ (function () {
    function NgcFloatButtonComponent(element, cd) {
        this.element = element;
        this.cd = cd;
        this.subs = [];
        this.spaceBetweenButtons = 55;
        this.color = '#dd0031';
        this.disabled = false;
        this.events = new Subject.Subject();
        this.elementref = element.nativeElement;
        this.state = new BehaviorSubject.BehaviorSubject({
            display: false,
            direction: 'top',
            event: 'start',
            spaceBetweenButtons: this.spaceBetweenButtons
        });
    }
    NgcFloatButtonComponent.prototype.toggle = function () {
        if (this.disabled) {
            return this.disabled;
        }
        this.state.next(__assign({}, this.state.getValue(), { display: !this.state.getValue().display, event: !this.state.getValue().display ? 'open' : 'close' }));
    };
    // only top and bottom support content element
    NgcFloatButtonComponent.prototype.checkDirectionType = function () {
        if (this.buttons.toArray()) {
            var display_1 = 'block';
            if (this.direction === 'right' || this.direction === 'left') {
                display_1 = 'none';
            }
            this.buttons.toArray().forEach(function (element) {
                element.contentref.nativeElement.style.display = display_1;
            });
        }
    };
    // transition
    NgcFloatButtonComponent.prototype.animateButtons = function (eventType) {
        var _this = this;
        this.buttons.toArray().forEach(function (btn, i) {
            i += 1;
            var style = btn.elementref.nativeElement.style;
            if (eventType !== 'directionChanged' && _this.state.getValue().display) {
                style['transform'] = 'scale(1)';
                style['transition-duration'] = '0s';
                if (btn.timeout) {
                    clearTimeout(btn.timeout);
                }
            }
            setTimeout(function () {
                style['transition-duration'] = _this.state.getValue().display ? 90 + (100 * i) + "ms" : '';
                style['transform'] = _this.state.getValue().display ? _this.getTranslate(i) : '';
            }, 50);
            if (eventType !== 'directionChanged' && !_this.state.getValue().display) {
                btn.timeout = setTimeout(function () {
                    style['transform'] = 'scale(0)';
                }, 90 + (100 * i));
            }
        });
    };
    // get transition direction
    NgcFloatButtonComponent.prototype.getTranslate = function (i) {
        var animation;
        switch (this.direction) {
            case 'right':
                animation = "translate3d(" + this.state.getValue().spaceBetweenButtons * i + "px,0,0)";
                break;
            case 'bottom':
                animation = "translate3d(0," + this.state.getValue().spaceBetweenButtons * i + "px,0)";
                break;
            case 'left':
                animation = "translate3d(-" + this.state.getValue().spaceBetweenButtons * i + "px,0,0)";
                break;
            default:
                animation = "translate3d(0,-" + this.state.getValue().spaceBetweenButtons * i + "px,0)";
                break;
        }
        return animation;
    };
    /* some problems here */
    // @HostListener('document:click', ['$event.target']) private clickOutside(target) {
    //   if (this.state.getValue().display && !this.elementref.contains(target)) {
    //     this.state.next({
    //       ...this.state.getValue(),
    //       display: false,
    //       event: 'close'
    //     });
    //   }
    // }
    NgcFloatButtonComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.direction) {
            // first time to check
            this.checkDirectionType();
        }
        this.buttons.toArray().map(function (v) {
            var sub = v.clicked.subscribe(function () {
                _this.state.next(__assign({}, _this.state.getValue(), { display: false, event: 'close' }));
            });
            _this.subs.push(sub);
        });
        var sub = this.state.subscribe(function (v) {
            _this.animateButtons(v.event);
            _this.events.next({
                display: v.display,
                event: v.event,
                direction: v.direction
            });
        });
        this.subs.push(sub);
    };
    // if @Input values changes, we need check the direction type
    NgcFloatButtonComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.direction && !changes.direction.firstChange) {
            this.state.next(__assign({}, this.state.getValue(), { event: 'directionChanged', direction: changes.direction.currentValue }));
            // if changes happens
            this.checkDirectionType();
        }
        if (changes.open && changes.open.currentValue) {
            var sub = this.open.subscribe(function (v) {
                if (v !== _this.state.getValue().display) {
                    _this.state.next(__assign({}, _this.state.getValue(), { event: v ? 'open' : 'close', display: v }));
                    // make angular happy
                    _this.cd.markForCheck();
                }
            });
            this.subs.push(sub);
        }
        if (changes.spaceBetweenButtons && changes.spaceBetweenButtons.currentValue) {
            this.state.next(__assign({}, this.state.getValue(), { event: 'spaceBetweenButtonsChanged', spaceBetweenButtons: changes.spaceBetweenButtons.currentValue }));
        }
    };
    NgcFloatButtonComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (v) {
            v.unsubscribe();
        });
    };
    NgcFloatButtonComponent.decorators = [
        { type: core.Component, args: [{
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    selector: 'ngc-float-button',
                    styles: ["\n\n  :host {\n    position: absolute;\n  }\n\n  .fab-menu {\n      box-sizing: border-box;\n      font-size: 20px;\n      width:55px;\n      height: 55px;\n      text-align: left;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      z-index: 9;\n  }\n\n  .fab-toggle {\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n    color: white;\n    text-align: center;\n    line-height: 50px;\n    transform: translate3d(0, 0, 0);\n    transition: all ease-out 200ms;\n    z-index: 2;\n    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    transition-duration: 400ms;\n    transform: scale(1.1, 1.1) translate3d(0, 0, 0);\n    cursor: pointer;\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n  }\n\n  .fab-menu .fab-toggle:hover {\n    transform: scale(1.2, 1.2) translate3d(0, 0, 0);\n  }\n\n  .fab-menu /deep/ .item {\n     opacity: 0;\n  }\n\n  .fab-menu.active /deep/ .item {\n     opacity: 1;\n  }\n\n  .fab-menu.active /deep/ .content-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  .fab-menu.active /deep/ .content {\n    display: block;\n  }\n\n  .fab-menu.active .fab-toggle {\n    transition-timing-function: linear;\n    transition-duration: 200ms;\n    transform: scale(0.8, 0.8) translate3d(0, 0, 0);\n  }\n\n  "],
                    template: "\n    <nav class=\"fab-menu\" [class.active]=\"(state | async).display\">\n        <a class=\"fab-toggle\" (click)=\"toggle()\" [style.backgroundColor]=\"color\">\n          <mat-icon> {{icon}} </mat-icon>\n        </a>\n        <ng-content></ng-content>\n    </nav>\n  "
                },] },
    ];
    /** @nocollapse */
    NgcFloatButtonComponent.ctorParameters = function () { return [
        { type: core.ElementRef, },
        { type: core.ChangeDetectorRef, },
    ]; };
    NgcFloatButtonComponent.propDecorators = {
        'icon': [{ type: core.Input },],
        'direction': [{ type: core.Input },],
        'spaceBetweenButtons': [{ type: core.Input },],
        'open': [{ type: core.Input },],
        'color': [{ type: core.Input },],
        'disabled': [{ type: core.Input },],
        'events': [{ type: core.Output },],
        'buttons': [{ type: core.ContentChildren, args: [NgcFloatItemButtonComponent,] },],
    };
    return NgcFloatButtonComponent;
}());

var NgcFloatButtonModule = /** @class */ (function () {
    function NgcFloatButtonModule() {
    }
    NgcFloatButtonModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule,
                        material.MatIconModule
                    ],
                    declarations: [NgcFloatButtonComponent, NgcFloatItemButtonComponent],
                    exports: [NgcFloatButtonComponent, NgcFloatItemButtonComponent]
                },] },
    ];
    /** @nocollapse */
    NgcFloatButtonModule.ctorParameters = function () { return []; };
    return NgcFloatButtonModule;
}());

exports.NgcFloatButtonModule = NgcFloatButtonModule;
exports.NgcFloatButtonComponent = NgcFloatButtonComponent;
exports.NgcFloatItemButtonComponent = NgcFloatItemButtonComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
