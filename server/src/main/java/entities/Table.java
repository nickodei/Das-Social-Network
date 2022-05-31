package entities;

import javax.persistence.*;

@Entity
@javax.persistence.Table(name = "table")
public class Table {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="number_of_seats")
    private int numberOfSeats;

    @OneToOne(targetEntity = TableScheduler.class)
    private TableScheduler tableScheduler;

    public Table() {}

    public Table(int id, int numberOfSeats, Schedule schedule) {
        this.id = id;
        this.numberOfSeats = numberOfSeats;
        this.tableScheduler = new TableScheduler(schedule);
    }

    public int getNumberOfSeats() {
        return numberOfSeats;
    }
}
