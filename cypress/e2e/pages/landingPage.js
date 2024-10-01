// 匯入 BasePage 類別
import BasePage from "./basePage";

// 建立一個類別 class 叫 LandingPage，並且它繼承自 BasePage 這個類別
class LandingPage extends BasePage {
  // 找到 Sign in 的選擇器 的方法 (直接返回字串)
  getSignin() {
    return "Sign in";
  }

  // 點擊 Sign in 按鈕 的方法(找到選擇器，並點擊)
  clickSigninButton() {
    // cy.contains(this.getSignin()).click();

    // 改用 BasePage 的方法
    this.clickElement(this.getSignin(), true);
  }
}

// 備註: export default new LoginPage(); 這種方式導出的是 LoginPage 類的一個"實例"。
// 導出 LandingPage 類別
// export default LandingPage;

// 另一種寫法，創建 LandingPage 類別的實例，並取名為 landingPage，然後導出 landingPage 實例
const landingPage = new LandingPage();
export default landingPage;
