import path from "path";

const folderName = path.join(__dirname, '..').match(/[^\\/]+$/)[0];

export default () => {
   describe("Form", () => {
      beforeEach(() => {
         cy.get(
            '[data-cy="tab-Form-b5b74f39-3f9a-478c-b8b5-1376b77c74da-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();
      });

      //2. can find the field "test-kcs-id" with the value "Test-KCS-0000000002"
      it("can find test-kcs-id", () => {
         cy.contains("label", "test-kcs-id").should("have.value", "");
      }); //End 2
      //3. can find the field "single-line-text(required)" with the value "test2"
      it("can find single line text", () => {
         cy.get(
            '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
         )
            .invoke("val")
            .should("contain", "text");
      }); //End 3
      //4. Change the value to "Cypress hahaha is coming here now" and click on the button "Save"
      it("change the value to cypress hahaha", () => {
         cy.get(
            '[data-cy="string singlelinetextrequired a8c8fcfd-b85b-41c4-a2dd-bd37465fde18 90d353f9-664a-4ae6-85a6-8f5cafa76f48"]'
         ).clear();

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

      //6. can find the field "test-kcs-id" with the value "Cypress hahaha is coming here now"
      it("can find the field test-kcs-id with cypress hahaha", () => {
         //Click Tab Detail
         cy.get(
            '[data-cy="tab-Detail-e8bcfd8a-e343-4cf6-82bb-533cafd45c3a-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();

         cy.get(
            '[data-cy="detail text testkcsid c4f98caa-71c1-4c36-9587-f8db050d2e2f aa1c0a4d-001c-4227-970b-4cf1c676ad20"]'
         );
         cy.contains("label", "test-kcs-id").type(
            "Cypress hahaha is coming here now"
         );
      }); // End 6
      //7. can upload photo
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
         cy.get("[data-cy=\"fieldcustom image imageattachment 8e0c6dc8-84bb-4ef6-9ca3-76214e157864 90d353f9-664a-4ae6-85a6-8f5cafa76f48\"] .ab-image-data-field").click();
         cy.get("[data-cy=\"fieldcustom image imageattachment 8e0c6dc8-84bb-4ef6-9ca3-76214e157864 90d353f9-664a-4ae6-85a6-8f5cafa76f48\"]")
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
                  cy.window()
                     .then((win) => {
                        return win
                           .$$(uploader).attachEvent("onAfterFileAdd", function(file){
                            //... some code here ... 
                        });
                     });
                  // upload image
                  cy.window()
                     .then((win) => {
                        return win
                           .$$(uploader)
                           .addFile(file, file.size, fileExtension);
                     });
               });
            });
         // cy.wait(500);
      }); // End 7
   }); //End Describe
}; //End Export
