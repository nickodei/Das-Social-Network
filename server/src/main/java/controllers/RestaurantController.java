package controllers;

import dtos.RestaurantOverviewDto;
import entities.Restaurant;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import services.RestaurantService;

import java.util.List;

@RestController
public class RestaurantController
{
    private final RestaurantService restaurantService;

    public RestaurantController(RestaurantService restaurantService) {
        this.restaurantService = restaurantService;
    }

    @GetMapping("/restaurants")
    public ResponseEntity<List<RestaurantOverviewDto>> getAllRestaurants()
    {
        return ResponseEntity.ok(restaurantService.getAllRestaurants());
    }
}
