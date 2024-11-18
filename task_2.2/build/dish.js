"use strict";
class Dish {
    constructor(title = 'Untitled', description = '', likes = 0, picture = '') {
        this._title = title;
        this._description = description;
        this._likes = likes;
        this._picture = picture;
    }
    get title() { return this._title; }
    set title(value) { this._title = value; }
    get description() { return this._description; }
    set description(value) { this._description = value; }
    get likes() { return this._likes; }
    set likes(value) { this._likes = value; }
    get picture() { return this._picture; }
    set picture(value) { this._picture = value; }
    render() {
        const parent = document.querySelector('.dishes');
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
