import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import Masonry from 'react-masonry-component';
import styles from './styles.css';

export default class GiphyList extends Component {
  static propTypes = {
    theme: PropTypes.shape({
      list: PropTypes.string,
      listScrollbar: PropTypes.string,
      listScrollbarThumb: PropTypes.string,
      listMasonry: PropTypes.string,
      listItem: PropTypes.string,
      listEntry: PropTypes.string,
      listEntryImage: PropTypes.string,
    }),
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    renderEntry: PropTypes.func,
    onEntrySelect: PropTypes.func,
    loadNextPage: PropTypes.func.isRequired,
  };

  static defaultProps = {
    theme: {},
    renderEntry: (entry, onSelect, options) => (
      <button
        className={options.theme.listEntry}
        style={{
          width: `${entry.images.fixed_width_small.width}px`,
          height: `${entry.images.fixed_width_small.height}px`,
          backgroundImage: `url(${entry.images.fixed_width_small_still.url})`,
        }}
        onClick={() => onSelect(entry)}
        role="option"
      >
        <img
          className={options.theme.listEntryImage}
          src={entry.images.fixed_width_small.url}
          width={entry.images.fixed_width_small.width}
          height={entry.images.fixed_width_small.height}
          alt={entry.slug}
        />
      </button>
    ),
    onEntrySelect: () => {},
  }

  _onScroll = values => {
    if (values.top === 1) {
      this.props.loadNextPage();
    }
  }

  _onWheel = e => {
    // Disable page scroll, but enable gifs scroll
    const { clientHeight, scrollHeight, scrollTop } = this._scrollbars.getValues();
    if (e.deltaY > 0) {
      if (scrollTop < scrollHeight - clientHeight - e.deltaY) {
        e.stopPropagation();
      } else {
        this._scrollbars.scrollToBottom();
      }
    } else {
      if (scrollTop > -e.deltaY) { // eslint-disable-line no-lonely-if
        e.stopPropagation();
      } else {
        this._scrollbars.scrollTop();
      }
    }
  }

  _theme = {
    list: styles.list,
    listScrollbar: styles.listScrollbar,
    listScrollbarThumb: styles.listScrollbarThumb,
    listMasonry: styles.listMasonry,
    listItem: styles.listItem,
    listEntry: styles.listEntry,
    listEntryImage: styles.listEntryImage,
    ...this.props.theme,
  };

  render() {
    const { items, onEntrySelect } = this.props;
    const theme = this._theme;

    return (
      <div className={theme.list} onWheel={this._onWheel}>
        <Scrollbars
          onScrollFrame={this._onScroll}
          renderTrackVertical={() => (
            <div className={theme.listScrollbar} />
          )}
          renderThumbVertical={props => (
            <div {...props} className={theme.listScrollbarThumb} />
          )}
          hideTracksWhenNotNeeded
          ref={element => { this._scrollbars = element; }}
        >
          <Masonry className={theme.listMasonry} role="listbox">
            {items.map(entry => (
              <div key={entry.id} className={theme.listItem} role="option">
                {this.props.renderEntry(entry, onEntrySelect, { theme })}
              </div>
            ))}
          </Masonry>
        </Scrollbars>
      </div>
    );
  }
}
