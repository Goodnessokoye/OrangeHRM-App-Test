///<reference types="cypress"/>

describe("adilo", () => {
  it("Launch the App and SignUp credential ", () => {
    cy.visit("https://adilo.com/", {
      retryOnNetworkFailure: true,
    });
    cy.get(".header-right > .btn").click();
    cy.get(".signup-form-boody").should("be.visible");
    cy.get("#First-Name-3").type("Goodness{enter}");
    cy.get("#Last-Name-3").type("Okoye{enter}");
    cy.get("#email-2").type("cruizing@ghr{enter}");
    cy.get("#Password-3").type("admin123");
    cy.get("#submitBtn").should("be.visible");
    cy.get("#submitBtn").click();
    // cy.wait(3000);
    // cy.location("loc.pathname", {
    //   timeout: 10000,
    // }).should("eq", "https://adilo.com");
    // cy.location().should((loc) => {
    //   expect(loc.pathname.toString()).to.contain(
    //     "https://adilo.bigcommand.com/login/1"
    //   );
    // });
    // cy.url().should("be.equal", `${Cypress.config("baseUrl")}/https://adilo.com/`);

    // cy.get("#logInPanelHeading").should("have.text", "LOGIN Panel");
    // cy.get("#txtUsername").type("Admin");
    // cy.get("#txtPassword").type("admin123");
    // cy.get("#btnLogin").should("be.visible");
    // cy.get("#btnLogin").click();
    // cy.wait(1000);
  });

  //   it("LogOut", () => {
  //     cy.get("#welcome").click();
  //     cy.get("#welcome-menu > :nth-child(1) > :nth-child(3) > a").click();
  //     cy.get("#divLogo > img").should("be.visible");
  //     cy.wait(500);
  //   });

  //   it("Login with valid email & invalid password", () => {
  //     cy.get("#txtUsername").type("Admin");
  //     cy.get("#txtPassword").type("goodness123");
  //     cy.get("#btnLogin").should("be.visible");
  //     cy.get("#btnLogin").click();
  //     cy.wait(1000);
  //   });

  //   it("invalid email and valid password", () => {
  //     cy.get("#txtUsername").type("goodness");
  //     cy.get("#txtPassword").type("admin123");
  //     cy.get("#btnLogin").click();
  //     cy.get("#spanMessage").should("be.visible");
  //     cy.wait(1000);
  //   });

  //   it("Login with no credentials", () => {
  //     cy.get("#txtUsername").type(" ");
  //     cy.get("#txtPassword").type(" ");
  //     cy.get("#btnLogin").click();
  //     cy.get("#spanMessage").should("be.visible");
  //     cy.wait(1000);
  //   });

  //   it("That login was unsuccessful with the error “Invalid credentials” returned", () => {
  //     cy.get("#spanMessage").should("have.text", "Csrf token validation failed");
  //   });
});

//
