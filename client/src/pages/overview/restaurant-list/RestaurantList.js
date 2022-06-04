import React, { Component } from 'react';
import RestaurantCard from './RestaurantCard';


class RestaurantList extends Component {
  render() {
    return (
      <div>

        <RestaurantCard name="PizzaHut"  cuisine="Italian" rating="5.0" location = "Schwabing" src="https://www.docohotel.com/media/163371/do-co-hotel-muenchen-restaurant-2-kopie.jpg" price="$$$" linkDetails="./test.html" linkReservation="..\..\..\pizzahut.html"/>
        <RestaurantCard name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt" src="https://www.mux.de/images/1500x1200z/object/70/1156099970/mcdonalds-1.JPG" price="$$"/>
        <RestaurantCard name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt" src="https://www.mux.de/images/1500x1200z/object/70/1156099970/mcdonalds-1.JPG" price="$$"/>
        <RestaurantCard name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt" src="https://www.mux.de/images/1500x1200z/object/70/1156099970/mcdonalds-1.JPG" price="$$"/>
        <RestaurantCard name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt" src="https://www.mux.de/images/1500x1200z/object/70/1156099970/mcdonalds-1.JPG" price="$$"/>
        <RestaurantCard name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt" src="https://www.mux.de/images/1500x1200z/object/70/1156099970/mcdonalds-1.JPG" price="$$"/>
        <RestaurantCard name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt" src="https://www.mux.de/images/1500x1200z/object/70/1156099970/mcdonalds-1.JPG" price="$$"/>
        <RestaurantCard name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt" src="https://www.mux.de/images/1500x1200z/object/70/1156099970/mcdonalds-1.JPG" price="$$"/>
        <RestaurantCard name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt" src="https://www.mux.de/images/1500x1200z/object/70/1156099970/mcdonalds-1.JPG" price="$$"/>
        <RestaurantCard name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt" src="https://www.mux.de/images/1500x1200z/object/70/1156099970/mcdonalds-1.JPG" price="$$"/>
        <RestaurantCard name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt" src="https://www.mux.de/images/1500x1200z/object/70/1156099970/mcdonalds-1.JPG" price="$$"/>

      </div>
    );
  }
}

export default RestaurantList;