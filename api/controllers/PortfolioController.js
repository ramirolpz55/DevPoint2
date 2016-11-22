/**
 * PortfolioController
 *
 * @description :: Server-side logic for managing Portfolios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var array = [
  {
    "messages": [],
    "links": [],
    "services": [
      {
        "name": "HTML",
        "description": "I will create a cool looking HTML Website for you.",
        "userId": "5833c99157e8841200a95e08",
        "createdAt": "2016-11-22T04:33:06.257Z",
        "updatedAt": "2016-11-22T04:33:06.257Z",
        "id": "5833ca8257e8841200a95e09"
      },
      {
        "name": "JavaScript",
        "description": "I will do front end js for you",
        "userId": "5833c99157e8841200a95e08",
        "createdAt": "2016-11-22T04:33:25.423Z",
        "updatedAt": "2016-11-22T04:33:25.423Z",
        "id": "5833ca9557e8841200a95e0a"
      }
    ],
    "skills": [],
    "firstName": "Ramiro",
    "lastName": "Lopez",
    "email": "rlopez@gmail.com",
    "password": "$2a$10$ylNzYWLdd0KW5hKPSC7rNuhRvEOmfz8jKNKHk9gbDCljKEMr7ooVy",
    "username": "rlopez",
    "createdAt": "2016-11-22T04:29:05.251Z",
    "updatedAt": "2016-11-22T04:29:05.251Z",
    "id": "5833c99157e8841200a95e08",
    'template': "Template1"
  }];


module.exports = {


  /**
   * `PortfolioController.Aboutme()`
   */
  Aboutme: function (req, res) {


    res.locals.user = array[0];
    //Integrate Axios Get here with a .then ()
    return res.render("Templates/" + array[0].template + "/index", {layout: array[0].template})
  }
};

