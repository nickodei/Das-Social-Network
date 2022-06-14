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
            zumLustigenBauern.setImagePath("https://www.google.de/maps/place/Zum+lustigen+Bauern/@48.1779954,11.5661515,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOrUElwXBlvQA8hvyAidY69O4ENwZfP6AVslYFp!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOrUElwXBlvQA8hvyAidY69O4ENwZfP6AVslYFp%3Dw205-h100-k-no!7i4032!8i1960!4m12!1m5!2m4!1sRestaurants!5m1!6sgcid:german_restaurant!6e5!3m5!1s0x479e742a85bf8ae1:0xb5d39ee77b784!8m2!3d48.1779938!4d11.5661557!15sCgtSZXN0YXVyYW50c1oVIhNkZXV0c2NoIHJlc3RhdXJhbnRzkgERZ2VybWFuX3Jlc3RhdXJhbnQ#");
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
