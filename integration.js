const Common = require("../../../../setup/common.js");

const folderName = __dirname.match(/[^\\/]+$/)[0];

const testCases = [
   require("./test_cases/Carousel.js"),
   require("./test_cases/ConditionalContainer.js"),
   require("./test_cases/Combo.js"),
   require("./test_cases/Text.js"),
   require("./test_cases/Label.js"),
   require("./test_cases/Image.js"),
   require("./test_cases/Detail.js"),
   require("./test_cases/Menu.js"),
   require("./test_cases/Form.js"),
   require("./test_cases/FormSave.js"),
   require("./test_cases/Tab.js"),
   require("./test_cases/Comment.js"),
   require("./test_cases/DOCXBuilder.js"),
   require("./test_cases/Scope.js"),
];

// Don't stop tests on uncaught errors
Cypress.on("uncaught:exception", () => false);

before(() => {
   Common.ResetDB(cy);
   Common.AuthLogin(cy);
   cy.request("POST", "/test/import", {
      file: `imports/${folderName}/kitchenSink.json`,
   });
});

beforeEach(() => {
   Common.AuthLogin(cy);

   Common.RunSQL(cy, folderName, [
      "reset_tables.sql",
      "reset_roles.sql",
      "add_testkcs.sql",
      "add_testkcs2-Menu.sql",
      "add_testkcs2-combo.sql",
      "add_testkcs2-ScopedData.sql",
   ]);

   cy.visit("/");
});

describe("Smoke Test", () => {
   it("App Loads", () => {
      cy.get('[data-cy="portal_work_menu_sidebar"]')
         .should("be.visible")
         .click();
      cy.get('[data-cy="0ac51d6c-7c95-461c-aa8b-7da00afc4f48"]').should(
         "exist"
      );
   });
});

describe.only("Widget Tests", () => {
   beforeEach(() => {
      cy.get('[data-cy="portal_work_menu_sidebar"]')
         .should("be.visible")
         .click();
      cy.get('[data-cy="0ac51d6c-7c95-461c-aa8b-7da00afc4f48"]')
         .should("be.visible")
         .click();
      cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
   });

   testCases.forEach((tc) => {
      tc(folderName, Common);
   });
});
