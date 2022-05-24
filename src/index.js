import ytch  from 'yt-channel-info'
import * as http from 'http';

import url from  require('url');
//var http = require('http');



console.log('Up http server.')
http
  .createServer((req, res) => {
    if (req.method === 'GET') {

      var url_parse = url.parse(req.url, true);
      console.log(url_parse);


      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello world\n');
    }
  })
  .listen(32768);



  /*
const payload = {
  channelId: 'takaponjp', // Required
  channelIdType: 0,
  sortBy: 'newest',
  httpsAgent: 'agent'
}

ytch.getChannelVideos(payload).then((response) => {
  if (!response.alertMessage) {
     console.log(response)
  } else {
     console.log('Channel could not be found.')
     // throw response.alertMessage
  }
}).catch((err) => {
  console.log(err)
})

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
