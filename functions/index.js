const functions = require('firebase-functions');
const express = require('express');
const cors =require('cors')
const stripe = require('stripe')(
  'sk_test_51HR3PQHNRSN0XZEC5kvAqc44Bvl1FORjo2NUaITv7nq7x6uXSAXoohigKN52Wp5iUKdSPhuw6AP4upriNymQIVPf0088Q5o8U6',
);
const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).send('hellomd,mm,dm,d');
});
app.post('/payment/create',async (req,res)=>{
    const total=req.query.total
    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:'usd'
    })
    res.status(201).send({
        clientSecret:paymentIntent.client_secret
    })
})

exports.api = functions.https.onRequest(app);
