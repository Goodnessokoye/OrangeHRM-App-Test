///<reference types="cypress"/>

describe("Todo List App", () => {
  it("Launch the App", () => {
    cy.visit("http://todomvc-app-for-testing.surge.sh", {
      retryOnStatusCodeFailure: true,
    });
    cy.get("h1").should("have.text", "todos");
    cy.get(".clear-completed").should("not.exist");
  });
  it("Add an Item to the list", () => {
    cy.get(".new-todo").type("write text {enter}");
    cy.wait(3000);
  });
  it("Delete the item added", () => {
    cy.wait(1000);
    cy.get(".destroy").invoke("show");
    cy.wait(5000);
    cy.get(".destroy").click();
    cy.wait(5000);
    cy.get(".toggle").click();
    cy.wait(5000);
    cy.get(".clear-completed").click();
  });
    it("Add 5 different items", () => {
      cy.get(".new-todo")
        .type("Hit the gym {enter}")
        .type("Hot bath{enter}")
        .type("Eat{enter}")
        .type("Go to work{enter}")
        .type("Hit the driving school{enter}");
    });
    it("Delete 3 items from the list", () => {
      cy.get(":nth-child(1) > .view > .toggle").click();
      cy.get(":nth-child(3) > .view > .toggle").click();
      cy.get(":nth-child(5) > .view > .toggle").click();
      cy.wait(5000);
      cy.get(".clear-completed").click();
      cy.wait(2000);
      cy.get(".clear-completed").should("not.exist");
      cy.wait(3000);
      cy.get(":nth-child(3) > a").click();
      cy.wait(3000);
      cy.get(":nth-child(1) > a").click();
    });
});
