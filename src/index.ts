import express, { Request, Response, NextFunction }  from "express";
import * as dotenv from "dotenv";
dotenv.config();
import rowData from "./data";

var cors = require('cors')

const PORT: number = 4000;

const app = express();

app.use(express.json());
app.use(cors())
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });

app.get('/', function (req:Request, res:Response) {
  res.status(200).send(rowData);
});
