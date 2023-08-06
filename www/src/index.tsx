import { createRoot } from 'react-dom/client';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example';
import pkg from '@uiw/react-clock/package.json';
import data from '@uiw/react-clock/README.md';
import ReactClock from '@uiw/react-clock';

const Github = MarkdownPreviewExample.Github;
const Example = MarkdownPreviewExample.Example;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <MarkdownPreviewExample
    source={data.source}
    components={data.components}
    data={data.data}
    title="React Clock"
    description={pkg.description}
    version={`v${VERSION}`}
  >
    <Github href={pkg.homepage} />
    <Example>
      <ReactClock />
    </Example>
  </MarkdownPreviewExample>,
);
