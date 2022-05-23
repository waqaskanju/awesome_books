
    const bookTitle = document.getElementById('title');
    const bookAuthor = document.getElementById('author');
    const addBtn = document.getElementById('add');
    const booksSection = document.getElementById('mybooks');
    const awsome_book_list = [];

    let books = {
      title: "",
      author: ""
    }

    function populteSection(arr) {
      const bookArticle = document.createElement('article');
      for(let i = 0; i < arr.length; i += 1) {
        bookArticle.innerHTML = `<span>${arr[i].title}</span> <br>
        <span>${arr[i].author}</span><br>
        <button>Remove</button>
        <hr>`
      }
      booksSection.appendChild(bookArticle);
    }
    

    function add(title, author) {
      books.title = title;
      books.author = author;
      awsome_book_list.push(books);
    }

    addBtn.addEventListener('click', () => {
      add(bookTitle.value,bookAuthor.value);
      populteSection(awsome_book_list);
      console.log(awsome_book_list);
    });
  
    