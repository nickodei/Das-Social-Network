package services;

import dtos.RestaurantOverviewDto;
import entities.Restaurant;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RestaurantService
{
    private List<Restaurant> restaurants = new ArrayList<>();

    public RestaurantService(){
        restaurants.add(new Restaurant("McDonalds"));
        restaurants.add(new Restaurant("Hans im Glück"));
        restaurants.add(new Restaurant("Hans im Glück"));
        restaurants.add(new Restaurant("Hans im Glück"));
        restaurants.add(new Restaurant("Hans im Glück"));
    }

    public List<RestaurantOverviewDto> getAllRestaurants() {
        List<RestaurantOverviewDto> result = this.restaurants.stream().map(restaurant -> {
            RestaurantOverviewDto dto = new RestaurantOverviewDto();
            dto.Name = restaurant.getName();
            return dto;
        }).collect(Collectors.toList());

        return result;
    }
}
