const searchBarElement1 = document.getElementById("search-bar");
const searchButtonElement = document.getElementById("search-button");


searchButtonElement.addEventListener("click", function(event) {
  const searchQuery = searchBarElement1.value;
  window.location.href = "tempCodeRunnerFile.js" + searchQuery;


});
const currentData = {
  hotels: [],
  restaurants: [],
  bars: []
};
function searchHotel(hotelName) {
  const hotels = currentData.hotels;
  const hotel = hotels.find((hotel) => hotel.name === hotelName);

  return hotel;
}

function getHotelData(hotel) {
  const hotels = currentData.hotels;
  const restaurants = currentData.restaurants;
  const bars = currentData.bars;

  const nearbyHotels = hotels.filter((hotel) => hotel.distance < 3);
  const nearbyRestaurants = restaurants.filter((restaurant) => restaurant.distance < 3);
  const nearbyBars = bars.filter((bar) => bar.distance < 3);

  return {
    hotels: nearbyHotels,
    restaurants: nearbyRestaurants,
    bars: nearbyBars
  };
}
function displayHotelData(hotelData) {
  const hotelListElement = document.getElementById("hotel-list");
  const restaurantListElement = document.getElementById("restaurant-list");
  const barListElement = document.getElementById("bar-list");

  hotelListElement.innerHTML = "";
  restaurantListElement.innerHTML = "";
  barListElement.innerHTML = "";

  for (const hotel of hotelData.hotels) {
    const hotelListItemElement = document.createElement("li");
    hotelListItemElement.textContent = hotel.name;
    hotelListElement.appendChild(hotelListItemElement);
  }

  for (const restaurant of hotelData.restaurants) {
    const restaurantListItemElement = document.createElement("li");
    restaurantListItemElement.textContent = restaurant.name;
    restaurantListElement.appendChild(restaurantListItemElement);
  }

  for (const bar of hotelData.bars) {
    const barListItemElement = document.createElement("li");
    barListItemElement.textContent = bar.name;
    barListElement.appendChild(barListItemElement);
  }
}
const searchBarElement = document.getElementById("search-bar");
searchBarElement.addEventListener("keyup", function(event) {
  const hotelName = event.target.value;
  const hotelData = getHotelData(searchHotel(hotelName));
  displayHotelData(hotelData);
});
