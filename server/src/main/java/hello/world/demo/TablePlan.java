package hello.world.demo;

import java.util.List;

public class TablePlan {
    private final int id;
    private final List<Table> tables;
    private final String image;
    private final Schedule restaurantSchedule;

    public TablePlan(int id, List<Table> tables, String image, Schedule restaurantSchedule) {
        this.id = id;
        this.tables = tables;
        this.image = image;
        this.restaurantSchedule = restaurantSchedule;
    }

    public void addTable(int numberOfSeats){
        return;
    }

    public Schedule getRestaurantSchedule() {
        return restaurantSchedule;
    }

    public List<Table> getTables() {
        return tables;
    }

    public String getImage() {
        return image;
    }


}
