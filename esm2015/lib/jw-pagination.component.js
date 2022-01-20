/**
 * @fileoverview added by tsickle
 * Generated from: lib/jw-pagination.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import paginate from 'jw-paginate';
export class JwPaginationComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianctcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9qdy1wYWdpbmF0aW9uLyIsInNvdXJjZXMiOlsibGliL2p3LXBhZ2luYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBbUMsTUFBTSxlQUFlLENBQUM7QUFFdkcsT0FBTyxRQUFRLE1BQU0sYUFBYSxDQUFDO0FBd0JuQyxNQUFNLE9BQU8scUJBQXFCO0lBdEJsQztRQXdCYyxlQUFVLEdBQUcsSUFBSSxZQUFZLENBQU0sSUFBSSxDQUFDLENBQUM7UUFDMUMsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFdkIsVUFBSyxHQUFRLEVBQUUsQ0FBQztJQStCcEIsQ0FBQzs7OztJQTdCRyxRQUFRO1FBQ0osc0NBQXNDO1FBQ3RDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNsQztJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLHdDQUF3QztRQUN4QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQzVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBWTtRQUNoQiwwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7WUFHekUsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzs7WUFFOUUsU0FBUyxHQUFHO1lBQ1osV0FBVztZQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNwQjtRQUVELGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7WUEzREosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBaUJOO2FBQ1A7OztvQkFHSSxLQUFLO3lCQUNMLE1BQU07MEJBQ04sS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFKTixzQ0FBMkI7O0lBQzNCLDJDQUFtRDs7SUFDbkQsNENBQXlCOztJQUN6Qix5Q0FBdUI7O0lBQ3ZCLHlDQUF1Qjs7SUFFdkIsc0NBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgcGFnaW5hdGUgZnJvbSAnanctcGFnaW5hdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2p3LXBhZ2luYXRpb24nLFxuICAgIHRlbXBsYXRlOiBgXG5cdFx0PHVsICpuZ0lmPVwicGFnZXIucGFnZXMgJiYgcGFnZXIucGFnZXMubGVuZ3RoXCIgY2xhc3M9XCJwYWdpbmF0aW9uXCI+XG5cdFx0XHQ8bGkgW25nQ2xhc3NdPVwie2Rpc2FibGVkOnBhZ2VyLmN1cnJlbnRQYWdlID09PSAxfVwiIGNsYXNzPVwicGFnZS1pdGVtIGZpcnN0LWl0ZW1cIj5cblx0XHRcdFx0PGEgKGNsaWNrKT1cInNldFBhZ2UoMSlcIiBjbGFzcz1cInBhZ2UtbGlua1wiPkZpcnN0PC9hPlxuXHRcdFx0PC9saT5cblx0XHRcdDxsaSBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6cGFnZXIuY3VycmVudFBhZ2UgPT09IDF9XCIgY2xhc3M9XCJwYWdlLWl0ZW0gcHJldmlvdXMtaXRlbVwiPlxuXHRcdFx0XHQ8YSAoY2xpY2spPVwic2V0UGFnZShwYWdlci5jdXJyZW50UGFnZSAtIDEpXCIgY2xhc3M9XCJwYWdlLWxpbmtcIj5QcmV2aW91czwvYT5cblx0XHRcdDwvbGk+XG5cdFx0XHQ8bGkgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXIucGFnZXNcIiBbbmdDbGFzc109XCJ7YWN0aXZlOnBhZ2VyLmN1cnJlbnRQYWdlID09PSBwYWdlfVwiIGNsYXNzPVwicGFnZS1pdGVtIG51bWJlci1pdGVtXCI+XG5cdFx0XHRcdDxhIChjbGljayk9XCJzZXRQYWdlKHBhZ2UpXCIgY2xhc3M9XCJwYWdlLWxpbmtcIj57e3BhZ2V9fTwvYT5cblx0XHRcdDwvbGk+XG5cdFx0XHQ8bGkgW25nQ2xhc3NdPVwie2Rpc2FibGVkOnBhZ2VyLmN1cnJlbnRQYWdlID09PSBwYWdlci50b3RhbFBhZ2VzfVwiIGNsYXNzPVwicGFnZS1pdGVtIG5leHQtaXRlbVwiPlxuXHRcdFx0XHQ8YSAoY2xpY2spPVwic2V0UGFnZShwYWdlci5jdXJyZW50UGFnZSArIDEpXCIgY2xhc3M9XCJwYWdlLWxpbmtcIj5OZXh0PC9hPlxuXHRcdFx0PC9saT5cblx0XHRcdDxsaSBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6cGFnZXIuY3VycmVudFBhZ2UgPT09IHBhZ2VyLnRvdGFsUGFnZXN9XCIgY2xhc3M9XCJwYWdlLWl0ZW0gbGFzdC1pdGVtXCI+XG5cdFx0XHRcdDxhIChjbGljayk9XCJzZXRQYWdlKHBhZ2VyLnRvdGFsUGFnZXMpXCIgY2xhc3M9XCJwYWdlLWxpbmtcIj5MYXN0PC9hPlxuXHRcdFx0PC9saT5cblx0XHQ8L3VsPmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBKd1BhZ2luYXRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gICAgQElucHV0KCkgaXRlbXM6IEFycmF5PGFueT47XG4gICAgQE91dHB1dCgpIGNoYW5nZVBhZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4odHJ1ZSk7XG4gICAgQElucHV0KCkgaW5pdGlhbFBhZ2UgPSAxO1xuICAgIEBJbnB1dCgpIHBhZ2VTaXplID0gMTA7XG4gICAgQElucHV0KCkgbWF4UGFnZXMgPSAxMDtcblxuICAgIHBhZ2VyOiBhbnkgPSB7fTtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyBzZXQgcGFnZSBpZiBpdGVtcyBhcnJheSBpc24ndCBlbXB0eVxuICAgICAgICBpZiAodGhpcy5pdGVtcyAmJiB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRQYWdlKHRoaXMuaW5pdGlhbFBhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICAvLyByZXNldCBwYWdlIGlmIGl0ZW1zIGFycmF5IGhhcyBjaGFuZ2VkXG4gICAgICAgIGlmIChjaGFuZ2VzLml0ZW1zLmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlcy5pdGVtcy5wcmV2aW91c1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFBhZ2UodGhpcy5pbml0aWFsUGFnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQYWdlKHBhZ2U6IG51bWJlcikge1xuICAgICAgICAvLyBnZXQgbmV3IHBhZ2VyIG9iamVjdCBmb3Igc3BlY2lmaWVkIHBhZ2VcbiAgICAgICAgdGhpcy5wYWdlciA9IHBhZ2luYXRlKHRoaXMuaXRlbXMubGVuZ3RoLCBwYWdlLCB0aGlzLnBhZ2VTaXplLCB0aGlzLm1heFBhZ2VzKTtcblxuICAgICAgICAvLyBnZXQgbmV3IHBhZ2Ugb2YgaXRlbXMgZnJvbSBpdGVtcyBhcnJheVxuICAgICAgICB2YXIgcGFnZU9mSXRlbXMgPSB0aGlzLml0ZW1zLnNsaWNlKHRoaXMucGFnZXIuc3RhcnRJbmRleCwgdGhpcy5wYWdlci5lbmRJbmRleCArIDEpO1xuXG4gICAgICAgIGxldCByZXR1cm5BcnIgPSB7XG4gICAgICAgICAgICBwYWdlT2ZJdGVtcyxcbiAgICAgICAgICAgIHBhZ2VyOiB0aGlzLnBhZ2VyXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY2FsbCBjaGFuZ2UgcGFnZSBmdW5jdGlvbiBpbiBwYXJlbnQgY29tcG9uZW50XG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZS5lbWl0KHJldHVybkFycik7XG4gICAgfVxufVxuIl19