<p align="center">
  <h2>React Clock</h2>
  <a href="https://uiwjs.github.io/react-clock">
    <img src="https://user-images.githubusercontent.com/1680273/99911627-b3040f80-2d30-11eb-9c48-669f1745f348.png">
  </a>
</p>

<!--dividing-->
[![](https://img.shields.io/github/issues/uiwjs/react-clock.svg)](https://github.com/uiwjs/react-clock/issues)
[![](https://img.shields.io/github/forks/uiwjs/react-clock.svg)](https://github.com/uiwjs/react-clock/network)
[![](https://img.shields.io/github/stars/uiwjs/react-clock.svg)](https://github.com/uiwjs/react-clock/stargazers)
[![](https://img.shields.io/github/release/uiwjs/react-clock)](https://github.com/uiwjs/react-clock/releases)
[![](https://img.shields.io/npm/v/@uiw/react-clock.svg)](https://www.npmjs.com/package/@uiw/react-clock)

An analog clock for your react app.

## Quick Start

```js
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
}
```

## Development

Runs the project in development mode.  

```bash
# Step 1, run first, listen to the component compile and output the .js file
npm run ts:watch
# Step 2, listen for compilation output type .d.ts file
npm run types:watch
# Step 3, development mode, listen to compile preview website instance
npm run doc:dev
```

Builds the app for production to the build folder.

```bash
npm run build
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!
