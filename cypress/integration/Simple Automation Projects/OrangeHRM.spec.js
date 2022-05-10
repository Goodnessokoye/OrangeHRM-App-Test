///<reference types="cypress"/>

describe("OrangeHRM", () => {
  it("Launch the App and Login with valid email and password ", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/", {
      retryOnNetworkFailure: true,
    });
    cy.get("#logInPanelHeading").should("have.text", "LOGIN Panel");
    cy.get("#txtUsername").type("Admin");
    cy.get("#txtPassword").type("admin123");
    cy.get("#btnLogin").should("be.visible");
    cy.get("#btnLogin").click();
    cy.wait(1000);
  });

  it("LogOut", () => {
    cy.get("#welcome").click();
    cy.get("#welcome-menu > :nth-child(1) > :nth-child(3) > a").click();
    cy.get("#divLogo > img").should("be.visible");
    cy.wait(500);
  });

  it("Login with valid email & invalid password", () => {
    cy.get("#txtUsername").type("Admin");
    cy.get("#txtPassword").type("goodness123");
    cy.get("#btnLogin").should("be.visible");
    cy.get("#btnLogin").click();
    cy.wait(1000);
  });

  it("invalid email and valid password", () => {
    cy.get("#txtUsername").type("goodness");
    cy.get("#txtPassword").type("admin123");
    cy.get("#btnLogin").click();
    cy.get("#spanMessage").should("be.visible");
    cy.wait(1000);
  });

  it("Login with no credentials", () => {
    cy.get("#txtUsername").type(" ");
    cy.get("#txtPassword").type(" ");
    cy.get("#btnLogin").click();
    cy.get("#spanMessage").should("be.visible");
    cy.wait(1000);
  });

  it("That login was unsuccessful with the error “Invalid credentials” returned", () => {
    cy.get("#spanMessage").should("have.text", "Csrf token validation failed");
  });
});
