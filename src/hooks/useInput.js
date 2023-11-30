import { useReducer } from "react"

const initialState = { value: '', isTouched: false }

const inputReducer = (state, action) => {
    if (action.type === 'USER_INPUT') {
        return {
            value: action.val,
            isTouched: state.isTouched
        }
    }
    if (action.type === 'INPUT_BLUR') {
        return {
            value: state.value,
            isTouched: true
        }
    }
    return initialState
}

const useInput = (validateValue) => {
    const [inputState, dispatch] = useReducer(inputReducer, initialState)
    const enteredValueIsValid = validateValue(inputState.value)
    const inputIsInvalid = !enteredValueIsValid && inputState.isTouched

    const valueChangeHandler = (e) => {
        dispatch({ type: 'USER_INPUT', val: e.target.value })
    }
    const inputBlurHandler = (e) => {
        dispatch({ type: 'INPUT_BLUR' })
    }

    return {
        enteredValue: inputState.value,
        enteredValueIsValid,
        hasError: inputIsInvalid,
        valueChangeHandler,
        inputBlurHandler
    }
}
export default useInput