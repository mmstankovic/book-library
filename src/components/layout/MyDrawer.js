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

const MyDrawer = ({ handleDrawerToggle }) => {
    const bookLibraryCtx = useContext(LibraryContext)
    return (
        <Box sx={{ height: '100vh', backgroundImage: `url('https://img.freepik.com/free-vector/color-seamless-space-pattern_102902-2360.jpg?w=1380&t=st=1700062051~exp=1700062651~hmac=4bf54c695937839a0fafad68de400e4ffaf628845d7854ad01bfa2235e6bb26d')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
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
            </Box>
        </Box>
    )
}
export default MyDrawer