import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

export default class GiphySelect extends Component {
  static propTypes = {
    theme: PropTypes.shape({
      select: PropTypes.string,
      selectInput: PropTypes.string,
    }),
    placeholder: PropTypes.string,
    requestDelay: PropTypes.number,
    requestKey: PropTypes.string,
  };

  static defaultProps = {
    theme: {},
    placeholder: 'Search GIFs',
    requestDelay: 500,
    requestKey: 'dc6zaTOxFJmzC',
  };

  _onQueryChange = e => {
    const query = e.target.value.trim();

    if (this._requestTimer) {
      clearTimeout(this._requestTimer);
      this._requestTimer = null;
    }

    if (query) {
      this._requestTimer = setTimeout(() => {
        if (query !== this._query) {
          this._query = query;
          console.log(this._query);
          fetch(`http://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(this._query)}&api_key=${this.props.requestKey}`)
            .then(response => response.json())
            .then(console.log);
        }
      }, this.props.requestDelay);
    }
  }

  _theme = {
    select: styles.select,
    selectInput: styles.selectInput,
    ...this.props.theme,
  };
  _query = '';
  _requestTimer = null;

  render() {
    const { placeholder } = this.props;

    return (
      <div className={this._theme.select}>
        <input
          className={this._theme.selectInput}
          placeholder={placeholder}
          onChange={this._onQueryChange}
        />
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    );
  }
}
