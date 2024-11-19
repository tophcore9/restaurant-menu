class Dishes {
    private _dishes: Dish[];
    private _currentDishes: Dish[];
    
    constructor(...items: Dish[]) {
        this._currentDishes = this._dishes = [...items];
    }
    
    public renderAll() {
        this._currentDishes.forEach(dish => {
            dish.render();
        })
    }
    
    public parseAll() {
        const images = document.getElementsByClassName('dish_image') as HTMLCollectionOf<Element>;
        const titles = document.getElementsByClassName('dish_title') as HTMLCollectionOf<Element>;
        const likes = document.getElementsByClassName('dish_likes') as HTMLCollectionOf<Element>;
        const descriptions = document.getElementsByClassName('dish_description') as HTMLCollectionOf<Element>;
        
        for (let i = 0; images.length; ++i) {
            this.addDish(new Dish(titles[i].innerHTML, descriptions[i].innerHTML, parseInt(likes[i].innerHTML), ))
        }
    }
    
    public addDish(dish: Dish) {
        this._dishes.push(dish);
    }
    
    public clearRender(): Dishes {
        const parent = document.querySelector('.dishes') as HTMLElement;
        parent.innerHTML = '';
        
        return this;
    }
    
    public clearChanges(): Dishes {
        this._currentDishes = this._dishes;

        return this;
    }

    public filterBy(filter: string): Dishes {
        this._currentDishes = []
        
        this._dishes.forEach(dish => {
            if (dish.type == filter)
                this._currentDishes.push(dish);
        })
        
        return this;
    }
    
    public sortBy(sortKey: string = 'most rated'): Dishes {
        if (sortKey == 'most rated') {
            this._currentDishes.sort((a: Dish, b: Dish) => {
                if (a.likes > b.likes) return -1;
                if (a.likes < b.likes) return 1;
                else return 0;
            });
        }
        else if (sortKey == 'least rated') {
            this._currentDishes.sort((a: Dish, b: Dish) => {
                if (a.likes < b.likes) return -1;
                if (a.likes > b.likes) return 1;
                else return 0;
            });
        }
        else if (sortKey == 'ascending') {
            this._currentDishes.sort((a: Dish, b: Dish) => {
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                else return 0;
            });
        }
        else if (sortKey == 'descending') {
            this._currentDishes.sort((a: Dish, b: Dish) => {
                if (a.title > b.title) return -1;
                if (a.title < b.title) return 1;
                else return 0;
            });
        }
        
        return this;
    }
}