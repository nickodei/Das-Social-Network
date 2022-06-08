import {useEffect, useState, useRef} from 'react';
import RestaurantCard from './RestaurantCard';


function RestaurantList() {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8080/restaurants', {mode:'cors'})
      .then(response => response.json())
      .then(setRestaurantList);
   }, []);

  return (
    <div>
      {restaurantList.map(restaurant => 
       <RestaurantCard name={restaurant.name} cuisine="Italian" rating="5.0" location = "Schwabing" src="https://www.docohotel.com/media/163371/do-co-hotel-muenchen-restaurant-2-kopie.jpg" price="$$$" linkDetails="./test.html" linkReservation="..\..\..\pizzahut.html"/>)
      }
    </div>
  );
}

export default RestaurantList;