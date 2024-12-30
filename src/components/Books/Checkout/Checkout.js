import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button'
import { useState, useContext, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import BookInfoForm from './BookInfoForm'
import AdressInfoForm from './AdressInfoForm'
import SuccessMessage from '../../UI/SuccessMessage'
import LibraryContext from '../../../store/library-context'
import booksStack from '../../../images/books-stack.png'

const Checkout = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [isItAccepted, setIsItAccepted] = useState(false)
    const bookLibraryCtx = useContext(LibraryContext)
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        bookInfo: {},
        adressInfo: {}
    })
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
        navigate('/books')
    }

    const changeFormDataHandler = useCallback((newData) => {
        setFormData((prevState) => ({...prevState, ...newData}))
    },[])

    const checkInputHandler = (e) => {
        setIsChecked(prevState => !prevState)
    }
    const checkIsItAcceptedHanlder = () => {
        setIsItAccepted(prevAccState => !prevAccState)
    }

    let formIsValid = formData.bookInfo.bookInfoFilled && isItAccepted

    const checkoutHandler = (e) => {
        e.preventDefault()

        if (!formIsValid) {
            console.log('Form is not valid!')
            return
        }
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: Math.floor(Math.random() * 1000) + 1,
                name: formData.bookInfo.fullName,
                libraryId: formData.bookInfo.libraryId,
                bookAuthor: formData.bookInfo.bookAuthor,
                bookTitle: formData.bookInfo.bookTitle
            })
        })
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            if (data.name) {
                bookLibraryCtx.resetBag()
                setOpen(true)
                setIsChecked(false)
            }
            console.log(data)
        })
    }

    if (open) {
        return <SuccessMessage open={open} handleClose={handleClose} />
    }

    return (
        <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
            <Paper variant='outlined' sx={{ my: { xs: 3, sm: 6 }, p: { xs: 2, sm: 3 } }}>
                <Typography variant="h5" align="center" sx={{ mb: 3, letterSpacing: 0.5, color: '#616161' }}>
                    COSMIC LIBRARY CHECKOUT
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom:'1rem' }}>
                    <img width='250' src={booksStack} alt='book stack illustration' />
                </Box>
                <Grid container spacing={3}>
                    <BookInfoForm onChange={changeFormDataHandler} />
                    {isChecked && <AdressInfoForm onChange={changeFormDataHandler} />}
                    <Grid item xs={12}>
                        <FormControlLabel
                            value={isChecked}
                            onChange={checkInputHandler}
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label={<Typography sx={{ fontSize: 12 }}>I don't want to take my books personally.</Typography>}
                        />
                        <FormControlLabel
                            required
                            value={isItAccepted}
                            onChange={checkIsItAcceptedHanlder}
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label={<Typography sx={{ fontSize: 12 }}>I understand that I must keep this book in good condition and return it to the "Book Return" box with my name on it (use a sticky note) when I am done with it.</Typography>}
                        />
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button disabled={!formIsValid} variant='contained' sx={{ mt: 3 }} onClick={checkoutHandler}>Submit</Button>
                </Box>
            </Paper>
        </Container>
    )
}
export default Checkout