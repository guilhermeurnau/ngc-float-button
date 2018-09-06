import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { NgcFloatButtonComponent } from './ngc-float-button.component';
import { NgcFloatItemButtonComponent } from './ngc-float-item-button.component';
var NgcFloatButtonModule = /** @class */ (function () {
    function NgcFloatButtonModule() {
    }
    NgcFloatButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatIconModule
                    ],
                    declarations: [NgcFloatButtonComponent, NgcFloatItemButtonComponent],
                    exports: [NgcFloatButtonComponent, NgcFloatItemButtonComponent]
                },] },
    ];
    /** @nocollapse */
    NgcFloatButtonModule.ctorParameters = function () { return []; };
    return NgcFloatButtonModule;
}());
export { NgcFloatButtonModule };
//# sourceMappingURL=ngc-float-button.module.js.map