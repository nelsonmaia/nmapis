var express = require('express');
var router = express.Router();

var request = require("request");
var axios = require('axios');

var ManagementClient = require('auth0').ManagementClient;

var options = {
  method: 'POST',
  url: 'https://delegateadmin.eu.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"","client_secret":"","audience":"https://delegateadmin.eu.auth0.com/api/v2/","grant_type":"client_credentials"}'
};

var auth0 = new ManagementClient({
  //MAKE SURE THIS DOMAIN IS NOT A CUSTOM DOMAIN!!!
    domain: "delegateadmin.eu.auth0.com",
    clientId: "REFYaxk6VhbiDHoXE7YzSW2f39ANgXkT",
    clientSecret: "PY7i74_sYz5b563PlbMf2m3WCUfZ_y2z86k7k67_9peglnwk5ZWjyOBRc32Ro-Zh"
    // scope: "read:users"
  });

var responseBody;



/* GET user listing. */
router.post('/', function (req, res, next) {

  // axios.post(options.url, options.body, { headers: options.headers })
  //   .then(
  //     response => {
  //       var users = { name: 'Nelson Matias', nickname: 'Nell', body: response.data.access_token }
  //       res.json(users);
  //     }
  //   ).catch(
  //     err => { console.log(err) }
  //   );

        // var users = { name: 'Nelson Matias', nickname: 'Nell', body: response.data.access_token }
        // res.json(users);

        console.log(req);

        var params = {
          id: req.user.sub
        };
      
        console.log(params);
      
        auth0.getUser(params, function(err, user) {
          if (err) {
          console.log(err);
          }
          //Get user
          //res.setHeader('Content-Type', 'application/json');
          res.json(user);
        });

  
});

module.exports = router;
