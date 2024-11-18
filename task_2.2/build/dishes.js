"use strict";
class Dishes {
    constructor(...items) {
        this._dishes = [...items];
    }
    renderAll() {
        this._dishes.forEach(dish => {
            dish.render();
        });
    }
}
