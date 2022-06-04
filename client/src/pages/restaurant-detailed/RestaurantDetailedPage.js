import React from 'react';
import { useParams } from "react-router-dom";

function RestaurantDetailedPage() {
  let { id } = useParams();

  return (
    <div>
      {id}
    </div>
  );
}

export default RestaurantDetailedPage;