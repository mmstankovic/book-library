import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined'
import Navigation from './Navigation'
import Link from '@mui/material/Link'
import { Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import { Link as RouterLink } from 'react-router-dom'
import { useState } from 'react'
import MyDrawer from './MyDrawer'

const Header = (props) => {
    const { window } = props
    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <CssBaseline />
            <AppBar position="static" color="default">
                <Toolbar sx={{ flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon fontSize='large' color='primary' />
                    </IconButton>
                    <Link component={RouterLink} to='/books' underline='none' sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 1 }}>
                        <LocalLibraryOutlinedIcon color='warning' fontSize='large' />
                        <Typography variant="h6" sx={{ letterSpacing: '1px' }}>COSMIClibrary</Typography>
                    </Link>
                    <Navigation />
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 260 },
                    }}
                >
                    <MyDrawer handleDrawerToggle={handleDrawerToggle} />
                </Drawer>
            </nav>
        </>
    )
}
export default Header