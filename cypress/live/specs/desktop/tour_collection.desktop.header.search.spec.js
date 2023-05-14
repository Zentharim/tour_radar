/**
 * @author Matteo Settembrini <m.settembrini@logispin.com>
*/
import searchModalElements from '../../pages/desktop/search_modal'
import headerElements from '../../pages/desktop/header'
import genericUtils from '../../utils/generic'
import helpersMobile from '../../../support/helpersMobile'
// import "cypress-real-events/support";

beforeEach(() => {
    /* For mobile visualization
    helpersMobile.mobileLayout(Cypress.env('urls')['tour_collection_europe_URL'])
    */
   cy.visit(Cypress.env('urls')['tour_collection_europe_URL'])
   let searchElement = genericUtils.search_term
   cy.get(headerElements.searchBar).should('be.visible').should('have.attr', 'placeholder', headerElements.searchBarPlaceholder)
   cy.get(headerElements.searchBar).click().type(searchElement)
}) 
describe('Tour Collection - Header - Search', {
    tags: ['desktop', 'live', 'header', 'search'],
    }, () => {   
        
    it("Check search results", function(){
        cy.get(searchModalElements.grouping_one).contains(searchModalElements.grouping_one_label).should('be.visible')
        cy.get(searchModalElements.grouping_two).contains(searchModalElements.grouping_two_label).should('be.visible')
        cy.get(searchModalElements.grouping_three).contains(searchModalElements.grouping_three_label).should('be.visible')
        
        cy.get(searchModalElements.list_elements).each($list_element=> { 
            cy.wrap($list_element).within(() => {
                cy.get($list_element).contains(genericUtils.search_term)
            })
        })
    })
/*
    it("Check redirection", function(){
        // TODO: Check
        cy.get(searchModalElements.list_elements).first().its('prop', 'data-url-alternative').then((url_postfix) => {
            cy.wrap(url_postfix).as('url_postfix')
        })
        cy.get(searchModalElements.list_elements).first().click()
        cy.get('@url_postfix').then(url_postfix => {
            cy.location('pathname').should('include', url_postfix)
        })
    })
*/
    it("Check See all Results", function(){
        cy.get(searchModalElements.list_elements).last().contains(searchModalElements.search_all + '"' + genericUtils.search_term + '"').click()
        cy.url().should('include', "search?q="+genericUtils.search_term)
    })
})