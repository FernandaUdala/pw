var push = require('web-push');

let vapidKeys = {
    publicKey: 'BNhvCd6dHzD-A_Y-jNW7kcdxjAIOA7f7OrT3U1BFTs8FjaZW42_vNos8GZpPehNjyQloxPvjIyZUD_w4ogyyghE',
    privateKey: '3l3_4nWJoipVGHz1XP2z-0mGTViJNa-CQS9soE9LcVA'
  }

push.setVapidDetails('fernanda:fernanda.amorim@claravista.com.br', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint:"https://updates.push.services.mozilla.com/wpush/v2/gAAAAABgr…Ychy5RN2cEgRwoPlDo8cp0w3jr3-PPhctQd-0nSLOQ9SQh4W1Lv0Ey0SWi48",
    expirationTime:null,
    keys:{
        auth:"ILSjwq3iQR0cvGtgN7zBHg",
        p256dh:"BC_ti4K4hCiB-R7x1cEG3tptendkFFnuGzG91jduv6TeDxvnWnVoWx2BPqB2mC2a_2e0kcTiMpj0jvtiHf8pVmE"
    }
};

push.sendNotification(sub, 'test message')