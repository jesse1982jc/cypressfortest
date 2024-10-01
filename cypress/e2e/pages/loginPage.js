// 匯入 BasePage 類別
import BasePage from "./basePage";

// ** method chaining 作法 **
// 注意: 這邊是匯入 homePage 實例本身，不是類別名稱，因為在 homePage.js 最後一行是匯出 homePage 實例了
import homePage from "./homePage";

// 建立 LoginPage 類別，並繼承自 BasePage 類別
class LoginPage extends BasePage {
  // 找到 Email 選擇器 的方法
  getEmail() {
    return 'input[type="email"]';
  }

  // 找到 Password 選擇器 的方法
  getPassword() {
    return 'input[type="password"]';
  }

  // 找到 Sign in 按鈕選擇器 的方法
  getSinginButton() {
    return 'button[type="submit"]';
  }

  // 輸入 Email 的方法
  enterEmail(emailValue) {
    // cy.get(this.getEmail()).type(emailValue);

    // 改用 BasePage 的方法
    // 括號的參數 false 可以不用寫，因為是預設值可以不寫)
    this.fillText(this.getEmail(), emailValue, false);

    // ** method chaining 作法 **
    // this 就是自己物件(實例)本身，就是不會導航到別頁的意思
    return this;
  }

  // 輸入 Password 的方法
  enterPassword(passwordValue) {
    // cy.get(this.getPassword()).type(passwordValue);

    // 改用 BasePage 的方法
    // 括號的參數 false 可以不用寫，因為是預設值可以不寫)
    this.fillText(this.getPassword(), passwordValue, false);

    // ** method chaining 作法 **
    // this 就是自己物件(實例)本身，就是不會導航到別頁的意思
    return this;
  }

  // 點擊 Sign in 按鈕 的方法
  clickSignin() {
    // cy.get(this.getSinginButton()).click();

    // 改用 BasePage 的方法
    // 括號的參數 false 可以不用寫，因為是預設值可以不寫)
    this.clickElement(this.getSinginButton(), false);

    // ** method chaining 作法 **
    // 返回到 homePage 實例 這個頁面
    return homePage;
  }
}

// 導出 LoginPage 類別
// export default LoginPage;

// 另一種寫法，創建 LoginPage 類別的實例，並取名為 loginPage，然後導出 loginPage 實例
const loginPage = new LoginPage();
export default loginPage;
