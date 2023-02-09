/// <reference types="Cypress"/>
/* ==== Test Created with Cypress Studio ==== */
it('demotest', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://demoqa.com/');
  cy.get('.banner-image').click();
  cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg > path').click();
  /* ==== End Cypress Studio ==== */
});
