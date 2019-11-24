import React from 'react';
import { shallow } from 'enzyme';
import MealComponent from '../main/MealComponents';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("MealComponent", () => {
    it("should accept parameters", () => {
        const component = shallow(<MealComponent type="Breakfast" name="Salmon and Scrabbled eggs" />);
        expect(component.getElements()).toMatchSnapshot();
    });
});