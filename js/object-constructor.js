var hotel = new Object();

hotel.name1 = 'Park',
    hotel.rooms = 120;
hotel.booked = 77;
hotel.chekAvailability = function () {
    return this.rooms - this.booked;

};
var elName = document.getElementById('hotelName');
elName.textContent = hotel.name1;
var elrooms = document.getElementById('rooms');
elrooms.textContent = hotel.chekAvailability();
