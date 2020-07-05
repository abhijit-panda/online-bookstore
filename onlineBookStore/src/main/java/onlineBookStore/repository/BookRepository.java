package onlineBookStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import onlineBookStore.entity.BookEntity;

@CrossOrigin("*")
public interface BookRepository extends JpaRepository<BookEntity, Long>{

}
