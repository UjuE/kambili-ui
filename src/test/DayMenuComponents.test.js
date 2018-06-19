import React from 'react';
import { shallow } from 'enzyme';
import DayMenuComponent from '../main/DayMenuComponent';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("DayMenuComponent", () => {
    it("should accept parameters", () => {
        const component = shallow(<DayMenuComponent day="Sunday"
                                                    breakfast="Bread and Butter"
                                                    dinner="Garri with assorted meat banga soup"
                                                    lunch="Garri with assorted meat banga soup" />);
        expect(component.getElements()).toMatchSnapshot();
    });
});