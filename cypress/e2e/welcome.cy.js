describe('Verifying tha our page is LIVE', () => {

  it('it visits the live app', () => {
    cy.visit('https://secure2.vercel.app/')
    cy.contains('EDO STATE SECURITY SUMMIT').should('be.visible')
    
  })
})