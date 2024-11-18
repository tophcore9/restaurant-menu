class Dishes {
    private _dishes: Dish[];
    
    constructor(...items: Dish[]) {
        this._dishes = [...items];
    }
    
    public renderAll(filter: string = '') {
        if (filter != '') {
            this.filterBy(filter).renderAll();
        } 
        else {
            this._dishes.forEach(dish => {
                dish.render();
            })
        }
    }
    
    public addDish(dish: Dish) {
        this._dishes.push(dish);
    }
    
    public clearAll() {
        const parent = document.querySelector('.dishes') as HTMLElement;
        
        parent.innerHTML = '';
    }

    
    private filterBy(filter: string): Dishes {
        let filteredDishes: Dishes = new Dishes();
        
        this._dishes.forEach(dish => {
            if (dish.type == filter)
                filteredDishes.addDish(dish);
        })
        
        return filteredDishes;
    }
}