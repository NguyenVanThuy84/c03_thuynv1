function Hotel (name, rooms, booked){
    this.name1 = name1;
    this.rooms = rooms;
    this.booked = booked;
    this.chekAvailability = function (){
        return this.rooms - this.booked;
    };
}
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel ('Park', 120, 77);
var details1 = quayHotel.name1 + 'rooms';
details1 += quayHotel.chekAvailability();
var elHotel1 = document.getElementById('hotels1');
elHotel1.textContent = details1;
var details2= parkHotel.name1 + 'rooms';
details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;