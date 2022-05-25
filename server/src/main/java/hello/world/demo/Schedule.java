package hello.world.demo;

import java.sql.Time;

public class Schedule {
    private final int id;
    private Time openingHour;
    private Time closingHour;

    public Schedule(int id, Time openingHour, Time closingHour) {
        this.id = id;
        this.openingHour = openingHour;
        this.closingHour = closingHour;
    }


    public int getId() {
        return id;
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
}
