import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { useEffect } from 'react'
import useInput from '../../../hooks/useInput'

const moreThenSix = value => value.trim().length > 6

const BookInfoForm = ({onChange}) => {
    const { enteredValue: enteredName, enteredValueIsValid: nameIsValid, hasError: nameInpuHasError, valueChangeHandler: nameChangeHandler, inputBlurHandler: nameInputBlurHandler } = useInput(moreThenSix)
    const { enteredValue: enteredLibraryId, enteredValueIsValid: libraryIdIsValid, hasError: libraryIdInputHasError, valueChangeHandler: libraryIdChangeHandler, inputBlurHandler: libraryIdInputBlurHandler } = useInput(moreThenSix)
    const { enteredValue: enteredTitle, enteredValueIsValid: titleIsValid, hasError: titleInputHasError, valueChangeHandler: titleChangeHandler, inputBlurHandler: titleInputBlurHandler } = useInput(moreThenSix)
    const { enteredValue: enteredAuthor, enteredValueIsValid: authorIsValid, hasError: authorInputHasError, valueChangeHandler: authorChangeHandler, inputBlurHandler: authorInputBlurHandler } = useInput((value) => value.trim().length !== 0)
    let bookInfoFilled = nameIsValid && libraryIdIsValid && titleIsValid && authorIsValid
    
    useEffect(() => {
        const bookIdentifier = setTimeout(() => {
            onChange({
                bookInfo: {
                    fullName: enteredName,
                    libraryId: enteredLibraryId,
                    bookTitle: enteredTitle,
                    bookAuthor: enteredAuthor,
                    bookInfoFilled
                }
            })
        }, 1000)
        return () => clearTimeout(bookIdentifier)
    }, [enteredName, enteredLibraryId, enteredTitle, enteredAuthor, bookInfoFilled, onChange])

    return (
        <>
            <Grid item xs={12} sm={6}>
                <TextField
                    error={nameInpuHasError}
                    required
                    label="Fullname"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={enteredName}
                    onChange={nameChangeHandler}
                    onBlur={nameInputBlurHandler}
                    helperText={nameInpuHasError && 'Please enter your fullname.'}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    error={libraryIdInputHasError}
                    required
                    label="Library Id"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={enteredLibraryId}
                    onChange={libraryIdChangeHandler}
                    onBlur={libraryIdInputBlurHandler}
                    helperText={libraryIdInputHasError && 'Please enter your library Id.'}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    error={titleInputHasError}
                    required
                    label="Title of Book"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                    onBlur={titleInputBlurHandler}
                    helperText={titleInputHasError && 'Please enter title of book.'}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    error={authorInputHasError}
                    required
                    label="Author of Book"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={enteredAuthor}
                    onChange={authorChangeHandler}
                    onBlur={authorInputBlurHandler}
                    helperText={authorInputHasError && 'Please enter author of book.'}
                />
            </Grid>
        </>
    )
}
export default BookInfoForm