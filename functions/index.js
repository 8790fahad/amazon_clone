const functions = require('firebase-functions');
const express =require('express')
const stripe = require('stripe')('sk_test_51HR3PQHNRSN0XZEC5kvAqc44Bvl1FORjo2NUaITv7nq7x6uXSAXoohigKN52Wp5iUKdSPhuw6AP4upriNymQIVPf0088Q5o8U6')
const app = express()
app.use(cors({origin:true}))
app.use(express.json())
app.get('/',(req,res)=>{
    req.status(200).send('hello')
})
exports.api=functions.https.onRequest(app)