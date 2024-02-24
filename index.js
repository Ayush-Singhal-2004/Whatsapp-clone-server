import express from 'express';
import cors from 'cors';
import 'dotenv/config'

const app = express();
const port = process.env.PORT;

app.use(cors());    

app.get('/', (req, res) => {
    res.send("Welcome!! user");
});

app.get('/home', (req, res) => {
    res.send("Home!!");
});

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
});