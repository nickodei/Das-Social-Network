package hello.world.demo;

import entities.FilterOptions;
import entities.Marker;
import entities.Restaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;
import org.yaml.snakeyaml.error.Mark;
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
            // Echten Datensätze
            Marker zumLustigenBauernMarker = new Marker(48.18011299609773, 11.566323159488865);
            markerRepository.save(zumLustigenBauernMarker);

            Restaurant zumLustigenBauern = new Restaurant("Zum lustigen Bauern", zumLustigenBauernMarker);
            zumLustigenBauern.setPriceCategory(FilterOptions.PriceCategory.$);
            zumLustigenBauern.setCuisine(FilterOptions.Cuisine.GERMAN);
            zumLustigenBauern.setRating(4.4);
            zumLustigenBauern.setAddress("Kantstr. 29, 80809 München");
            zumLustigenBauern.setContactInfo("089 / 3508571");
            zumLustigenBauern.setImagePath("https://lh5.googleusercontent.com/p/AF1QipO8uYVvtYDTuHDW-05Nn5ilZTBDbfJWI7yHOMMA");
            zumLustigenBauern.setLocation("Schwabing");
            restaurantRepository.save(zumLustigenBauern);

            // Dummy Datensätze
            Marker m1 = new Marker(234.0, 123.0);
            Marker m2= new Marker(123, 546);
            markerRepository.save(m1);
            markerRepository.save(m2);

            List<Restaurant> restaurants = new ArrayList<>();

            Restaurant test = new Restaurant("McDonalds", m1);
            test.setPriceCategory(FilterOptions.PriceCategory.$);
            test.setCuisine(FilterOptions.Cuisine.GERMAN);

            restaurants.add(test);
            restaurants.add(new Restaurant("Hand im Glück", m1));
            restaurants.add(new Restaurant("KFC", m2));
            restaurants.add(new Restaurant("DSFEW", m2));

            restaurantRepository.saveAll(restaurants);
        }
    }
}
