var hotel = {
    name1: 'Quay',
    rooms: 40,
    booked: 25,
chekAvailability: function(){
    return this.rooms-this.booked;

}
};
var elName =document.getElementById('hotelName');
elName.textContent = hotel.name1;
var elrooms = document.getElementById('rooms');
elrooms.textContent = hotel.chekAvailability();
