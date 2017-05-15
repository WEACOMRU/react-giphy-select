import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import Masonry from 'react-masonry-component';
import styles from './styles.css';

export default class GiphyList extends Component {
  static propTypes = {
    theme: PropTypes.shape({
      list: PropTypes.string,
      listItem: PropTypes.string,
      listButton: PropTypes.string,
    }),
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    renderItem: PropTypes.func,
    onItemSelect: PropTypes.func,
    loadNextPage: PropTypes.func.isRequired,
  };

  static defaultProps = {
    theme: {},
    renderItem: (item, onSelect, theme) => (
      <button
        className={theme.listButton}
        style={{
          width: `${item.images.fixed_width_small.width}px`,
          height: `${item.images.fixed_width_small.height}px`,
          backgroundImage: `url(${item.images.fixed_width_small_still.url})`,
        }}
        onClick={() => onSelect(item)}
        role="option"
      >
        <img
          className={theme.listButtonImage}
          src={item.images.fixed_width_small.url}
          width={item.images.fixed_width_small.width}
          height={item.images.fixed_width_small.height}
          alt={item.slug}
        />
      </button>
    ),
    onItemSelect: () => {},
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
    listButton: styles.listButton,
    listButtonImage: styles.listButtonImage,
    ...this.props.theme,
  };

  render() {
    const { items, onItemSelect } = this.props;
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
            {items.map(item => (
              <div key={item.id} className={theme.listItem} role="option">
                {this.props.renderItem(item, onItemSelect, theme)}
              </div>
            ))}
          </Masonry>
        </Scrollbars>
      </div>
    );
  }
}
