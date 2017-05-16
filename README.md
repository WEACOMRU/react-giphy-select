# react-giphy-select

> A React component for select GIFs by Giphy API.

![Preview](https://raw.githubusercontent.com/WEACOMRU/react-giphy-select/master/github-preview.jpg)

By default it show GIFs currently trending online. But user can request
a specific GIFs using the search input.

## Attribution to Giphy
Please read Giphy [terms of service](https://giphy.com/terms).

## Installation
```bash
$ npm i -S react-giphy-select
```

## Usage
The plugin ships with a default styling available at this location in the installed package:
```bash
node_modules/react-giphy-select/dist/styles.css
```
You will need [Webpack](https://webpack.js.org/) or other build system supprts requiring css files.
```javascript
import React, { Component } from 'react';
import GiphySelect from 'react-giphy-select';
import 'react-giphy-select/dist/styles.css';

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
Start demo with docs
```bash
$ npm start
```
Please, create issues and pull requests.

## License
MIT.
