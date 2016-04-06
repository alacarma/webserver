'use strict';

var EventEmitter = require('events');
var eventsConfig = require('./config');

module.exports = class Hotel extends EventEmitter {
    constructor(hotelName){
        super();
        this.hotelName = "Holmes Place";
        this.hotelLikes = 0;
    }
    increaseRating(){
        console.log("The hotel received a like");
        this.hotelLikes++;
        this.emit(eventsConfig.Increase);

    }
    decreaseRating(){
        console.log("The hotel received a dislike");
        this.hotelLikes--;
        this.emit(eventsConfig.Decrease);

    }   
}