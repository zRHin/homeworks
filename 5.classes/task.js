class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state(value) {
        if (value < 0) {
            value = 0;
        }
        if (value > 100) {
            value = 100;
        }
        this._state = value;
    }
    get state() {
        return  this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }
    addBook(book) {
        if (book._state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        for (const i in this.books) {
            let  arr = this.books[i];
            if (arr[type] === value) {
                return this.books[i];
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        for (const i in this.books) {
            if (this.books[i].name === bookName) {
                let obj = {};
                obj = this.books[i];
                this.books.splice(i, 1);
                return obj;
            }
        }
        return null;
    }
}