// 匯入 BasePage 類別
import BasePage from "./basePage";

// ** method chaining 作法 **
// 注意: 這邊是匯入 settingsPage 實例本身，不是類別名稱，因為在 settingsPage.js 最後一行是匯出 settingsPage 實例了
import settingsPage from "./settingsPage";

// HomePage 將繼承自 BasePage
class HomePage extends BasePage {
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
    // cy.contains(this.getYourFeed()).should("be.visible");

    // 改用 BasePage 的方法
    this.isElementVisible(this.getYourFeed(), true);

    // ** method chaining 作法 **
    // this 就是自己物件(實例)本身，就是不會導航到別頁的意思
    return this;
  }

  // 確認 GlobalFeed 是否存在 的方法
  checkGlobalFeedIsVisible() {
    // cy.contains(this.getGlobalFeed()).should("be.visible");

    // 改用 BasePage 的方法
    this.isElementVisible(this.getGlobalFeed(), true);

    // ** method chaining 作法 **
    // this 就是自己物件(實例)本身，就是不會導航到別頁的意思
    return this;
  }

  // 確認 Home 是否存在 的方法
  checkHomeIsVisible() {
    // cy.contains(this.getHome()).should("be.visible");

    // 改用 BasePage 的方法
    this.isElementVisible(this.getHome(), true);

    // ** method chaining 作法 **
    // this 就是自己物件(實例)本身，就是不會導航到別頁的意思
    return this;
  }

  // 確認 New Post 是否存在 的方法
  checkNewPostIsVisible() {
    // cy.get(this.getNewPost()).should("be.visible");

    // 改用 BasePage 的方法
    this.isElementVisible(this.getNewPost(), false);

    // ** method chaining 作法 **
    // this 就是自己物件(實例)本身，就是不會導航到別頁的意思
    return this;
  }

  // 點擊 Settings 按鈕動作 的方法
  clickSettings() {
    // cy.get(this.getSettings()).click();

    // 改用 BasePage 的方法
    this.clickElement(this.getSettings(), false);

    // ** method chaining 作法 **
    // 返回到 settingsPage 實例 這個頁面
    return settingsPage;
  }
}

// 導出 HomePage 類別
// export default HomePage;

// 另一種寫法，導出 HomePage 類別的"實例"
// 先創建 HomePage 的實例，並給它命名為 homePage
const homePage = new HomePage();

// 導出 homePage 實例
export default homePage;
