const testkcsObjectID = "01e0c6d4-ab5e-41ca-8715-77f0424e623f";
const testkcskeybObjectID = "3f4f9295-4ad6-4279-9789-5c6c175852df";
export default () => {
   describe("DataCollection", () => {
      beforeEach(() => {
         cy.get(
            '[data-cy="tab-DataCollections-b5f3ec2c-da69-46b0-b2a9-b76c3d809d69-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         )
            .should("exist")
            .click();
      });

      it("Unlinked DC Loads Data", () => {
         cy.get(
            '[data-cy="tab No Link af4de560-ebf3-4500-a320-6042d3794a26 b82e7941-b47f-477d-9c10-1d7ef85185ff"]',
         )
            .should("be.visible")
            .click();
         cy.get('.webix_dataview[role="listbox"] > .webix_scroll_cont')
            .as("list")
            .should("be.visible")
            .find(".webix_dataview_item")
            .should("have.length", 2);
         // add a new record, should see it
         cy.request("POST", `/app_builder/model/${testkcsObjectID}`, {
            singlelinetext: "new",
         });
         cy.get("@list").find(".webix_dataview_item").should("have.length", 3);
      });

      it("Linked DC loads data according to parent cursor", () => {
         cy.get(
            '[data-cy="tab Linked baae6c32-ca96-4e21-acd2-7a54f57de3d8 b82e7941-b47f-477d-9c10-1d7ef85185ff"]',
         )
            .should("be.visible")
            .click();
         // no cursor so list should be empty
         cy.get('.webix_dataview[role="listbox"] > .webix_scroll_cont')
            .as("list")
            .should("be.visible")
            .find(".webix_dataview_item")
            .should("have.length", 0);
         // check we don't get newly created values
         cy.request("POST", `/app_builder/model/${testkcskeybObjectID}`, {
            "Key A": "Record C",
         });
         cy.get("@list").find(".webix_dataview_tiem").should("have.length", 0);
         // now set the cursor
         cy.get(
            '[data-cy="ABViewGrid_9a322f9c-738c-4cf6-8d88-c9755e898f88_table"] > .webix_dtable > .webix_ss_body',
         )
            .as("grid")
            .contains("Record A")
            .should("be.visible")
            .first()
            .click();

         cy.get("@list")
            .find(".webix_dataview_item")
            .should("have.length", 1)
            .first()
            .should("contain", "Record A")
            .and("not.contain", "Record B");

         cy.get("@grid")
            .contains("Record B")
            .should("be.visible")
            .first()
            .click();

         cy.get("@list")
            .find(".webix_dataview_item")
            .should("have.length", 1)
            .first()
            .should("contain", "Record B")
            .and("not.contain", "Record A");
      });
   });
};
