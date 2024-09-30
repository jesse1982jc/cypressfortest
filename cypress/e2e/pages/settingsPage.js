// 匯入 BasePage 類別
import BasePage from "./basePage";

// 新建 SettingsPage 類別，並繼承自 BasePage 類別
class SettingsPage extends BasePage {
  // 找到 logout 登出的選擇器 的方法
  getLogout() {
    return "Or click here to logout.";
  }

  // 點擊 logout 按鈕 的方法
  clickLogout() {
    // cy.contains(this.getLogout()).click();

    // 改用 BasePage 的方法
    this.clickElement(this.getLogout(), true);
  }
}

// 導出 SettingsPage 類別
export default SettingsPage;
