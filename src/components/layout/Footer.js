import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';

const Footer = () => {
    return (
        <Box sx={{ py: 6, px:2 }} component="footer">
            <Typography variant="h6" color="text.secondary" align="center" gutterBottom>
                BOOKLIBRARY
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
                mb={2}
                sx={{fontStyle:'italic'}}
            >
                "Today a reader, tomorrow a leader." – Margaret Fuller
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
                    built with <FreeBreakfastOutlinedIcon fontSize='small' color='warning' sx={{verticalAlign:'middle'}}/> by {' '}
                <Link color="inherit" href='https://www.linkedin.com/in/milos-stankovic-705595229/' target='_blank'>
                    <code>medrano</code>
                </Link>{' '}
                <span>|</span>{' '}
                <Link color='inherit' href='https://github.com/mmstankovic' target='_blank'>
                    <code>&lt;/mmstankovic&gt;</code>
                </Link>
            </Typography>
        </Box>
    )
}
export default Footer