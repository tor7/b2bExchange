//const settings = require('./clients.json');

const express = require('express');
const Eth = require('ethjs');

var app = express();
app.use(express.json());

app.get('/quote', (req, res) => {
    var response = {
          name: 'Get Paid In Bitcoin',
          id: '2A0E987E-5928-4874-BE69-FC7E9F45FAF9',
          quoteid: '',
          publickey: '0x64f1Cfb285350f7426B33685ED3c300aAF0937A2',
          expires: 0
        //   coins: [
        //     eth: {
        //       avalilble: 100.0,
        //       rate: 120.0,
        //       pair: 'aud'
        //     }
        //   ]
    };

    const signature = '0x00';

    res.send({
        'response': response,
        'signature': signature
    });
});

app.post('/order', (req, res) => {
    var response = {
          name: 'Get Paid In Bitcoin',
          id: '2A0E987E-5928-4874-BE69-FC7E9F45FAF9',
          quoteid: '',
          publickey: '0x64f1Cfb285350f7426B33685ED3c300aAF0937A2',
          expires: 0
        //   coins: [
        //     eth: {
        //       avalilble: 100.0,
        //       rate: 120.0,
        //       pair: 'aud'
        //     }
        //   ]
    };

    const signature = '0x00';

    res.send({
        'response': response,
        'signature': signature
    });
});

// //Returns an RSA keyPair
// app.get('/createKeyPair', (req, res) => {
//     const algorithm = settings.Encryption.algorithm;

//     const { publicKey, privateKey } = generateKeyPairSync('rsa', {
//         modulusLength: 4096,
//         publicKeyEncoding: {
//           type: 'spki',
//           format: 'pem'
//         },
//         privateKeyEncoding: {
//           type: 'pkcs8',
//           format: 'pem',
//           cipher: algorithm,
//           passphrase: req.body.password
//         }
//       });

//     res.send({
//         'privateKey': privateKey,
//         'publicKey': publicKey
//     });
// });

app.listen(3000);