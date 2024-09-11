/// <reference types="cypress" />

describe("Advanced UI Elements", () => {
  it("Browser Controls", () => {
    cy.visit("https://react-redux.realworld.io");
    cy.contains("Sign in").click();
    cy.go("back"); // 回瀏覽器的"上一頁"
    cy.go("forward"); // 回瀏覽器的"下一頁"
    cy.go(-1); // 一樣是回瀏覽器的"上一頁"
    cy.go(1); // 一樣是回瀏覽器的"下一頁"
    cy.get('input[type="email"]').type("jcjchuhu2@gmail.com");
    cy.reload(); // 瀏覽器的"重新整理"
  });
});
