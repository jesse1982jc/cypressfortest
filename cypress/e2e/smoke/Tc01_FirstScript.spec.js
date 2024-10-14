/// <reference types="cypress" />

// 只改變此測項的配置
// 改變 baseUrl 的網址，即使我在 cypress.config.js 是寫 google.com，還是會以這裡的網址為主
Cypress.config("baseUrl", "https://react-redux.realworld.io/");

// 即使我在 cypress.config.js 是設定 false，還是以這裡為主，會變 true
Cypress.config("screenshotOnRunFailure", true);

// 即使我在 cypress.config.js 是設定 false，還是以這裡為主，會變 true
// Cypress.config("video", true);

describe("Login Functionality", () => {
  it("Login test using Conduit", () => {
    // 1. 先進到測試頁
    cy.visit("/");

    // cy.contains("a", "Sign in").click();

    // 2. 抓取 Login 按鈕元素，並點擊
    cy.get('a[href="#login"]').click();

    // 3. 抓取 Email 輸入框元素，並輸入測試 email
    cy.get('input[placeholder="Email"]').type("jcjchuhu2@gmail.com");

    // 4. 抓取 Passwrod 輸入框元素，並輸入測試 password
    cy.get('input[placeholder="Password"]').type("abcd1234");

    // 5. 抓取 提交 按鈕，並點擊
    cy.get('button[type="submit"]').click();

    // 6. 抓取設定 按鈕
    // 6-1. 斷言頁面上有包含 "Settings" 文字
    // 6-2. 點擊 Settings 按鈕
    // 6-3. 抓取頁面下方的 logout 按鈕元素，並點擊
    // 6-4. 抓取 login 元素，並斷言確認頁面包含文字 "Sign in"
    cy.get('a[href="#settings"]').then((setting) => {
      cy.wrap(setting).should("contain", "Settings");
      cy.wrap(setting).click();
      cy.get('button[class="btn btn-outline-danger"]').click();
      cy.get('a[href="#login"]').should("contain", "Sign in");
    });
  });
});
