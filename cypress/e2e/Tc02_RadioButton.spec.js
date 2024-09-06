/// <reference types="cypress" />

describe("Radio Button Functionality", () => {
  it("Handliing diffenent radio button", () => {
    // 1. 先進到測試頁
    cy.visit("https://demos.jquerymobile.com/1.4.5/checkboxradio-radio/");

    // Basic Radio Button
    // 先找到該元素，斷言該元素一開始是"未點擊"狀態，斷言成功的話，再點擊它
    cy.get("#radio-choice-0a").should("not.be.checked").click({ force: true });
    cy.get("#radio-choice-0b").should("not.be.checked").click({ force: true });

    // Modern Radio Button
    // 先找到該元素，斷言該元素一開始是"未點擊"狀態，斷言成功的話，再點擊它
    cy.get("#radio-choice-h-2b")
      .should("not.be.checked")
      .click({ force: true });
    cy.get("#radio-choice-h-2c")
      .should("not.be.checked")
      .click({ force: true });
  });
});
