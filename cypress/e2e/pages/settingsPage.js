// 匯入 BasePage 類別
import BasePage from "./basePage";

// ** method chaining 作法 **
// 注意: 這邊是匯入 landingPage 實例本身，不是類別名稱，因為在 landingPage.js 最後一行是匯出 landingPage 實例了
import landingPage from "./landingPage";

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

    // ** method chaining 作法 **
    // 返回到 landingPage 實例 這個頁面
    return landingPage;
  }
}

// 導出 SettingsPage 類別
// export default SettingsPage;

// 另一種寫法，創建 SettingsPage 類別的實例，並取名為 settingsPage，然後導出 settingsPage 實例
const settingsPage = new SettingsPage();
export default settingsPage;
