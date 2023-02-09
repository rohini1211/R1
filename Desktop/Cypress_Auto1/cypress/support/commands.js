// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//import cypress from 'cypress';

//const { filter } = require("cypress/types/bluebird")

//import 'cypress-file-upload';
/*Cypress.Commands.add("ClickLink",(label)=>
{
    cy.get('a').contains(label).click()
})
//over write the conatins commands
Cypress.Commands.overwrite('contains',(originalFn, subject, filter,text,options= {})=>
{
  if(typeof text=='object')
  {
    options=text;
    text=filter;
    filter=undefined
  }
options.matchCase=false
return originalFn(subject, filter, text, options)
})*/

const Login_User = (username,password)=>{
  cy.visit("http://digisol.loyaltyxpert.staging/auth/auth/login")
 
cy.get('#user-name').should('be.visible').type("ishita.popat@ecosmob.com");
  cy.get('#user-password').should('be.visible').type('Test@123');
 cy.get("button[name='login-button']").click();
cy.title().should('contain', 'Tenant');

}
Cypress.Commands.add("Login_User",Login_User);


/*Cypress.Commands.add("Login_User",(email,password)=>
{
 cy.get("#user-name").type(" ")
 cy.get("#user-password").type(" ")
 cy.get("button[name='login-button']").click()


})*/
