import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import { Link as RouterLink } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useContext } from 'react';
import LibraryContext from '../../store/library-context';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined'
import cosmicImg from '../../images/cosmic.jpeg'
import Brightness6Icon from '@mui/icons-material/Brightness6';

const MyDrawer = ({ handleDrawerToggle }) => {
    const bookLibraryCtx = useContext(LibraryContext)

    const toggleThemeModeHandler = () => {
        bookLibraryCtx.toggleThemeMode()
    }

    return (
        <Box sx={{ height: '100vh', backgroundImage: `url(${cosmicImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <Box onClick={handleDrawerToggle} sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <Link style={{ flexGrow: 1 }} underline='none' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, p: 1.5 }}>
                    <LocalLibraryOutlinedIcon color='warning' fontSize='large' />
                    <Typography variant="h6" sx={{ letterSpacing: '1px' }}>COSMIClibrary</Typography>
                </Link>
                <Divider />
                <Link to="/" component={RouterLink} underline="hover" sx={{ letterSpacing: '1px', py: 1, px: 2 }}>
                    Booklists
                </Link>
                <Link to="/categories" component={RouterLink} underline="hover" sx={{ letterSpacing: '1px', py: 1, px: 2 }}>
                    Categories
                </Link>
                <Link to='/authors' component={RouterLink} underline="hover" sx={{ letterSpacing: '1px', py: 1, px: 2 }}>
                    Top Authors
                </Link>
                <IconButton component={RouterLink} to='/bag' sx={{ px: 2 }} >
                    <Typography color='primary' sx={{ letterSpacing: '1px', mr: 1 }}>Your Bag</Typography>
                    <Badge badgeContent={bookLibraryCtx.bag.length} color="error" sx={{
                        '& .MuiBadge-badge': {
                            right: -3,
                            top: 13,
                            border: '2px solid #fff',
                            padding: '0 2px'
                        }
                    }}>
                        <ShoppingBagOutlinedIcon color='primary' fontSize='small' />
                    </Badge>
                </IconButton>
                <IconButton color='primary' title='Toggle light/dark mode' onClick={toggleThemeModeHandler}>
                    <Brightness6Icon />
                </IconButton>
            </Box>
        </Box>
    )
}
export default MyDrawer