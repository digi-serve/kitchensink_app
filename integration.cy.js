const Common = require("../../../../setup/common.js");

const folderName = __dirname.match(/[^\\/]+$/)[0];

const WidgetTestCases = [
   require("./test_cases/dataCollection.js"), // not a widget test - may refactor to a different group
   require("./test_cases/widget_carousel.js"),
   require("./test_cases/widget_chart.js"),
   require("./test_cases/widget_combo.js"),
   require("./test_cases/widget_comment.js"),
   require("./test_cases/widget_conditional_container.js"),
   require("./test_cases/widget_csv_exporter.js"),
   require("./test_cases/widget_detail.js"),
   require("./test_cases/widget_docx_builder.js"),
   require("./test_cases/widget_filter_by_connected_record.js"),
   require("./test_cases/widget_form_save.js"),
   require("./test_cases/widget_form.js"),
   require("./test_cases/widget_grid.js"),
   require("./test_cases/widget_image.js"),
   require("./test_cases/widget_label.js"),
   require("./test_cases/widget_menu.js"),
   require("./test_cases/widget_scope.js"),
   require("./test_cases/widget_tab.js"),
   require("./test_cases/widget_text.js"),
];

const ProcessTestCases = [
   require("./test_cases/process_approval.js"),
   require("./test_cases/process_test-kcs-onCreate-process.js"),
];

// Don't stop tests on uncaught errors
Cypress.on("uncaught:exception", (e) => {
   // Unless the error matches below
   if (!e.message.includes("this.parentFormComponent is not a function")) {
      return false;
   }
});

before(() => {
   cy.ResetDB();
   cy.AuthLogin();
   cy.request("POST", "/test/import", {
      file: `imports/${folderName}/appbuilder_app.json`,
   });
});

beforeEach(() => {
   cy.AuthLogin();

   cy.RunSQL(folderName, [
      "reset_tables.sql",
      "reset_roles.sql",
      "add_testkcs.sql",
      "add_testkcs2-Menu.sql",
      "add_testkcs2-combo.sql",
      "add_testkcs2-ScopedData.sql",
      "assign_testkcs_testkcs2.sql",
   ]);
});

describe("Smoke Test", () => {
   it("App Loads", () => {
      cy.visit("/");
      cy.get('[data-cy="portal_work_menu_sidebar"]', { timeout: 30000 })
         .should("be.visible")
         .click();
      cy.get('[data-cy="0ac51d6c-7c95-461c-aa8b-7da00afc4f48"]').should(
         "exist",
      );
   });
});

describe("Widget Tests", () => {
   beforeEach(() => {
      // Common.RunSQL(cy, folderName, [
      //    "add_testkcs.sql",
      //    "add_testkcs2-Menu.sql",
      //    "add_testkcs2-ScopedData.sql",
      // ]);
      cy.visit("/");
      cy.get('[data-cy="portal_work_menu_sidebar"]', { timeout: 30000 })
         .should("be.visible")
         .click();
      cy.get('[data-cy="0ac51d6c-7c95-461c-aa8b-7da00afc4f48"]')
         .should("be.visible")
         .click();
      cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
   });

   WidgetTestCases.forEach((tc) => {
      tc(folderName, Common);
   });
});

describe("Process Tests", () => {
   beforeEach(() => {
      cy.visit("/");
      cy.get('[data-cy="dd6f7981-cc7b-457c-b231-742ce85004f8"]').click();
   });

   ProcessTestCases.forEach((tc) => {
      tc(folderName, Common);
   });
});
