import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography"
import Button from '@mui/material/Button'
import {Link as RouterLink} from 'react-router-dom'
import emptyBag from '../../../images/emptyBag.jpg'

const EmptyBag = () => {
    return (
        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', my:5}}>
            <img width={150} src={emptyBag} alt='empty bag' />
            <Typography>Your Shopping Bag is Empty</Typography>
            <Button component={RouterLink} to='/books' variant='outlined' sx={{mt:2, borderRadius:50}}>Return to Library</Button>
        </Box>
    )
}
export default EmptyBag