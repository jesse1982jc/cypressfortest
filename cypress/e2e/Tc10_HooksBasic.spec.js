/// <reference types="cypress" />

// 1. Before
// 2. After
// 3. Before Each
// 4. After Each

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
