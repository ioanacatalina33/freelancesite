import React from "react";
import { shallow } from "enzyme";

import About from "./About";

describe("About", () => {
   test("should render", () => {
      const wrapper = shallow(<About />);

      expect(wrapper.exists()).toBeTruthy();
   });
});
