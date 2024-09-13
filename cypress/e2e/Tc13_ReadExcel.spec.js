/// <reference types="cypress" />

describe("Excel test", () => {
  // 重要: 這邊的 beforeEach() hook 最好使用 傳統函式 function(){}，不要使用箭頭函式
  // 重要: 這邊的 it() 區塊 最好使用 傳統函式 function(){}，不要使用箭頭函式

  // 創建 data，為了保存 Excel 的測試資料
  var data;

  // 在每次測試之前 (it)，都先去執行的區塊
  // 在每次執行 it (正確的憑證、錯誤的憑證前，都去 fixture 抓去資料來讀取)
  beforeEach(function () {
    data = cy
      .task("readXlsx", {
        file: "cypress/fixtures/ConduitExcelData.xlsx",
        sheet: "Sheet1",
      })
      .then((rows) => {
        data = rows;
      });
  });

  // 登入，並輸入正確的帳號/密碼
  // 然後點擊右上角 Settings →再點擊 Logout 登出
  it("Conduit - Valid Credentials", function () {
    cy.visit("https://react-redux.realworld.io/");
    cy.get('a[href="#login"]').click();
    cy.get('input[placeholder="Email"]').type(data[0].username);
    cy.get('input[placeholder="Password"]').type(data[0].password);
    cy.get('button[type="submit"]').click();
    cy.get('a[href="#settings"]').click();
    cy.get('button[class="btn btn-outline-danger"]').click();
  });

  // 登入，並輸入錯誤的帳號/密碼，預設會彈出錯誤提示
  it("Conduit - Invalid Credentials", function () {
    cy.visit("https://react-redux.realworld.io/");
    cy.get('a[href="#login"]').click();
    cy.get('input[placeholder="Email"]').type(data[1].username);
    cy.get('input[placeholder="Password"]').type(data[1].password);
    cy.get('button[type="submit"]').click();
    cy.get(".error-messages").should("contain", "email or password is invalid");
  });
});
