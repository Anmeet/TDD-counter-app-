import React from 'react';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

test('renders without crashing', () => {
   const wrapper = shallow(<App />);
   const appComponent = wrapper.find("[data-test='component-app']");
   expect (appComponent.length).toBe(1);
   //console.log(wrapper.debug())
});

test('renders button', () => {

});

test('renders count display', () => {

})

test('count starts at 0', () => {

})

test('Clicking on button increments counter display', () => {
  
})