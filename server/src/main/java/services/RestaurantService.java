package services;

import entities.dtos.RestaurantOverviewDto;
import entities.FilterOptions;
import entities.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repositories.RestaurantRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RestaurantService
{
    @Autowired
    RestaurantRepository restaurantRepository;

    public RestaurantService() {
    }

    public List<RestaurantOverviewDto> getAllRestaurants(FilterOptions filterOptions) {

        return restaurantRepository.findAll().stream()
                .map(Restaurant::getRestaurantOverviewDto)
                .filter(restaurantOverviewDto -> restaurantOverviewDto.getRating() >= filterOptions.getMinRating())
                .filter(restaurantOverviewDto -> filterOptions.getCuisine() == FilterOptions.Cuisine.ALL || restaurantOverviewDto.getCuisine() == filterOptions.getCuisine())
                .filter(restaurantOverviewDto -> filterOptions.getPriceCategory() == FilterOptions.PriceCategory.ALL || restaurantOverviewDto.getPriceCategory() == filterOptions.getPriceCategory())
                .collect(Collectors.toList());
    }
}
