import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";
import App from "../App";

configure({ adapter: new Adapter() });
describe("<App />", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />);
  });
  test("It should be mounted", () => {
    expect(component.length).toBe(1);
  });
});
