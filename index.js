import express from 'express';
import cors from 'cors';

const app = express();
const corsOptions = {
  'origin': 'https://4ee167e8-c23c-4b7e-83b9-e1239efa4769-00-21w3xfpv2p914.pike.replit.dev/',
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/userinfo/:tag', (req, res) => {
  const url = "https://bsproxy.royaleapi.dev/v1/players/%23PLCPRVY80";
  const headers = {
    "Accept": "application/json",
    "Authorization": "Bearer " + process.env.TOKEN
  }
  fetch(url, {
    'method': "GET",
    'headers': headers
  }).then(response => response.json()).then(data => {
    res.send(data);
  }).catch(err => {
    res.send(err);
  })
})

app.listen(3000, () => {
  console.log('Express server initialized');
});

export default app;