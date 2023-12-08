import Typography from '@mui/material/Typography'
import { useEffect, useState, useContext } from 'react'
import BookList from '../components/Books/BookList'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import LibraryContext from '../store/library-context'
import QuickLook from '../components/Books/QuickLook'

const TopAuthorsPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [httpError, setHttpError] = useState(false)
    const bookLibraryCtx = useContext(LibraryContext)
    const { fetchAllBooks } = bookLibraryCtx

    useEffect(() => {
        const fetchTopAuthors = async () => {
            setHttpError(null)
            setIsLoading(true)

            const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=subject:authors&maxResults=40')
            if (!response.ok) {
                throw new Error('Failed to fetch top authors !')
            }

            const data = await response.json()
            let filteredBooks = []
            for (let i = 0; i < data.items.length; i++) {
                let noRepeat = true
                if (data.items[i].volumeInfo.authors === undefined) continue //IS THIS PATTERN?
                for (let u = 0; u < filteredBooks.length; u++) {
                    if (data.items[i].volumeInfo.authors[0] === filteredBooks[u].volumeInfo.authors[0]) {
                        noRepeat = false
                        break
                    }
                }
                if (noRepeat) {
                    filteredBooks.push(data.items[i])
                }
            }

            fetchAllBooks(filteredBooks)
            setIsLoading(false)
        }
        fetchTopAuthors().catch((err) => {
            setHttpError(err.message)
            setIsLoading(false)
        })
    }, [fetchAllBooks])

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (httpError) {
        return <Typography variant='h6'>{httpError}</Typography>
    }

    return (
        <>
            {bookLibraryCtx.quickViewIsVisible && <QuickLook />}
            <BookList />
        </>
    )
}
export default TopAuthorsPage