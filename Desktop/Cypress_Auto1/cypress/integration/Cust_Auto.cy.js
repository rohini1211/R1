//const { it } = require("mocha")
import 'cypress-file-upload'

describe('LoyaltiExpert', function () {
  
  beforeEach(() => {
    cy.Login_User('ishita.popat@ecosmob.com','Test@123');
    cy.get('#tour-company-name > :nth-child(1) > .nav-item > .nav-link').click()
    cy.get(':nth-child(11) > [href="javascript:void(0)"]').click({force:true})
    cy.get('.open > .menu-content > :nth-child(1) > a').click({ force: true })
 });



  /*beforeEach("Login", () => {
    cy.visit("http://digisol.loyaltyxpert.staging/auth/auth/login")
    cy.get('#user-name').type('ishita.popat@ecosmob.com')
    cy.get('#user-password').type('Test@123')
    cy.get('.btn').click()
    cy.get("li[class='nav-item mr-auto']").trigger('mouseover', { force: true }).click({ force: true })
    cy.wait(3000)
    cy.get("span[data-i18n='Customers']").click({ force: true })
    cy.wait(3000)

    cy.get('#tour-company-name > :nth-child(1) > .nav-item > .nav-link').click()
    cy.get(':nth-child(11) > [href="javascript:void(0)"]').click({force:true})*/
    //cy.get('.open > .menu-content > :nth-child(1) > a').click({ force: true })

 // })*/
  
  it('Verify the Create_User Functionality', function () {

    cy.get('[href="/customer/customer-master/create"]').click() 
    //cy.get('.card-header > .btn-primary').click()
    cy.get('#customermaster-cust_mobile_number').type('9876543210')

    cy.get('#customermaster-cust_first_name').type("Rohini")
    cy.get('#customermaster-cust_last_name').type("Kamble")
    cy.get('#customermaster-cust_birthdate').click();
    cy.get("input[title='Scroll to increment']").type("1989", { force: true })

    /*cy.get('#customermaster-cust_birthdate".flatpickr-input').then($el => {
     $el.get(0)._flatpickr.setDate(15, true)})*/



    /*cy.get(".cur-month").click({force: true}).should(($div) =>{
     expect($div.text()).equal("march")
    })*/
    /*recurse(
      ()=> cy.get('.cur-month').invoke("text"),
      (n)=>{

      if(!n.includes!=("March"))
      {
        cy.get(".flatpickr-prev-month").click()
        return false
      }
      cy.contains(".flatpickr-days","12").click()
      return true;
                }, {limit: 12
                } )*/

    cy.get('.field-tenant_master_search_user_gender > .select2-container > .selection > .select2-selection')
      .click().get('#tenant_master_search_user_gender').select("Female", { force: true })
    cy.get('#select2-tenant_master_search_user_marital_status-container').click().get("#tenant_master_search_user_marital_status").select("Married", { force: true })
    cy.get('#customermaster-alternate_mobile_number').type('1212121212')
    cy.get('#customermaster-cust_email_id').type('abcd@ecosmob.com')
    cy.get('#customermaster-cust_address').type("ABC Chowk, Pune")
    cy.get('#select2-customermaster-country_id-container').click().get('#customermaster-country_id').select("India", { force: true })
    cy.get('#select2-customermaster-country_id-container').click().get('#customermaster-state_id').select("Maharashtra", { force: true })
    cy.get('#select2-customermaster-city_id-container').click().get('#customermaster-city_id').select("Pune", { force: true })
    cy.get('#customermaster-cust_postal_code').type('415004')
    cy.get('#select2-customermaster-cust_category_id-container').click().get('#customermaster-cust_category_id').select("test1", { force: true })
    //cy.get('#select2-customermaster-cust_config_group_id-container').click().get('#customermaster-cust_config_group_id').select("test5",{force: true})
    cy.get('.form-control[name="CustomerMaster[cust_company_name]"]').type('Ecosmob pvt.ltd')
    cy.get('.form-control[name="CustomerMaster[cust_gst_number]"]').type('ECOS12345')
    cy.get('#select2-customermaster-cust_status-container').click().get('#customermaster-cust_status').select("Active", { force: true })
    cy.get('#select2-customermaster-sales_user_member_id-container').click().get('#customermaster-sales_user_member_id').select("Leader 22", { force: true })
    cy.get('#is_verified').check()
    //cy.get('button[type="submit"]').click() // for submit button
    cy.get('.btn.btn-format-size.btn-relief-danger.waves-effect.waves-light').click() //for cancel button

})
  /*cy.get('.flatpickr-month').contains('March 2016').click();  
   // now select the month
  cy.get('.cur-month').contains('March').click()
  cy.get('.numInput.cur-year').contains('2016').click()
  
  get('.flatpickr-calendar.arrowBottom.open').click()
  cy.get('.flatpickr-prev-month').click()   // for the previous months
  cy.get('.flatpickr-next-month').click() //for next month
  cy.get("span[title='Scroll to increment']").click() //for actual month
  cy.get("input[title='Scroll to increment']").click() //for year
  cy.get('.numInput').click()*/

  it("Verify the Back link of Customers Dashborad", function () {

    cy.get('.card-header > .btn-primary').click()
    cy.get("div[class='content-wrapper'] li:nth-child(2) a:nth-child(1)").click()
    // for going back on customers page
  })

  it("Verify the Customers Page", function () {

    cy.title().should('include', 'Customers')// verify it visits Customers_Page only
  })

  it("Verify the Different options display on Customers Page", function () {
    cy.get("#table1").should("be.visible")// table visibility
    cy.get(".footer.footer-static.footer-light.d-none.d-lg-block").should('be.visible') //footer visibility
    cy.get('#headingSearch').should("be.visible") //search option visibility
    cy.get(".btn-outline-primary.btn-sm.dropdown-toggle.text-bold-700.top-margin").should("be.visible") //Action button visibility

    cy.get('.pagination').should("be.visible")// all the page no list should be visible


  })
  it("Action_Button_Trashed_Functionality", () => {

    cy.get(".btn-outline-primary.btn-sm.dropdown-toggle.text-bold-700.top-margin").click()
    cy.wait(2000)
    cy.get('.dropdown-item').contains('Trashed').click()
    cy.get(".btn-primary.btn-sm.text-bold-700[href='/customer/customer-master/export-trashed']").should("be.visible")// In trashed Export button visibility
    cy.get('#hov').click()
    cy.get(".breadcrumb-item.active").should("be.visible")//customers heading is visible or not
    cy.get('.btn-outline-primary').click()
  })

  it("Action Button Export Functionality", () => {
    cy.get(".btn-outline-primary.btn-sm.dropdown-toggle.text-bold-700.top-margin").click()
    cy.wait(2000)
    cy.get('.dropdown-item').contains('Export').click()
    cy.get('strong:nth-child(1)').should("have.contain", "Export is in progress")// text validation
    cy.get(".btn-outline-primary.btn-sm.dropdown-toggle.text-bold-700.top-margin").click()
  })
  it("Action Button Import Functionality", () => {
    cy.get(".btn-outline-primary.btn-sm.dropdown-toggle.text-bold-700.top-margin").click()
    cy.wait(2000)
    cy.get('.dropdown-item').contains('Import').click()
    cy.get("#customermaster-importfileupload").attachFile("demo1.csv")
    //cy.get("button[type='submit']").click()
    cy.wait(3000)
    cy.get("label[for='customermaster-importfileupload']").should("have.contain", "Import File Upload")//validate the text
    cy.get("button[type='submit']").click() //upload button
    cy.get('.btn.btn-format-size.btn-relief-danger.waves-effect.waves-light').click() //cancel button functionality check

    cy.get('.btn-outline-primary').click() //Action button
    cy.wait(2000)
  })
  /*cy.get('.dropdown-item').contains('Assign Conf. Group').invoke('removeAttr', 'target').click()
  //cy.get("http://digisol.loyaltyxpert.staging/configurationgroups/configuration-groups/assign-customers").should('include',"configuration-groups")
 cy.url() .should('include', '/assign-customers') //child url contain assign customer or not
  cy.get(".breadcrumb").should('have.text','\nConfiguration Group\nAssign Customers\n')// checking in new tab Con group>> Assign Customer link is visible or not
  cy.get(".checkbox-assign-row[value='2679939487']").check({force:true})
  cy.wait(2000)
  cy.get('#select2-customer_configuration_group-container').click().get('#customer_configuration_group').select("test5",{force:true})// 
  cy.get("#assignSubmit").click()
   cy.go("back") //back on Parents tab
  //cy.get("#hov").click() //cancel button*/

  it("Action Button Assign Sales User Functionality", () => {
    cy.wait(2000)
    cy.get('.dropdown-item').contains('Assign Sales User').click({ force: true })
    cy.get("#customermaster-importsalesuserfileupload").attachFile("demo1.csv") //clicking & uploading the file
    cy.wait(3000)
    cy.get("label[for='customermaster-importsalesuserfileupload']").should("have.contain", "Import File Upload") //file upload visibility check or not
    cy.get('.btn.btn-format-size.btn-relief-danger.waves-effect.waves-light').click()//cancel button
    cy.get('.btn-outline-primary').click()
  })

  it("Customer_Action_Edit_Menues", () => {
    //cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1) em:nth-child(1)").click({force:true}) //clicking on Edit
    //cy.get('[data-index="0"] .text-left.btn-space .mr-1:first-child').click() // for edit
    cy.get("#headingSearch").click()
    //searching by name and then making chnages
    cy.get("#select2-customermastersearch-cust_member_id-container").click() //dropsown click
        cy.get("input[role='textbox']").type("Rohini")//sending text 'Rohini
        cy.get('#select2-customermastersearch-cust_member_id-results').contains("Rohini").click()//from autosuggest select "Rohini"
        cy.get("button[type='submit']").click() 
        cy.get("div[class='pull-left d-none d-lg-block'] div[class='summary']").should("have.text","Showing 1-1 of 1 item.")
        cy.get('#table1>tbody>[data-index="0"]>.text-left.btn-space>.mr-1:first-child').click()  //clicking on Edit menue from the result table

    cy.get("#select2-customermaster-cust_category_id-container").click().get("#customermaster-cust_category_id").select("Retailer", { force: true })// updated users grp from electrician to retailer
    cy.get("button[class='btn btn-format-size btn-relief-primary waves-effect waves-light']").click()//clicking on update
    cy.wait(3000)
    cy.contains("Your change updated successfully.").should("be.visible");


    cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1) em:nth-child(1)").click({ force: true })//again click on edit
    cy.get("button[value='update']").click()
    cy.wait(3000)
    cy.contains("Your change applied successfully.").should("be.visible");
  
    //cy.get(".toast-title").should("be.visible") //click on Apply
    cy.title().should('include', "Update Customer") //validating title of the page
    cy.get(".btn.btn-format-size.btn-relief-danger.waves-effect.waves-light").click() //clicking on cancel button
    cy.title().should('include', "Customers") //validating after cancel on customer dashbrd
  })
  
  it("Customer_Action_Delete_menues", () => {
    cy.get('[data-index="0"] .text-left.btn-space .mr-1:nth-child(2)').click({ force: true })//for delete
    cy.wait(1000)
    cy.get("#add_comment_input").type("deleting..")
    cy.get('.btn-primary.add_comment.waves-effect.waves-light').click()
    cy.wait(3000)
    cy.contains("Removed Successfully").should("be.visible");

  })

  it("Customer_Action_View_menues", () => {
    cy.get('[data-index="0"] .text-left.btn-space .mr-1:nth-child(3)').click()//for view
    cy.get("#headingSearch").should("have.text", "View Customer") //verifying heading 
  
    cy.get('[data-index="0"] .text-left.btn-space .mr-1:nth-child(5)').click({ force: true })//for verify
    cy.wait(1000)
    cy.get('.swal2-confirm').click()
    cy.wait(3000)
    cy.contains("Verification changed successfully").should("be.visible");

  })


  it("Column_visibility", () => {
    cy.get(".btn.btn-default.dropdown-toggle").click()
    cy.get('.dropdown-menu.show>li>label>[data-field="3"]').uncheck().should("not.be.checked") //customer mobile no colum unchecked
  })
})