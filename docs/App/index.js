import React from 'react';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import bash from 'react-syntax-highlighter/dist/languages/bash';
import javascript from 'react-syntax-highlighter/dist/languages/javascript';
import tomorrowNightEighties from 'react-syntax-highlighter/dist/styles/tomorrow-night-eighties';
import styles from './styles.css';
import GiphySelect from '../../src';

registerLanguage('bash', bash);
registerLanguage('javascript', javascript);

const installationCode = '$ npm i -S react-giphy-select';
const renderEntryCode = 'renderEntry(entry, onSelect, options)';
const onEntrySelectCode = 'onEntrySelect(entry)';
const usageCode = `import React, { Component } from 'react';
import GiphySelect from 'react-giphy-select';

export default class Example extends Component {
  render() {
    return (
      <div>
        <GiphySelect />
      </div>
    );
  }
}`;
const contributingCode = '$ npm start';

const App = () => (
  <div className={styles.app}>
    <h1 className={styles.appTitle}>React Giphy Select Component</h1>
    <p>A React component for select GIFs by Giphy API.</p>
    <GiphySelect theme={{ select: styles.appSelect }} />
    <p>
      By default it show GIFs currently trending online. But user can request
      a specific GIFs using the search input.
    </p>
    <h2 className={styles.appHeader2}>Installation</h2>
    <SyntaxHighlighter
      language="bash"
      style={tomorrowNightEighties}
    >{installationCode}</SyntaxHighlighter>
    <h2 className={styles.appHeader2}>Props</h2>
    <dl className={styles.appProps}>
      <dt className={styles.appPropsName}>theme</dt>
      <dd className={styles.appPropsDesc}>
        Object of CSS classes with the following keys.
        <dl className={styles.appSubParams}>
          <dt className={styles.appSubParamsName}>select</dt>
          <dd className={styles.appSubParamsDesc}>
            CSS class for GiphySelect component.
          </dd>
          <dt className={styles.appSubParamsName}>selectInput</dt>
          <dd className={styles.appSubParamsDesc}>
            CSS class for search input.
          </dd>
          <dt className={styles.appSubParamsName}>list</dt>
          <dd className={styles.appSubParamsDesc}>
            CSS class for entries list.
          </dd>
          <dt className={styles.appSubParamsName}>listScrollbar</dt>
          <dd className={styles.appSubParamsDesc}>
            CSS class for scrollbar.
          </dd>
          <dt className={styles.appSubParamsName}>listScrollbarThumb</dt>
          <dd className={styles.appSubParamsDesc}>
            CSS class for scrollbar thumb.
          </dd>
          <dt className={styles.appSubParamsName}>listMasonry</dt>
          <dd className={styles.appSubParamsDesc}>
            CSS class for masonry layout.
          </dd>
          <dt className={styles.appSubParamsName}>listItem</dt>
          <dd className={styles.appSubParamsDesc}>
            CSS class for item of entries list.
          </dd>
          <dt className={styles.appSubParamsName}>listEntry</dt>
          <dd className={styles.appSubParamsDesc}>
            CSS class for entry.
          </dd>
          <dt className={styles.appSubParamsName}>listEntryImage</dt>
          <dd className={styles.appSubParamsDesc}>
            CSS class for entry image.
          </dd>
          <dt className={styles.appSubParamsName}>attribution</dt>
          <dd className={styles.appSubParamsDesc}>
            CSS class for attribution.
          </dd>
        </dl>
      </dd>
      <dt className={styles.appPropsName}>placeholder</dt>
      <dd className={styles.appPropsDesc}>
        Search input placeholder&nbsp;
        <em className={styles.appPropsDefault}>(by default &quot;Search GIFs&quot;)</em>.
      </dd>
      <dt className={styles.appPropsName}>requestDelay</dt>
      <dd className={styles.appPropsDesc}>
        Delay before sending a request after the search input value is changed&nbsp;
        <em className={styles.appPropsDefault}>(by default 500 ms)</em>.
      </dd>
      <dt className={styles.appPropsName}>requestKey</dt>
      <dd className={styles.appPropsDesc}>
        Key for Giphy API&nbsp;
        <em className={styles.appPropsDefault}>
          (by default is used public beta key &quot;dc6zaTOxFJmzC&quot;)
        </em>.
      </dd>
      <dt className={styles.appPropsName}>requestLang</dt>
      <dd className={styles.appPropsDesc}>
        Specify default country for regional content; format is 2-letter
        ISO 639-1 country code. See list of supported languages&nbsp;
        <a
          href="https://github.com/Giphy/GiphyAPI#language-support"
          rel="noopener noreferrer"
          target="_blank"
        >here</a>.
      </dd>
      <dt className={styles.appPropsName}>requestRating</dt>
      <dd className={styles.appPropsDesc}>
        Limit results to those rated (y,g, pg, pg-13 or r)&nbsp;
        <em className={styles.appPropsDefault}>(by default &quot;pg&quot;)</em>.
      </dd>
      <dt className={styles.appPropsName}>renderEntry</dt>
      <dd className={styles.appPropsDesc}>
        You can rewrite default&nbsp;
        <code className={styles.appCode}>renderEntry</code> method
        <SyntaxHighlighter
          language="javascript"
          style={tomorrowNightEighties}
        >{renderEntryCode}</SyntaxHighlighter>
        <dl className={styles.appSubParams}>
          <dt className={styles.appSubParamsName}>entry</dt>
          <dd className={styles.appSubParamsDesc}>
            Object with entry data from Giphy API.
          </dd>
          <dt className={styles.appSubParamsName}>onSelect</dt>
          <dd className={styles.appSubParamsDesc}>
            <code className={styles.appCode}>onEntrySelect</code> callback.
          </dd>
          <dt className={styles.appSubParamsName}>options</dt>
          <dd className={styles.appSubParamsDesc}>
            Object, that contains&nbsp;
            <code className={styles.appCode}>theme</code>
            &nbsp;parameter.
          </dd>
        </dl>
      </dd>
      <dt className={styles.appPropsName}>onEntrySelect</dt>
      <dd className={styles.appPropsDesc}>
        A callback which is triggered whenever the entry is selected.
        <SyntaxHighlighter
          language="javascript"
          style={tomorrowNightEighties}
        >{onEntrySelectCode}</SyntaxHighlighter>
        <dl className={styles.appSubParams}>
          <dt className={styles.appSubParamsName}>entry</dt>
          <dd className={styles.appSubParamsDesc}>
            Object with entry data from Giphy API.
          </dd>
        </dl>
      </dd>
    </dl>
    <h2 className={styles.appHeader2}>Usage</h2>
    <SyntaxHighlighter
      language="javascript"
      style={tomorrowNightEighties}
    >{usageCode}</SyntaxHighlighter>
    <h2 className={styles.appHeader2}>Contribution</h2>
    <p>Start demo with docs</p>
    <SyntaxHighlighter
      language="bash"
      style={tomorrowNightEighties}
    >{contributingCode}</SyntaxHighlighter>
    <p>Please, create issues and pull requests.</p>
    <h2 className={styles.appHeader2}>License</h2>
    <p>MIT.</p>
  </div>
);

export default App;
