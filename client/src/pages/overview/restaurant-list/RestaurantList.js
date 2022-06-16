import {useEffect, useState} from 'react';
import RestaurantCard from './RestaurantCard';


function RestaurantList() {
  
  const [restaurantList, setRestaurantList] = useState([]);
  const [rating, setRating] = useState("ALL");
  const [cuisine, setCuisine] = useState("ALL");
  const [priceCategory, setPriceCategory] = useState("ALL");

  useEffect(()=>{
    var url = new URL("http://localhost:8080/restaurants"),
    params = {cuisine: cuisine, rating: rating, priceCategory: priceCategory}
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(url)
      .then(response => response.json())
      .then(setRestaurantList);
   }, []);

  return (
    <div>
      {restaurantList.map(restaurant => 
       <RestaurantCard name={restaurant.name} cuisine={restaurant.cuisine} rating={restaurant.rating} location = {restaurant.location} src={restaurant.imagePath} price={restaurant.priceCategory} linkDetails="./test.html" linkReservation="..\..\..\pizzahut.html"/>)
      }
    </div>
  );
}

export default RestaurantList;