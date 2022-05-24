
function RestaurantCardComp(props){
    return (
    <div class="card w-100 mt-3">
            <div class="card-body">
              <h5 class="card-title">{props.name}</h5>
              <img class="card-img-top" src={props.src} alt="Card image cap"></img>
              <p class="card-text">Cuisine: {props.cuisine}, Rating: {props.rating} / 10, Location: {props.location}</p>
              <a href="#" class="btn btn-outline-dark">Anzeigen</a>
              <a href="#" class="btn btn-outline-dark">Reservieren</a>
            </div>
          </div>);
}

export default RestaurantCardComp;