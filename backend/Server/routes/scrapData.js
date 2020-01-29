const request = require("request");
const express = require("express");
const router = express.Router();

//create router

var getData="";
request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    getData=response.body.js;
  });

router.get("/", (req, res)=>{

    res.send(getData)
})
module.exports = router;