package entities.dtos;

import entities.FilterOptions;
import entities.Marker;

import javax.persistence.*;


@Entity
@javax.persistence.Table(name = "restaurantOverviewDto")
public class RestaurantOverviewDto
{
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @Column(name="name")
    private String name;

    @Column(name="imagePath")
    private String imagePath;

    @Column(name="cuisine")
    private FilterOptions.Cuisine cuisine;

    @Column(name="rating")
    private double rating;

    @Column(name="location")
    private String location;

    @Column
    private FilterOptions.PriceCategory priceCategory;

    @OneToOne(targetEntity = Marker.class)
    private Marker marker;



    public RestaurantOverviewDto(){}



    public RestaurantOverviewDto(String name, String imagePath, FilterOptions.Cuisine cuisine, double rating, String location, FilterOptions.PriceCategory priceCategory, Marker marker) {
        this.name = name;
        this.imagePath = imagePath;
        this.cuisine = cuisine;
        this.rating = rating;
        this.marker = marker;
        this.location = location;
        this.priceCategory = priceCategory;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public FilterOptions.Cuisine getCuisine() {
        return cuisine;
    }

    public void setCuisine(FilterOptions.Cuisine cuisine) {
        this.cuisine = cuisine;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public Marker getMarker() {
        return marker;
    }

    public void setMarker(Marker marker) {
        this.marker = marker;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public FilterOptions.PriceCategory getPriceCategory() {
        return priceCategory;
    }

    public void setPriceCategory(FilterOptions.PriceCategory priceCategory) {
        this.priceCategory = priceCategory;
    }
}
