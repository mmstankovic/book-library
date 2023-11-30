import IconButton from '@mui/material/IconButton'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useContext } from 'react';
import LibraryContext from '../../store/library-context';
import {getElementsOfArray} from '../../helper/helper'
import Link from '@mui/material/Link'
import {Link as RouterLink} from 'react-router-dom'

const BookItem = ({authors, categories, title, image, index, id, currentPage, booksPerPage}) => {
    const bookLibraryCtx = useContext(LibraryContext)

    const showQuickViewHandler = (id) => {
        bookLibraryCtx.showQuickView(id)
    }
    
    return (
        <Box sx={{ display: 'flex', alignItems:'center', justifyContent:'space-between' }} py={{sm:0.5}}>
            <Box sx={{display:'flex', alignItems:'center'}}>
                <Box sx={{display:'flex', alignItems:'center', mr:2}}>
                    <img style={{ maxWidth: '72px' }} src={image} alt='bookcover' />
                </Box>
                <Box>
                    <Typography variant='subtitle1' sx={{fontWeight:500}}>
                       <Link to={`/books/${id}`} underline='none' component={RouterLink} color='#616161'>{(currentPage === 1 ? (index + 1) : currentPage*(booksPerPage / 2) + (index + 1)) + '. ' + title}</Link>
                    </Typography>
                    <Typography variant='body2' sx={{fontStyle:'italic', color:'#8C8C8C'}}>
                        {authors ? getElementsOfArray(authors) : 'Authors not found'}
                    </Typography>
                    <Typography variant='body2' sx={{fontStyle:'italic', color:'#8C8C8C'}}>
                        Categories: {categories ? getElementsOfArray(categories) : 'Categories not found'}
                    </Typography>
                </Box>
            </Box>
            <Box>
                <IconButton onClick={() => showQuickViewHandler(id)}>
                    <InfoOutlinedIcon color='primary'/>
                </IconButton>
            </Box>
        </Box>
    )
}
export default BookItem