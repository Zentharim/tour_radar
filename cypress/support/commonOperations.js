const toStrings = (prices) => Cypress._.map(prices, (el) => el.innerText)
const removeEuro = (texts) => Cypress._.map(texts, e => e.replace(/[^0-9.]/g, ''))
const toNumbers = (texts) => Cypress._.map(texts, Number)

const commonOperations = {

    convertElementsToNumbers: Cypress._.flow([toStrings, removeEuro, toNumbers]),

}
export default {...commonOperations}