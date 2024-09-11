/// <reference types="cypress" />

describe("Advanced UI Elements", () => {
  it("Web Tables", () => {
    cy.visit("https://the-internet.herokuapp.com/tables");

    // 1. Check value present anywhere in the table
    cy.get("#table1")
      .contains("td", "http://www.jdoe.com")
      .should("be.visible");

    // 2. Check value present in the specific row and col
    // 2-1. 找到 table下>tbody下>第三行(橫) tr 的 第三個 cell 的 td 元素
    cy.get("#table1>tbody>tr:nth-child(1)>td:nth-child(3)")
      .contains("td", "jsmith@gmail.com")
      .should("be.visible");

    // 自己測試的
    // cy.get("#table1>tbody>tr:nth-child(1)>td:nth-child(3)").should(
    //   "be.visible"
    // );

    // 3. Check value based on the condition
    // 3-1. 找到 table下>tbody下>所有的 tr 橫列 當中的 第二個 td 元素，以範例來說: 共 4 個
    // 3-2. 然後用 each () 遍歷這個 column 的 td，取名為 ele(元素)、有索引 index、用 list 來當作取出來的列表(沒用到)
    cy.get("#table1>tbody>tr>td:nth-child(2)").each((ele, index, list) => {
      // 把取出來的元素 ele，抓取出文字來，丟給 eleForText 變數
      const eleForText = ele.text();

      // 備註: 這邊的 each() 裡的 list 用不到

      // if (eleForText == "Jason") {
      // 3-4. 假如 eleForText 有包含 "Jason" 字串的話，就去抓取 同行(看 index ) 的 第四個 cell 的 td 元素
      // 3-5. 把抓取出來的元素命名為 due，再把 due 抓取出文字出來，命名為 dueAmount
      // 3-6. 斷言預期 dueAmount 要等於 "$100.00"
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
