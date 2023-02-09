describe('JustGitHub', function () {
  
    it("DummyLogin",function ()  {
      
        cy.visit("https://practicetestautomation.com/practice-test-login/")
 
        cy.get('#username').should('be.visible').type("student");
        cy.get('#password').should('be.visible').type('Password123');
        cy.get("#submit").click();
    })

})