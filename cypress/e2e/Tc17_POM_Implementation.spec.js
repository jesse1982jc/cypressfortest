// 另一種作法: 因為來源是導出"實例"，所以這裡改成匯入"實例"
import landingPage from "./pages/landingPage";

// ** method chaining 作法 **
// 因為從 landingPage.js 就一一導入了(第一個遇到的頁面實例)，所以 以下三行導入就不需要了
// import loginPage from "./pages/loginPage";
// import homePage from "./pages/homePage";
// import settingsPage from "./pages/settingsPage";

// 也可以寫成 import SettingsPage from "../e2e/pages/settingsPage";

describe("Page Object Model Test", () => {
  // **重要**  因為先前都是 export 類別，而沒有創建實例，所以在這裡，要創建一個實例  **重要**

  // 另一種作法: 刪除以下四行創建實例的程式碼
  // const landingPage = new LandingPage();
  // const loginPage = new LoginPage();
  // const homePage = new HomePage();
  // const settingsPage = new SettingsPage();

  // 在 it 區塊執行之前，都要執行的 beforeEach()，去 fixtures 抓 json 資料
  // 這裡因為會用到 this，所以不要用箭頭函式，要改寫成傳統函式
  beforeEach("fixture Json", function () {
    cy.fixture("conduitLoginData").as("data");
  });

  it("Conduit - Valid Credentials", function () {
    // 先到 Landing Page
    cy.visit("https://react-redux.realworld.io/");

    // Landing page 點擊 Sign in 按鈕
    // ** method chaining 作法 **
    // 注意: 以下改寫成 method chaining 的寫法，因為用 . 串接，所以後面會少 分號 ;
    landingPage
      .clickSigninButton()

      // Login page 輸入 Email
      .enterEmail(this.data.validEmail)

      // Login page 輸入 Password
      .enterPassword(this.data.validPassword)

      // Login page 點擊 Sign in 按鈕
      .clickSignin()

      // Home page 確認 YourFeed, GlobalFeed, Home, New Post 是否存在
      .checkYourFeedIsVisible()
      .checkGlobalFeedIsVisible()
      .checkHomeIsVisible()
      .checkNewPostIsVisible()

      // Home page 點擊 Settings 按鈕
      .clickSettings()

      // Settings page 點擊 Logout 按鈕
      .clickLogout();
  });
});
