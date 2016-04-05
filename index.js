'use strict';

var EventEmitter = require('events');
var eventsConfig = require('./hotellikes/config');

var Hotel = require('./hotelLikes');
var hotel = new Hotel();


hotel.on(eventsConfig.Like, function() {
        console.log(hotel.hotelName + "'s current likes: " + hotel.hotelLikes + "\n ----------");
    if(hotel.hotelRating<0) {
        console.log(hotel.hotelName + " hotel is not recommended!\n Likes: " + hotel.hotelLikes);
    }
    if(hotel.hotelRating >= 5) {
        console.log(hotel.hotelName + " hotel is recommended!\n Likes: " + hotel.hotelLikes);
        
    }
});

hotel.increaseRating();
hotel.increaseRating();
hotel.increaseRating();
hotel.increaseRating();
hotel.increaseRating();
hotel.decreaseRating();


