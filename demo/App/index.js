import React from 'react';
import styles from './styles.css';
import GiphySelect from '../../src';

const App = () => (
  <div className={styles.app}>
    <h1 className={styles.appTitle}>React Giphy Select Component</h1>
    <GiphySelect theme={{ select: styles.appSelect }} />
  </div>
);

export default App;
