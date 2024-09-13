/// <reference types="cypress" />

describe("Hooks Implementation", () => {
  // 執行順序: beforeEach() -> it(1)  -> afterEach() -> beforeEach() -> it(2) -> afterEach()

  // 在每一個 it 區塊執行之前，都要執行一次的 beforeEach()
  // 輸入 帳號、密碼，點擊 登入
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
  });

  // 找到左邊的 Admin 按鈕，並點擊
  // 在畫面 Username 標籤的輸入框裡，輸入 Admin，並點擊按鈕 Search
  it("Search in Admin Tab with Username", () => {
    cy.contains("Admin").click();
    cy.get("div[data-v-957b4417]").find("input[data-v-1f99f73c]").type("Admin");
    cy.get('button[type="submit"]').click();
  });

  // 找到左邊的 Admin 按鈕，並點擊
  // 在畫面 Employee Name 標籤的輸入框裡，輸入 Peter Mac Anderson，並點擊按鈕 Search
  it("Search in Admin Tab with Employee Name", () => {
    cy.contains("Admin").click();
    cy.get("div[data-v-75e744cd]")
      .find('input[placeholder="Type for hints..."]')
      .type("Peter Mac Anderson");
    cy.get('button[type="submit"]').click();
  });

  // 在每一次 it 區塊執行之後，都要執行一次的 afterEach()
  afterEach(() => {
    cy.get(".oxd-userdropdown-name").click();
    cy.contains("a", "Logout").click();
  });
});
