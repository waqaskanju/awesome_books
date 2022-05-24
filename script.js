const bookList = document.getElementById('book-list');
const addBook = document.getElementById('add-book');
const newTitle = document.getElementById('new-title');
const newAuthor = document.getElementById('new-author');
let bookData = [];

class Book {
  constructor(title = 'title', author = 'author', id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  addBook() {
    // This will add itself to the bookData Array
    bookData.push(this);
  }

  removeBook() {
    // This Will Remove It self From the bookData Array
    bookData.filter((book) => book.id !== this.id);
  }
}

const dmmyBook = new Book();
console.log(dmmyBook);

function getLi(title, author, id, book) {
  const divAuthor = document.createElement('div');
  const divTitle = document.createElement('div');
  const removeButton = document.createElement('button');
  const hr = document.createElement('hr');
  const li = document.createElement('li');

  divTitle.classList.add('author');
  divAuthor.classList.add('title');
  removeButton.classList.add('remove');
  removeButton.setAttribute('id', `button${id}`);
  removeButton.setAttribute('onclick', `javascript:removeLi(${id}, ${book})`);
  li.classList.add('book');
  li.setAttribute('id', `book${id}`);

  divTitle.innerHTML = title;
  divAuthor.innerHTML = author;
  removeButton.innerText = 'Remove';
  removeButton.type = 'button';

  li.appendChild(divTitle);
  li.appendChild(divAuthor);
  li.appendChild(removeButton);
  li.appendChild(hr);

  return li;
}

function storeData() {
  localStorage.setItem('bookData', JSON.stringify(bookData));
}

function loadData() {
  const data = localStorage.getItem('bookData');
  if (data) {
    bookData = JSON.parse(data);
    bookData.forEach((book) => {
      bookList.appendChild(getLi(book.title, book.author, book.id));
    });
  }
}

loadData();

addBook.addEventListener('click', () => {
  if (newTitle.value && newAuthor.value) {
    const id = bookData[bookData.length - 1] ? bookData[bookData.length - 1].id + 1 : 1;
    const book = new Book(newTitle, newAuthor, id);
    book.addBook();
    bookList.appendChild(getLi(book));
    storeData();
  }
});

function removeLi(id, book) {
  const li = document.getElementById(`book${id}`);
  li.remove();

  book.removeBook();
  // bookData = bookData.filter((book) => book.id !== id);
  storeData();
}
const a = 0;
const b = 1;

if (a > b) removeLi(0);