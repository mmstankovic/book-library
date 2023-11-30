export const getLanguageName = (code) => {
    const lang = new Intl.DisplayNames(['en'], {type: 'language'});
    return lang.of(code);
}
export const getElementsOfArray = (arr) => {
    const elements = arr.map((el, i) => <span key={i}>{el}{arr.length - 1 === i ? '' : ','} </span>)
    return elements
}
export const checkIfItIsBorrowed = (arr, id) => {
    const borrowed = arr.find((book) => book.id === id)
    return !!borrowed
}