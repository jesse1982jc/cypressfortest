// 建立一個類別 class
class LandingPage {
  // 找到 Sign in 的選擇器 的方法 (直接返回字串)
  getSignin() {
    return "Sign in";
  }

  // 點擊 Sign in 按鈕 的方法(找到選擇器，並點擊)
  clickSigninButton() {
    cy.contains(this.getSignin()).click();
  }
}

// 備註: export default new LoginPage(); 這種方式導出的是 LoginPage 類的一個"實例"。
// 導出 LandingPage 類別
export default LandingPage;
