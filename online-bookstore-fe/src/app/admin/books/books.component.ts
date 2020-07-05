import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { HttpClientService } from 'src/app/services/http-client.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Array<Book>;

  constructor(private httpClientService: HttpClientService) {
    
   }

  ngOnInit(): void {
    this.httpClientService.getBooks().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response) {
    this.books = response;
  }

  setBook(bookid){

  }

}

