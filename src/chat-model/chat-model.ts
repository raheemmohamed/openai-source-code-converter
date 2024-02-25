import fs from "fs";

import { openAI } from "../../configs/openai.config";
import { parseJavasscriptCode } from "../splitters/splitter";

const fileInputPath = "./data/input/dashboard.js";

// chat completion
const chatHistory: any = [
  {
    role: "system",
    content: "You are a helpful assistant. You will help me to convert codes",
  },
  { role: "user", content: "Can you help me?" },
  {
    role: "user",
    content:
      "I need to convert angularjs code into reactjs, i will give you code one by one, once i give full code i will ask you to rewrite the code. then only generate the code. until that whatever the code im sharing keep watch and do not ask any questions or clarifications",
  },
];

export async function chatCompletion() {
  let convertedChunks: any = [];
  const fileData = fs.readFileSync(fileInputPath, "utf-8");

  const chunks = parseJavasscriptCode(fileData, "js");

  chunks.shift();

  console.log("chunkss =====>", chunks);
  console.log("Chunk length", chunks.length);

  for (let i = 0; i <= chunks.length; i++) {
    // chatHistory.push({
    //   role: "user",
    //   content: `Convert this code to react ${chunks[i]}`,
    // });

    chatHistory.push({
      role: "user",
      content: chunks[i]
        ? `${chunks[i]}`
        : `I have shared all the code now convert this AngularJS to React Give me a completed converted code, do not add any dummy, not implemented or todo code comments but provide complete code. if complete code is beyond the context limit, provide the code in multiple batches and i need all the remaining batches to be execute automatically`,
    });
  }

  const response: any = await openAI.chat.completions.create({
    messages: chatHistory,
    model: "gpt-3.5-turbo-instruct",
    max_tokens: 126000,
  });

  console.log("response", response);

  for (const choice of response.choices) {
    convertedChunks.push(choice.message.content);
  }

  console.log("convertedChunk", convertedChunks);

  console.log("chatHistory", chatHistory);

  fs.writeFileSync("./data/output/output.txt", convertedChunks.join(""));

  //console.log("file data", fileData);
  // if (convertedChunks.join("").includes("batch")) {
  //   chatHistory.push({
  //     role: "user",
  //     content:
  //       "Please provide the remaining batches of code to continue the conversion process.",
  //   });
  //   const response: any = await openAI.chat.completions.create({
  //     messages: chatHistory,
  //     model: "gpt-3.5-turbo-0125",
  //     max_tokens: 3000,
  //   });

  //   console.log("response", response);
  //   const code = [];
  //   for (const choice of response.choices) {
  //     code.push(choice.message.content);
  //   }
  //   fs.appendFileSync("./data/output/output.txt", code.join(""));
  // }

  console.log("convertedChunks text", convertedChunks);

  return convertedChunks;

  // const completion =
  // console.log(completion.choices[0].message.content);
}
