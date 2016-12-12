/**
 * PortfolioController
 *
 * @description :: Server-side logic for managing Portfolios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var axios = require('axios');

module.exports = {


  /**
   * `PortfolioController.User()`
   */

  User: function (req, res) {
    axios.get('https://devpoint-api.herokuapp.com/user/' + req.param('username'))
      .then(function (response) {

        //if (!response.data.template) {
          response.data.template = "Template2";
        //}
        console.log(response.data.template + "Hello")
        res.locals.user = response.data;

        //console.log(res.locals.user)
        return res.render("Templates/" + response.data.template + "/index", {layout: response.data.template})
      })
      .catch(function (error) {
        console.log(error);
      });

  }


};
