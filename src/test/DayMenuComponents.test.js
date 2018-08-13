import React from 'react';
import { shallow } from 'enzyme';
import DayMenuComponent from '../main/DayMenuComponent';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("DayMenuComponent", () => {
    it("should accept parameters", () => {
        const array = [{
            meal_type: "breakfast",
            meal_name: "Food"
        }, {
            meal_type: "lunch",
            meal_name: "Food"
        }];
        const component = shallow(<DayMenuComponent day="Sunday"
                                                   meals={array} />);
        expect(component.getElements()).toMatchSnapshot();
    });
});