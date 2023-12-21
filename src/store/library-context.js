import React from "react";

const LibraryContext = React.createContext({
    mode: true,
    bookItems: [],
    bag: [],
    quickViewIsVisible: false,
    selectedBook: null,
    toggleThemeMode: () => {},
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