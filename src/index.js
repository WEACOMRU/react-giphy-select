import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GiphyList from './GiphyList';
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
    requestLang: PropTypes.string,
    requestRating: PropTypes.string,
  };

  static defaultProps = {
    theme: {},
    placeholder: 'Search GIFs',
    requestDelay: 500,
    requestKey: 'dc6zaTOxFJmzC',
    requestLang: 'en',
    requestRating: 'pg',
  };

  state = {
    items: [],
  };

  loadNextPage = () => {
    if (this._offset < this._totalCount) {
      this._fetchItems();
    }
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
          this._offset = 0;
          this.setState({
            items: [],
          });
          this._fetchItems();
        }
      }, this.props.requestDelay);
    }
  }

  _fetchItems = () => {
    const { requestKey, requestLang, requestRating } = this.props;
    const q = encodeURIComponent(this._query);
    const offset = this._offset;

    fetch(`http://api.giphy.com/v1/gifs/search?q=${q}&offset=${offset}&lang=${requestLang}&rating=${requestRating}&api_key=${requestKey}`)
      .then(response => response.json())
      .then(this._updateItems)
      .catch(console.error);
  }

  _updateItems = response => {
    console.log(response);
    this.setState(prevState => ({
      items: [...prevState.items, ...response.data],
    }));

    this._offset = response.pagination.offset + response.pagination.count;
    this._totalCount = response.pagination.total_count;
  }

  _theme = {
    select: styles.select,
    selectInput: styles.selectInput,
    ...this.props.theme,
  };
  _query = '';
  _requestTimer = null;
  _offset = 0;
  _totalCount = 0;

  render() {
    const { placeholder } = this.props;
    const theme = this._theme;

    console.log('render', this.state.items);

    return (
      <div className={theme.select}>
        <input
          className={theme.selectInput}
          placeholder={placeholder}
          onChange={this._onQueryChange}
        />
        <GiphyList theme={theme} items={this.state.items} />
      </div>
    );
  }
}
