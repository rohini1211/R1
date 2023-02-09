describe('LoyaltiExpert', function () {
  
    beforeEach(() => {
      
      cy.visit("http://digisol.loyaltyxpert.staging/auth/auth/login")
    cy.get('#user-name').type('ishita.popat@ecosmob.com')
    cy.get('#user-password').type('Test@123')
    cy.get('.btn').click()
      
    cy.get("li[class='nav-item mr-auto']").trigger('mouseover', { force: true }).click({ force: true })
    cy.wait(3000)
    cy.get('[href="/salesusertype/sales-user-type-master/index"]').click({ force: true })
    cy.wait(3000)

    })

    it("Add New",()=>
    {
        cy.get(".breadcrumb-item.active").should("be.visible")
        cy.get("#hov").should("be.visible")
        cy.get("#hov").click()
        cy.get("#salesusertypemaster-sales_user_type_name").type("Rohini1")
        //cy.get("#select2-tenant_master_search_user_gender-container").click().get("select2-tenant_master_search_user_gender-container")
        cy.get("#tenant_master_search_user_gender").select("test 11",{force:true})
        cy.get("button[type='submit']").click()
    })

    it("Search By User Type",()=>
    {
      cy.get("#headingSearch").click()
      cy.get("#select2-salesusertypemastersearch-sales_user_type_name-container").click().get("#salesusertypemastersearch-sales_user_type_name").select("test 11",{force:true})
      //serach by user type
      cy.get("button[type='submit']").click() //click on search 
     // select2-salesusertypemastersearch-sales_user_type_status-container

    })
    it("Search By Status",()=>
    {
      cy.get("#headingSearch").click()
      cy.get("#select2-salesusertypemastersearch-sales_user_type_status-container").click().get("#salesusertypemastersearch-sales_user_type_status").select("Inactive",{force:true})
      //serach by user type
      cy.get("button[type='submit']").click() //click on search 
    })
    it ("Validation Of UserType Page",()=>
    {
      cy.get("em[data-placement='left']").should("be.visible")
      cy.get("#hov").should("be.visible") //add new button
      cy.get("#headingSearch").should("be.visible") //search button
      cy.get(".btn.btn-default.dropdown-toggle").should("be.visible") //coulumn selection
      cy.get("#change-records-per-page").should("be.visible") //no of record per page visibility
      cy.get("div[class='pull-left d-none d-lg-block'] div[class='summary']").should("be.visible") 
     
    })

  it("Edit Actions On Usertype",()=>
  {
    cy.get('#table1>tbody>[data-index="0"]>.text-center.btn-space>.mr-1:first-child').click()
    cy.get(".breadcrumb-item.active").should("be.contain","Update User Type") //update user type validation
    cy.get('#select2-tenant_master_search_user_gender-container').click().get("#tenant_master_search_user_gender").select("Level 1",{force:true})
    //cy.get('#select2-tenant_master_search_user_gender-container').select("Level 1",{force:true})
    cy.get("button[type='submit']").click()// click on update
    cy.contains("Updated Successfully.").should("be.visible");
  })
  it("Delete Actions On Usertype",()=>
  {
    cy.get('#table1>tbody>[data-index="0"]>.text-center.btn-space>.mr-1:nth-child(2)').click()
    cy.contains("Are you sure ?").should("be.visible"); //update user type validation
   cy.get('#deleteUserType').click()// clcik on delete
    //cy.get("button[class='btn btn-secondary waves-effect waves-light']").click() //clcicking on close/cancel
    cy.contains("Removed Successfully.").should("be.visible");

  })
   
})

    