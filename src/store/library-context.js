import React from "react";

const LibraryContext = React.createContext({
    bookItems: [],
    bag: [],
    quickViewIsVisible: false,
    selectedBook: null,
    fetchAllBooks: (data) => {},
    fetchBookDetails: (bookData) => {},
    showQuickView: (bookId) => {},
    hideQuickView: () => {},
    addToBag: (book) => {},
    removeFromBag: (id) => {},
    resetBag: () => {},
    fetchBooksToBag: (bookItems) => {},
    replaceBag: (bagData) => {}
})
export default LibraryContext