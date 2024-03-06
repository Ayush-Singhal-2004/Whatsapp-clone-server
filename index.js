import app from './app.js';
import connectDB from './DB/index.js';
import { sendEmail } from './Utils/sendEmail.js'


connectDB()
.then(() => { console.log("DB connected") })
.catch((err) => { console.log("Error while connecting DB ", err) })


app.get('/', (req, res) => {
    res.send("Welcome!! user");
});

app.post('/email/send-email', async(req, res) => {
    const response = await sendEmail(req.body.email);
    res.send(response);
});