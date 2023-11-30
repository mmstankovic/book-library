import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useContext } from 'react';
import LibraryContext from '../../store/library-context';
import { Link as RouterLink } from 'react-router-dom'

const Navigation = () => {
    const bookLibraryCtx = useContext(LibraryContext)

    return (
        <Box sx={{ display: { xs: 'none', sm: 'block' }, alignItems: 'center' }}>
            <Link to="/" component={RouterLink} underline="hover" sx={{ m: 1 }}>
                Booklists
            </Link>
            <Link to="/categories" component={RouterLink} underline="hover" sx={{ m: 1 }}>
                Categories
            </Link>
            <Link to='/authors' component={RouterLink} underline="hover" sx={{ m: 1 }}>
                Top Authors
            </Link>
            <IconButton component={RouterLink} to='/bag'>
                <Badge badgeContent={bookLibraryCtx.bag.length} color="error">
                    <ShoppingBagOutlinedIcon color='primary' />
                </Badge>
            </IconButton>
        </Box>
    )
}
export default Navigation