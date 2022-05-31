package entities;

import entities.Schedule;

import javax.persistence.*;
import java.util.Calendar;

@Entity
@javax.persistence.Table(name = "table_scheduler")
public class TableScheduler {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @OneToOne(targetEntity = Schedule.class)
    private Schedule restaurantSchedule;

    private Calendar calendar;

    public TableScheduler() {}

    public TableScheduler(Schedule schedule){
        this.restaurantSchedule = schedule;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
