import React from "react";
import { mount } from "enzyme";
import App from "../App";

describe("", () => {
  const wrapper = mount(<App />);
  const weaponChoices = ['Rock', 'Paper', 'Scissors']
  it("Tie game if both choose Rock", () => {
    wrapper.setState({ playerChoice: "Rock", opponentChoice: "Rock" });
    expect(wrapper.find("#results").text()).toEqual("You choose equally!");
    expect(wrapper.find(".playerChoice").text()).toEqual("Rock");
    expect(wrapper.find(".opponentChoice").text()).toEqual("Rock");
  });
});
