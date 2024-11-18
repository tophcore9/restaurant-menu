class Dishes {
    private _dishes: Dish[];
    
    constructor(...items: Dish[]) {
        this._dishes = [...items];
    }
    
    public renderAll() {
        this._dishes.forEach(dish => {
            dish.render();
        })
    }
}