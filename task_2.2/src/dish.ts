class Dish {
    private _title: string;
    private _description: string;
    private _likes: number;
    private _picture: string;
    private _type: string;
    
    constructor(
        title: string = 'Untitled',
        description: string = '',
        likes: number = 0,
        type: string = '',
        picture: string = ''
    ) {
        this._title = title;
        this._description = description;
        this._likes = likes;
        this._type = type;
        this._picture = picture;
    }
    
    public get type(): string {
        return this._type;
    }
    
    render() {
        const parent = document.querySelector('.dishes') as HTMLElement;

        parent.innerHTML += `
            <div class="dish">
                <img src="images/${this._picture}" class="dish_image"></img>

                <div class="dish_content">
                    <div class="dish_header">
                        <h2 class="dish_title">
                            ${this._title}
                        </h2>
                        <div class="dish_likes">
                            ${this._likes}
                        </div>
                    </div>

                    <div class="dish_description">
                        ${this._description}
                    </div>

                    <a href="#" class="dish_more">Read more >></a>
                </div>
            </div>
        `;
    }
}