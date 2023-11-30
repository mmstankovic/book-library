import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingSpinner = () => {
    return (
        <Box sx={{ display: 'flex', mt:10, justifyContent:'center', alignItems:'center' }}>
            <CircularProgress size={60}/>
        </Box>
    )       
}
export default LoadingSpinner