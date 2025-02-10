<p align="center">
  <h2>React Clock</h2>
  <a href="https://uiwjs.github.io/react-clock">
    <img src="https://user-images.githubusercontent.com/1680273/99911627-b3040f80-2d30-11eb-9c48-669f1745f348.png">
  </a>
</p>

<!--dividing-->
[![NPM Downloads](https://img.shields.io/npm/dm/@uiw/react-clock.svg?style=flat)](https://www.npmjs.com/package/@uiw/react-clock)
[![Build & Deploy](https://github.com/uiwjs/react-clock/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-clock/actions/workflows/ci.yml)
[![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-clock/file/README.md)
[![npm version](https://img.shields.io/npm/v/@uiw/react-clock.svg)](https://www.npmjs.com/package/@uiw/react-clock)
[![Open in Gitpod](https://shields.io/badge/Open%20in-Gitpod-green?logo=Gitpod)](https://gitpod.io/#https://github.com/uiwjs/react-clock)

An analog clock for your react app.

## Quick Start

## 🌏  Open in the Cloud 
Click the button below to start a new development environment:

[![Open in VS Code](https://img.shields.io/badge/Open%20in-VS%20Code-blue?logo=visualstudiocode)](https://vscode.dev/github/uiwjs/react-clock)
[![Open in Glitch](https://img.shields.io/badge/Open%20in-Glitch-blue?logo=glitch)](https://glitch.com/edit/#!/import/github/uiwjs/react-clock)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/uiwjs/react-clock)
[![Open in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/uiwjs/react-clock)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/uiwjs/react-clock)
[![Open in Repl.it](https://replit.com/badge/github/withastro/astro)](https://replit.com/github/uiwjs/react-clock)
[![Open in Codeanywhere](https://codeanywhere.com/img/open-in-codeanywhere-btn.svg)](https://app.codeanywhere.com/#https://github.com/uiwjs/react-clock)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/uiwjs/react-clock)

```jsx
import ReactClock from '@uiw/react-clock';

function Demo() {
  return (
    <ReactClock />
  );
}
```

## Props

```typescript
type ClockProps = {
  width?: number;
  height?: number;
  value?: Date;
  run?: boolean
} & React.SVGProps<SVGSVGElement>;
```

## Development

Runs the project in development mode.  

```bash
# Step 1, run first, listen to the component compile and output the .js and type .d.ts file
npm run watch
# Step 2, development mode, listen to compile preview website instance
npm run start
```

Builds the app for production to the build folder.

```bash
npm run build
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-clock/graphs/contributors">
  <img src="https://uiwjs.github.io/react-clock/CONTRIBUTORS.svg" />
</a>

Made with [github-action-contributors](https://github.com/jaywcjlove/github-action-contributors).

### License

Licensed under the MIT License.
