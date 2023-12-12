import LibraryContext from './library-context'
import { useState, useCallback } from 'react'

export const LibraryProvider = (props) => {
    const [bookItems, setBookItems] = useState([])
    const [quickViewIsVisible, setQuickIsVisible] = useState(false)
    const [selectedBook, setSelectedBook] = useState(null)
    const [bag, setBag] = useState([])
    const [bagChanged, setBagChanged] = useState(false)

    const fetchAllBooks = useCallback((booksData) => {
        setBookItems(booksData)
    }, [])

    const fetchBookDetails = useCallback((bookData) => {
        setSelectedBook(bookData)
    },[])

    const showQuickView = (id) => {
        setSelectedBook(bookItems.find((book) => book.id === id))
        setQuickIsVisible(true)
    }

    const hideQuickView = useCallback(() => {
        setQuickIsVisible(false)
    }, [])

    const fetchBooksToBag = (books) => {
        setBag(books)
    }

    const addToBag = (bookId) => {
        const existing = bag.find((book) => book.id === bookId)
        if (existing) {
            console.log('Book has already borrowed')
            return
        }

        const borrowedBook = bookItems.find((book) => book.id === bookId)
        //setBag(prevState => [...prevState, borrowedBook])

        setBag(prevState => [...prevState, {
            id: borrowedBook.id,
            images: borrowedBook.volumeInfo.imageLinks,
            title: borrowedBook.volumeInfo.title,
            authors: borrowedBook.volumeInfo.authors,
            isbn: borrowedBook.volumeInfo.industryIdentifiers,
            language: borrowedBook.volumeInfo.language
        }])
        setQuickIsVisible(false)
        setBagChanged(true)
    }
    const removeFromBag = (id) => {
        const updatedBag = bag.filter((book) => book.id !== id)
        setBag(updatedBag)
        setBagChanged(true)
    }
    const resetBag = () => {
        setBag([])
        setBagChanged(true)
    }
    const replaceBag = useCallback((bagData) => {
        setBag(bagData)
    }, [])

    const contextValue = {
        bookItems,
        bag,
        selectedBook,
        quickViewIsVisible,
        fetchAllBooks,
        fetchBookDetails,
        showQuickView,
        hideQuickView,
        addToBag,
        removeFromBag,
        resetBag,
        fetchBooksToBag,
        replaceBag,
        bagChanged
    }

    return (
        <LibraryContext.Provider value={contextValue}>
            {props.children}
        </LibraryContext.Provider>
    )
}