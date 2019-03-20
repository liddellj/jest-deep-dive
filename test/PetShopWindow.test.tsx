import * as React from "react";
import { shallow } from "enzyme";
import PetShopWindow from "../src/PetShopWindow";

describe("<PetShopWindow>", () => {
  let wrapper;
  let props;
  const getItems = () => wrapper.find("li");

  beforeEach(() => {
    props = {
      pets: [
        {
          name: "Felix"
        },
        {
          name: "Bob"
        }
      ]
    };

    wrapper = shallow(<PetShopWindow {...props} />);
  });

  it("should render a list item for each pet", () => {
    expect(getItems().length).toBe(2);
  });
});
