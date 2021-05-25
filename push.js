var push = require('web-push');

let vapidKeys = {
    publicKey: 'BNhvCd6dHzD-A_Y-jNW7kcdxjAIOA7f7OrT3U1BFTs8FjaZW42_vNos8GZpPehNjyQloxPvjIyZUD_w4ogyyghE',
    privateKey: '3l3_4nWJoipVGHz1XP2z-0mGTViJNa-CQS9soE9LcVA'
  }

push.setVapidDetails('fernanda:fernanda.amorim@claravista.com.br', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message')