/// <reference types="cypress" />

describe("Advanced UI Elements", () => {
  it("Web Tables", () => {
    cy.visit("https://the-internet.herokuapp.com/tables");

    // 1. Check value present anywhere in the table
    cy.get("#table1")
      .contains("td", "http://www.jdoe.com")
      .should("be.visible");

    // 2. Check value present in the specific row and col
    cy.get("#table1>tbody>tr:nth-child(1)>td:nth-child(3)")
      .contains("td", "jsmith@gmail.com")
      .should("be.visible");

    // 自己測試的
    // cy.get("#table1>tbody>tr:nth-child(1)>td:nth-child(3)").should(
    //   "be.visible"
    // );

    // 3. Check value based on the condition
    cy.get("#table1>tbody>tr>td:nth-child(2)").each((ele, index, list) => {
      const eleForText = ele.text();

      // 備註: 這邊的 each() 裡的 list 用不到
      //   if (eleForText == "Jason") {
      if (eleForText.includes("Jason")) {
        cy.get("#table1>tbody>tr>td:nth-child(4)")
          .eq(index)
          .then((due) => {
            const dueAmount = due.text();
            expect(dueAmount).to.equal("$100.00");
          });
      }
    });
  });
});
