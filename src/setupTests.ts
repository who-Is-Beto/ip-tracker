import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure } from "enzyme";
import "@testing-library/jest-dom/extend-expect";

configure({ adapter: new Adapter() });
global.fetch = require("jest-fetch-mock");
