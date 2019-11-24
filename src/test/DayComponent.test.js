import React from 'react';
import { shallow } from 'enzyme';
import DayComponent from '../main/DayComponent';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe("DayComponent", () => {
    it("should accept parameters", () => {
        const component = shallow(<DayComponent value="Sunday" />);
        expect(component.getElements()).toMatchSnapshot();
    });
});