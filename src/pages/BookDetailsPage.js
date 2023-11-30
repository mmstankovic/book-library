import Details from '../components/Books/Details'
import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from 'react'
import LibraryContext from "../store/library-context"
import LoadingSpinner from '../components/UI/LoadingSpinner'
import { Typography } from '@mui/material'

const BookDetailsPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const params = useParams()
    const { id } = params

    const bookLibContext = useContext(LibraryContext)

    useEffect(() => {
        const sendRequest = async () => {
            setIsLoading(true)
            setError(null)
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)

            if (!response.ok) {
                throw new Error('Failed to fetch !')
            }
            const data = await response.json()

            bookLibContext.fetchBookDetails(data)
            setIsLoading(false)
        }
        sendRequest().catch(err => {
            setError(err.message)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <LoadingSpinner />
    }
    if (error) {
        return <Typography variant='h6' textAlign='center' sx={{ fontWeight: 'bold', color: '#cb2d3e', mt: 5 }}>{error}</Typography>
    }

    if (bookLibContext.selectedBook) {
        return <Details />
    }

}
export default BookDetailsPage