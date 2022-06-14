package repositories;

import entities.FilterOptions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FilterOptionsRepository extends JpaRepository<FilterOptions, Integer> {
}
