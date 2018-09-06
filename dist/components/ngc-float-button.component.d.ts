import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ElementRef, ChangeDetectorRef, AfterContentInit, OnDestroy, OnChanges } from '@angular/core';
export declare class NgcFloatButtonComponent implements AfterContentInit, OnDestroy, OnChanges {
    private element;
    private cd;
    private elementref;
    private subs;
    state: BehaviorSubject<any>;
    icon: string;
    direction: string;
    spaceBetweenButtons: number;
    open: Subject<boolean>;
    color: string;
    disabled: boolean;
    events: Subject<any>;
    buttons: any;
    constructor(element: ElementRef, cd: ChangeDetectorRef);
    toggle(): boolean;
    private checkDirectionType;
    private animateButtons;
    private getTranslate;
    ngAfterContentInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
}
