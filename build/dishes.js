"use strict";
class Dishes {
    constructor(...items) {
        this._currentDishes = this._dishes = [...items];
    }
    renderAll() {
        this._currentDishes.forEach(dish => {
            dish.render();
        });
    }
    addDish(dish) {
        this._dishes.push(dish);
    }
    clearRender() {
        const parent = document.querySelector('.dishes');
        parent.innerHTML = '';
        return this;
    }
    clearChanges() {
        this._currentDishes = this._dishes;
        return this;
    }
    filterBy(filter) {
        this._currentDishes = [];
        this._dishes.forEach(dish => {
            if (dish.type == filter)
                this._currentDishes.push(dish);
        });
        return this;
    }
    sortBy(sortKey = 'most rated') {
        if (sortKey == 'most rated') {
            this._currentDishes.sort((a, b) => {
                if (a.likes > b.likes)
                    return -1;
                if (a.likes < b.likes)
                    return 1;
                else
                    return 0;
            });
        }
        else if (sortKey == 'least rated') {
            this._currentDishes.sort((a, b) => {
                if (a.likes < b.likes)
                    return -1;
                if (a.likes > b.likes)
                    return 1;
                else
                    return 0;
            });
        }
        else if (sortKey == 'ascending') {
            this._currentDishes.sort((a, b) => {
                if (a.title < b.title)
                    return -1;
                if (a.title > b.title)
                    return 1;
                else
                    return 0;
            });
        }
        else if (sortKey == 'descending') {
            this._currentDishes.sort((a, b) => {
                if (a.title > b.title)
                    return -1;
                if (a.title < b.title)
                    return 1;
                else
                    return 0;
            });
        }
        return this;
    }
}
