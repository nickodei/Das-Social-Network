package controllers;

import entities.dtos.RestaurantOverviewDto;
import entities.FilterOptions;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
    public ResponseEntity<List<RestaurantOverviewDto>> getAllRestaurants
            (@RequestParam(value = "cuisine", defaultValue = "ALL") FilterOptions.Cuisine cuisine ,
             @RequestParam(value = "priceCategory", defaultValue = "ALL") FilterOptions.PriceCategory priceCategory,
             @RequestParam(value = "minRating", defaultValue = "0.0") Double minRating)
    {
        return ResponseEntity.ok(restaurantService.getAllRestaurants(new FilterOptions(cuisine, priceCategory,minRating)));
    }

}
