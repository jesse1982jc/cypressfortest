/// <reference types="Cypress" />

describe("Login Functionality", () => {
  it("Login test using Conduit", () => {
    cy.visit("https://react-redux.realworld.io/");
    // cy.contains("a", "Sign in").click();
    cy.get('a[href="#login"]').click();
    cy.get('input[placeholder="Email"]').type("jcjchuhu2@gmail.com");
    cy.get('input[placeholder="Password"]').type("abcd1234");
    cy.get('button[type="submit"]').click();
    cy.get('a[href="#settings"]').then((setting) => {
      cy.wrap(setting).should("contain", "Settings");
      cy.wrap(setting).click();
      cy.get('button[class="btn btn-outline-danger"]').click();
      cy.get('a[href="#login"]').should("contain", "Sign in");
    });
  });
});
