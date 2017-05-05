import React from 'react';
import { renderToString } from 'react-dom/server';

import Html from './Html';

export default `<!doctype html>${renderToString(<Html />)}`;
