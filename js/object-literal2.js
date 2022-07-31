var hotel = {
    name1: 'Park',
    rooms: 120,
    booked: 77,
chekAvailability: function(){
    return this.rooms-this.booked;

}
};
var elName =document.getElementById('hotelName');
elName.textContent = hotel.name1;
var elrooms = document.getElementById('rooms');
elrooms.textContent = hotel.chekAvailability();
