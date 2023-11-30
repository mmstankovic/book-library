import Paper from '@mui/material/Paper'

const imageUrl2 = 'https://images.unsplash.com/photo-1637681068516-2b22116e68cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'

const Banner = () => {
    return (
        <Paper square sx={{
            display: { xs: 'none', sm: 'block' },
            position: 'relative',
            height: '45vh',
            color: '#fff',
            mb: 4,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url(${imageUrl2})`,
            opacity: 0.7
        }}>
        </Paper>
    )
}
export default Banner