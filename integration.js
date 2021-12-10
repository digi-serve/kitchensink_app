const Common = require("../../../../setup/common.js");

const folderName = __dirname.match(/[^\\\/]+$/);

Cypress.on("uncaught:exception", (err, runnable) => {
  if (
    err.message.includes(
      "TypeError: Cannot read properties of undefined (reading 'raw')"
    )
  ) {
    return false;
  }
});

before(() => {
  Common.ResetDB(cy);
  Common.AuthLogin(cy);
  cy.request("POST", "/test/import", {
    file: `imports/${folderName}/kitchenSink.json`,
  });
});

beforeEach(() => {
  Common.AuthLogin(cy);
  cy.visit("/").wait(1500);
  Common.RunSQL(cy, folderName, ["reset_tables.sql"]);
});

describe("Smoke Test", () => {
  it("App Loads", () => {
    cy.get('[data-cy="portal_work_menu_sidebar"]').click();
    cy.get('[data-cy="0ac51d6c-7c95-461c-aa8b-7da00afc4f48"]').should("exist");
  });
});

describe.only("Widget Tests", () => {
  beforeEach(() => {
    cy.get('[data-cy="portal_work_menu_sidebar"]').click();
    cy.get('[data-cy="0ac51d6c-7c95-461c-aa8b-7da00afc4f48"]').click();
    cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
  });
  describe("Carousel", () => {
    it("Exists", () => {
      Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
      cy.get(
        '[data-cy="carousel 54827db6-497b-43ae-96f9-153b63a9c977"]'
      ).should("exist");
      // Select tab
      // cy.get(
      //   "tab-Carousel-e56d4ad0-d879-43c0-934a-a4004fcc7579-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"
      // ).click();
    });
  });
});
