# OpenAI Source Code Converter

This is an OpenAI-based source code converter. You can upload large source code files and convert them into your relevant target technology

> This project will `chunk your code blocks`, and `generate output in output.txt` file.

### Limitation

At the moment, you can only convert large but non-nested JavaScript or TypeScript codebases.

### How to run this project

- First Clone this project and do `npm install`
- Go to `config/openai.config.ts` and update your openAI API key
- Open new 2 `command prompt / Terminal` inside project
- Run `npm run start:watch:ts`
- Run `npm run start:watcj:js`
- Open `Postman` and hit this endpoint url `http://localhost:3000` - Method is `GET`

### Libraries used

- `Openai Node` [Refer Documentation](https://github.com/openai/openai-node)
- `ExpressJS` [Refer Documentation](https://expressjs.com/)
- `Node Typescript` [Refer Documentation](https://nodejs.org/en/learn/getting-started/nodejs-with-typescript)
- `Acorn` - Javascript Parser [Refer Documentation](https://www.npmjs.com/package/acorn/v/8.11.3)
- `Acorn Walker` - AST(Abstract Syntax Tree) Generator [Refer Documentation](https://www.npmjs.com/package/acorn-walk)
- `Typescript ESList Parser` - Typescript Parser [Refer Documentation](https://www.npmjs.com/package/@typescript-eslint/parser)
- `Nodemon` - JS code change detector

## Who Am I ?

I'm Raheem, Software Engineer, Tech Enthusiast and Youtuber. Follow me using below links

<div id="badges">
  <a href="https://www.linkedin.com/in/raheem-mohamed-293ab1113">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <a href="https://youtube.com/@raheemsview">
    <img src="https://img.shields.io/badge/YouTube-red?style=for-the-badge&logo=youtube&logoColor=white" alt="Youtube Badge"/>
  </a>
</div>
