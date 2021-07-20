import React from "react";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure, ShallowWrapper } from "enzyme";
import renderer from "react-test-renderer";
import Input from "../../components/Input";

configure({ adapter: new Adapter() });

describe("<Input />", () => {
  let component:
    | string
    | any[]
    | ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

  beforeEach(() => {
    component = shallow(<Input />);
  });
  test("It should be mounted", () => {
    expect(component.length).toBe(1);
  });
  test("It should exist the input to search", () => {
    const input = renderer.create(<Input />).root;
    expect(input.findAllByType("input").length).toBe(1);
  });
  test("It should exist the button to search", () => {
    const input = renderer.create(<Input />).root;
    expect(input.findAllByType("button").length).toBe(1);
  });
});
