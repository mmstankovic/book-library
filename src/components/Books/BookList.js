import BookItem from './BookItem'
import Stack from "@mui/material/Stack"
import Divider from "@mui/material/Divider"
import { useContext, useState } from "react"
import LibraryContext from '../../store/library-context'
import Pagination from '@mui/material/Pagination'
import Box from '@mui/material/Box'

const List = () => {
    const bookLibraryCtx = useContext(LibraryContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [booksPerPage] = useState(20)

    const lastIndexOfBook = currentPage * booksPerPage
    const firstIndexOfBook = lastIndexOfBook - booksPerPage
    const currBooks = bookLibraryCtx.bookItems.slice(firstIndexOfBook, lastIndexOfBook)

    const changePageHandler = (e, value) => {
        setCurrentPage(value)
    }

    return (
        <>
            <Stack sx={{ p: 2 }} divider={<Divider orientation="horizontal" flexItem />}>
                {
                    currBooks.map((book, index) => (
                        <BookItem currentPage={currentPage} booksPerPage={booksPerPage} key={index} index={index} id={book.id} authors={book.volumeInfo.authors} categories={book.volumeInfo.categories} description={book.volumeInfo.description} title={book.volumeInfo.title} image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} />
                    ))
                }
            </Stack>
            {currBooks.length !== 0 && <Box sx={{ display: 'flex', justifyContent: 'center', py: 3 }}>
                <Pagination page={currentPage} count={Math.ceil(bookLibraryCtx.bookItems.length / booksPerPage)} onChange={changePageHandler} color="primary" />
            </Box>}
        </>
    )
}
export default List