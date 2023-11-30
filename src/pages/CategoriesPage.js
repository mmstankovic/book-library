import LibraryContext from "../store/library-context"
import { useContext, useEffect, useState } from "react"
import QuickLook from '../components/Books/QuickLook'
import LoadingSpinner from "../components/UI/LoadingSpinner"
import BookList from '../components/Books/BookList'
import Categories from "../components/Books/Categories"
import { useParams } from "react-router-dom"

const CategoriesPage = () => {
    const bookLibraryCtx = useContext(LibraryContext)
    const { fetchAllBooks, hideQuickView } = bookLibraryCtx
    const [isLoading, setIsLoading] = useState(false)
    const [httpError, setHttpError] = useState(false)
    const params = useParams()

    const category = params.category || 'computers'
    useEffect(() => {
        const fetchBooksByCat = async () => {
            setIsLoading(true)
            setHttpError(null)
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${category}&maxResults=40`)
            if (!response.ok) {
                throw new Error('Failed to fetch book by category !')
            }
            const data = await response.json()

            fetchAllBooks(data.items)
            setIsLoading(false)

        }
        fetchBooksByCat().catch((err) => {
            setHttpError(err.message)
            setIsLoading(false)
        })
        return () => hideQuickView()

    }, [category, fetchAllBooks, hideQuickView])

    if (isLoading) {
        return <LoadingSpinner />
    }
    if (httpError) {
        return <h1>{httpError}</h1>
    }
    return (
        <>
            {bookLibraryCtx.quickViewIsVisible && <QuickLook />}
            <Categories />
            <BookList />
        </>
    )
}
export default CategoriesPage