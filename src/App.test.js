import React from 'react';
// import { render } from '@testing-library/react';
import { shallow, mount } from "enzyme";
import App from './App';

describe('App', () => {

  let container;
  beforeEach(() => container = mount(<App />))
  it('should render 3 divs', () => {
    expect(container.find('div').length).toEqual(3);
  })

  it('should render an image', () => {
    expect(container.find('img').length).toEqual(1);
  })

  it('should render an h1', () => {
    expect(container.find('h1').length).toEqual(1);
  })

  it('should render a p tag', () => {
    expect(container.find('p').length).toEqual(1);
  })

  it('should render an anchor tag', () => {
    expect(container.find('a').length).toEqual(1);
  })

  it('should render a span tag', () => {
    expect(container.find('span').length).toEqual(1);
  })
})