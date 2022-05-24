import React, { Component } from 'react';

class RestaurantListComp extends Component {
    render() {
        return (
            <div class="colomn" >
            
              <div class="card">
                <div class="card-body">
                  <h5 class="restaurant-title">Restaurant 1</h5>
                  <p class="restaurant-address">Address: Irgendwo in Munchen</p>
                  <p class="restaurant-rating">Rating: 10/10</p>
                  <a href="#" class="btn btn-primary">Reserviere</a>
                </div>
              
            </div>
          
              <div class="card">
                <div class="card-body">
                  <h5 class="restaurant-title">Restaurant 2</h5>
                  <p class="restaurant-address">Address: Anderswo</p>
                  <p class="restaurant-rating">Rating: 9/10</p>
                  <a href="#" class="btn btn-primary">Reserviere</a>
                </div>
            
            </div>
          </div>
        );
    }
}

export default RestaurantListComp;