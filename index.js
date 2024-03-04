import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import bodyParser from 'body-parser';

import { sendEmail } from './Utils/sendEmail.js'

const app = express();
const port = process.env.PORT;

app.use(cors());    
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Welcome!! user");
});

app.post('/email/send-email', (req, res) => {
    const response = sendEmail(req.body.email);
});

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});