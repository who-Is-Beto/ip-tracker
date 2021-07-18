import { mount } from "enzyme";
import Input from "../../components/Input";
import React from "react";

describe("Render of <Input /> and his elements", () => {
  const input = mount(<Input />);
  test("Render of input component", () => {
    expect(input.length).toEqual(1);
  });
  test("Input elements renders", () => {
    expect(input.find(".input")).toHaveLength(1);
    expect(input.find("button")).toHaveLength(1);
  });
});

describe("Check functionality of <Input />", () => {});
