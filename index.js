const express = require('express');
const Mailchimp = require('mailchimp-api-v3');
const path = require('path');
require('dotenv').config();

var mc_api_key = process.env.MAILCHIMP_API_KEY;
var list_id = process.env.MAILING_LIST_ID;

const app = express();
const mailchimp = new Mailchimp(mc_api_key);

app.use(express.static(path.resolve(__dirname, '.', 'build')));

//routes
app.get('/api/memberList', (req, res) => {
  mailchimp.get(`/lists/${list_id}/members`)
  .then(function(results){
    res.send(results);
  })
  .catch(function(err){
    res.send(err);
  });
});

app.get('/api/genericCall', (req, res) => {
  let response = {
    msg: "Successful call to /api/genericCall"
  }
  res.send(response);
});

//catch all handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '.', 'build', 'index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log(`express app listening on port ${port}`);
