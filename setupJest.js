import { shallow, render, mount } from 'enzyme';
import fetch from 'jest-fetch-mock';
import React from 'react';

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.fetch = fetch;
global.React = React;
