import React from 'react';
import { shallow } from 'enzyme';
import MealTypeComponent from '../main/KambiliComponents';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("MealTypeComponent", () => {
    it("should accept parameters", () => {
        const component = shallow(<MealTypeComponent value="Breakfast" />);
        expect(component.getElements()).toMatchSnapshot();
    });
});