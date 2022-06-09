package hello.world.demo;

import entities.Marker;
import entities.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import repositories.MarkerRepository;
import repositories.RestaurantRepository;

import java.util.ArrayList;
import java.util.List;

@Component
public class DatabaseSeeder
{
    @Autowired
    MarkerRepository markerRepository;
    @Autowired
    RestaurantRepository restaurantRepository;

    @EventListener
    public void seed(ContextRefreshedEvent event) {
        System.out.println("DatabaseSeeder.seed: ContextRefreshedEvent fired, beginning to seed database...");
        seedTables();
    }

    private void seedTables()
    {
        if(restaurantRepository.count() == 0) {
            Marker m1 = new Marker(234.0, 123.0);
            Marker m2= new Marker(123, 546);
            markerRepository.save(m1);
            markerRepository.save(m2);

            List<Restaurant> restaurants = new ArrayList<>();

            restaurants.add(new Restaurant("McDonalds", m1));
            restaurants.add(new Restaurant("Hand im Glück", m1));
            restaurants.add(new Restaurant("KFC", m2));
            restaurants.add(new Restaurant("DSFEW", m2));

            restaurantRepository.saveAll(restaurants);
        }
    }
}
