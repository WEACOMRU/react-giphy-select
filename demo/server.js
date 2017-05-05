/**
 * NOTE: This file must be run with babel-node as Node is not yet compatible
 * with all of ES6 and we also use JSX.
 */

import express from 'express';

import html from './html';

const app = express();

app.get('*', (req, res) => {
  res.send(html);
});

const port = 3000;

app.listen(port, 'localhost', err => {
  if (err) {
    console.error(err); // eslint-disable-line no-console
    return;
  }
  console.log(`Dev server listening at http://localhost:${port}`); // eslint-disable-line no-console
});
