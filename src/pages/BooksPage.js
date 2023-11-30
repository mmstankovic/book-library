import BookList from "../components/Books/BookList"
import { useEffect, useContext, useState, useCallback } from "react"
import LibraryContext from '../store/library-context'
import LoadingSpinner from "../components/UI/LoadingSpinner"
import { Typography } from "@mui/material"
import SearchBook from "../components/Books/SearchBook"
import QuickLook from '../components/Books/QuickLook'
import { useSearchParams } from "react-router-dom"

const BooksPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [httpError, setHttpError] = useState(false)
    const bookLibraryCtx = useContext(LibraryContext)
    const { fetchAllBooks, hideQuickView } = bookLibraryCtx
    const [searchParams] = useSearchParams()
    const param = searchParams.get('author')

    const fetchBooksData = useCallback((searchTerm) => {
        const sendRequest = async () => {
            setHttpError(false)
            setIsLoading(true)
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=40`)

            if (!response.ok) {
                throw new Error('Failed to fetch !')
            }

            const data = await response.json()

            fetchAllBooks(data.items)
            setIsLoading(false)

        }
        try {
            sendRequest()
        } catch (err) {
            setIsLoading(false)
            setHttpError(err.message)
        }
    }, [fetchAllBooks])

    useEffect(() => {
        fetchBooksData(param || 'Hercul Poirot')//

        return () => {
            hideQuickView()
        }
    }, [param, fetchBooksData, hideQuickView])

    if (isLoading && !httpError) {
        return <LoadingSpinner />
    }
    if (!isLoading && httpError) {
        return <Typography variant='subtitle1'>{httpError}</Typography>
    }

    return (
        <>
            {bookLibraryCtx.quickViewIsVisible && <QuickLook />}
            <SearchBook fetchBooksData={fetchBooksData} />
            <BookList />
        </>
    )
}
export default BooksPage