package entities;

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

    @Column(name = "image")
    private String image;

    @Column(name = "address")
    private String address;

    @Column(name = "contact_info")
    private String contactInfo;

    @Column(name = "price_category")
    private PriceCategory priceCategory;

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

    public Restaurant(Integer id, String name, String image, String address, String contactInfo, PriceCategory priceCategory,
                      Menu menu, TablePlan tablePlan, Schedule schedule, Marker marker) {
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

    public Integer getId() {
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

    public void setId(Integer id) {
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
