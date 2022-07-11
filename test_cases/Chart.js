export default (folderName, Common) => {
   describe("Chart", () => {
      beforeEach(() => {
         cy.visit("/");
         Common.RunSQL(cy, folderName, ["add_testkcs.sql"]);
         cy.get(
            '[data-cy="tab-Chart-41d39ac7-e7d9-405d-a570-b79686ccdd5a-b52e6e96-5033-4c7f-a104-29bd5ddcac4a"]'
         ).click();
      });

      it("can find the chart legend items on the chart 'Pie' have the text 5, 6, 7, 9 and 3", () => {
         cy.get('*[class^="webix_chart_legend_item"]').then(($lis) => {
            expect($lis.eq(2)).to.contain("5");
            expect($lis.eq(1)).to.contain("6");
            expect($lis.eq(0)).to.contain("7");
            expect($lis.eq(3)).to.contain("9");
            expect($lis.eq(4)).to.contain("3");
         });
      });

      it("can find the text 28.57 %, 17.14 %, 20 %, 25.71 %, and 8.57 %", () => {
         cy.get('[class="webix_canvas_text"]').then(($lis) => {
            expect($lis.eq(2)).to.contain("28.57 %");
            expect($lis.eq(1)).to.contain("17.14 %");
            expect($lis.eq(0)).to.contain("20 %");
            expect($lis.eq(3)).to.contain("25.71 %");
            expect($lis.eq(4)).to.contain("8.57 %");
         });
      });

      it("can find the tag area has attribute shape=POLY and coords=507.5,62,507,0,518,0,528,3,538,8,547,14,555,22,561,31,566,41,569,51,570,62,569,73,568,76,507.5,62", () => {
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(2)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "507.5,62,507,0,518,0,528,3,538,8,547,14,555,22,561,31,566,41,569,51,570,62,569,73,568,76,507.5,62"
            );
      });

      it("can find the tag area has attribute shape=POLY and coords=507.5,62,568,76,565,86,560,96,553,105,545,112,536,118,525,122,524,122,507.5,62", () => {
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(1)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "507.5,62,568,76,565,86,560,96,553,105,545,112,536,118,525,122,524,122,507.5,62"
            );
      });

      it("can find the tag area has attribute shape=POLY and coords=507.5,62,524,122,513,124,502,124,491,122,481,119,472,113,463,107,456,98,455,96,507.5,62", () => {
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(0)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "507.5,62,524,122,513,124,502,124,491,122,481,119,472,113,463,107,456,98,455,96,507.5,62"
            );
      });

      it("can find the tag area has attribute shape=POLY and coords=507.5,62,524,122,513,124,502,124,491,122,481,119,472,113,463,107,456,98,455,96,507.5,62", () => {
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(3)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "507.5,62,524,122,513,124,502,124,491,122,481,119,472,113,463,107,456,98,455,96,507.5,62"
            );
      });

      it("can find the tag area has attribute shape=POLY and coords=507.5,62,475,8,485,4,495,1,506,0,507,0,507.5,62", () => {
         cy.get('div[view_id*="ABViewChartPie_6730433b"]')
            .find("area")
            .eq(4)
            .should("have.attr", "shape", "POLY")
            .should("have.length", 1)
            .should(
               "have.attr",
               "coords",
               "507.5,62,475,8,485,4,495,1,506,0,507,0,507.5,62"
            );
      });

      it("can find the chart legend items on the chart 'Bar' have the text 5, 6, 7, 9 and 3", () => {
         cy.get('*[class^="webix_chart_legend_item"]').then(($lis) => {
            expect($lis.eq(7)).to.contain("5");
            expect($lis.eq(6)).to.contain("6");
            expect($lis.eq(5)).to.contain("7");
            expect($lis.eq(8)).to.contain("9");
            expect($lis.eq(9)).to.contain("3");
         });
      });

      it("can find the canvas text (axis y) '0, 20, 40, 60, 80 and 100' on the chart 'Bar'", () => {
         cy.get('div[class*="webix_canvas_text webix_axis_item_y"]').then(
            ($lis) => {
               expect($lis.eq(0)).to.contain("0");
               expect($lis.eq(1)).to.contain("20");
               expect($lis.eq(2)).to.contain("40");
               expect($lis.eq(3)).to.contain("60");
               expect($lis.eq(4)).to.contain("80");
               expect($lis.eq(5)).to.contain("100");
            }
         );
      });

      it("can find the canvas text (axis x) '5, 6, 7, 9 and 3' on the chart 'Bar'", () => {
         cy.get('div[class*="webix_canvas_text webix_axis_item_x"]').then(
            ($lis) => {
               expect($lis.eq(2)).to.contain("5");
               expect($lis.eq(1)).to.contain("6");
               expect($lis.eq(0)).to.contain("7");
               expect($lis.eq(3)).to.contain("9");
               expect($lis.eq(4)).to.contain("3");
            }
         );
      });

      it("can find the tag area has attribute shape='RECT' and  coords='76,91,120,125'", () => {
         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(0)
            .should("have.attr", "coords", "76,91,120,125");
      });

      it("can find the tag area has attribute shape='RECT' and  coords='273,105,317,125'", () => {
         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.length", 5)
            .eq(1)
            .should("have.attr", "shape", "RECT")
            .should("have.attr", "coords", "273,105,317,125");
      });

      it("can find the tag area has attribute shape='RECT' and  coords='470,101,514,125'", () => {
         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.length", 5)
            .eq(2)
            .should("have.attr", "shape", "RECT")
            .should("have.attr", "coords", "470,101,514,125");
      });

      it("can find the tag area has attribute shape='RECT' and  coords='667,94,711,125'", () => {
         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.length", 5)
            .eq(3)
            .should("have.attr", "shape", "RECT")
            .should("have.attr", "coords", "667,94,711,125");
      });

      it("can find the tag area has attribute shape='RECT' and  coords='864,116,908,125'", () => {
         cy.get('div[view_id*="ABViewChartBar_7d435f94"]')
            .find("area")
            .should("have.length", 5)
            .eq(4)
            .should("have.attr", "shape", "RECT")
            .should("have.attr", "coords", "864,116,908,125");
      });

      it("can find the canvas text (axis y) '0, 20, 40, 60, 80 and 100' on the chart 'Line'", () => {
         cy.get('div[class*="webix_canvas_text webix_axis_item_y"]').then(
            ($lis) => {
               expect($lis.eq(6)).to.contain("0");
               expect($lis.eq(7)).to.contain("20");
               expect($lis.eq(8)).to.contain("40");
               expect($lis.eq(9)).to.contain("60");
               expect($lis.eq(10)).to.contain("80");
               expect($lis.eq(11)).to.contain("100");
            }
         );
      });

      it("can find the canvas text (axis x) '5, 6, 7, 9 and 3' on the chart 'Line'", () => {
         cy.get('div[class*="webix_canvas_text webix_axis_item_x"]').then(
            ($lis) => {
               expect($lis.eq(7)).to.contain("5");
               expect($lis.eq(6)).to.contain("6");
               expect($lis.eq(5)).to.contain("7");
               expect($lis.eq(8)).to.contain("9");
               expect($lis.eq(9)).to.contain("3");
            }
         );
      });

      it("can find the tag area has attribute shape='RECT' and  coords='94.5,85.2875,102.5,93.2875'", () => {
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(0)
            .should("have.attr", "coords", "94.5,85.2875,102.5,93.2875");
      });

      it("can find the tag area has attribute shape='RECT' and  coords='291,99.57499999999999,299,107.57499999999999'", () => {
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(1)
            .should(
               "have.attr",
               "coords",
               "291,99.57499999999999,299,107.57499999999999"
            );
      });

      it("can find the tag area has attribute shape='RECT' and  coords='488,96,496,104'", () => {
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(2)
            .should("have.attr", "coords", "488,96,496,104");
      });

      it("can find the tag area has attribute shape='RECT' and  coords='685,88.8625,693,96.86250000000001'", () => {
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(3)
            .should("have.attr", "coords", "685,88.8625,693,96.86250000000001");
      });

      it("can find the tag area has attribute shape='RECT' and  coords='882,110.2875,890,118.2875'", () => {
         cy.get('div[view_id*="ABViewChartLine_3af0be5a"]')
            .find("area")
            .should("have.attr", "shape", "RECT")
            .should("have.length", 5)
            .eq(4)
            .should("have.attr", "coords", "882,110.2875,890,118.2875");
      });
   });
};
