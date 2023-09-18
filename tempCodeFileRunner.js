class HotelRoom {
  constructor(roomNumber, roomType, capacity, price, availability) {
    this.roomNumber = roomNumber;
    this.roomType = roomType;
    this.capacity = capacity;
    this.price = price;
    this.availability = availability;
  }

  isAvailable() {
    return this.availability;
  }
}
class RestaurantTable {
  constructor(tableNumber, capacity, availability) {
    this.tableNumber = tableNumber;
    this.capacity = capacity;
    this.availability = availability;
  }
  isAvailable() {
    return this.availability;
  }
}
const hotelRooms = [
  new HotelRoom(101, "Standard Room", 2, 1000, true),
  new HotelRoom(102, "Deluxe Room", 3, 1500, true),
  new HotelRoom(103, "Suite", 4, 2000, false)
];
const restaurantTables = [
  new RestaurantTable(1, 4, true),
  new RestaurantTable(2, 2, true),
  new RestaurantTable(3, 6, false)
];
const currentDate = new Date();
function displayHotelRoomAvailability() {
  const hotelRoomAvailabilityElement = document.getElementById("hotel-room-availability");
  hotelRoomAvailabilityElement.innerHTML = "";
  for (const hotelRoom of hotelRooms) {
    const hotelRoomAvailabilityText = document.createTextNode(hotelRoom.roomNumber + ": " + (hotelRoom.isAvailable() ? "Available" : "Not available"));

    hotelRoomAvailabilityElement.appendChild(hotelRoomAvailabilityText);
    hotelRoomAvailabilityElement.appendChild(document.createElement("br"));
  }
}
function displayRestaurantTableAvailability() {
  const restaurantTableAvailabilityElement = document.getElementById("restaurant-table-availability");
  restaurantTableAvailabilityElement.innerHTML = "";
  for (const restaurantTable of restaurantTables) {
    const restaurantTableAvailabilityText = document.createTextNode(restaurantTable.tableNumber + ": " + (restaurantTable.isAvailable() ? "Available" : "Not available"));

    restaurantTableAvailabilityElement.appendChild(restaurantTableAvailabilityText);
    restaurantTableAvailabilityElement.appendChild(document.createElement("br"));
  }
}
displayHotelRoomAvailability();
displayRestaurantTableAvailability
