# DEPRECATED

### Please note, this project is deprecated and no longer being maintained, please use official [sdk](https://github.com/Giphy/giphy-js/tree/master/packages/react-components).

----------

# react-giphy-select

[![Build Status](https://travis-ci.org/WEACOMRU/react-giphy-select.svg?branch=master)](https://travis-ci.org/WEACOMRU/react-giphy-select)
[![npm version](https://badge.fury.io/js/react-giphy-select.svg)](https://badge.fury.io/js/react-giphy-select)

> A React component for select GIFs by Giphy API.

![Preview](https://raw.githubusercontent.com/WEACOMRU/react-giphy-select/master/github-preview.jpg)

By default it show GIFs currently trending online. But user can request
a specific GIFs using the search input.

## Attribution to Giphy
Please, read Giphy [terms of service](https://giphy.com/terms).

## Installation
```bash
$ npm i -S react-giphy-select
```

## Usage
The plugin ships with a default styling available at this location in the installed package:
```bash
node_modules/react-giphy-select/lib/styles.css
```
You will need [Webpack](https://webpack.js.org/) or other build system, that supports requiring css files.
```javascript
import React, { Component } from 'react';
import GiphySelect from 'react-giphy-select';
import 'react-giphy-select/lib/styles.css';

export default class Example extends Component {
  render() {
    return (
      <div>
        <GiphySelect />
      </div>
    );
  }
}
```

## Props
- **theme** - Object of CSS classes with the following keys.
  - **select** - CSS class for GiphySelect component.
  - **selectInput** - CSS class for search input.
  - **list** - CSS class for entries list.
  - **listEmpty** - CSS class for empty state of entries list.
  - **listScrollbar** - CSS class for scrollbar.
  - **listScrollbarThumb** - CSS class for scrollbar thumb.
  - **listMasonry** - CSS class for masonry layout.
  - **listItem** - CSS class for item of entries list.
  - **listEntry** - CSS class for entry.
  - **listEntryImage** - CSS class for entry image.
  - **attribution** - CSS class for attribution.
- **placeholder** - Search input placeholder *(by default "Search GIFs")*.
- **requestDelay** - Delay before sending a request after the search input value is changed *(by default 500 ms)*.
- **requestKey** - Key for Giphy API *(by default is used public beta key "dc6zaTOxFJmzC")*.
- **requestLang** - Specify default country for regional content; format is 2-letter
ISO 639-1 country code. See list of supported languages [here](https://github.com/Giphy/GiphyAPI#language-support).
- **requestRating** - Limit results to those rated (y,g, pg, pg-13 or r) *(by default "pg")*.
- **renderEntry** - You can rewrite default `renderEntry` method

  ```javascript
  renderEntry(entry, onSelect, options)
  ```

  - **entry** - Object with entry data from Giphy API.
  - **onSelect** - `onEntrySelect` callback.
  - **options** - Object, that contains `theme` parameter.

- **onEntrySelect** - A callback which is triggered whenever the entry is selected.

  ```javascript
  onEntrySelect(entry)
  ```

  - **entry** - Object with entry data from Giphy API.

## Contribution
Install all dependencies, then start the demo
```bash
$ npm install
$ npm start
```
Don't forget about tests and lint check
```bash
$ npm run lint
$ npm test
```
Please, create issues and pull requests.

## License
MIT.
