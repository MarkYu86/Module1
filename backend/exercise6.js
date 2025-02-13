// Try creating a json object variable for a book. The book should have a title, description, author and number of pages
let book = {
    title:"Genshin Impact",
    description:"my fav game",
    author:"Mihayou",
    numberofpages:"100"
}
let book1 = {
   title:"Genshin Impact",
   description:"my fav game",
   author:"Mihayou",
   numberofpages:"100"
}
let book2 = {
   title:"Genshin Impact",
   description:"my fav game",
   author:"Mihayou",
   numberofpages:"100"
}
let book3 = {
   title:"Genshin Impact",
   description:"my fav game",
   author:"Mihayou",
   numberofpages:"100"
}
let book4 = {
   title:"Genshin Impact",
   description:"my fav game",
   author:"Mihayou",
   numberofpages:"100"
}
// Try printing these object property values in your console individually and via the whole book object
   console.log(book.numberofpages)
   console.log(book.author)
   console.log(book.description)
   console.log(book.title)
//    Update the description of the book
   book.description = "not my fav"
   console.log(book.description)

//    Extension: Create an array of 5 book objects
   let books = {
      book1:"this",
      book2:"is",
      book3:"a",
      book4:"json",
      book5:"array"
   }
   console.log(books)
console.log(books.book4)
console.log([book,book1,book2,book3,book4])