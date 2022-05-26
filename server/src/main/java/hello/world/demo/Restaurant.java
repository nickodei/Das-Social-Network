package hello.world.demo;

import java.util.List;

public class Restaurant {
    private String name;

    //this will be the id in the database and the that will be provided by the frontEnd, so that the Restaurant can be recognized
    private int id;
    private String image;
    private String address;
    private String contactInfo;
    private PriceCategory priceCategory;
    private Menu menu;
    private TablePlan tablePlan;
    private Schedule schedule;
    private Marker marker;

    //this constructor should be used for mok classes
    public Restaurant(String name,
                      int id) {
        this.name = name;
        this.id = id;
    }

    public Restaurant(String name,
                      int id,
                      String image,
                      String address,
                      String contactInfo,
                      PriceCategory priceCategory,
                      Menu menu,
                      TablePlan tablePlan,
                      Schedule schedule,
                      Marker marker) {
        this.name = name;
        this.id = id;
        this.image = image;
        this.address = address;
        this.contactInfo = contactInfo;
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

    public int getId() {
        return id;
    }

    public String getImage() {
        return image;
    }

    public String getAddress() {
        return address;
    }

    public String getContactInfo() {
        return contactInfo;
    }

    public PriceCategory getPriceCategory() {
        return priceCategory;
    }

    public Menu getMenu() {
        return menu;
    }



    public void setName(String name) {
        this.name = name;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setImage(String image) {
        this.image = image;
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

    public void setPriceCategory(PriceCategory priceCategory) {
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
}
