//const { it } = require("mocha")

describe('LoyaltiExpert_Search By Different Parameters',function() 
{

    beforeEach("Login",()=>
  {
     cy.visit("http://digisol.loyaltyxpert.staging/auth/auth/login")
     cy.get('#user-name').type('ishita.popat@ecosmob.com')
     cy.get('#user-password').type('Test@123')
     cy.get('.btn').click()
     cy.get('#tour-company-name > :nth-child(1) > .nav-item > .nav-link').click()
     cy.get(':nth-child(11) > [href="javascript:void(0)"]').click({force:true})
     cy.get('.open > .menu-content > :nth-child(1) > a').click()
 
  })
it("Search with: Name",()=>
      {
        
       

        cy.get("#headingSearch").click()
        //Search by Name
        cy.get("#select2-customermastersearch-cust_member_id-container").click() //dropsown click
        cy.get("input[role='textbox']").type("Rohini")//sending text 'Rohini
        cy.get('#select2-customermastersearch-cust_member_id-results').contains("Rohini").click()//from autosuggest select "Rohini"
        
       // cy.get("#select2-customermastersearch-cust_member_id-results").select("Rohini")
        /*cy.get(".select2-results__options").click()*/
        
        cy.get("button[type='submit']").click() 
        cy.get("div[class='pull-left d-none d-lg-block'] div[class='summary']").should("have.text","Showing 1-1 of 1 item.")
        cy.get("#headingSearch").click()
        cy.get("#select2-customermastersearch-cust_member_id-container").click()//click on search button
        cy.get("input[role='textbox']").clear()
       // cy.get("div[class='pull-left d-none d-lg-block'] div[class='summary']").should("have.text","Showing 1-1 of 1 item.")
      })
   it("Search with: Mobile No:",()=>
   {
       
        
          //search by Mobile no
         
          cy.wait(3000)
          cy.get("#headingSearch").click()
          cy.get('#customermastersearch-cust_mobile_number').type('2222222222', {force:true})
          cy.get("button[type='submit']").click()
          cy.wait(3000)
          cy.get("div[class='pull-left d-none d-lg-block'] div[class='summary']").should("have.text","Showing 1-1 of 1 item.")
          cy.wait(3000)
          cy.get("#headingSearch").click()
          cy.wait(3000)
          cy.get('#customermastersearch-cust_mobile_number').clear()
   })


         

 
         
    
  it("Search with: Customer_group", ()=>
  {
        //search by Customer Group
        cy.wait(3000)
        //cy.get("#headingSearch").click()
         //cy.get('#customermastersearch-cust_category_id').contains('Electrician').click({force:true})
         cy.get("#select2-customermastersearch-cust_category_id-container").click({force:true}).get('#customermastersearch-cust_category_id').select("Electrician",{force:true})
         cy.get("button[type='submit']").click({force:true})
         cy.wait(3000)
         cy.get("div[class='pull-left d-none d-lg-block'] div[class='summary']").contains("Showing")

         /*let total_page=10
 for(let p=3;p<=total_page;p++)
 {
       if(total_page>=1)
       {
   cy.log("active pages are: "+p)
   cy.get("ul[class='pagination']>li:nth-child("+p+")")
   cy.wait(3000)
   // to read the  col
   cy.get(".fixed-table-body>#table1>thead>tr>th")
  
  //.fixed-table-body>#table1>thead>tr>th:nth-child(4)
  //div[class='fixed-table-header'] th:nth-child(1) div:nth-child(1)
          .each(($row, index,$rows)=>
          {// getting every row, index of row
           cy.wrap($row).within( () =>
            { //.fixed-table-body>#table1>tbody>tr>td:nth-child(4)
               cy.get("#table1>tbody>tr>td:nth-child(4)").then( (e)=>
               {
                     cy.log(e.text());
           
               })
            })
          })
       }
}*/
         cy.wait(3000)
         cy.get("#headingSearch").click()
         cy.wait(3000)
         cy.get("#select2-customermastersearch-cust_category_id-container").click({force:true}).get('#customermastersearch-cust_category_id').select("Select All",{force:true})

      })
      it("Search with: Status", ()=>
      {
         
         //search with Status 
          cy.wait(3000)
          cy.get("#select2-customermastersearch-cust_status-container").click({force:true}).get('#customermastersearch-cust_status').select("Inactive",{force:true})
         cy.wait(3000)
         cy.get("button[type='submit']").click({force:true})
         cy.wait(3000)
         cy.get("div[class='pull-left d-none d-lg-block'] div[class='summary']").should("have.contain","Showing")// validating the showing word
         cy.get("#headingSearch").click()
         cy.wait(3000)
         cy.get("#select2-customermastersearch-cust_status-container").click({force:true}).get('#customermastersearch-cust_status').select("Select All",{force:true})
      })
         
         //search with Profile completed or not
        it("Search With: Profile_Completed", ()=>
        {
          cy.wait(3000)
        
          cy.get('#select2-customermastersearch-is_profile_complete-container').click({force:true}).get('#customermastersearch-is_profile_complete').select("Yes",{force:true})
         cy.wait(3000)
          cy.get("button[type='submit']").click({force:true})
          cy.wait(3000)
          cy.get("div[class='pull-left d-none d-lg-block'] div[class='summary']").should("have.contain","Showing")
          cy.wait(3000)
          cy.get("#headingSearch").click()
          cy.wait(3000)
          cy.get('#select2-customermastersearch-is_profile_complete-container').click({force:true}).get('#customermastersearch-is_profile_complete').select("Select All",{force:true})
        })
          it("Search with: Country, State & city", ()=>
          {
          //search with Country
          cy.wait(3000)
          cy.get("#select2-customermastersearch-country_id-container").click({force:true}).get("#customermastersearch-country_id").select("India",{force:true})//1st-click button, 2nd get-list 
          cy.wait(3000)
           //search with States
         cy.get("#select2-customermastersearch-state_id-container").click({force:true}).get("#customermastersearch-state_id").select("Maharashtra",{force:true})//1st-click button, 2nd get-list 
          cy.wait(3000)
         //search with City
         cy.get("#select2-customermastersearch-city_id-container").click({force:true}).get("#customermastersearch-city_id").select("Pune",{force:true})//1st-click button, 2nd get-list 
          cy.wait(3000)
          cy.get("button[type='submit']").click({force:true})
          cy.wait(3000)
          cy.get("div[class='pull-left d-none d-lg-block'] div[class='summary']").should('have.contain',"Showing")
          cy.wait(3000)
          cy.get("#headingSearch").click()
          cy.wait(3000)
          cy.get("#select2-customermastersearch-country_id-container").click({force:true}).get("#customermastersearch-country_id").select("Select All",{force:true})//1st-click button, 2nd get-list 
          cy.wait(3000)
          cy.get("#select2-customermastersearch-state_id-container").click({force:true}).get("#customermastersearch-state_id").select("Select All",{force:true})//1st-click button, 2nd get-list 
          cy.wait(3000)
          cy.get("#select2-customermastersearch-city_id-container").click({force:true}).get("#customermastersearch-city_id").select("Select All",{force:true})
          cy.wait(3000)
          })
         it("Search with: Verified Customer",()=>
         {
          //with Verified Customer
          cy.get("#select2-customermastersearch-is_verified-container").click({force:true}).get("#customermastersearch-is_verified").select("YES",{force:true})
          cy.wait(3000)
          cy.get("button[type='submit']").click({force:true})
          cy.wait(3000)
          cy.get("div[class='pull-left d-none d-lg-block'] div[class='summary']").should("have.contain",'Showing')
          cy.wait(3000)
          cy.get("#headingSearch").click()
          cy.wait(3000)
         })

          //Search with Configuration group
         
          /*cy.get("#select2-customermastersearch-cust_config_group_id-container").click().get("#customermastersearch-cust_config_group_id").select("test1",{force:true})
          cy.wait(3000)
          cy.get("button[type='submit']").click({force:true})
          cy.wait(3000)
          cy.get("div[class='pull-left d-none d-lg-block'] div[class='summary']").should("have.contain",'Showing')
          cy.wait(3000)
          cy.get("#headingSearch").click()
          cy.wait(3000)
          cy.get("#select2-customermastersearch-cust_config_group_id-container").click().get("#customermastersearch-cust_config_group_id").select("Select All",{force:true})*/
        
          it("Search with: KYC Status",()=>
          {
          //search with KYC statas
          cy.wait(3000) //search link click
          cy.get("#select2-customermastersearch-kyc_status-container").click({force:true}).get("#customermastersearch-kyc_status").select("Rejected",{force:true})
          cy.wait(3000)
          cy.get("button[type='submit']").click({force:true})
          cy.wait(3000)
          cy.get("div[class='pull-left d-none d-lg-block'] div[class='summary']").should("have.contain",'Showing')
          cy.wait(3000)
          cy.get("#headingSearch").click()
          cy.wait(3000)
          cy.get("#select2-customermastersearch-kyc_status-container").click({force:true}).get("#customermastersearch-kyc_status").select("Select All",{force:true})
           // for reset button
          cy.get(".btn-format-size.btn-relief-danger.waves-effect.waves-light").click()
          })
          

    
})
