/**
 * PortfolioController
 *
 * @description :: Server-side logic for managing Portfolios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


  /**
   * `PortfolioController.Aboutme()`
   */
  Aboutme: function (req, res) {
    var userData = {
      'template': "Template1",
      'portFolio': [
        {
          'name': "Project 1",
          'description': 'my cool project'
        }
      ]
    }

    res.locals.user = userData;
    //Integrate Axios Get here with a .then ()
    return res.render("Templates/" + userData.template + "/index", {layout: userData.template})
  }
};

