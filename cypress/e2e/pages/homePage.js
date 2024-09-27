class HomePage {
  // 找到 Your feed 選擇器 的方法
  getYourFeed() {
    return "Your Feed";
  }

  // 找到 Global feed 選擇器 的方法
  getGlobalFeed() {
    return "Global Feed";
  }

  // 找到 Home 選擇器 的方法
  getHome() {
    return "Home";
  }

  // 找到 New Post 選擇器 的方法
  getNewPost() {
    return 'a[href="#editor"]';
  }

  // 找到 Settings 選擇器 的方法
  getSettings() {
    return 'a[href="#settings"]';
  }

  // 確認 YourFeed 是否存在 的方法
  checkYourFeedIsVisible() {
    cy.contains(this.getYourFeed()).should("be.visible");
  }

  // 確認 GlobalFeed 是否存在 的方法
  checkGlobalFeedIsVisible() {
    cy.contains(this.getGlobalFeed()).should("be.visible");
  }

  // 確認 Home 是否存在 的方法
  checkHomeIsVisible() {
    cy.contains(this.getHome()).should("be.visible");
  }

  // 確認 New Post 是否存在 的方法
  checkNewPostIsVisible() {
    cy.get(this.getNewPost()).should("be.visible");
  }

  // 點擊 Settings 按鈕動作 的方法
  clickSettings() {
    cy.get(this.getSettings()).click();
  }
}

// 導出 HomePage 類別
export default HomePage;
