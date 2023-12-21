import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useContext } from 'react';
import LibraryContext from '../../store/library-context';
import { Link as RouterLink } from 'react-router-dom'
import Brightness6Icon from '@mui/icons-material/Brightness6';

const Navigation = () => {
    const bookLibraryCtx = useContext(LibraryContext)

    const toggleThemeModeHandler = () => {
        bookLibraryCtx.toggleThemeMode()
    }

    return (
        <Box sx={{ display: { xs: 'none', sm: 'block' }, alignItems: 'center' }}>
            <Link to="/" component={RouterLink} underline="hover" sx={{ m: 1, letterSpacing:'1px' }}>
                Booklists
            </Link>
            <Link to="/categories" component={RouterLink} underline="hover" sx={{ m: 1, letterSpacing:'1px' }}>
                Categories
            </Link>
            <Link to='/authors' component={RouterLink} underline="hover" sx={{ m: 1, letterSpacing:'1px' }}>
                Top Authors
            </Link>
            <IconButton component={RouterLink} to='/bag' title='Your bag'>
                <Badge badgeContent={bookLibraryCtx.bag.length} color="error">
                    <ShoppingBagOutlinedIcon color='primary' />
                </Badge>
            </IconButton>
            <IconButton sx={{ml:1.5}} color='primary' title='Toggle light/dark mode' onClick={toggleThemeModeHandler}>
                <Brightness6Icon />
            </IconButton>
        </Box>
    )
}
export default Navigation