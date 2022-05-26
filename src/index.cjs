const ytch = require('yt-channel-info');
const express = require('express');
const app = express();

var server = app.listen(32768, function () {
  console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get('/', (req, res) => {
  res.send('hello :)');
});

app.get('/channel/:channelId/info', (req, res, next) => {
  (async () => {
    const result = await channelInfo(req.params.channelId);
    if (!result) {
      res.status(404).json("404 Not Found");
    }
    res.json(result);
  })().catch(next);
});

app.get('/channel/:channelId/videos', (req, res, next) => {
  (async () => {
    const result = await channelVideos(req.params.channelId);
    if (!result) {
      res.status(404).json("404 Not Found");
    }
    res.json(result);
  })().catch(next);
});

app.get('/channel/:channelId/stats', (req, res, next) => {
  (async () => {
    const result = await channelStats(req.params.channelId);
    if (!result) {
      res.status(404).json("404 Not Found");
    }
    res.json(result);
  })().catch(next);
});

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});


function channelInfo(channelId) {
  const payload = {
    channelId: encodeURI(channelId),
    channelIdType: 0,
  }

  console.log(payload);

  return ytch.getChannelInfo(payload).then((response) => {

    console.log(response.alertMessage);
    if (!response.alertMessage) {
      return response;
    } else {
      return false;
    }
  }).catch((err) => {
    console.log(err)
    return false;
  })
}

function channelVideos(channelId) {
  const payload = {
    channelId: encodeURI(channelId),
    channelIdType: 0,
    sortBy: 'newest',
  }

  return ytch.getChannelVideos(payload).then((response) => {
    if (!response.alertMessage) {
      return response;
    } else {
      return false;
    }
  }).catch((err) => {
    console.log(err)
    return false;
  })
}

function channelStats(channelId) {
  const payload = {
    channelId: encodeURI(channelId),
  }

  return ytch.getChannelStats(payload).then((response) => {
    if (!response.alertMessage) {
      return response;
    } else {
      return false;
    }
  }).catch((err) => {
    console.log(err)
    return false;
  })
}

