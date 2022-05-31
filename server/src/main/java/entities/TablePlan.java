package entities;

import javax.persistence.*;
import java.util.List;

@Entity
@javax.persistence.Table(name = "table_plan")
public class TablePlan {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Lob
    @Column(name = "image", columnDefinition = "LONGBLOB", insertable = false, updatable = false)
    private byte[] image;

    @OneToMany(targetEntity = Table.class)
    private List<Table> tables;

    @OneToOne(targetEntity = Schedule.class)
    private Schedule restaurantSchedule;

    public TablePlan() {}

    public TablePlan(int id, List<Table> tables, byte[] image, Schedule restaurantSchedule) {
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

    public byte[] getImage() {
        return image;
    }
}
