package onlineBookStore.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import onlineBookStore.entity.BookEntity;
import onlineBookStore.repository.BookRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "books")
public class BooksController {
	
	@Autowired
	private BookRepository bookRepository;
	
	@GetMapping("/get")
	public List<BookEntity> getBooks() {
		return bookRepository.findAll();
	}

}
