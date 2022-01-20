import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import paginate from 'jw-paginate';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/jw-pagination.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class JwPaginationService {
    constructor() { }
}
JwPaginationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
JwPaginationService.ctorParameters = () => [];
/** @nocollapse */ JwPaginationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function JwPaginationService_Factory() { return new JwPaginationService(); }, token: JwPaginationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/jw-pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class JwPaginationComponent {
    constructor() {
        this.changePage = new EventEmitter(true);
        this.initialPage = 1;
        this.pageSize = 10;
        this.maxPages = 10;
        this.pager = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // set page if items array isn't empty
        if (this.items && this.items.length) {
            this.setPage(this.initialPage);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // reset page if items array has changed
        if (changes.items.currentValue !== changes.items.previousValue) {
            this.setPage(this.initialPage);
        }
    }
    /**
     * @param {?} page
     * @return {?}
     */
    setPage(page) {
        // get new pager object for specified page
        this.pager = paginate(this.items.length, page, this.pageSize, this.maxPages);
        // get new page of items from items array
        /** @type {?} */
        var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
        /** @type {?} */
        let returnArr = {
            pageOfItems,
            pager: this.pager
        };
        // call change page function in parent component
        this.changePage.emit(returnArr);
    }
}
JwPaginationComponent.decorators = [
    { type: Component, args: [{
                selector: 'jw-pagination',
                template: `
		<ul *ngIf="pager.pages && pager.pages.length" class="pagination">
			<li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item first-item">
				<a (click)="setPage(1)" class="page-link">First</a>
			</li>
			<li [ngClass]="{disabled:pager.currentPage === 1}" class="page-item previous-item">
				<a (click)="setPage(pager.currentPage - 1)" class="page-link">Previous</a>
			</li>
			<li *ngFor="let page of pager.pages" [ngClass]="{active:pager.currentPage === page}" class="page-item number-item">
				<a (click)="setPage(page)" class="page-link">{{page}}</a>
			</li>
			<li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item next-item">
				<a (click)="setPage(pager.currentPage + 1)" class="page-link">Next</a>
			</li>
			<li [ngClass]="{disabled:pager.currentPage === pager.totalPages}" class="page-item last-item">
				<a (click)="setPage(pager.totalPages)" class="page-link">Last</a>
			</li>
		</ul>`
            }] }
];
JwPaginationComponent.propDecorators = {
    items: [{ type: Input }],
    changePage: [{ type: Output }],
    initialPage: [{ type: Input }],
    pageSize: [{ type: Input }],
    maxPages: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    JwPaginationComponent.prototype.items;
    /** @type {?} */
    JwPaginationComponent.prototype.changePage;
    /** @type {?} */
    JwPaginationComponent.prototype.initialPage;
    /** @type {?} */
    JwPaginationComponent.prototype.pageSize;
    /** @type {?} */
    JwPaginationComponent.prototype.maxPages;
    /** @type {?} */
    JwPaginationComponent.prototype.pager;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/jw-pagination.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class JwPaginationModule {
}
JwPaginationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [JwPaginationComponent],
                imports: [
                    CommonModule
                ],
                exports: [JwPaginationComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: jw-pagination.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { JwPaginationComponent, JwPaginationModule, JwPaginationService };
//# sourceMappingURL=jw-pagination.js.map
