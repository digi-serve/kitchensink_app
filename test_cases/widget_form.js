import path from "path";

const ID_DC_TestKCS = "2900d309-e9c3-434f-b937-202d8a972a11";
const ID_Row1 = "00000000-0000-0000-0000-000000000000";

export default (folderName) => {
   describe("Form", () => {
      beforeEach(() => {
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
         cy.get(
            '[data-cy="tab-Form-b5b74f39-3f9a-478c-b8b5-1376b77c74da-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         ).click();
         cy.DCSetCursor(ID_DC_TestKCS, ID_Row1);
      });

      it("edits and saves changes", () => {
         // Check fields and current values
         cy.contains("label", "test-kcs-id").should("exist");
         cy.get(
            '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]',
         )
            .as("textField")
            .should("exist")
            .invoke("val")
            .should("contain", "text");

         // Test to ensure tiny mce loads correctly
         cy.get(".tox-tinymce").should("exist").find(".tox-editor-container");

         // Make Changes
         cy.get("@textField").clear();
         cy.get("@textField").type("Edited by Cypress!");

         // Save
         cy.get('[data-cy="button save 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]')
            .should("exist")
            .click();

         // Check the changes
         cy.get(
            '[data-cy="tab-Detail-e8bcfd8a-e343-4cf6-82bb-533cafd45c3a-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         ).click();
         cy.get(
            '[data-cy="detail text singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 aa1c0a4d-001c-4227-970b-4cf1c676ad20"]',
         ).should("contain", "Edited by Cypress!");
      });

      it("enforces validation rules", () => {
         const textalert = "This is a required field.";
         cy.get(
            '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]',
         )
            .as("textField")
            .siblings("label")
            .should("have.class", "webix_required"); // this class adds the *
         cy.get(
            '[data-cy="date daterequired 07aaedeb-f90c-4389-8b1c-dd7da9709468 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]',
         )
            .as("dateField")
            .siblings("label")
            .should("have.class", "webix_required"); // this class adds the *

         //Clear input value
         cy.get("@textField").clear();
         cy.get("@dateField").clear();

         //Click Save button
         cy.get(
            '[data-cy="button save 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]',
         ).click();

         // Check the popup
         cy.get("div.webix_modal_box.webix_alert-error")
            .as("alert")
            .should("be.visible");
         cy.get("@alert")
            .children(".webix_popup_title")
            .should("contain", "Problems Saving");
         cy.get("@alert")
            .children(".webix_popup_text")
            .children("span")
            .children("ul")
            .children()
            .as("warnings")
            .should("have.length", 2);
         cy.get("@warnings")
            .eq(0)
            .should("contain", "Missing Required Field daterequired");
         cy.get("@warnings")
            .eq(1)
            .should("contain", "Missing Required Field singlelinetextrequired");
         cy.get("@alert").children(".webix_popup_controls").click();
         cy.get("@alert").should("not.exist");

         // Check the fields for warnings
         cy.get("@textField")
            .parent()
            .siblings(".webix_inp_bottom_label")
            .should("contain", textalert);
         cy.get("@dateField")
            .parent()
            .siblings(".webix_inp_bottom_label")
            .should("contain", textalert);

         // put the values back
         cy.get("@textField").clear();
         cy.get("@textField").type("Cleaned Up");

         cy.get("@dateField").clear();
         cy.get("@dateField").type("09/01/1969");
      });

      it("can upload photo", () => {
         const photoPath = path.join(
            "..",
            "e2e",
            `${folderName}`,
            "test_example",
            "images",
            "digiServe_Color.png",
         );
         const fileExtension = "png";
         cy.get(
            '[data-cy="fieldcustom image imageattachment 8e0c6dc8-84bb-4ef6-9ca3-76214e157864 90d353f9-664a-4ae6-85a6-8f5cafa76f48"] .ab-image-data-field',
         ).scrollIntoView();

         // Intercept the upload so we can delay it.
         cy.intercept("POST", "/file/upload/*/*/1", (req) =>
            req.on("response", (res) => res.setDelay(1000)),
         ).as("upload");

         cy.get(
            '[data-cy="fieldcustom image imageattachment 8e0c6dc8-84bb-4ef6-9ca3-76214e157864 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]',
         )
            .as("imgField")
            // get the upploader id
            .invoke("attr", "data-uploader-id")
            .then((uploader) => {
               // prepare the upload file
               cy.fixture(photoPath).then((data) => {
                  const blob = Cypress.Blob.base64StringToBlob(
                     data,
                     `image/${fileExtension}`,
                  );
                  const file = new File([blob], photoPath, {
                     type: `image/${fileExtension}`,
                  });
                  //  get the window so we can access webix
                  cy.window().then((win) => {
                     const $uploader = win.$$(uploader);
                     // attach an event to the webix uploader so we can run
                     // assertions while the upload is in progress
                     $uploader.attachEvent("onAfterFileAdd", () => {
                        // NOTE: if the system if fast enough, the progress
                        // inidictor might be gone before cypress can execute
                        // this next command.
                        // cy.get("@imgField")
                        //    .find(".webix_progress_top")
                        //    .should("be.visible");
                        cy.get("@imgField")
                           .find(".image-data-field-image")
                           .should("be.visible")
                           .and("have.css", "background-image");
                        cy.get(
                           '[data-cy="button save 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]',
                        ).click();
                        cy.get("div.webix_modal_box.webix_alert-error")
                           .should("be.visible")
                           .and(
                              "contain",
                              "imageattachment: Image still uploading",
                           );
                        cy.get(".webix_popup_controls").click();
                     });
                     // add the file to the webix uploader (this starts the
                     // upload)
                     $uploader.addFile(file, file.size, fileExtension);
                  });
               });
            });
         // now that the upload finished submit without validation errors
         cy.wait("@upload");
         cy.get(
            '[data-cy="button save 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]',
         ).click();
         cy.get("div.webix_modal_box.webix_alert-error").should("not.exist");
      });
   });
};
