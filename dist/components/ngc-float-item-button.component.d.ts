import { EventEmitter } from '@angular/core';
export declare class NgcFloatItemButtonComponent {
    icon: string;
    content: string;
    color: string;
    clicked: EventEmitter<any>;
    disabled: boolean;
    elementref: any;
    contentref: any;
    emitClickEvent($event: Event): boolean;
}
