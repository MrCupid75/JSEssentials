let books = []

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            author: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        }
        books.push(book)
        showbooks();
        clearInputs();
    } else {
        alert('Please fill all fields correctly')
    }
    console.log(books)
}

function showbooks() {
    document.getElementById("books").innerHTML = ""


    books.forEach((book, index) => {
        let booksDiv = document.createElement("div");
        booksDiv.innerHTML = `
        <h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name:</strong> ${book.author}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editbook(${index})">Edit</button>
        <button onclick="deletebook(${index})">Delete</button>
        `;
        document.getElementById("books").appendChild(booksDiv)
    });

}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

function editbook(index) {
    document.getElementById('bookName').value = books[index]['name'];
    document.getElementById('authorName').value = books[index]['author'];
    document.getElementById('bookDescription').value = books[index]['bookDescription'];
    document.getElementById('pagesNumber').value = books[index]['pagesNumber'];

    books.splice(index, 1)
    showbooks()
    console.log(books)
}

function deletebook(index) {
    books.splice(index, 1)
    showbooks()
    console.log(books)
}
