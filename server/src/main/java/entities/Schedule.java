package entities;

import javax.persistence.*;
import java.sql.Time;

@Entity
@javax.persistence.Table(name = "table_scheduler")
public class Schedule {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name = "opening_hour")
    private Time openingHour;

    @Column(name = "closing_hour")
    private Time closingHour;

    public Schedule() {}

    public Schedule(Time openingHour, Time closingHour) {
        this.openingHour = openingHour;
        this.closingHour = closingHour;
    }

    public Time getOpeningHour() {
        return openingHour;
    }

    public void setOpeningHour(Time openingHour) {
        this.openingHour = openingHour;
    }

    public Time getClosingHour() {
        return closingHour;
    }

    public void setClosingHour(Time closingHour) {
        this.closingHour = closingHour;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
