/**
 * Created by Liukeyi on 2016/6/6.
 * Flyweight 享元模式
 */

/**
 * 管理图书内部状态，这些图书信息将被共享
 */
var Book = function(title, author, genre, pageCount, publisherID, ISBN) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pageCount = pageCount;
    this.publisherID = publisherID;
    this.ISBN = ISBN;
};

/**
 * 图书创建工厂，保证同一种图书只有一个实例
 */
var BookFactory = (function() {
    var existingBooks = {};

    return {
        createBook: function(title, author, genre, pageCount, publisherID, ISBN) {
            var existingBook = existingBooks[ISBN];
            if (existingBook) {
                return existingBook;
            } else {
                var book = new Book(title, author, genre, pageCount, publisherID, ISBN);
                existingBooks[ISBN] = book;
                return book;
            }
        }
    };
});

/**
 * 图书管理，管理外部信息，例如借出时间，应还时间等等
 */
var BookManager = (function() {
    var bookRecordDatabase = {};
    var bookFactory = new BookFactory();

    return {
        addBookRecord: function(id, title, author, genre, pageCount, publisherID,
                                ISBN, checkoutDate, checkoutMember, dueReturnDate, availability) {
            var book = bookFactory.createBook(title, author, genre, pageCount, publisherID, ISBN);
            bookRecordDatabase[id] = {
                checkoutDate: checkoutDate,
                checkoutMember: checkoutMember,
                dueReturnDate: dueReturnDate,
                availability: availability,
                book: book
            };
        },

        updateCheckoutStatus: function(bookID, newStatus, checkoutDate, checkoutMember, newReturnDate) {
            var record = bookRecordDatabase[bookID];
            record.availability = newStatus;
            record.checkoutDate = checkoutDate;
            record.checkoutMember = checkoutMember;
            record.dueReturnDate = newReturnDate;
        },

        extendCheckoutPeriod: function(bookID, newReturnDate) {
            bookRecordDatabase[bookID] = newReturnDate;
        },

        isPastDue: function(bookID) {
            var currentDate = new Date();
            return currentDate.getTime() > Date.parse(bookRecordDatabase[bookID].dueReturnDate);
        }
    };
});