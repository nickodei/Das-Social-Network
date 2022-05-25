package hello.world.demo;

public class Table {
    private final int id;
    private final int numberOfSeats;
    private final TableScheduler tableScheduler;

    public Table(int id, int numberOfSeats, Schedule schedule) {
        this.id = id;
        this.numberOfSeats = numberOfSeats;
        this.tableScheduler = new TableScheduler(schedule);
    }

    public int getNumberOfSeats() {
        return numberOfSeats;
    }
}
