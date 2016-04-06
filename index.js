'use strict';

var EventEmitter = require('events');
var eventsConfig = require('./hotellikes/config');
var Hotel = require('./hotelLikes');
var hotel = new Hotel();


hotel.on(eventsConfig.Like, function() {
        console.log(hotel.hotelName + "'s current likes: " + hotel.hotelLikes + "\n ----------");
    if(hotel.hotelLikes >= 5) {
        console.log(hotel.hotelLikes + " hotel is recommended!\n Likes: " + hotel.hotelLikes);
        
    }    
    if(hotel.hotelLikes<0) {
        console.log(hotel.hotelLikes + " hotel is not recommended!\n Likes: " + hotel.hotelLikes);
    }

});

hotel.increaseRating();
hotel.increaseRating();
hotel.increaseRating();
hotel.increaseRating();
hotel.increaseRating();
hotel.decreaseRating();


