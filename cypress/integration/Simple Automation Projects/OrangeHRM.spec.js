///<reference types="cypress"/>

describe("OrangeHRM", () => {
  it("Valid credential", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/", {
      retryOnNetworkFailure: true,
    });
    cy.get("#divLogo > img").should("be.visible");
    cy.get("#logInPanelHeading").should("have.text", "LOGIN Panel");
    cy.get("#txtUsername").type("Admin");
    cy.get("#txtPassword").type("admin123");
    cy.get("#btnLogin").should("be.visible");
    cy.get("#btnLogin").click();
    cy.get("#welcome").click();
    cy.get("#welcome-menu > :nth-child(1) > :nth-child(3) > a").click();
    cy.get("#divLogo > img").should("be.visible");
  });
  it("invalid email and valid password", () => {
    cy.get("#txtUsername").type("goodness");
    cy.get("#txtPassword").type("admin123");
    cy.get("#btnLogin").click();
    cy.get("#spanMessage").should("be.visible");
  });
});
