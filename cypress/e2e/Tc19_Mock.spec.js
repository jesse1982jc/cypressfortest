/// <reference types="cypress" />

describe("Mock Testing", () => {
  // 每次進入 it 區塊之前，都要先執行 beforeEach 區塊的程式: 每次都要先登入帳號/密碼
  beforeEach("login on beforeEach", () => {
    cy.visit("https://conduit.bondaracademy.com/");
    cy.contains("Sign in").click();
    cy.get('input[placeholder="Email"]').type("jcjchuhu2@gmail.com");
    cy.get('input[placeholder="Password"]').type("abcd1234");
    cy.get('button[type="submit"]').click();
  });

  it("Tag Mock", () => {
    // 使用 intercept 攔截 API 的 response，並餵它 fixture 裡的測試資料: Tag.json
    // { fixture: "Tags"} → Tags 可以不用打 .json，因為 fixture 預設會去找副檔名是 .json ，但建議寫清楚比較好
    cy.intercept("GET", "/api/tags", { fixture: "Tags.json" });
    cy.contains("Your Feed").should("be.visible");
    cy.get(".tag-list")
      .should("contain", "cypress")
      .and("contain", "udemy")
      .and("contain", "course");
  });

  it("Article Mock", () => {
    cy.intercept("GET", "/api/articles?limit=10&offset=0", {
      fixture: "Article.json",
    });

    // API 的網址 /api/articles?limit=10&offset=0 →可以把問號後面用 /* 取代
    // cy.intercept("GET", "/api/articles/*", { fixture: "Article.json" });
    cy.contains("Your Feed").should("be.visible");
    cy.contains("Global Feed").click().should("be.visible");

    cy.get(".col-md-9").should("be.visible");
    cy.get(".author").should("contain", "Jesse");
    cy.get("h1").should("contain", "Demo Mock Cypress");
    cy.get("p").should("contain", "Demo-Post Practice for Udemy Course");
  });

  it("Login User Mock", () => {
    cy.intercept("POST", "/api/users/login", { fixture: "Login.json" });
    cy.get(".nav-item .nav-link").eq(3).should("be.visible");
    cy.get(".nav-item .nav-link").eq(3).should("contain", "jcjchuhu2-ForTest");
  });

  xit("User Mock", () => {
    cy.intercept("GET", "/api/user", { fixture: "User.json" });
    cy.get("a.nav-link").eq(3).should("be.visible");
    cy.get("a.nav-link").eq(3).should("contain", "jesshaohao");
  });
});
