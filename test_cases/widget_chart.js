export default (folderName) => {
   describe("Chart", () => {
      beforeEach(() => {
         // Click the [Home] Tab:
         cy.get('[data-cy="cb77ced0-a803-46b7-8a79-f9084d75d51c"]').click();
         cy.get(
            '[data-cy="tab-Chart-41d39ac7-e7d9-405d-a570-b79686ccdd5a-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]',
         ).click();
      });

      it("Displays a Pie Chart", () => {
         // check the legend of pie chart
         cy.get('*[class^="webix_chart_legend_item"]').then(($lis) => {
            expect($lis.eq(2)).to.contain("5");
            expect($lis.eq(1)).to.contain("6");
            expect($lis.eq(0)).to.contain("7");
            expect($lis.eq(3)).to.contain("9");
            expect($lis.eq(4)).to.contain("3");
         });
         // check the percent labels
         cy.get('[class^="webix_canvas_text"]').then(($lis) => {
            expect($lis.eq(2)).to.contain("28.57 %");
            expect($lis.eq(1)).to.contain("17.14 %");
            expect($lis.eq(0)).to.contain("20 %");
            expect($lis.eq(3)).to.contain("25.71 %");
            expect($lis.eq(4)).to.contain("8.57 %");
         });
         // check the tag area
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(0)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "304.5,62,304,0,315,0,325,3,335,8,344,14,352,22,358,31,363,41,363,43,304.5,62",
            );
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(1)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "304.5,62,363,43,366,53,366,64,365,75,362,85,357,95,350,104,349,105,304.5,62",
            );
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(2)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "304.5,62,349,105,341,112,332,118,322,122,311,124,300,124,289,123,279,119,269,114,261,107,254,99,252,96,304.5,62",
            );
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(3)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "304.5,62,252,96,247,87,243,77,242,66,242,55,244,44,248,34,254,25,261,17,270,10,272,8,304.5,62",
            );
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(4)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "304.5,62,272,8,282,4,292,1,303,0,304,0,304.5,62",
            );
      });

      it("Displays a Bar Chart", () => {
         // check the legend of bar chart
         cy.get('*[class^="webix_chart_legend_item"]').then(($lis) => {
            expect($lis.eq(7)).to.contain("5");
            expect($lis.eq(6)).to.contain("6");
            expect($lis.eq(5)).to.contain("7");
            expect($lis.eq(8)).to.contain("9");
            expect($lis.eq(9)).to.contain("3");
         });
         // check the canvas text (axis y)
         cy.get('div[class*="webix_canvas_text webix_axis_item_y"]').then(
            ($lis) => {
               expect($lis.eq(0)).to.contain("0");
               expect($lis.eq(1)).to.contain("20");
               expect($lis.eq(2)).to.contain("40");
               expect($lis.eq(3)).to.contain("60");
               expect($lis.eq(4)).to.contain("80");
               expect($lis.eq(5)).to.contain("100");
            },
         );
         // check the canvas text (axis x)
         cy.get('div[class*="webix_canvas_text webix_axis_item_x"]').then(
            ($lis) => {
               expect($lis.eq(2)).to.contain("5");
               expect($lis.eq(1)).to.contain("6");
               expect($lis.eq(0)).to.contain("7");
               expect($lis.eq(3)).to.contain("9");
               expect($lis.eq(4)).to.contain("3");
            },
         );
         // check the tag area
         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(0)
            .should(
               "have.attr",
               "coords",
               "35.400000000000006,101,79.39999999999998,125",
            );
         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.length", 5)
            .eq(1)
            .should("have.attr", "shape", "RECT")
            .should("have.attr", "coords", "151.2,105,195.2,125");
         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.length", 5)
            .eq(2)
            .should("have.attr", "shape", "RECT")
            .should("have.attr", "coords", "267,91,311,125");

         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.length", 5)
            .eq(3)
            .should("have.attr", "shape", "RECT")
            .should(
               "have.attr",
               "coords",
               "382.79999999999995,94,426.79999999999995,125",
            );
         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.length", 5)
            .eq(4)
            .should("have.attr", "shape", "RECT")
            .should("have.attr", "coords", "498.6,116,542.6,125");
      });

      it("Displays a Line Chart", () => {
         // check the canvas text (axis y)
         cy.get('div[class*="webix_canvas_text webix_axis_item_y"]').then(
            ($lis) => {
               expect($lis.eq(6)).to.contain("0");
               expect($lis.eq(7)).to.contain("20");
               expect($lis.eq(8)).to.contain("40");
               expect($lis.eq(9)).to.contain("60");
               expect($lis.eq(10)).to.contain("80");
               expect($lis.eq(11)).to.contain("100");
            },
         );
         // check the canvas text (axis x)
         cy.get('div[class*="webix_canvas_text webix_axis_item_x"]').then(
            ($lis) => {
               expect($lis.eq(7)).to.contain("5");
               expect($lis.eq(6)).to.contain("6");
               expect($lis.eq(5)).to.contain("7");
               expect($lis.eq(8)).to.contain("9");
               expect($lis.eq(9)).to.contain("3");
            },
         );
         // check the tag area
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(0)
            .should(
               "have.attr",
               "coords",
               "53.89999999999998,96,61.89999999999998,104",
            );
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(1)
            .should(
               "have.attr",
               "coords",
               "169.2,99.57499999999999,177.2,107.57499999999999",
            );
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(2)
            .should("have.attr", "coords", "285,85.2875,293,93.2875");
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(3)
            .should(
               "have.attr",
               "coords",
               "400.79999999999995,88.8625,408.79999999999995,96.86250000000001",
            );
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(4)
            .should(
               "have.attr",
               "coords",
               "516.5999999999999,110.2875,524.5999999999999,118.2875",
            );
      });
   });
};
