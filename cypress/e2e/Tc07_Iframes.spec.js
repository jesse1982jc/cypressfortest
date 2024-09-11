/// <reference types="cypress" />

describe("Advanced UI Elements", () => {
  it("Iframes", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");

    // 先清掉小彈窗訊息
    cy.get(
      'button[class="tox-notification__dismiss tox-button tox-button--naked tox-button--icon"]'
    ).click();

    // 以下程式有問題，執行有誤
    cy.get("#mce_0_ifr").within(($iframe) => {
      cy.wait(1500);
      const element = $iframe.contents().find("#tinymce");
      cy.wrap(element).clear().type("Hello TextBox");
    });
  });
});
