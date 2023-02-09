

 describe('Customer_Table_Validation',function() 
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
  it("Pagination_Acess",()=>
   {
          
         let total_page=10
 for(let p=3;p<=total_page;p++)
 {
       if(total_page>=1)
       {
   cy.log("active pages are: "+p)
   cy.get("ul[class='pagination']>li:nth-child("+p+")")
   cy.wait(3000)
   // to read the  col
   cy.get("#table1>tbody>tr")
  
  //.fixed-table-body>#table1>thead>tr>th:nth-child(4)
  //div[class='fixed-table-header'] th:nth-child(1) div:nth-child(1)
          .each(($row, index,$rows)=>
          {// getting every row, index of row
           cy.wrap($row).within( () =>
            { //.fixed-table-body>#table1>tbody>tr>td:nth-child(4)
               
               cy.get("td:nth-child(4)").then( (e)=> //mobilr no column
               {
                     cy.log(e.text());
           
               })
            })
          })
       }
}
    
         
   })
         it("Total_no_Items_Validation", ()=>
         {// too find total no of pages
            let total;
         cy.get(".summary").then ( (e)=>
         {
          let mytext=e.text();
          total=mytext.substring(   mytext.indexOf('of ')+1  , mytext.indexOf('items')-1      )
          // to retriev the index of page no. 
             cy.log("total no of pages:   "+total)
        })
      })

      it("Check No. of rows & columns",()=>
     {
                //tr tag is in the tbody so used > .we know the total rows 10 so we write assertion to check total rows
                cy.get(".fixed-table-body>#table1>tbody>tr").should("have.length",10) //rows
                cy.get(".fixed-table-body>#table1>thead>tr>th").should("have.length",21) //col
      
        
      })

      it("Read all data from First Page",()=>
 {
       cy.get(".fixed-table-body>#table1>tbody>tr")
          .each(($row, index,$rows)=>{// getting every row, index of row
             cy.wrap($row).within(()=>   //getting values in every col for each row
             {
              cy.get("td").each( ($col, index,$cols)=>
              {
                      cy.log($cols.text());
                
                })
             
             })
       })
 
 })
           
 })

