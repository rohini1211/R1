describe('JustGitHub', function () {
  
    it("LoyaltiExpert",function ()  {
      
        cy.visit("http://digisol.loyaltyxpert.staging/auth/auth/login")
 
        cy.get('#user-name').should('be.visible').type("ishita.popat@ecosmob.com");
        cy.get('#user-password').should('be.visible').type('Test@123');
        cy.get("button[name='login-button']").click();
    })

})