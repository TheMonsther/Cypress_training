describe('Search car filling the minimum necessary info', () => {
  it('Visits the Car Rent', () => {
    cy.visit('http://qalab.pl.tivixlabs.com/')
  })
  it('Fill the date fields', () => {
    cy.contains('pickup')

	cy.get('#pickup')
      .type('2022-01-01')
      .should('have.value', '2022-01-01')
	  
	cy.get('#dropoff')
      .type('2022-12-01')
      .should('have.value', '2022-12-01')
  })
  
  it('Click to search', () => {
    cy.get('.btn').click()
  })
  
  it('Check if the search is showing results', () => {
    cy.get('#search-results').should('be.visible')
  })
})


describe('Rent a car from  Cracow - Poland for 2 days', () => {
  it('Visits the Car Rent', () => {
    cy.visit('http://qalab.pl.tivixlabs.com/')
  })
  it('Fill the fields', () => {
    cy.contains('pickup')
	
	cy.get('#country')
      .select('1')
      .should('have.value', '1')
	  
	cy.get('#city')
      .select('2')
      .should('have.value', '2')

	cy.get('#pickup')
      .type('2022-06-15')
      .should('have.value', '2022-06-15')
	  
	cy.get('#dropoff')
      .type('2022-06-17')
      .should('have.value', '2022-06-17')
  })
  
  it('Click to search', () => {
    cy.get('.btn').click()
  })
  
  it('Check if the search is showing results', () => {
    cy.get('#search-results').should('be.visible')
  })
  
  it('Rent the fist car in the list', () => {
    cy.get('#search-results')
	  .get('[href="/details/2"].btn').click()
  })
  
  it('Check if a car was rented', () => {
    cy.contains('Price per day')
  })
})

describe('Try to rent a car writing wrong data range in date fields', () => {
  it('Visits the Car Rent', () => {
    cy.visit('http://qalab.pl.tivixlabs.com/')
  })
  it('Fill the fields', () => {
    cy.contains('pickup')
	
	cy.get('#country')
      .select('3')
      .should('have.value', '3')
	  
	cy.get('#city')
      .select('3')
      .should('have.value', '3')
	  
	cy.get('#pickup')
      .type('2022-06-15')
      .should('have.value', '2022-06-15')
	  
	cy.get('#dropoff')
      .type('2022-06-14')
      .should('have.value', '2022-06-14')
  })
  
  it('Click to search', () => {
    cy.get('.btn').click()
  })
  
  it('Check if the validation works', () => {
    cy.get('*[class^="alert"]').contains('Please enter a valid date!')
  })
})