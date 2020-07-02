class Book {
  constructor(bookID, title, author, storageID, readerID) {
    this.bookID = bookID; 
    this.title = title;
    this.author = author; 
    this.storageID = storageID; 
    this.readerID = readerID; 
  }
  
  get fullBookName() {
    return this.bookID + ' ' + this.title + ' ' + this.author; 
  }
  
  set fullBookName(str) {
    let bookFullName = str.split(' ');
    if(bookFullName.length === 3) {
      this.bookID = bookFullName[0];
      this.title = bookFullName[1];
      this.author = bookFullName[2];
    } else {
      throw 'Неверный формат ввода';
    }
  }
}

class Reader extends Book {
  constructor(name, lastName, libraryCard, bookID) {
    this.name = name;
    this.lastName = lastName;
    this.libraryCard = libraryCard;
    super(bookID);
  }
}

class Storage {
   constructor(sectionID, cabinetID, shelfID) {
     
   }
}

let book1 = new Book(1234, '11/22/63', 'Elizabet');
console.log(book1.fullBookName);

book1.fullBookName = '1234 11/22/63 Steven_King';
console.log(book1.fullBookName);