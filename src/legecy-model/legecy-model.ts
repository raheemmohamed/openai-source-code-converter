import fs from "fs";

// vanilla js Parsers
import acorn from "acorn";
//typescript parser
import { parse } from "@typescript-eslint/parser";

//manipulate the Abstract Syntax Tree (AST)
import acornwalk from "acorn-walk";

// Open AI configuration
import { openAI } from "../../configs/openai.config";

//const fileInputPath = "./data/input/sample-input.js"; //sample js inputs
const fileInputPath = "./data/input/sample-typescript-functions.ts"; //typescript sample codes
//const fileInputPath = "./data/input/sample-javascript-functions.js"; //javascript sample codes
//const fileInputPath = "./data/input/sample-classbases-code.js";

export async function readFileAndConvert() {
  const convertedChunks = [];

  const fileData = fs.readFileSync(fileInputPath, "utf-8");

  const chunks = parseAndChunkTheCode(fileData, "typescript");

  //   console.log("chunkss =====>", chunks);
  console.log("Chunk length", chunks.length);

  for (let i = 0; i < chunks.length; i++) {
    const responseText: any = await convertCodeWithTurboIntruct(chunks[i]);

    convertedChunks.push(responseText);
  }
  //console.log("file data", fileData);

  fs.writeFileSync("./data/output/output.txt", convertedChunks.join(""));

  console.log("convertedChunks text", convertedChunks);

  return convertedChunks;

  fs.writeFileSync("./data/output/chunk-test.txt", chunks.toString());

  return chunks;
}

async function convertCodeWithTurboIntruct(code: any) {
  const allResponse = [];
  try {
    const response: any = await openAI.completions.create({
      model: "gpt-3.5-turbo-instruct", // Specify the model name
      //prompt: `Convert this code into typescript ${code}`,
      //prompt: `Convert this code into vanilla javascript ${code}`,
      //prompt: `Convert this code into python ${code}`,
      prompt: `Convert this code into java ${code}`,
      max_tokens: 2000, // Specify the maximum number of tokens in the completion
      temperature: 0.7, // Specify the temperature for sampling
      n: 1, // Specify the number of completions to generate
    });

    console.log("response", response);

    for (const choice of response.choices) {
      allResponse.push(choice.text);
    }

    return allResponse;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Function to parse and chunk code blocks
function parseAndChunkTheCode(code: any, language = "javascript") {
  let ast = null;
  const chunks: any = [];

  if (language == "javascript") {
    ast = acorn.parse(code, { ecmaVersion: 2015, sourceType: "module" });
    extractVanillaJSCodes(ast, code, chunks);
  } else if (language == "typescript") {
    ast = parse(code, {
      range: true,
      ecmaVersion: "latest",
    });
    console.log("typescript ast", ast);
    extractTypescriptCode(ast, code, chunks);
  } else {
    ast = acorn.parse(code, { ecmaVersion: 5 });
    // Traverse the AST and extract function blocks
    extractCodeBlocks(ast, code, chunks);
  }

  return chunks;
}

function extractVanillaJSCodes(ast: any, code: any, blocks: any[]) {
  const classes: any = [];
  const methods: any = [];
  const functions: any = [];

  acornwalk.simple(ast, {
    Class(node) {
      const className = node.id;
      const classBody = code.substring(node.body.start, node.body.end);
      // Push method to the array
      classes.push({ name: className, body: classBody });

      blocks.push(classBody);

      //   console.log("node", node);
      //   console.log("methods", methods);
    },
    MethodDefinition(node) {
      const methodName = node.key;
      const methodBody = code.substring(node.start, node.end);
      const methodParams = node.value.params
        .map((param: any) => param.name)
        .join(", ");

      methods.push({
        name: methodName,
        methodParams: methodParams,
        body: methodBody,
      });
      blocks.push(methodBody);
    },
    FunctionDeclaration(node) {
      const functionName = node.id;
      const functionBody = code.substring(node.body.start, node.body.end);
      const functionParams = node.params
        .map((param: any) => param.name)
        .join(", ");

      functions.push({
        name: functionName,
        functionParam: functionParams,
        body: functionBody,
      });

      let blockCodeContructor = `function ${functionName}(${functionParams}${functionBody})`;
      blocks.push(blockCodeContructor);
    },
  });

  console.log("Classes", classes);
  console.log("Functions", functions);
  console.log("Methods", methods);

  return blocks;
}

function extractTypescriptCode(ast: any, code: any, blocks: any[]) {
  const classes: any = [];
  const methods: any = [];
  const functions: any = [];

  acornwalk.simple(ast, {
    Class(node) {},
    MethodDefinition(node) {},
    FunctionDeclaration(node) {
      console.log("typescript nodes => ", node);

      const startIdx = node.range?.[0];
      const endIdx = node?.range?.[1];

      const functionName = node.id;
      const functionBody = code.substring(startIdx, endIdx);

      const functionParams = node.params
        .map(
          (param: any) =>
            `${param.name}: ${param.typeAnnotation?.typeAnnotation?.type}`
        )
        .join(", ");

      functions.push({
        name: functionName,
        functionParam: functionParams,
        body: functionBody,
      });

      blocks.push(functionBody);
    },
  });

  console.log("Classes", classes);
  console.log("Functions", functions);
  console.log("Methods", methods);

  return blocks;
}

function extractCodeBlocks(node: any, code: any, blocks: any) {
  console.log("Nodes", node);
  if (node.type === "FunctionDeclaration" || node.type === "ClassDeclaration") {
    const blockCode = code.substring(node.start, node.end);
    blocks.push(blockCode);
  }

  // Recursively traverse child nodes
  for (const key in node) {
    if (
      node.hasOwnProperty(key) &&
      typeof node[key] === "object" &&
      node[key] !== null
    ) {
      if (Array.isArray(node[key])) {
        node[key].forEach((childNode: any) => {
          extractCodeBlocks(childNode, code, blocks);
        });
      } else {
        extractCodeBlocks(node[key], code, blocks);
      }
    }
  }
}
