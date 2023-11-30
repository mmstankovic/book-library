import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useContext } from 'react';
import LibraryContext from '../../../store/library-context';

const BagItem = ({id, image, title, author, isbn, language}) => {
    const bookLibraryCtx = useContext(LibraryContext)
    
    const removeItemFromBagHandler = (id) => {
        bookLibraryCtx.removeFromBag(id)
    }
    return (
        <TableRow
        key={id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row" sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <img height='100' src={image} alt='bookcover' />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{fontWeight:500, fontStyle:'italic', color:'#616161'}}>{title}</span>
            <span style={{fontStyle:'italic', color:'#8C8C8C'}}>{author}</span>
          </Box>
        </TableCell>

        <TableCell align="right" sx={{color:'#8C8C8C'}}>{isbn}</TableCell>
        <TableCell align="right" sx={{color:'#8C8C8C'}}>{language}</TableCell>
        <TableCell align="right">
          <Button variant='contained' size='small' color='error' onClick={() => removeItemFromBagHandler(id)} sx={{textTransform:'none', borderRadius:999}}>Remove</Button>
        </TableCell>
      </TableRow>
    )
}
export default BagItem