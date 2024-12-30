import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { useEffect } from 'react'
import useInput from '../../../hooks/useInput'

const isNotEmpty = value => value.trim().length !== 0
const isFive = value => value.trim().length === 5

const AdressForm = ({ onChange }) => {
    const { enteredValue: enteredCity, hasError: cityInputHasError, valueChangeHandler: cityChangeHandler, inputBlurHandler: cityInputBlurHandler } = useInput(isNotEmpty)
    const { enteredValue: enteredProvince, valueChangeHandler: provinceChangeHandler } = useInput(isNotEmpty)
    const { enteredValue: enteredPostalCode, hasError: postalCodeInputHasError, valueChangeHandler: postalCodeChangeHandler, inputBlurHandler: postalCodeInputBlurHandler } = useInput(isFive)

    useEffect(() => {
        const identifier = setTimeout(() => {
            onChange({
                adressInfo: {
                    city: enteredCity,
                    province: enteredProvince,
                    postalCode: enteredPostalCode
                }
            })
        }, 1000)
        return () => clearTimeout(identifier)

    }, [enteredCity, enteredProvince, enteredPostalCode, onChange])
    
    return (
        <>
            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    error={cityInputHasError}
                    label="City"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={enteredCity}
                    onChange={cityChangeHandler}
                    onBlur={cityInputBlurHandler}
                    helperText={cityInputHasError && 'Please enter a City.'}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField

                    label="Province / Region"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={enteredProvince}
                    onChange={provinceChangeHandler}

                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    error={postalCodeInputHasError}
                    required
                    label="Zip / Postal code"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={enteredPostalCode}
                    onChange={postalCodeChangeHandler}
                    onBlur={postalCodeInputBlurHandler}
                    helperText={postalCodeInputHasError && 'Please enter a valid City.'}
                />
            </Grid>
        </>
    )
}
export default AdressForm