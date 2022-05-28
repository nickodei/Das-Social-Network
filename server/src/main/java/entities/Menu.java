package entities;

import javax.persistence.*;

@Entity
@javax.persistence.Table(name = "menu")
public class Menu {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    public Menu() {}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
