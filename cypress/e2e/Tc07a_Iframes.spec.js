/// <reference types="cypress" />

describe("Advanced UI Elements 2", () => {
  it("Iframes", () => {
    cy.visit("https://ui.vision/demo/webtest/frames/");

    // 先清掉小彈窗訊息
    // cy.get(
    //   'button[class="tox-notification__dismiss tox-button tox-button--naked tox-button--icon"]'
    // ).click();

    // 先找到 iframe 標籤的 id
    cy.get(
      '[src="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]'
    ).within(($iframe) => {
      cy.wait(15000);
      const element = $iframe.contents().find("#i19");
      cy.wrap(element).click();
    });
  });
});
