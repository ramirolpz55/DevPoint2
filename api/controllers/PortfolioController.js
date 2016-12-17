/**
 * PortfolioController
 *
 * @description :: Server-side logic for managing Portfolios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var axios = require('axios');
var nodemailer = require('nodemailer');

module.exports = {

    /**
     * `PortfolioController.User()`
     */

    //User fucntion which uses axios to bring in the data for a user. 
    User: function(req, res) {
        axios.get('https://devpoint-api.herokuapp.com/user/' + req.param('username'))
            .then(function(response) {

                response.data.template = response.data.profile[0].template;

                if (!response.data.template) {
                  response.data.template = "Template1";
                }

                response.data.profile = response.data.profile[0];

                // response.data.template = "Template2";
                res.locals.user = response.data;
                //console.log(res.locals.user)
                return res.render("Templates/" + response.data.template + "/index", { layout: response.data.template })
                console.log(response.data.template);
            })
            .catch(function(error) {
                console.log(error);
            });

    },

    //Contact Form which takes in data and sends an email to devpoint.tech
    Contact: function (req, res) {

      var r = req.body;
      var data = {
        name: r.name,
        message: r.message,
        phone: r.phone,
        email: r.email
      };
      console.log(data);
      Mailer.contactMe(data, function(err){
        console.log(err || 'Mail Sent!');
        return res.send(err || 'Mail sent');
      });
    },
};

