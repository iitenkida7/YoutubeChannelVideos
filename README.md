# YoutubeChannelVideos

## なにこれ?
* youtube のチャンネルの情報及び チャンネルに登録されている動画リストを引っ張ってくるAPI実装
* youtube 公式APIだと ビデオリスト取得にたくさんクォータを使ってしまって使い物にならないので、
* yt-channel-info という ライブラリを利用し、 APIのインターフェイスを Expressで実装
* 今のところは、とても簡易実装で直近のアイテムのみの取得。yt-channel-info 自体はもっと取得可能。
* 利用は自己責任。

## 技術
* Node.js
* Express
* [yt-channel-info](https://github.com/FreeTubeApp/yt-channel-info)

## API 仕様

* チャンネルID: `HikakinTV` の例
* レスポンスの内容等は、ライブラリの [yt-channel-info](https://github.com/FreeTubeApp/yt-channel-info) を参照

#### ビデオ一覧(最新順 30件)
https://example.com/channel/HikakinTV/videos

#### チャンネル情報
https://example.com/channel/HikakinTV/info

#### チャンネル統計
https://example.com/channel/HikakinTV/stats

