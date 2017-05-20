import GiphySelect from './index';

describe('<GiphySelect />', () => {
  fetch.mockResponse(JSON.stringify({
    data: [],
    pagination: {
      count: 0,
      offset: 0,
      total: 0
    }
  }));

  test('render component', () => {
    const spy = jest.spyOn(GiphySelect.prototype, 'render');
    const wrapper = shallow(
      <GiphySelect />
    );
    expect(spy).toHaveBeenCalled();
    spy.mockReset();
    spy.mockRestore();
  });

  test('snapshot match', () => {
    const wrapper = shallow(
      <GiphySelect />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('set custom theme', () => {
    const customTheme = {
      select: 'customSelect',
      selectInput: 'customSelectInput',
      attribution: 'customAttribution',
    };
    const wrapper = shallow(
      <GiphySelect theme={customTheme} />
    );
    expect(
      Object.keys(customTheme).every(key => wrapper.find(`.${customTheme[key]}`).length)
    ).toBe(true);
  });

  test('set placeholder to search field', () => {
    const customPlaceholder = 'test';
    const wrapper = shallow(
      <GiphySelect placeholder={customPlaceholder} />
    );
    expect(wrapper.find('input').prop('placeholder')).toBe(customPlaceholder);
  })
});
