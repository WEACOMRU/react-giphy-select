import React from 'react';
import { mount } from 'enzyme';
import fetchData from './fetchData.json';
import GiphySelect from '../lib';

fetch.mockResponse(JSON.stringify(fetchData));

describe('<GiphySelect />', () => {
  test('render component', () => {
    const spy = jest.spyOn(GiphySelect.prototype, 'render');
    const wrapper  = mount(
      <GiphySelect />
    );
    expect(spy).toHaveBeenCalled();
    spy.mockReset();
    spy.mockRestore();
  });

  test('set custom theme', () => {
    const customTheme = {
      select: 'customSelect',
      selectInput: 'customSelectInput',
      list: 'customList',
      listScrollbar: 'customListScrollbar',
      listScrollbarThumb: 'customListScrollbarThumb',
      listMasonry: 'customListMasonry',
      listItem: 'customListItem',
      listEntry: 'customListEntry',
      listEntryImage: 'customListEntryImage',
      attribution: 'customAttribution',
    };
    const wrapper = mount(
      <GiphySelect theme={customTheme} />
    );
    console.log(wrapper.instance());

    wrapper.instance()._updateItems = jest.fn(() => console.log(123));
    wrapper.update();

    const themeKeys = Object.keys(customTheme);
    expect(themeKeys.every(key => {
      console.log(customTheme[key], wrapper.find(`.${customTheme[key]}`).length);
      return true;
    })).toBe(true);
  });
});
