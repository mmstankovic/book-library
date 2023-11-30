import Layout from "./components/layout/Layout";
import { useContext, useEffect, useState } from 'react'
import LibraryContext from "./store/library-context";
import { Routes, Route, Navigate } from 'react-router-dom'
import BooksPage from "./pages/BooksPage";
import BookDetailsPage from './pages/BookDetailsPage'
import CheckoutPage from "./pages/CheckoutPage";
import CategoriesPage from "./pages/CategoriesPage";
import TopAuthorsPage from './pages/TopAuthorsPage'
import BagPage from "./pages/BagPage";
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const bookLibContext = useContext(LibraryContext)
  const { replaceBag } = bookLibContext
  const [isLoading, setIsLoading] = useState(false)
  const [httpError, setHttpError] = useState(false)

  useEffect(() => {
    const fetchBooksFromBag = async () => {
      setIsLoading(true)
      setHttpError(null)
      const response = await fetch('https://http-star-wars-default-rtdb.firebaseio.com/bags.json')
      if (!response.ok) {
        throw new Error('Fetch books from bag failed !')
      }
      const data = await response.json()
      let bookBags = []
      for (let key in data) {
        bookBags.push({
          id: data[key].id,
          title: data[key].title,
          authors: data[key].authors,
          isbn: data[key].isbn,
          language: data[key].language,
          images: data[key].images
        })
      }

      replaceBag(bookBags)
      setIsLoading(false)
    }
    fetchBooksFromBag().catch((err) => {
      setHttpError(err.message)
      setIsLoading(false)
      console.log(err.message)
    })
  }, [replaceBag])

  useEffect(() => {
    const sendBooksToBag = async () => {
      setHttpError(null)
      const response = await fetch('https://http-star-wars-default-rtdb.firebaseio.com/bags.json', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookLibContext.bag)
      })
      if (!response.ok) {
        throw new Error('Sending book to bag failed !')
      }
    }
    if (bookLibContext.bagChanged) {
      sendBooksToBag().catch((err) => {
        setHttpError(err.message)
      })
    }

  }, [bookLibContext.bagChanged, bookLibContext.bag])

  const theme = createTheme({
    palette: {
      background: {
        default: '#F5F5F5'
      }
    }
  })
  
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to='/books' replace />} />
          <Route path='/books' element={<BooksPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path='/categories/:category' element={<CategoriesPage />} />
          <Route path='/authors' element={<TopAuthorsPage />} />
          <Route path='/books/:id' element={<BookDetailsPage />} />
          <Route path='/bag' element={<BagPage isLoading={isLoading} httpError={httpError} />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}
export default App;