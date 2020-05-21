import React from "react";
import { shallow } from "enzyme";
import { Header } from "../../components/Header";

test("Should render header correctly", () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);

    expect(wrapper.debug()).toMatchSnapshot();
});

test("Should call start logout on button click", () => {
    const startLogout = jest.fn(); //returns a spy
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find("button").simulate("click");
    expect(startLogout).toHaveBeenCalled();
});
