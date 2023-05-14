/**
 * @author Matteo Settembrini <m.settembrini@logispin.com>
*/
import tourCollectionDesktop from '../../pages/desktop/tour_collection'
import tourDetailDesktop from '../../pages/desktop/tour_detail'
// import "cypress-real-events/support";

beforeEach(() => {
    cy.visit(Cypress.env('urls')['tour_collection_europe_URL'], {
        onBeforeLoad(win) {
          cy.stub(win, 'open')
        }
    })
}) 
describe('Tour Collection - Tour Details - Logged Out Functionalities', {
    tags: ['desktop', 'live', 'tour_details', 'logged_out'],
    }, () => {   
        
    it("Check each tour detail", function(){
        cy.get(tourCollectionDesktop.tour_details).each($tour_detail => { 
            cy.wrap($tour_detail).within(() => {
                cy.get(tourDetailDesktop.favouriteButton).should('be.visible')
                cy.get(tourDetailDesktop.tourDetailImage).should('be.visible')
                cy.get(tourDetailDesktop.travelStyle).should('be.visible')
                cy.get(tourDetailDesktop.tourName).should('be.visible')
                cy.get(tourDetailDesktop.tourLength).should('be.visible')
                cy.get(tourDetailDesktop.tourLengthLabel).contains(tourDetailDesktop.tourLengthLabelMessage).should('be.visible')
                cy.get(tourDetailDesktop.tourMap).should('be.visible')
                cy.get(tourDetailDesktop.viewTourButton).contains(tourDetailDesktop.viewTourButtonMessage).should('be.visible')
                cy.get(tourDetailDesktop.brochureButton).contains(tourDetailDesktop.brochureButtonMessage).should('be.visible')
            })
        })
    })

    it("View Tour Button", function(){
        cy.get(tourCollectionDesktop.tour_details).first().within(() => {
            cy.get(tourDetailDesktop.viewTourButton).click()
        })
        cy.window().its('open').should('be.called')
    })

    it("Download Brochure Button", function(){
        cy.get(tourCollectionDesktop.tour_details).first().within(() => {
            cy.get(tourDetailDesktop.brochureButton).click()
        })
        cy.get(tourCollectionDesktop.brochure_modal).should('be.visible')
    })

})