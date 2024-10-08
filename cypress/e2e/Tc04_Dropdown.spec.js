/// <reference types="cypress" />

describe("Dropdown Functionality", () => {
  // 測試靜態下拉式選單
  xit("Handliing Static Dropdown List", () => {
    // 1. 先進到測試頁
    cy.visit("https://seleniumbase.io/demo_page");

    // 2-1.下拉式選單(靜態)，選取動作要用 select()，不是用 click() !!!
    // 2-2. 加上斷言，確認選取的值有被選取到
    cy.get("#mySelect").select("Set to 100%").should("have.value", "100%");
  });

  // 測試動態下拉式選單
  xit("Handliing Dynamic Dropdown List", () => {
    // 1. 先進到測試頁
    cy.visit(
      "https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx"
    );

    // 2-1.下拉式選單(動態)，因為要展開，所以要下 click()
    cy.get("#ctl00_ContentPlaceholder1_RadDropDownProducts").click();

    // 2-2. 找出 class 類別是 rddlItem 的元素(有很多)，再找出只要文字是 "Carnarvon Tigers" 的元素(只有一個)，再點擊它，並斷言它有類別 class 為 "rddlItemSelected" 的值
    cy.get(".rddlItem")
      .contains("Carnarvon Tigers")
      .click()
      .should("have.class", "rddlItemSelected");

    // 不能這樣寫，會出錯
    // cy.contains(
    //   '[class="rddlItem rddlItemHovered"]',
    //   "Carnarvon Tigers"
    // ).click();
  });

  // 測試多選項的下拉式選單
  it("Handliing Multiple Dropdown List", () => {
    // 1. 先進到測試頁
    cy.visit("https://demo.mobiscroll.com/javascript/select/multiple-select#");

    // 2-1. 找出多選下拉式選單的元素，並點擊它，會顯示所有的選項
    cy.get("#multiple-select-input").click({ force: true });

    // 2-2. 找出欲點擊的選項的元素
    cy.get(
      '[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]'
    )
      .contains("Movies, Music & Games")
      .click();

    cy.get(
      '[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]'
    )
      .contains("Electronics & Computers")
      .click();

    cy.get(
      '[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]'
    )
      .contains("Sports & Outdoors")
      .click();

    // 點空白處一下，關閉其他選項
    cy.get(
      '[class="mbsc-popup-overlay mbsc-popup-overlay-anchored mbsc-ios"]'
    ).click({ force: true });

    // cy.get("#demo-search-hits").click({ force: true });

    // 斷言選擇框裡是否有我剛剛選擇的項目
    cy.get('[class="mbsc-textfield-tag mbsc-ios mbsc-ltr"]').should(
      "contain",
      "Movies"
    );

    // 斷言選擇框裡是否有我剛剛選擇的項目
    cy.get('[class="mbsc-textfield-tag mbsc-ios mbsc-ltr"]').should(
      "contain",
      "Music & Games"
    );

    // 斷言選擇框裡是否有我剛剛選擇的項目
    cy.get('[class="mbsc-textfield-tag mbsc-ios mbsc-ltr"]').should(
      "contain",
      "Electronics & Computers"
    );

    // 斷言選擇框裡是否有我剛剛選擇的項目
    cy.get('[class="mbsc-textfield-tag mbsc-ios mbsc-ltr"]').should(
      "contain",
      "Sports & Outdoors"
    );
  });
});
