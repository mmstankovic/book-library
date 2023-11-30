import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const SearchBook = ({ fetchBooksData }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const [searchParams, setSearchParams] = useSearchParams()//
    const param = searchParams.get('author')

    const valueChangeHandler = (e) => {
        setSearchTerm(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        fetchBooksData(searchTerm)
        setSearchTerm('')

        if (param) {
            searchParams.delete('author')
            setSearchParams(searchParams)
        }
    }
    return (
        <Container maxWidth='sm'>
            <FormControl fullWidth variant="outlined" sx={{ my: 5 }}>
                <InputLabel>Search for title, author, ISBN, publisher...</InputLabel>
                <OutlinedInput
                    value={searchTerm}
                    onChange={valueChangeHandler}
                    sx={{ bgcolor: 'background.paper' }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={submitHandler}
                                edge="end"
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Search for title, author, ISBN, publisher..."
                />
            </FormControl>
        </Container>
    )
}
export default SearchBook