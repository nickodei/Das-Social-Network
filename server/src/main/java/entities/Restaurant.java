package entities;

import entities.dtos.RestaurantOverviewDto;

import javax.persistence.*;


@Entity
@javax.persistence.Table(name = "restaurant")
public class Restaurant
{
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @Column(name="name")
    private String name;

    @Column(name = "imagePath")
    private String imagePath;

    @Column(name = "address")
    private String address;

    @Column(name = "contact_info")
    private String contactInfo;

    @Column(name = "cuisine")
    private FilterOptions.Cuisine cuisine;

    @Column(name = "rating")
    private double rating;

    @Column(name = "location")
    private String location;

    @Column(name = "price_category")
    private FilterOptions.PriceCategory priceCategory;

    @OneToOne(targetEntity = Menu.class)
    private Menu menu;

    @OneToOne(targetEntity = TablePlan.class)
    private TablePlan tablePlan;

    @OneToOne(targetEntity = Schedule.class)
    private Schedule schedule;

    @OneToOne(targetEntity = Marker.class)
    private Marker marker;

    // for hibernate
    public Restaurant() {}

    // for mocking
    public Restaurant(String name, Marker marker) {
        this.marker = marker;
        this.name = name;
    }

    public Restaurant(Integer id, String name, String imagePath, String address, String contactInfo, FilterOptions.Cuisine cuisine,  FilterOptions.PriceCategory priceCategory,
                      Menu menu, TablePlan tablePlan, Schedule schedule, Marker marker) {
        this.name = name;
        this.id = id;
        this.imagePath = imagePath;
        this.address = address;
        this.contactInfo = contactInfo;
        this.cuisine = cuisine;
        this.priceCategory = priceCategory;
        this.menu = menu;
        this.tablePlan = tablePlan;
        this.schedule = schedule;
        this.marker = marker;
    }

    public TablePlan getTablePlan() {
        return tablePlan;
    }

    public Schedule getSchedule() {
        return schedule;
    }

    public Marker getMarker() {
        return marker;
    }

    public String getName() {
        return name;
    }

    public Integer getId() {
        return id;
    }

    public String getImagePath() {
        return imagePath;
    }

    public String getAddress() {
        return address;
    }

    public String getContactInfo() {
        return contactInfo;
    }

    public FilterOptions.PriceCategory getPriceCategory() {
        return priceCategory;
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Menu getMenu() {
        return menu;
    }



    public void setName(String name) {
        this.name = name;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setImagePath(String image) {
        this.imagePath = image;
    }

    public void setMarker(Marker marker) {
        this.marker = marker;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }

    public void setPriceCategory(FilterOptions.PriceCategory priceCategory) {
        this.priceCategory = priceCategory;
    }

    public void setMenu(Menu menu) {
        this.menu = menu;
    }


    public void setLocation(Marker marker) {
        this.marker = marker;
    }

    public void setSchedule(Schedule schedule) {
        this.schedule = schedule;
    }

    public void setTablePlan(TablePlan tablePlan) {
        this.tablePlan = tablePlan;
    }

    public boolean equals(Restaurant restaurant){
        return this.getId() == restaurant.getId();
    }

    public RestaurantOverviewDto getRestaurantOverviewDto(){
        return new RestaurantOverviewDto(getName(), getImagePath(), getCuisine(), getRating(), getLocation(), getPriceCategory(), getMarker());
    }


}
