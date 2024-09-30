/// <reference types="cypress" />

class BasePage {
  // Common method to navigate
  // 常用的導航 的方法，帶有參數
  navigateTo(url) {
    cy.visit(url);
  }

  // Common method for element clicking
  // 常用的元素點擊 的方法，有兩個參數 locator 及 useContents(預設值是 false)，第二個參數是為了判別使用 cy.get() 或 cy.contains()
  clickElement(locator, useContents = false) {
    if (useContents) {
      cy.contains(locator).click();
    } else {
      cy.get(locator).click();
    }
  }

  // Common method to fill out a text box field
  // 常用的輸入文字 的方法，有三個參數 locator 及 textToEnter(欲輸入的文字) 及 useContent(預設值是 false)，第三個參數是為了判別使用 cy.get() 或 cy.contains()
  fillText(locator, textToEnter, useContents = false) {
    if (useContents) {
      cy.contains(locator).type(textToEnter);
    } else {
      cy.get(locator).type(textToEnter);
    }
  }

  // Common method to retrieve text from an element
  // 常用的從元素裡獲取文字 的方法 (properties 的 "text" 屬性的值)
  getElementText(locator, useContents = false) {
    if (useContents) {
      return cy.contains(locator).getElementText("text");
    } else {
      return cy.get(locator).getElementText("text");
    }
  }

  // Common method to wait for an element to be visible
  // 常用的等待一個元素是否可見 的方法
  waitForElementVisible(locator, useContents = false) {
    if (useContents) {
      cy.contains(locator).should("be.visible");
    } else {
      cy.get(locator).should("be.visible");
    }
  }

  // Common method to assert if an element to be visible
  // 常用的斷言一個元素是否可見 的方法
  // 會回傳 true 或 false
  isElementVisible(locator, useContents = false) {
    if (useContents) {
      return cy.contains(locator).should("be.visible");
    } else {
      return cy.get(locator).should("be.visible");
    }
  }
}

export default BasePage;
