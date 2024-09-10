/// <reference types="cypress" />

describe("Handling Different Alerts", () => {
  // 1. 一般的 alert (只有點擊 OK 的按鈕)
  it("Simple Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    // 點擊 alert 按鈕 (應該會彈出 alret，但 cypress 會自動關閉)
    cy.contains("Click for JS Alert").click();

    // 使用 cy.on() 來監聽 window 的 "alert" 的事件，並給一個 str 做為回調函數
    // 斷言預期的 str 等於 alret 的文字內容
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am a JS Alert");
    });

    // 斷言網頁上的綠色文字，顯示的是否符合預期的文字
    cy.get("#result").should("contain", "You successfully clicked an alert");
  });

  // 2. 含有確認/取消鍵的 alert，點擊 OK
  it("Confirmation Alert - OK Button", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    // 點擊 confirm alert 按鈕 (應該會彈出 confirm alert，但 cypress 會自動關閉)
    cy.contains("Click for JS Confirm").click();

    // 使用 cy.on() 來監聽 window 的 "confirm alret" 的事件，並給一個 str 做為回調函數
    // 斷言期期的 str 等於 confirm alert 的文字內容
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("I am a JS Confirm");
    });

    // 斷言網頁上的綠色文字，顯示的是否符合預期的文字: 點擊: 確定(OK)
    cy.get("#result").should("contain", "You clicked: Ok");
  });

  // 3. 含有確認/取消鍵的 alert，點擊 Cancel
  it("Confirmation Alert - Cancel Button", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    // 點擊 confirm alert 按鈕 (應該會彈出 confirm alert，但 cypress 會自動關閉)
    cy.contains("Click for JS Confirm").click();

    // 使用 cy.on() 來監聽 window 的 "confirm alret" 的事件，並給一個 str 做為回調函數
    // 斷言期期的 str 等於 confirm alert 的文字內容
    cy.on("window:confirm", (str) => {
      expect(str).to.equal("I am a JS Confirm");

      // 點擊 "取消" cancel 按鈕的意思 (不然 cypress 是會自動點擊 OK 按鈕的)
      return false;
    });

    // 斷言網頁上的綠色文字，顯示的是否符合預期的文字: 點擊: 取消(Cancel)
    cy.get("#result").should("contain", "You clicked: Cancel");
  });

  // 4. 含有提示 prompt 的 alert
  it("Prompt Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    // 訪問當前 window 對象
    cy.window().then((win) => {
      // 在 click 點擊按鈕之前，先設置 stub 來攔截 prompt (很重要，注意順序，先設置 stub，之後點擊 click 時，stub 才可以攔截)
      // 用 stub 來取代原本的彈窗 prompt，然後會回傳字串 "Hello Prompt Alert"
      cy.stub(win, "prompt").returns("Hello Prompt Alert");

      // 點擊 prompt alert 按鈕 (應該會彈出 prompt alert，但 cypress 會自動關閉)
      cy.contains("Click for JS Prompt").click();
    });

    // 斷言網頁上的綠色文字，顯示的是否符合預期的文字 (自己輸入的提示字串)
    cy.get("#result").should("contain", "You entered: Hello Prompt Alert");
  });
});
