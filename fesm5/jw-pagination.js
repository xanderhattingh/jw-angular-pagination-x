import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import paginate from 'jw-paginate';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/jw-pagination.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JwPaginationService = /** @class */ (function () {
    function JwPaginationService() {
    }
    JwPaginationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    JwPaginationService.ctorParameters = function () { return []; };
    /** @nocollapse */ JwPaginationService.ngInjectableDef = ɵɵdefineInjectable({ factory: function JwPaginationService_Factory() { return new JwPaginationService(); }, token: JwPaginationService, providedIn: "root" });
    return JwPaginationService;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/jw-pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var JwPaginationComponent = /** @class */ (function () {
    function JwPaginationComponent() {
        this.changePage = new EventEmitter(true);
        this.initialPage = 1;
        this.pageSize = 10;
        this.maxPages = 10;
        this.pager = {};
    }
    /**
     * @return {?}
     */
    JwPaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // set page if items array isn't empty
        if (this.items && this.items.length) {
            this.setPage(this.initialPage);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    JwPaginationComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // reset page if items array has changed
        if (changes.items.currentValue !== changes.items.previousValue) {
            this.setPage(this.initialPage);
        }
    };
    /**
     * @param {?} page
     * @return {?}
     */
    JwPaginationComponent.prototype.setPage = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        // get new pager object for specified page
        this.pager = paginate(this.items.length, page, this.pageSize, this.maxPages);
        // get new page of items from items array
        /** @type {?} */
        var pageOfItems = this.items.slice(this.pager.startIndex, this.pager.endIndex + 1);
        /** @type {?} */
        var returnArr = {
            pageOfItems: pageOfItems,
            pager: this.pager
        };
        // call change page function in parent component
        this.changePage.emit(returnArr);
    };
    JwPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'jw-pagination',
                    template: "\n\t\t<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item first-item\">\n\t\t\t\t<a (click)=\"setPage(1)\" class=\"page-link\">First</a>\n\t\t\t</li>\n\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === 1}\" class=\"page-item previous-item\">\n\t\t\t\t<a (click)=\"setPage(pager.currentPage - 1)\" class=\"page-link\">Previous</a>\n\t\t\t</li>\n\t\t\t<li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\" class=\"page-item number-item\">\n\t\t\t\t<a (click)=\"setPage(page)\" class=\"page-link\">{{page}}</a>\n\t\t\t</li>\n\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item next-item\">\n\t\t\t\t<a (click)=\"setPage(pager.currentPage + 1)\" class=\"page-link\">Next</a>\n\t\t\t</li>\n\t\t\t<li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\" class=\"page-item last-item\">\n\t\t\t\t<a (click)=\"setPage(pager.totalPages)\" class=\"page-link\">Last</a>\n\t\t\t</li>\n\t\t</ul>"
                }] }
    ];
    JwPaginationComponent.propDecorators = {
        items: [{ type: Input }],
        changePage: [{ type: Output }],
        initialPage: [{ type: Input }],
        pageSize: [{ type: Input }],
        maxPages: [{ type: Input }]
    };
    return JwPaginationComponent;
}());
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
var JwPaginationModule = /** @class */ (function () {
    function JwPaginationModule() {
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
    return JwPaginationModule;
}());

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
