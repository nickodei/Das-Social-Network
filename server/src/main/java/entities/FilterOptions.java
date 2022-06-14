package entities;


import javax.persistence.*;


@Entity
@javax.persistence.Table(name = "filterOptions")
public class FilterOptions {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="cuisine")
    private Cuisine cuisine = Cuisine.ALL;

    @Column(name="priceCategory")
    private PriceCategory priceCategory = PriceCategory.ALL;

    @Column(name="minRating")
    private double minRating = 0.0;

    public FilterOptions(){}

    public FilterOptions(Cuisine cuisine, PriceCategory priceCategory, double minRating) {
        this.cuisine = cuisine;
        this.priceCategory = priceCategory;
        this.minRating = minRating;
    }

    public Cuisine getCuisine() {
        return cuisine;
    }

    public void setCuisine(Cuisine cuisine) {
        this.cuisine = cuisine;
    }

    public PriceCategory getPriceCategory() {
        return priceCategory;
    }

    public void setPriceCategory(PriceCategory priceCategory) {
        this.priceCategory = priceCategory;
    }

    public double getMinRating() {
        return minRating;
    }

    public void setMinRating(double minRating) {
        this.minRating = minRating;
    }


    public enum Cuisine {
        ALL,
        ITALIAN,
        CHINESE,
        GERMAN,
        ROMANIAN,
        OTHER
    }


    public enum PriceCategory
    {
        $,
        $$,
        $$$,
        ALL
    }
}
