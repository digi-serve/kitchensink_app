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
  // Common.RunSQL(cy, folderName, ["reset_tables.sql"]);
});

it("Smoke Test", () => {
  describe("App Loads", () => {
    cy.visit("/").wait(1500);
    cy.get('[data-cy="portal_work_menu_sidebar"]').click();
    cy.get('[data-cy="0ac51d6c-7c95-461c-aa8b-7da00afc4f48"]').should("exist");
  });
});
