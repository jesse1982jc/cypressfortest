/// <reference types="cypress" />

describe("Checkbox Functionality", () => {
  it("Handliing diffenent Check boxes", () => {
    // 1. 先進到測試頁
    cy.visit("https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/");

    // 2. 抓到核取方塊的元素，先斷言該元素是"未勾選"的狀態，然後點擊它，再斷言它是"已勾選"的狀態
    cy.get("#checkbox-v-2a")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");

    // 3. 抓到核取方塊的元素，先斷言該元素是"未勾選"的狀態，然後點擊它，再斷言它是"已勾選"的狀態
    cy.get("#checkbox-v-2c")
      .should("not.be.checked")
      .check({ force: true })
      .should("be.checked");
  });
});
