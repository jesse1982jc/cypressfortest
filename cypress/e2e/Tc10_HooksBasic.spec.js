/// <reference types="cypress" />

// 1. Before
// 2. After
// 3. Before Each
// 4. After Each

// 重要: 使用這幾種 hooks 時，最好使用 傳統函式，不要使用箭頭函式

describe("Hooks Basics", () => {
  before(() => {
    cy.log("Before block");
  });

  beforeEach(() => {
    cy.log("Before Each block");
  });

  it("Search item", () => {
    cy.log("(1) This is Search item block");
  });

  it("Order item", () => {
    cy.log("(2) This is Order item block");
  });

  it("Check out item", () => {
    cy.log("(3) This is Check out item block");
  });

  afterEach(() => {
    cy.log("After Each block");
  });

  after(() => {
    cy.log("After block");
  });
});
