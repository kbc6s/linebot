const line = require('@line/bot-sdk');
const express = require('express');
var app = express();

const lineConfig = {
  channelAccessToken: process.env.HEROKU_LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.HEROKU_LINE_CHANNEL_SECRET
};
app.get("/linebot/eat", function(req, res){
    res.send("吃吃吃")
})

function handleEvent(event) {
    switch (event.type) {
      case 'join':
      case 'follow':
        return client.replyMessage(event.replyToken, {
          type: 'text',
          text: '你好請問我們認識嗎?'
        });   
      case 'message':
        switch (event.message.type) {
          case 'text':
            return client.replyMessage(event.replyToken, {
              type: 'text',
              text: (event.message.text+'~*')
            });
        }
    }
  }
  app.post("/post", function(req, res){
    res.send("homie")
})
// app.post('/', line.middleware(lineConfig), function(req, res) {
//     Promise
//       .all(req.body.events.map(handleEvent))
//       .then(function(result) {
//         res.json(result);
//       });
//   });
const client = new line.Client(lineConfig);
//const app = express();
app.listen(3000, function() {
    console.log('App now running on port', this.address().port);
  });