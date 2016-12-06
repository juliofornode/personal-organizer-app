import {expect, renderComponent} from '../test_helper';
import MyComponent from '../../src/components/MyComponent';

describe('MyComponent', () => {

  let myComponent;
  beforeEach(() => {
    myComponent = renderComponent(MyComponent);
  });

  it('should exist', () => {
    expect(myComponent).to.exist;
  });

  it('should have class my-component', () => {
    expect(myComponent).have.class('my-component');
  });

  it('should have an h4 element', () => {
    expect(myComponent.find('h4')).to.exist;
  });

  describe('Increase Button', () => {
    beforeEach(() => {
      (myComponent.find('button')).simulate('click');
    });
    it('should increase the value in the h2 element', () => {
      expect(myComponent.to.have.prop('number'));
    });

  });

});
