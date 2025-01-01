import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import { useContext } from 'react';
import LibraryContext from '../../store/library-context';
import { getLanguageName } from '../../helper/helper'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Stack from '@mui/material/Stack'
import { Link as RouterLink } from 'react-router-dom'
import noImage from '../../images/noimage.png'

const QuickLook = () => {
    const bookLibraryCtx = useContext(LibraryContext)
    const { id } = bookLibraryCtx.selectedBook
    const { imageLinks, title, authors, description, categories, publisher, language, publishedDate } = bookLibraryCtx.selectedBook.volumeInfo
    const borrowed = bookLibraryCtx.bag.find((book) => book.id === id)
    const year = new Date(publishedDate).getFullYear()

    const addBookToBagHandler = (bookId) => {
        bookLibraryCtx.addToBag(bookId)
    }

    return (
        <Dialog
            sx={{
                "& .MuiDialog-container .MuiDialog-paper": {
                    margin: "24px 0px",
                    borderRadius: 0,
                    backgroundColor: '#1F1F1F',
                    color: '#fff'
                }
            }}
            aria-labelledby="customized-dialog-title"
            open={bookLibraryCtx.quickViewIsVisible}>

            <IconButton
                aria-label="close"
                onClick={bookLibraryCtx.hideQuickView}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent sx={{ display: 'flex', gap: 2, p:{xs:'10px',sm:'16px'}}}>
                <Grid container spacing={{ xs: 2, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <Box>
                            <img width='100%' src={imageLinks ? imageLinks.thumbnail : noImage} alt='book cover'/>
                        </Box>
                    </Grid>
                    <Grid item xs={8}>
                        <Box>
                            <Typography variant='h6' sx={{ fontWeight: 600 }} gutterBottom>
                                <Link underline="none" to={`/books/${id}`} component={RouterLink}>{title} <ArrowForwardIosRoundedIcon fontSize='small' sx={{ verticalAlign: 'middle' }} /></Link>
                            </Typography>
                            <Typography sx={{ color: '#8C8C8C' }} mb={{ xs: 0.5, sm: 1 }} variant="body2">
                                Categories: {categories ? (categories.map((category, i) => <span key={category}>{category}{categories.length - 1 === i ? '' : ','} </span>)) : 'Categories not found'}
                            </Typography>
                            <Typography sx={{ color: '#8C8C8C' }} mb={{ xs: 0.5, sm: 1 }} variant="body2">
                                Language: {getLanguageName(language)}
                            </Typography>
                            <Typography sx={{ color: '#8C8C8C' }} mb={{ xs: 0.5, sm: 1 }} variant="body2">
                                Year: {year}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant='body2' sx={{ color: '#8C8C8C' }} gutterBottom>
                                {`${description ? (description.length > 200 ? `${description.substring(0, 200)}...` : description) : 'Description not found'}.`}
                            </Typography>
                        </Box>
                        <Typography variant='subtitle2' sx={{ color: '#8C8C8C' }} gutterBottom>
                            Publisher: {publisher ? publisher : 'Publisher not found'}
                        </Typography>

                        <Box variant='subtitle2' sx={{ display: 'flex', gap: 0.5 }}>
                            <Typography variant='subtitle2' sx={{ color: '#8C8C8C' }}>Authors:</Typography>
                            <Stack direction='row' gap={1}>
                                {authors ? (authors.map((author, i) => (
                                    <Link component={RouterLink} to={`/books?author=${author}`} variant='subtitle2' underline="none" key={i}>{author}{authors.length - 1 === i ? '' : ','}</Link>
                                ))) : <Typography variant='subtitle2' sx={{ color: '#ff9800' }}>Authors not found</Typography>}
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions sx={{ px: 2 }}>
                <Button onClick={() => addBookToBagHandler(id)} disabled={!!borrowed} sx={{
                    '&.Mui-disabled': {
                        color: '#fff'
                    },
                    p:{xs:0, sm:'6px 8px'}
                }}>
                    {borrowed ? 'Borrowed' : 'Borrow'}
                </Button>
                <Button onClick={bookLibraryCtx.hideQuickView} sx={{p:{xs:0, sm:'6px 8px'}}}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default QuickLook