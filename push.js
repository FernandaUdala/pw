var push = require('web-push');

let vapidKeys = {
    publicKey: 'BNhvCd6dHzD-A_Y-jNW7kcdxjAIOA7f7OrT3U1BFTs8FjaZW42_vNos8GZpPehNjyQloxPvjIyZUD_w4ogyyghE',
    privateKey: '3l3_4nWJoipVGHz1XP2z-0mGTViJNa-CQS9soE9LcVA'
  }

push.setVapidDetails('fernanda:fernanda.amorim@claravista.com.br', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint:
    "https://fcm.googleapis.com/fcm/send/cTPTsJ9ZWIM:APA91bFNYkihSu4DjVMTx1-VsUDcPiwyUhI3YNOK7pDwEq_YquQrt7G7zZppdnuEfy06kdmnWlVCExN9R5u1XP4xcCe2yDTISXWdwMnTff7BQPj3dtyuIzxam6ibJ1N9iAG6HQYcY20s",
    expirationTime:null,
    keys:{
        p256dh:"BH93dPRGNlFObru9LVg3oA3Ss8z3sZV_GiayFZN1TTon2gTAi0FXJQNS09UkQ8-fSwBLjf-LdYnv27r3SdSebfI",
        auth:"4xQYo10MqJcC_mHtl9V69Q"
    }
}; 

push.sendNotification(sub, 'test message')