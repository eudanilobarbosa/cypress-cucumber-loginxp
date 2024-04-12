import {
  Given,
  When,
  Then,
} from '@badeball/cypress-cucumber-preprocessor';

Given("que acesso a página de login", function () {
  cy.visit('https://loginxp.vercel.app')
});

When("submeto minhas credenciais com {string} e {string}", function (user, password) {

  user
    ? cy.get('input[name=user]').type(user)
    : cy.log('username is empty')

  password
    ? cy.get('input[name=pass]').type(password)
    : cy.log('password is empty')

  cy.contains('button', 'Entrar').click()
});


Given("submeto minhas credenciais:", function (dataTable) {

  const user = dataTable.rowsHash()

  user.username
    ? cy.get('input[name=user]').type(user.username)
    : cy.log('username is empty')

  user.password
    ? cy.get('input[name=pass]').type(user.password)
    : cy.log('password is empty')

  cy.contains('button', 'Entrar').click()

});


When("sou autenticado no sistema", function () {
  cy.get('.swal2-html-container')
    .should('be.visible')
    .should('have.text', 'Suas credenciais são válidas :)')
});

Then("devo ver a notificação {string}", function (notice) {

  cy.contains(notice)

});