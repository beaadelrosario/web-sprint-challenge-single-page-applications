describe('inputs and go to site', () => {    it('can navigate to the site', () => {

    cy.visit('http://localhost:3000/pizza')

    cy.url().should('include','localhost')
})

it('test name/size/sauces/toppings/instructions inputs', () => {
    cy.get('#customer')
    .type('Izzy Del Rosario')
    .should('have.value', 'Izzy Del Rosario')

    cy.get('#size-dropdown').select('mondo')
    cy.get('#sauces-dropdown').select('marinara')

    cy.get('[type="checkbox"]').check()

    cy.get('#instruct')
    .type('n/a')
    .should('have.value', 'n/a')
})

it('order button is disabled', () => {
    cy.get('#orderBtn').click()
    cy.get('#customer').should('have.value', '')
    cy.get('#size-dropdown').should('not.be.checked')
    cy.get('#sauces-dropdown').should('not.be.checked')
    cy.get('#instruct').should('have.value', '')
})

it('validation', () => {
    cy.get('#customer').type('s {backspace}')
    cy.get('#usererror').should('have.text','Please include your first and last name')

    cy.get('#instruct').type('s {backspace}')
    cy.get('#instructerror').should('have.text','Please write N/A if there are no special instructions needed.')
})

});