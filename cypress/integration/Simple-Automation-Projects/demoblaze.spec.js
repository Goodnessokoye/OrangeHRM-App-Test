///<reference types="cypress"/>
///<reference types="cypress"/>

describe("DemoBlaze Web App", () => {
  it("Launch the App and sign Up with valid username and password ", () => {
    cy.visit("https://www.demoblaze.com/", {
      retryOnNetworkFailure: true,
    });
    cy.get("#signin2").click();
    cy.get("#sign-username").type("goody2{enter}");
    cy.get("#sign-password").type("okoye{enter}");
    cy.get("#signInModal .btn-primary").click();
    cy.get(
      "#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span"
    ).should("be.visible");
    cy.get(
      "#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span"
    ).should("be.visible");
    cy.get(
      "#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span"
    ).click();
    cy.wait(3000);
  });
  it("Login with valid credentials", () => {
    cy.get("#login2").click();
    cy.get("#loginusername").invoke("val", "goody");
    cy.get("#loginpassword").invoke("val", "okoye");
    cy.get(
      "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary"
    ).should("be.visible");
    cy.get(
      "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    cy.wait(2000);
  });

  // it("Logout from the App", () => {
  //   cy.get("#logout2").invoke("show");
  //   cy.get("#logout2").click();
  // });

  // it("Login with valid username & invalid password", () => {
  //   cy.get("#login2").invoke("show");
  //   cy.get("#login2").click();
  //   cy.get("#loginusername").type("goody{enter}");
  //   cy.get("#loginpassword").type("okoye123{enter}");
  //   cy.get(
  //     "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
  //   ).click();
  // });

  // it("verify Wrong Password alert", () => {
  //   cy.on("window:alert", (str) => {
  //     expect(str).to.contains("Wrong password");
  //   });
  //   cy.get(
  //     "#logInModal > .modal-dialog > .modal-content > .modal-header > .close > span"
  //   ).click();
  //   cy.wait(1000);
  // });

  // it("invalid username and valid password", () => {
  //   cy.get("#login2").invoke("show");
  //   cy.get("#login2").click();
  //   cy.get("#loginusername").type("goody123{enter}");
  //   cy.get("#loginpassword").type("okoye{enter}");
  //   cy.get(
  //     "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
  //   ).click();
  // });
  // it("verify User does not exist alert", () => {
  //   cy.on("window:alert", (str) => {
  //     expect(str).to.equal("User does not exist.");
  //   });
  //   cy.wait(1000);
  // });

  // it("Login with no credentials and verify Please fill out Username and Password alert", () => {
  //   cy.get("#loginusername").invoke("val", "");
  //   cy.get("#loginpassword").invoke("val", "");
  //   cy.get(
  //     "#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
  //   ).click();
  //   cy.on("window:alert", (str) => {
  //     expect(str).to.equal("Please fill out Username and Password.");
  //   });
  // });

  it("Add a phone product to cart", () => {
    cy.get(".list-group-item").eq(1).click();
    cy.get(
      ":nth-child(1) > .card > .card-block > .card-title > .hrefch"
    ).click();
    cy.get(".item > img").should("be.visible");
    cy.get(".item > img").should("be.visible");
    cy.get(".price-container").should("be.visible");
    cy.get(".price-container").should("be.visible");
    cy.get(".col-sm-12 > .btn").should("be.visible");
    cy.get(".col-sm-12 > .btn").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equals("Product added.");
    });
    cy.get("#cartur").click();
    //after
    cy.get(".col-lg-1 > .btn").click();
    cy.get("#orderModal > .modal-dialog > .modal-content > .modal-body").should(
      "be.visible"
    );
    cy.get("#name").type("Goodness{enter}");
    cy.get("#name").type("Nigeria{enter}");
    cy.get("#name").type("Enugu{enter}");
    cy.get("#card").type("12345678901234{enter}");
    cy.get("#month").type("09{enter}");
    cy.get("#year").type("12{enter}");
    cy.get(
      "#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).should("be.visible");
    cy.get(
      "#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary"
    ).click();
    //hello
    cy.get(".sa-success").should("be.visible");
    cy.get(".sweet-alert").should("be.visible");
    cy.get(".confirm").click();
    cy.get(".lead").should("be.visible");
    cy.get(".sweet-alert > h2").should("be.visible");
  });

  // it("Add a Laptop to cart", () => {
  //   cy.get(".list-group-item").eq(1).click();
  // });

  //  it("Add a Monitor to cart", () => {
  //    cy.get(".list-group-item").eq(1).click();
  //  });
});
