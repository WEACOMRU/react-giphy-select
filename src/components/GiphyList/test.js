import GiphyList from './index';
import giphyData from './helpers/giphyData.json';

describe('<GiphyList />', () => {
  test('render component', () => {
    const spy = jest.spyOn(GiphyList.prototype, 'render');
    const wrapper = shallow(
      <GiphyList items={[]} loadNextPage={() => {}} />
    );
    expect(spy).toHaveBeenCalled();
    spy.mockReset();
    spy.mockRestore();
  });

  test('snapshot match', () => {
    const wrapper = render(
      <GiphyList items={giphyData} loadNextPage={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('set custom theme', () => {
    const customTheme = {
      list: 'customList',
      listScrollbar: 'customListScrollbar',
      listScrollbarThumb: 'customListScrollbarThumb',
      listMasonry: 'customListMasonry',
      listItem: 'customListItem',
      listEntry: 'customListEntry',
      listEntryImage: 'customListEntryImage',
    };
    const wrapper = render(
      <GiphyList
        items={giphyData}
        loadNextPage={() => {}}
        theme={customTheme}
      />
    );
    expect(
      Object.keys(customTheme).every(key => wrapper.find(`.${customTheme[key]}`).length)
    ).toBe(true);
  });

  test('set custom "renderEntry" method', () => {
    const customRenderEntry = jest.fn();
    const wrapper = render(
      <GiphyList
        items={giphyData}
        loadNextPage={() => {}}
        renderEntry={customRenderEntry}
      />
    );
    expect(customRenderEntry).toHaveBeenCalled();
  });

  test('set "onEntrySelect" method', () => {
    const onEntrySelect = jest.fn();
    const wrapper = mount(
      <GiphyList
        items={giphyData}
        loadNextPage={() => {}}
        onEntrySelect={onEntrySelect}
      />
    );
    wrapper.find('button').simulate('click');
    expect(onEntrySelect).toHaveBeenCalled();
  })
});
