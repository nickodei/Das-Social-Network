import React, { Component } from 'react';
import RestaurantCardComp from './RestaurantCardComp';


class RestaurantListComp extends Component {
  render() {
    return (
      <div>

        <RestaurantCardComp name="PizzaHut"  cuisine="Italian" rating="5.0" location = "Schwabing"/>
        <RestaurantCardComp name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt"/>
        <RestaurantCardComp name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt"/>
        <RestaurantCardComp name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt"/>
        <RestaurantCardComp name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt"/>
        <RestaurantCardComp name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt"/>
        <RestaurantCardComp name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt"/>
        <RestaurantCardComp name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt"/>
        <RestaurantCardComp name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt"/>
        <RestaurantCardComp name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt"/>
        <RestaurantCardComp name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt"/>
        <RestaurantCardComp name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt"/>
        <RestaurantCardComp name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt"/>
        <RestaurantCardComp name="McDonalds"  cuisine="American" rating="2.3" location = "Maxvorstadt"/>

      </div>
    );
  }
}

export default RestaurantListComp;