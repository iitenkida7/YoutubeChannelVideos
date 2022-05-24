//import ytch  from 'yt-channel-info'

const express = require('express');
const app = express();
const ytch = require('yt-channel-info');


var server = app.listen(32768, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/channel', (req, res) => {
  res.send(info());
  console.log(info());
})

const payload = {
  channelId: 'takaponjp', // Required
  channelIdType: 0,
  sortBy: 'newest',
  httpsAgent: 'agent'
}

const info = () => {
  ytch.getChannelVideos(payload).then((response) => {
    if (!response.alertMessage) {
      console.log(response);
      return response;
    } else {
      //console.log('Channel could not be found.')
      // throw response.alertMessage
    }
  }).catch((err) => {
    console.log(err)
  })

}
/*
ytch.getChannelInfo(payload).then((response) => {
  if (!response.alertMessage) {
     console.log(response)
  } else {
     console.log('Channel could not be found.')
     // throw response.alertMessage
  }
}).catch((err) => {
  console.log(err)
}) */
