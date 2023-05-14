/**
 * @author Matteo Settembrini <m.settembrini@logispin.com>
*/
import tourDetailDesktop from '../../pages/desktop/tour_detail'
import sideMenuDesktop from '../../pages/desktop/side_menu'

// import "cypress-real-events/support";

beforeEach(() => {
    /* For mobile visualization
    helpersMobile.mobileLayout(Cypress.env('urls')['tour_collection_europe_URL'])
    */
    cy.visit(Cypress.env('urls')['tour_collection_europe_URL'])
}) 
describe('Tour Collection - Side Menu - Order by', {
    tags: ['desktop', 'live', 'tour_collection', 'filters'],
    }, () => {   
        
    it("Order By Price Per Day", function(){
        cy.get(sideMenuDesktop.orderByDropdown).select("ppdasc").contains("Price/day: Lowest first")

        cy.wait(2000)
        cy.get(tourDetailDesktop.pricePerDay)
        .then((list) => Cypress._.map(list, (el) => el.text()))
        .then((list) => list.map((text) => text.split('€'))[0])
        .then((list) => list.map(parseFloat))
        .then((list) => {
            const sorted = Cypress._.sortBy(list)
            expect(sorted).to.deep.equal(list)
        })
    })

})