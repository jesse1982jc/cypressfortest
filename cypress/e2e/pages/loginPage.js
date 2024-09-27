class LoginPage {
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
    cy.get(this.getEmail()).type(emailValue);
  }

  // 輸入 Password 的方法
  enterPassword(passwordValue) {
    cy.get(this.enterPassword()).type(passwordValue);
  }

  // 點擊 Sign in 按鈕 的方法
  clickSignin() {
    cy.get(this.getSinginButton()).click();
  }
}

// 導出 LoginPage 類別
export default LoginPage;
