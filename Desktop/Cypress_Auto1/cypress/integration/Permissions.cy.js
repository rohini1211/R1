describe('LoyaltiExpert', function () {
  
    beforeEach(() => {
      
      cy.visit("http://digisol.loyaltyxpert.staging/auth/auth/login")
    cy.get('#user-name').type('ishita.popat@ecosmob.com')
    cy.get('#user-password').type('Test@123')
    cy.get('.btn').click()
      
    cy.get("li[class='nav-item mr-auto']").trigger('mouseover', { force: true }).click({ force: true })
    cy.wait(3000)
    cy.get('[href="/tenant/tenant-role/index"]').click({ force: true })
    cy.wait(3000)
})
it("Action_Edit",()=>
{
  cy.get('#table1>tbody>[data-index="0"]>.text-left.btn-space>.mr-1:first-child').click()
  cy.get("#rolemaster-rm_name").type("Manager",{force:true})
  cy.get("#assigned_pagerole_multiselect").select('Announcement Type-Write',{force:true})
  cy.get("button[value='update']").click() //apply button
  cy.contains("Your change applied successfully.").should("be.visible"); 
  /*cy.get('.btn btn-format-size btn-relief-primary waves-effect waves-light').click()//update button
  cy.contains("Your change applied successfully.").should("be.visible"); */
})

it.skip("Action_Delete",()=>
{
  cy.get('#table1>tbody>[data-index="0"]>.text-left.btn-space>.mr-1:nth-child(2)').click()//delete
  cy.get("#rolemaster-rm_name").type("Manager",{force:true})
  cy.get("#assigned_pagerole_multiselect").select('Announcement Type-Write',{force:true})
  cy.get("button[value='update']").click() //apply button
  cy.contains("Your change applied successfully.").should("be.visible"); 
  /*cy.get('.btn btn-format-size btn-relief-primary waves-effect waves-light').click()//update button
  cy.contains("Your change applied successfully.").should("be.visible"); */
})

it("Add new",()=>
{
cy.get("#hov").click()
//cy.get(".breadcrumb-item.active").should("be.contains","Create Sub User Role ")
cy.get("#rolemaster-rm_name").type("Tester1")
cy.get("#assigned_pagerole_multiselect").select("Announcement Master-Read",{force:true})
cy.get("button[type='submit']").click()
cy.contains("Created Successfully").should("be.visible"); 
})



})
