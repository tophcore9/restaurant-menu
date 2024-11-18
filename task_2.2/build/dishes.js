"use strict";
class Dishes {
    constructor(...items) {
        this._dishes = [...items];
    }
    renderAll(filter = '') {
        if (filter != '') {
            this.filterBy(filter).renderAll();
        }
        else {
            this._dishes.forEach(dish => {
                dish.render();
            });
        }
    }
    addDish(dish) {
        this._dishes.push(dish);
    }
    clearAll() {
        const parent = document.querySelector('.dishes');
        parent.innerHTML = '';
    }
    filterBy(filter) {
        let filteredDishes = new Dishes();
        this._dishes.forEach(dish => {
            if (dish.type == filter)
                filteredDishes.addDish(dish);
        });
        return filteredDishes;
    }
}
