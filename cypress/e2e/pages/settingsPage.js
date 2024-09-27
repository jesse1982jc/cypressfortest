class SettingsPage {
  // 找到 logout 登出的選擇器 的方法
  getLogout() {
    return "Or click here to logout.";
  }

  // 點擊 logout 按鈕 的方法
  clickLogout() {
    cy.contains(this.getLogout()).click();
  }
}

// 導出 SettingsPage 類別
export default SettingsPage;
