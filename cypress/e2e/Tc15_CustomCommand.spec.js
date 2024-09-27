/// <reference types="cypress" />

describe("Custom Command test", () => {
  // 重要: 這邊的 beforeEach() hook 最好使用 傳統函式 function(){}，不要使用箭頭函式
  // 重要: 這邊的 it() 區塊 最好使用 傳統函式 function(){}，不要使用箭頭函式

  // 在每次測試之前 (it)，都先去執行的區塊
  // 在每次執行 it (正確的憑證、錯誤的憑證前，都去 fixture 抓去資料來讀取)
  beforeEach(function () {
    // fixture 裡面的路徑檔案，可以不用寫 .json，因為 Cypress 知道它一定是 JSON 檔
    // as 稱作別名 alias
    cy.fixture("conduitLoginData").as("data"); // 注意: 是 conduitLoginData.json 檔
  });

  // 登入，並輸入正確的帳號/密碼
  // 然後點擊右上角 Settings →再點擊 Logout 登出
  it("Conduit - Valid Credentials", function () {
    // 改為把登入的步驟，寫在 commands.js 裡面，給參數 email 及 password 帶入
    cy.conduitLogin(this.data.validEmail, this.data.validPassword);

    // 這不是登入的步驟，所以不要寫進 commands.js 裡面
    // 錯誤的(測試用)
    // cy.get('a[href="#cypress"]').click();

    // 正確的
    cy.get('a[href="#settings"]').click();

    cy.get('button[class="btn btn-outline-danger"]').click();
  });

  // 登入，並輸入錯誤的帳號/密碼，預設會彈出錯誤提示
  it("Conduit - Invalid Credentials", function () {
    // 改為把登入的步驟，寫在 commands.js 裡面，給參數 email 及 password 帶入
    cy.conduitLogin(this.data.invalidEmail, this.data.invalidPassword);

    // 這不是登入的步驟，所以不要寫進 commands.js 裡面
    cy.get(".error-messages").should("contain", "email or password is invalid");
  });
});
