'use strict';


module.exports = ( req, res ) => {
  var html = `<html>
    <body>
      <head>
        <title>申込情報を入力</title>
        <script src="https://d.line-scdn.net/liff/1.0/sdk.js"></script>
        <script>
          window.onload = function(e) {
            // sendにclickイベントを追加
            document.getElementById('send').addEventListener('click', function() {
              // BOTへ送信
              liff
                .sendMessages([
                  {
                    type: 'text',
                    text: '支払い'
                  }
                ])
                .then(function() {
                  liff.closeWindow();
                })
                .catch(function(error) {
                  window.alert('もう一度入力してください。');
                });
            });
          };
        </script>
        <style>
          
        </style>
      </head>
      <!-- 申し込みに必要な情報を入力 -->
      <div align="center">
        名前：<input type="text" id="name">
        <button id="send" type="submit">申込</button>
      </div>
    </body>
  </html>`;
  res.send(html);
};