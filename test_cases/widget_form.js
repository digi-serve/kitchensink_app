import path from "path";

export default (folderName) => {
   describe.only("Form", () => {
      beforeEach(() => {
         cy.get(
            '[data-cy="tab-Form-b5b74f39-3f9a-478c-b8b5-1376b77c74da-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();
      });

      it("edit and save changes", () => {
         // Check fields and current values
         cy.contains("label", "test-kcs-id").should("exist");
         cy.get(
            '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
         )
            .as("textField")
            .should("exist")
            .invoke("val")
            .should("contain", "text");

         // Make Changes
         cy.get("@textField").clear();
         cy.get("@textField").type("Edited by Cypress!");

         // Save
         cy.get('[data-cy="button save 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]')
            .should("exist")
            .click();

         // Check the changes
         cy.get(
            '[data-cy="tab-Detail-e8bcfd8a-e343-4cf6-82bb-533cafd45c3a-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();
         cy.get(
            '[data-cy="detail text singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 aa1c0a4d-001c-4227-970b-4cf1c676ad20"]'
         ).should("contain", "Edited by Cypress!");
      });

         cy.contains("label", "single-line-text(required)").type(
            "Cypress hahaha is coming here now"
         );
      }); //End 4
      //5. can find the field validation error message "*This is a required field."
      it("can find This is a required field", () => {
         //Clear input value
         cy.get(
            '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
         ).clear();
      }); //End 4
      //5. can find the field validation error message "*This is a required field."
      it("can find This is a required field", () => {
         const textalert = "*This is a required field.";
         //Clear input value
         cy.get(
            '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
         ).clear();

         //Click Save button
         cy.get(
            '[data-cy="button save 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
         ).click();

         cy.get(
            '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
         ).invoke("val", textalert);
      }); //End 5

      it("can upload photo", () => {
         const photoPath = path.join(
            "..",
            "e2e",
            `${folderName}`,
            "test_example",
            "images",
            "digiServe_Color.png"
         );
         const fileExtension = "png";
         cy.get(
            '[data-cy="fieldcustom image imageattachment 8e0c6dc8-84bb-4ef6-9ca3-76214e157864 90d353f9-664a-4ae6-85a6-8f5cafa76f48"] .ab-image-data-field'
         ).click();
         cy.get(
            '[data-cy="fieldcustom image imageattachment 8e0c6dc8-84bb-4ef6-9ca3-76214e157864 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
         )
            .invoke("attr", "data-uploader-id")
            .then((uploader) => {
               cy.fixture(photoPath).then((data) => {
                  const blob = Cypress.Blob.base64StringToBlob(
                   data,
                     `image/${fileExtension}`
                  );
                  const file = new File([blob], photoPath, {
                     type: `image/${fileExtension}`,
                  });
                  // wait till image is uploaded before saving
                  cy.window().then((win) => {
                        return win
                        .$$(uploader)
                        .attachEvent("onAfterFileAdd", function (file) {
                            //... some code here ... 
                        });
                     });
                  // upload image
                  cy.window().then((win) => {
                        return win
                           .$$(uploader)
                           .addFile(file, file.size, fileExtension);
                     });
               });
            });
      });
   });
};
}; //End Export
