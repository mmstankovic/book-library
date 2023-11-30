import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useContext } from 'react'
import LibraryContext from '../../store/library-context'
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import { Link as RouterLink } from 'react-router-dom'
import { getLanguageName, getElementsOfArray, checkIfItIsBorrowed } from '../../helper/helper'
import noImage from '../../images/noimage.png'

const Details = () => {
    const bookLibContext = useContext(LibraryContext)
    const { title, authors, categories, description, industryIdentifiers, imageLinks, language, pageCount, publishedDate, publisher, averageRating } = bookLibContext.selectedBook.volumeInfo
    const { id } = bookLibContext.selectedBook
    const borrowed = checkIfItIsBorrowed(bookLibContext.bag, id)

    const addBookToBagHandler = (id) => {
        bookLibContext.addToBag(id)
    }

    return (
        <Container maxWidth='md'>
            <Grid container spacing={2} mt={3}>
                <Grid item xs={12} sm={3} md={4}>
                    <img width='100%' src={imageLinks ? imageLinks.thumbnail : noImage} alt='greater bookcover' />
                </Grid>
                <Grid item xs={12} sm={9} md={8}>
                    <Typography variant='h5' sx={{ color: '#616161' }}>{title}</Typography>
                    <Typography variant='subtitle1' sx={{ color: '#616161' }} gutterBottom>by {authors ? (authors.map((author, i) => <span key={i}>{author}{authors.length - 1 === i ? '' : ','} </span>)) : 'Auhors not found !'}</Typography>
                    {averageRating && <Box sx={{ display: 'flex', gap: 1, py: 1 }}>
                        <Rating value={averageRating / 2} readOnly />
                        <Typography color='#8C8C8C'>{averageRating}/10</Typography>
                    </Box>}
                    <Typography paragraph color='#8C8C8C' dangerouslySetInnerHTML={{ __html: description }} />
                    <Typography variant='body2' color='#616161' gutterBottom>
                        <strong>Publisher:</strong> {publisher}
                    </Typography>
                    <Typography variant='body2' color='#616161' gutterBottom>
                        <strong>ISBN:</strong> {industryIdentifiers ? (industryIdentifiers.map((isbn, i) => <span key={isbn.identifier}>{isbn.identifier}{industryIdentifiers.length - 1 === i ? '' : ','} </span>)) : <span>ISBN not found</span>}
                    </Typography>
                    <Typography variant='body2' color='#616161' gutterBottom>
                        <strong>Language:</strong> {getLanguageName(language)}
                    </Typography>
                    <Typography variant='body2' color='#616161' gutterBottom>
                        <strong>Year:</strong> {new Date(publishedDate).getFullYear()}
                    </Typography>
                    <Typography variant='body2' color='#616161'>
                        <strong>Pages:</strong> {pageCount}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                        <Typography variant='body2' color='#616161'><strong>Categories:</strong></Typography>
                        {categories ? (<Stack direction='row' spacing={1} useFlexGap flexWrap='wrap'>
                            {categories.map((category) => (
                                <Chip key={category} label={category} variant="outlined" color='warning' size='small' />
                            ))}
                        </Stack>) : <Typography variant='body2'>Categories not found</Typography>}
                    </Box>
                    <Button component={RouterLink} to='/books' size='medium' variant='outlined' sx={{ textTransform: 'none', borderRadius: 999, mr: 1 }}>Back</Button>
                    <Button size='medium' variant='contained' disabled={borrowed} sx={{ borderRadius: 50, textTransform: 'none' }} onClick={() => addBookToBagHandler(id)}>{borrowed ? 'Borrowed' : 'Borrow'}</Button>
                </Grid>
            </Grid>
        </Container>
    )
}
export default Details