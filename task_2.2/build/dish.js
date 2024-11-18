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
}
