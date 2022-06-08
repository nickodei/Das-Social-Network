

function RestaurantCard(props){
    return (
    <div class="card w-100 mt-3" style={{color: "black", textAlign: "right"}}>
      <div class="card-body">
        <h5 class="card-title"><u>{props.name}</u></h5>
        <img class="card-img-top" src={props.src} alt="Image of restaurant"></img>
        <p class="card-text" align="center"><h1></h1><h5><em>Cuisine:</em> {props.cuisine}<br/> <em align="left">Rating:</em> {props.rating} / 10<br/> <em>Location:</em> {props.location}<br/> {props.price} <em>:Price</em>  </h5></p>
        <a href={props.linkDetails} class="btn btn-outline-dark">Show details</a>
        <a href={props.linkReservation} class="btn btn-outline-dark me-2" onClick={props.onClick}>Reservations</a>
      </div>
    </div>);
}

export default RestaurantCard;