// Parsers
import acorn from "acorn";

// Function to parse AngularJS code and extract function blocks
export function parseJavasscriptCode(code: any, language = "reactjs") {
  let ast = null;
  const chunks: any = [];

  if (language == "reactjs") {
    ast = acorn.parse(code, { ecmaVersion: 2015, sourceType: "module" });
    extractClassBaseCodes(code);
  } else {
    ast = acorn.parse(code, { ecmaVersion: 5 });
    // Traverse the AST and extract function blocks
    extractFunctionandNestedFunctionBlocks(ast, code, chunks);
  }

  return chunks;
}

export function extractFunctionandNestedFunctionBlocks(
  node: any,
  code: any,
  blocks: any
) {
  console.log("Nodes", node);
  if (node.type === "FunctionDeclaration") {
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
          extractFunctionandNestedFunctionBlocks(childNode, code, blocks);
        });
      } else {
        extractFunctionandNestedFunctionBlocks(node[key], code, blocks);
      }
    }
  }
}

export function extractClassBaseCodes(code: any) {
  const methods: any = [];

  // Parse the code into an AST
  const ast = acorn.parse(code, { ecmaVersion: 2015, sourceType: "module" });

  // Traverse the AST to find class nodes and extract methods
  // acornwalk.simple(ast, {
  //   ClassMethod(node) {
  //     // Extract method name and body
  //     const methodName = node.key.name;
  //     const methodBody = code.substring(node.body.start, node.body.end);

  //     // Push method to the array
  //     methods.push({ name: methodName, body: methodBody });
  //   },
  // });

  return methods;
}

export function extractFunctionCodesBlock(code: any) {
  const ast = acorn.parse(code, { ecmaVersion: 5 });

  const chunks = [];
  let currentChunk = "";

  for (const node of ast.body) {
    if (node.type === "FunctionDeclaration") {
      if (currentChunk !== "") {
        chunks.push(currentChunk);
        currentChunk = "";
      }
      const functionCode = code.substring(node.start, node.end);
      chunks.push(functionCode);
    } else {
      currentChunk += code.substring(node.start, node.end);
    }
  }

  if (currentChunk !== "") {
    chunks.push(currentChunk);
  }

  return chunks;
}

export function splitCodeWithChunkSize(code: any, chunkSize = 1000) {
  const chunks = [];

  // Split the code into chunks
  for (let i = 0; i < code.length; i += chunkSize) {
    chunks.push(code.substring(i, i + chunkSize));
  }

  return chunks;
}

// Function to parse AngularJS code and extract logical code blocks
function extractCodeBlockSolution2(code: any) {
  const ast = acorn.parse(code, { ecmaVersion: 2020, sourceType: "module" });

  console.log("AST", ast);

  const chunks: any = [];
  ast.body.forEach((node: any) => {
    if (node.type === "FunctionDeclaration") {
      chunks.push({
        type: "function",
        name: node.id.name,
        code: node.body.toString(),
      });
    } else if (
      node.type === "ClassDeclaration" &&
      node.superClass &&
      node.superClass.name === "Component"
    ) {
      chunks.push({
        type: "component",
        name: node.id.name,
        code: node.body.toString(),
      });
    } else if (
      node.type === "VariableDeclaration" &&
      node.declarations[0].init &&
      node.declarations[0].init.callee &&
      node.declarations[0].init.callee.name === "component"
    ) {
      chunks.push({
        type: "component",
        name: node.declarations[0].id.name,
        code: node.declarations[0].init.arguments[0].toString(),
      });
    }
  });

  return chunks;
}
