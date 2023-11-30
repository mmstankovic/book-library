import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useContext } from 'react'
import LibraryContext from '../../../store/library-context'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import BagItem from './BagItem'
import { getLanguageName } from '../../../helper/helper'
import { Divider } from '@mui/material'
import noImage from '../../../images/noimage.png'
import EmptyBag from './EmptyBag'
import { Link as RouterLink } from 'react-router-dom'
import LoadingSpinner from '../../UI/LoadingSpinner'

const Bag = ({ isLoading, httpError }) => {
  const bookLibraryCtx = useContext(LibraryContext)

  if (isLoading) {
    return <LoadingSpinner />
  }
  if (httpError) {
    return <Typography variant='h5' color='error' align='center' mt={10}>{httpError}</Typography>
  }

  if (bookLibraryCtx.bag.length === 0) {
    return <EmptyBag />
  }

  return (
    <Container maxWidth='md'>
      <Typography variant='h5' align='center' sx={{ mb: 3, letterSpacing: 0.5, color: '#616161', mt: 5 }}>SHOPPING BAG</Typography>
      <TableContainer component={Box}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align='center' sx={{ color: '#616161', letterSpacing: 2 }}>ITEMS</TableCell>
              <TableCell align="right" sx={{ color: '#616161', letterSpacing: 2 }}>ISBN</TableCell>
              <TableCell align="right" sx={{ color: '#616161', letterSpacing: 2 }}>LANGUAGE</TableCell>

              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bookLibraryCtx.bag.map((book) => (
              <BagItem key={book.id} id={book.id} image={book.images ? book.images.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} title={book.title} author={book.authors[0]} isbn={(book.isbn && book.isbn[1] && book.isbn[1].identifier) ? book.isbn[1].identifier : 'ISBN not found'} language={getLanguageName(book.language)} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider sx={{ mb: 10 }} />
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
        <Button component={RouterLink} to='/books' variant="outlined" sx={{ textTransform: 'none', borderRadius: 999 }}>Continue Searcing</Button>
        <Button component={RouterLink} to='/checkout' variant="contained" sx={{ textTransform: 'none', borderRadius: 999 }}>Process Checkout</Button>
      </Box>
    </Container>
  )
}
export default Bag
//<BagItem key={book.id} id={book.id} image={book.images ? book.images.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} title={book.title} author={book.authors[0]} isbn={book.isbn ? book.isbn[0].identifier : 'ISBN not found'} language={getLanguageName(book.language)}/>