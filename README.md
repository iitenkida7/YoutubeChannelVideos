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
http://localhost:32768/channel/HikakinTV/videos

#### チャンネル情報
http://localhost:32768/channel/HikakinTV/info

#### チャンネル統計
http://localhost:32768/channel/HikakinTV/stats

## 開発環境構築例

### 初回実行

```
git clone git@github.com:iitenkida7/YoutubeChannelVideos.git
cd YoutubeChannelVideos

docker-compose run --rm node npm install
```

### 実行例

```
docker-compose up
```




