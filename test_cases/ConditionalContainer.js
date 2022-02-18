export default (folderName, Common) => {
    const TARGET_VIEW_ID = "ABViewConditionalContainer_c2a24665-7aad-4f6d-b4b5-2cc7d862fa2c_component";

    describe("ConditionalContainer", () => {
        beforeEach(() => {
            Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);

            // Select the Condition container tab
            cy.get('div[webix_tm_id="566273fc-d2ba-481a-b12d-20d50319a57a_menu"]').click();
        });

        it("Exists", () => {
            cy.get(`div[view_id^="${TARGET_VIEW_ID}"]`).should("exist");
        });

        it("Should display if panel", () => {
            cy.get(`div[view_id^="${TARGET_VIEW_ID}"]`).should('have.text', 'If');
        });

        it("Should display else panel", () => {
            // Select a new row
            cy.get('div[view_id="ABViewGrid_9827881b-9054-11ec-ac3e-e4029b83a234_datatable"] div.detailsView').eq(1).click();
            cy.get(`div[view_id^="${TARGET_VIEW_ID}"]`).should('have.text', 'Else');
        });
    });
};
