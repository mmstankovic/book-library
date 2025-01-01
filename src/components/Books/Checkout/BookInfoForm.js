import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { useEffect } from 'react'
import useInput from '../../../hooks/useInput'

const moreThenSix = value => value.trim().length > 6
const isEmail = value => value.includes('@')

const BookInfoForm = ({onChange}) => {
    const { enteredValue: enteredName, enteredValueIsValid: nameIsValid, hasError: nameInpuHasError, valueChangeHandler: nameChangeHandler, inputBlurHandler: nameInputBlurHandler } = useInput(moreThenSix)
    const { enteredValue: enteredLibraryId, enteredValueIsValid: libraryIdIsValid, hasError: libraryIdInputHasError, valueChangeHandler: libraryIdChangeHandler, inputBlurHandler: libraryIdInputBlurHandler } = useInput(moreThenSix)
    const { enteredValue: enteredEmail, enteredValueIsValid: emailIsValid, hasError: emailInputHasError, valueChangeHandler: emailChangeHandler, inputBlurHandler: emailInputBlurHandler } = useInput(isEmail)
    const { enteredValue: enteredPhoneNum, enteredValueIsValid: phoneNumIsValid, hasError: phoneNumInputHasError, valueChangeHandler: phoneNumChangeHandler, inputBlurHandler: phoneNumInputBlurHandler } = useInput(moreThenSix)
    let bookInfoFilled = nameIsValid && libraryIdIsValid && emailIsValid && phoneNumIsValid
    
    useEffect(() => {
        const bookIdentifier = setTimeout(() => {
            onChange({
                bookInfo: {
                    fullName: enteredName,
                    libraryId: enteredLibraryId,
                    email: enteredEmail,
                    phoneNumber: enteredPhoneNum,
                    bookInfoFilled
                }
            })
        }, 1000)
        return () => clearTimeout(bookIdentifier)
    }, [enteredName, enteredLibraryId, enteredEmail, enteredPhoneNum, bookInfoFilled, onChange])

    return (
        <>
            <Grid item xs={12} sm={6}>
                <TextField
                    error={nameInpuHasError}
                    required
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={enteredName}
                    onChange={nameChangeHandler}
                    onBlur={nameInputBlurHandler}
                    helperText={nameInpuHasError && 'Please enter your full name.'}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    error={libraryIdInputHasError}
                    required
                    label="Member ID"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={enteredLibraryId}
                    onChange={libraryIdChangeHandler}
                    onBlur={libraryIdInputBlurHandler}
                    helperText={libraryIdInputHasError && 'Please enter your member id.'}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    error={emailInputHasError}
                    required
                    label="Email"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={emailInputBlurHandler}
                    helperText={emailInputHasError && 'Please enter your email address.'}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    error={phoneNumInputHasError}
                    required
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={enteredPhoneNum}
                    onChange={phoneNumChangeHandler}
                    onBlur={phoneNumInputBlurHandler}
                    helperText={phoneNumInputHasError && 'Please enter your phone number.'}
                />
            </Grid>
        </>
    )
}
export default BookInfoForm