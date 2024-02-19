export default {
   /**
    * helper for scrolling in a grid
    * @function gridScroll
    * @param {string} id webix id of the grid
    * @param {int} h horizontal scroll in pixels
    * @param {int=0} v veritcal scroll in pixels
    */
   gridScroll: async (id, h, v = 0) => {
      return new Promise((resolve) => {
         cy.window().then((win) => {
            console.log(win.AB);
            win.$$(id).scrollTo(h, v);
            resolve();
         });
      });
   },

   /**
    * get ABFactory instance
    * @function getAB
    */
   getAB: async () => {
      return new Promise((resolve) => {
         cy.window().then((win) => {
            resolve(win.AB);
         });
      });
   }
};
