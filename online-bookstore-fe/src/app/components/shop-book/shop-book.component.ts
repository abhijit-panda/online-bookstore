import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/book';
import { HttpClientService } from 'src/app/services/http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop-book',
  templateUrl: './shop-book.component.html',
  styleUrls: ['./shop-book.component.css']
})
export class ShopBookComponent implements OnInit {

  books: Array<Book>;
  cartBooks : any;

  constructor(private router: Router,private httpClientService: HttpClientService) {
    
  }

 ngOnInit(): void {
   this.httpClientService.getBooks().subscribe(
     response => this.handleSuccessfulResponse(response)
   );
   //from localstorage retrieve the cart item
   let data = localStorage.getItem('cart');
   //if this is not null convert it to JSON else initialize it as empty
   if (data !== null) {
     this.cartBooks = JSON.parse(data);
   } else {
     this.cartBooks = [];
   }
 }

 handleSuccessfulResponse(response) {
   this.books = response;
 }

 addToCart(book) {
  
  let cartData = [];
  //retrieve cart data from localstorage
  let data = localStorage.getItem('cart');
  //prse it to json 
  if (data !== null) {
    cartData = JSON.parse(data);
  }
  // add the selected book to cart data
  cartData.push(book);
  //updated the cartBooks
  this.updateCartData(cartData);
  //save the updated cart data in localstorage
  localStorage.setItem('cart', JSON.stringify(cartData));
  //make the isAdded field of the book added to cart as true
  book.isAdded = true;
}

updateCartData(cartData) {
  this.cartBooks = cartData;
}

goToCart() {
  this.router.navigate(['/cart']);
}

emptyCart() {
  this.cartBooks = [];
  localStorage.clear();
}

}
