import React from "react";
import { mount, shallow } from "enzyme";
import ShowCombo from "../components/ShowCombo";

describe("Both participants choose the same option", () => {
  it('Player has won 1 time', () => {
    const wrapper = shallow(<ShowCombo combo="1"/>)
    expect(wrapper.find(".combo").text()).toEqual("Combo!  x1");
  })
  
  it('Player has won 9 times', () => {
    const wrapper = shallow(<ShowCombo combo="9"/>)
    expect(wrapper.find(".combo").text()).toEqual("Combo!  x9");
  })

  it('Player has won 100 times', () => {
    const wrapper = shallow(<ShowCombo combo="100"/>)
    expect(wrapper.find(".combo").text()).toEqual("Combo!  x100");
  })

});