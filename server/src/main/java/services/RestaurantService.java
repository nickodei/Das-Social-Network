package services;

import dtos.RestaurantOverviewDto;
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

    public List<RestaurantOverviewDto> getAllRestaurants() {
        List<RestaurantOverviewDto> result = restaurantRepository.findAll().stream().map(restaurant -> {
            RestaurantOverviewDto dto = new RestaurantOverviewDto();
            dto.name = restaurant.getName();
            return dto;
        }).collect(Collectors.toList());

        return result;
    }
}
