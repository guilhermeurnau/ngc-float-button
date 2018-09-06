/* created by @GustavoCostaW https://github.com/gustavocostaw/ngc-float-button  */
import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
var NgcFloatItemButtonComponent = /** @class */ (function () {
    function NgcFloatItemButtonComponent() {
        this.color = 'white';
        this.clicked = new EventEmitter();
        this.disabled = false;
    }
    NgcFloatItemButtonComponent.prototype.emitClickEvent = function ($event) {
        if (this.disabled)
            return this.disabled;
        this.clicked.emit($event);
    };
    NgcFloatItemButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngc-float-item-button',
                    styles: ["\n\n  .item {\n    width:250px;\n    height: 40px;\n    left:-203px;\n    transform: translate3d(0, 0, 0);\n    transition: transform, opacity ease-out 200ms;\n    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition-duration: 180ms;\n    position: absolute;\n    cursor: pointer;\n    top:5px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n\n  .item.disabled {\n    pointer-events: none;\n  }\n\n  .item.disabled .fab-item {\n    background-color: lightgray;\n  }\n\n  .content {\n    background: #333333;\n    margin-right: 50px;\n    line-height: 25px;\n    color: white;\n    padding: 2px 7px;\n    border-radius: 3px;\n    display: none;\n    font-size: 12px;\n    height: 25px;\n    margin-top: 4px;\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n  }\n\n  .fab-item {\n    right: 0;\n    background: white;\n    border-radius: 100%;\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    color: #797979;\n    text-align: center;\n    cursor: pointer;\n    line-height: 50px;\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n  }\n\n\n  "],
                    template: "\n    <div #elementref class=\"item {{ disabled ? 'disabled' : ''}}\"\n    (click)=\"emitClickEvent($event)\">\n        <div class=\"content-wrapper\" #contentref>\n          <div class=\"content\" [style.display]=\"content ? 'block' : 'none'\">{{content}}</div>\n        </div>\n        <a class=\"fab-item\" [style.backgroundColor]=\"color\">\n           <mat-icon> {{ icon }} </mat-icon>\n        </a>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    NgcFloatItemButtonComponent.ctorParameters = function () { return []; };
    NgcFloatItemButtonComponent.propDecorators = {
        'icon': [{ type: Input },],
        'content': [{ type: Input },],
        'color': [{ type: Input },],
        'clicked': [{ type: Output },],
        'disabled': [{ type: Input },],
        'elementref': [{ type: ViewChild, args: ['elementref',] },],
        'contentref': [{ type: ViewChild, args: ['contentref',] },],
    };
    return NgcFloatItemButtonComponent;
}());
export { NgcFloatItemButtonComponent };
//# sourceMappingURL=ngc-float-item-button.component.js.map