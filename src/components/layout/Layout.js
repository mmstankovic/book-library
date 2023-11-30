import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './Header'
import Banner from './Banner';
import Footer from './Footer'

const Layout = (props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Banner />
            <Container component='main' maxWidth={false} disableGutters>
                {props.children}
            </Container>
            <Footer />
        </>
    )
}
export default Layout