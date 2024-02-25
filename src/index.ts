import express, { Express, Request, Response, Application } from "express";

import fs from "fs";

// Parsers
import acorn from "acorn";
import esprima from "esprima";
import acornwalk from "acorn-walk";

import { readFileAndConvert } from "./legecy-model/legecy-model";
import { chatCompletion } from "./chat-model/chat-model";

const app: Application = express();
const port = 3000;

app.get("/", async (req: Request, res: Response) => {
  const response = await readFileAndConvert();

  res.send({
    message: response,
  });
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
