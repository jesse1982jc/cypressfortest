// 匯入 BasePage 類別
import BasePage from "./basePage";

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
  }

  // 輸入 Password 的方法
  enterPassword(passwordValue) {
    // cy.get(this.getPassword()).type(passwordValue);

    // 改用 BasePage 的方法
    // 括號的參數 false 可以不用寫，因為是預設值可以不寫)
    this.fillText(this.getPassword(), passwordValue, false);
  }

  // 點擊 Sign in 按鈕 的方法
  clickSignin() {
    // cy.get(this.getSinginButton()).click();

    // 改用 BasePage 的方法
    // 括號的參數 false 可以不用寫，因為是預設值可以不寫)
    this.clickElement(this.getSinginButton(), false);
  }
}

// 導出 LoginPage 類別
export default LoginPage;
