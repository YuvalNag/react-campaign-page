import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { TeamsView } from './TeamsView'
import TeamsCarousel from '../../components/TeamsCarousel/TeamsCarousel'
import GlowingButtonsGroup from '../../components/GlowingButtonsGroup/GlowingButtonsGroup'
import Campaign from '../../classes/Campaign/Campaign'

configure({ adapter: new Adapter() })

describe("<TeamsView/>", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TeamsView />);
    });

    it('should render 1 <TeamsCarousel/>', () => {
        wrapper.setProps({ campaign: new Campaign(1, 'TEST') })
        expect(wrapper.find(TeamsCarousel)).toHaveLength(1);
    });
    it('should render 1 <GlowingButtonsGroup/>', () => {
        wrapper.setProps({ campaign: new Campaign(1, 'TEST') })
        expect(wrapper.find(GlowingButtonsGroup)).toHaveLength(1);
    });
})