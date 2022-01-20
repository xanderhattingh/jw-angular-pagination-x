/**
 * @fileoverview added by tsickle
 * Generated from: lib/jw-pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import paginate from 'jw-paginate';
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
export { JwPaginationComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianctcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qdy1wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsibGliL2p3LXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFFdkcsT0FBTyxRQUFRLE1BQU0sYUFBYSxDQUFDO0FBRW5DO0lBQUE7UUF3QmMsZUFBVSxHQUFHLElBQUksWUFBWSxDQUFNLElBQUksQ0FBQyxDQUFDO1FBQzFDLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRXZCLFVBQUssR0FBUSxFQUFFLENBQUM7SUErQnBCLENBQUM7Ozs7SUE3Qkcsd0NBQVE7OztJQUFSO1FBQ0ksc0NBQXNDO1FBQ3RDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQzlCLHdDQUF3QztRQUN4QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCx1Q0FBTzs7OztJQUFQLFVBQVEsSUFBWTtRQUNoQiwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7WUFHekUsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzs7WUFFOUUsU0FBUyxHQUFHO1lBQ1osV0FBVyxhQUFBO1lBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ3BCO1FBRUQsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQTNESixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSw0aUNBaUJOO2lCQUNQOzs7d0JBR0ksS0FBSzs2QkFDTCxNQUFNOzhCQUNOLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQWlDViw0QkFBQztDQUFBLEFBNURELElBNERDO1NBdENZLHFCQUFxQjs7O0lBQzlCLHNDQUEyQjs7SUFDM0IsMkNBQW1EOztJQUNuRCw0Q0FBeUI7O0lBQ3pCLHlDQUF1Qjs7SUFDdkIseUNBQXVCOztJQUV2QixzQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCBwYWdpbmF0ZSBmcm9tICdqdy1wYWdpbmF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnanctcGFnaW5hdGlvbicsXG4gICAgdGVtcGxhdGU6IGBcblx0XHQ8dWwgKm5nSWY9XCJwYWdlci5wYWdlcyAmJiBwYWdlci5wYWdlcy5sZW5ndGhcIiBjbGFzcz1cInBhZ2luYXRpb25cIj5cblx0XHRcdDxsaSBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6cGFnZXIuY3VycmVudFBhZ2UgPT09IDF9XCIgY2xhc3M9XCJwYWdlLWl0ZW0gZmlyc3QtaXRlbVwiPlxuXHRcdFx0XHQ8YSAoY2xpY2spPVwic2V0UGFnZSgxKVwiIGNsYXNzPVwicGFnZS1saW5rXCI+Rmlyc3Q8L2E+XG5cdFx0XHQ8L2xpPlxuXHRcdFx0PGxpIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDpwYWdlci5jdXJyZW50UGFnZSA9PT0gMX1cIiBjbGFzcz1cInBhZ2UtaXRlbSBwcmV2aW91cy1pdGVtXCI+XG5cdFx0XHRcdDxhIChjbGljayk9XCJzZXRQYWdlKHBhZ2VyLmN1cnJlbnRQYWdlIC0gMSlcIiBjbGFzcz1cInBhZ2UtbGlua1wiPlByZXZpb3VzPC9hPlxuXHRcdFx0PC9saT5cblx0XHRcdDxsaSAqbmdGb3I9XCJsZXQgcGFnZSBvZiBwYWdlci5wYWdlc1wiIFtuZ0NsYXNzXT1cInthY3RpdmU6cGFnZXIuY3VycmVudFBhZ2UgPT09IHBhZ2V9XCIgY2xhc3M9XCJwYWdlLWl0ZW0gbnVtYmVyLWl0ZW1cIj5cblx0XHRcdFx0PGEgKGNsaWNrKT1cInNldFBhZ2UocGFnZSlcIiBjbGFzcz1cInBhZ2UtbGlua1wiPnt7cGFnZX19PC9hPlxuXHRcdFx0PC9saT5cblx0XHRcdDxsaSBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6cGFnZXIuY3VycmVudFBhZ2UgPT09IHBhZ2VyLnRvdGFsUGFnZXN9XCIgY2xhc3M9XCJwYWdlLWl0ZW0gbmV4dC1pdGVtXCI+XG5cdFx0XHRcdDxhIChjbGljayk9XCJzZXRQYWdlKHBhZ2VyLmN1cnJlbnRQYWdlICsgMSlcIiBjbGFzcz1cInBhZ2UtbGlua1wiPk5leHQ8L2E+XG5cdFx0XHQ8L2xpPlxuXHRcdFx0PGxpIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDpwYWdlci5jdXJyZW50UGFnZSA9PT0gcGFnZXIudG90YWxQYWdlc31cIiBjbGFzcz1cInBhZ2UtaXRlbSBsYXN0LWl0ZW1cIj5cblx0XHRcdFx0PGEgKGNsaWNrKT1cInNldFBhZ2UocGFnZXIudG90YWxQYWdlcylcIiBjbGFzcz1cInBhZ2UtbGlua1wiPkxhc3Q8L2E+XG5cdFx0XHQ8L2xpPlxuXHRcdDwvdWw+YFxufSlcblxuZXhwb3J0IGNsYXNzIEp3UGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBpdGVtczogQXJyYXk8YW55PjtcbiAgICBAT3V0cHV0KCkgY2hhbmdlUGFnZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55Pih0cnVlKTtcbiAgICBASW5wdXQoKSBpbml0aWFsUGFnZSA9IDE7XG4gICAgQElucHV0KCkgcGFnZVNpemUgPSAxMDtcbiAgICBASW5wdXQoKSBtYXhQYWdlcyA9IDEwO1xuXG4gICAgcGFnZXI6IGFueSA9IHt9O1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIHNldCBwYWdlIGlmIGl0ZW1zIGFycmF5IGlzbid0IGVtcHR5XG4gICAgICAgIGlmICh0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFBhZ2UodGhpcy5pbml0aWFsUGFnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIC8vIHJlc2V0IHBhZ2UgaWYgaXRlbXMgYXJyYXkgaGFzIGNoYW5nZWRcbiAgICAgICAgaWYgKGNoYW5nZXMuaXRlbXMuY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzLml0ZW1zLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UGFnZSh0aGlzLmluaXRpYWxQYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFBhZ2UocGFnZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIGdldCBuZXcgcGFnZXIgb2JqZWN0IGZvciBzcGVjaWZpZWQgcGFnZVxuICAgICAgICB0aGlzLnBhZ2VyID0gcGFnaW5hdGUodGhpcy5pdGVtcy5sZW5ndGgsIHBhZ2UsIHRoaXMucGFnZVNpemUsIHRoaXMubWF4UGFnZXMpO1xuXG4gICAgICAgIC8vIGdldCBuZXcgcGFnZSBvZiBpdGVtcyBmcm9tIGl0ZW1zIGFycmF5XG4gICAgICAgIHZhciBwYWdlT2ZJdGVtcyA9IHRoaXMuaXRlbXMuc2xpY2UodGhpcy5wYWdlci5zdGFydEluZGV4LCB0aGlzLnBhZ2VyLmVuZEluZGV4ICsgMSk7XG5cbiAgICAgICAgbGV0IHJldHVybkFyciA9IHtcbiAgICAgICAgICAgIHBhZ2VPZkl0ZW1zLFxuICAgICAgICAgICAgcGFnZXI6IHRoaXMucGFnZXJcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjYWxsIGNoYW5nZSBwYWdlIGZ1bmN0aW9uIGluIHBhcmVudCBjb21wb25lbnRcbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlLmVtaXQocmV0dXJuQXJyKTtcbiAgICB9XG59XG4iXX0=