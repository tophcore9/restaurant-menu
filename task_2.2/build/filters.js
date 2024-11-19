"use strict";
class Filters {
    constructor() {
        this._filters = document.getElementsByClassName('filter');
        [...this._filters].forEach(filter => {
            filter.addEventListener('click', (event) => {
                const target = event.target;
                if (target.classList.contains('filter_active')) {
                    this.clearFilters();
                    dishes.clearAll();
                    dishes.renderAll();
                    return;
                }
                this.clearFilters();
                target.classList.add('filter_active');
                dishes.clearAll();
                dishes.renderAll(target.innerHTML.toLowerCase());
            });
        });
    }
    clearFilters() {
        [...this._filters].forEach(filter => {
            filter.classList.remove('filter_active');
        });
    }
}
