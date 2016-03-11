/// <reference path="./typings/tsd.d.ts" />

import express = require("express");
let app: express.Express = express();

// Twilio Credentials 
let accountSid = "***********************";
let authToken = "*******************";

// require the Twilio module and create a REST client
let client = require("twilio")(accountSid, authToken);

// // Send an SMS text message
// client.sendMessage({
//     to: "+923008203588", // Any number Twilio can deliver to
//     from: "+13158054511", // A number you bought from Twilio and can use for outbound communication
//     body: "from web......." // body of the SMS message
// }, function(err, responseData) { // this function is executed when a response is received from Twilio
//     if (!err) { // "err" is an error received during the request, if any
//         // "responseData" is a JavaScript object containing data received from Twilio.
//         // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
//         // http://www.twilio.com/docs/api/rest/sending-sms#example-1
//         console.log(responseData); // outputs object
//         console.log(responseData.sid); // outputs sid
//         console.log(responseData.from); // outputs "+14506667788"
//         console.log(responseData.body); // outputs "word to your mother."
//     } else {
//         console.log(err); // err
//     }
// });

// View Message
// client.messages("SM27a3e19138c34fbf9397a2ca47a0387b").get(function(err, message) {
//     console.log(message.body);
// });

// View Messages List
// client.messages.list({ }, function(err, data) {
//     console.log("View Messages List");
//     data.messages.forEach(function(message) {
//         console.log(message.friendlyName, message);
//     });
// });


// // Place a phone call, and respond with TwiML instructions from the given URL
// client.makeCall({
//     to:'+16515556677', // Any number Twilio can call
//     from: '+14506667788', // A number you bought from Twilio and can use for outbound communication
//     url: 'http://www.example.com/twiml.php' // A URL that produces an XML document (TwiML) which contains instructions for the call
// }, function(err, responseData) {
//     // executed when the call has been initiated.
//     console.log(responseData.from); // outputs "+14506667788"
// });



app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});