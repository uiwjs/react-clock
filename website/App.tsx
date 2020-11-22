import React from 'react';
import logo from './logo.svg';
import MarkdownPreview from '@uiw/react-markdown-preview';
import GitHubCorners from '@uiw/react-github-corners';
import Github from '@uiw/react-shields/lib/esm/github';
import Npm from '@uiw/react-shields/lib/esm/npm';
import MDStr from '../README.md';
import Example from './Example';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <GitHubCorners zIndex={9999} fixed target="__blank" href="https://github.com/uiwjs/react-clock" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="https://github.com/uiwjs/react-clock" target="_blank" rel="noopener noreferrer">
          React Clock
        </a>
        <p>
          An analog clock for your React app.
        </p>
        <Example />
      </header>
      <MarkdownPreview className="App-markdown" source={MDStr.replace(/([\s\S]*)<!--dividing-->/, '')} />
      <div className="App-footer">
        <Github user="uiwjs" repo="react-clock">
          <Github.Social type="forks" href="https://github.com/uiwjs/react-clock" />
          <Github.Social type="stars" href="https://github.com/uiwjs/react-clock/stargazers" />
          <Github.Social type="watchers" href="https://github.com/uiwjs/react-clock/watchers" />
        </Github>
        <Npm.Version scope="@uiw" packageName="react-clock" href="https://www.npmjs.com/package/@uiw/react-clock" />
      </div>
    </div>
  );
}

export default App;
