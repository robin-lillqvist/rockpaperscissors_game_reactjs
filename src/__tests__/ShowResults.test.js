import React from "react";
import { mount, shallow } from "enzyme";
import ShowResults from "../components/ShowResult";

describe("Both participants choose the same option", () => {
  it('Both chose Rock', () => {
    const wrapper = shallow(
      <ShowResults
      playerChoice="Rock"
      opponentChoice="Rock"
      result="equally"
    />)
    expect(wrapper.find(".results").text()).toEqual("You choose equally!");
    expect(wrapper.find(".playerChoice").text()).toEqual("Rock");
    expect(wrapper.find(".opponentChoice").text()).toEqual("Rock");
  })
  it('Both chose Paper', () => {
    const wrapper = shallow(
      <ShowResults
      playerChoice="Paper"
      opponentChoice="Paper"
      result="equally"
    />)
    expect(wrapper.find(".results").text()).toEqual("You choose equally!");
    expect(wrapper.find(".playerChoice").text()).toEqual("Paper");
    expect(wrapper.find(".opponentChoice").text()).toEqual("Paper");
  })
  it('Both chose Scissors', () => {
    const wrapper = shallow(
      <ShowResults
      playerChoice="Scissors"
      opponentChoice="Scissors"
      result="equally"
    />)
    expect(wrapper.find(".results").text()).toEqual("You choose equally!");
    expect(wrapper.find(".playerChoice").text()).toEqual("Scissors");
    expect(wrapper.find(".opponentChoice").text()).toEqual("Scissors");
  })
});

describe("Player wins", () => {
  it('Player choose Rock and computer chose Scissors', () => {
    const wrapper = shallow(
      <ShowResults
      playerChoice="Rock"
      opponentChoice="Scissors"
      result="wisely"
    />)
    expect(wrapper.find("#results").text()).toEqual("You choose wisely!");
    expect(wrapper.find(".playerChoice").text()).toEqual("Rock");
    expect(wrapper.find(".opponentChoice").text()).toEqual("Scissors");
  })
  it('Player choose Paper and computer chose Rock', () => {
    const wrapper = shallow(
      <ShowResults
      playerChoice="Paper"
      opponentChoice="Rock"
      result="wisely"
    />)
    expect(wrapper.find(".results").text()).toEqual("You choose wisely!");
    expect(wrapper.find(".playerChoice").text()).toEqual("Paper");
    expect(wrapper.find(".opponentChoice").text()).toEqual("Rock");
  })
  it('Player choose Scissors and computer chose Paper', () => {
    const wrapper = shallow(
      <ShowResults
      playerChoice="Scissors"
      opponentChoice="Paper"
      result="wisely"
    />)
    expect(wrapper.find(".results").text()).toEqual("You choose wisely!");
    expect(wrapper.find(".playerChoice").text()).toEqual("Scissors");
    expect(wrapper.find(".opponentChoice").text()).toEqual("Paper");
  })
});

describe("Opponent wins", () => {
  it('Player choose Rock and computer chose Paper', () => {
    const wrapper = shallow(
      <ShowResults
      playerChoice="Rock"
      opponentChoice="Paper"
      result="poorly"
    />)
    expect(wrapper.find(".results").text()).toEqual("You choose poorly!");
    expect(wrapper.find(".playerChoice").text()).toEqual("Rock");
    expect(wrapper.find(".opponentChoice").text()).toEqual("Paper");
  })
  it('Player choose Paper and computer chose Scissors', () => {
    const wrapper = shallow(
      <ShowResults
      playerChoice="Paper"
      opponentChoice="Scissors"
      result="poorly"
    />)
    expect(wrapper.find(".results").text()).toEqual("You choose poorly!");
    expect(wrapper.find(".playerChoice").text()).toEqual("Paper");
    expect(wrapper.find(".opponentChoice").text()).toEqual("Scissors");
  })
  it('Player choose Scissors and computer chose Rock', () => {
    const wrapper = shallow(
      <ShowResults
      playerChoice="Scissors"
      opponentChoice="Rock"
      result="poorly"
    />)
    expect(wrapper.find(".results").text()).toEqual("You choose poorly!");
    expect(wrapper.find(".playerChoice").text()).toEqual("Scissors");
    expect(wrapper.find(".opponentChoice").text()).toEqual("Rock");
  })
});