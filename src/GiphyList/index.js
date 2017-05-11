import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    onItemSelect: item => console.log(item),
  }

  _theme = {
    list: styles.list,
    listItem: styles.listItem,
    listButton: styles.listButton,
    listButtonImage: styles.listButtonImage,
    ...this.props.theme,
  };

  render() {
    const { items, onItemSelect } = this.props;
    const theme = this._theme;

    return (
      <Masonry className={theme.list} role="listbox">
        {items.map(item => (
          <div key={item.id} className={theme.listItem} role="option">
            {this.props.renderItem(item, onItemSelect, theme)}
          </div>
        ))}
      </Masonry>
    );
  }
}
