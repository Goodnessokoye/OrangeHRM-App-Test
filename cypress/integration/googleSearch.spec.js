///<reference types="cypress"/>

describe("Google search page", function () {
  it("Launch google search page", function () {
    cy.visit("https://google.com", { retryOnStatusCodeFailure: true });
    cy.wait(3000);
    cy.get(".lnXdpd").should("be.visible");
  });
  it("Search a word", () => {
    cy.get(".gLFyf").type("christmas{enter}");
    cy.wait(5000);
    cy.get(".yKMVIe").should("have.text", "Christmas Day");
  });
});
