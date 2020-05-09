import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("Should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseForm with expense data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test("Should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("form").simulate("submit", {
        preventDefault: () => {},
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test("Should set description on input change", () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = "New description";
    wrapper.find("input").at(0).simulate("change", { target: { value } });
    expect(wrapper.state("description")).toBe(value);
});

test("Should set note on textarea change", () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = "New note";
    wrapper.find("textarea").simulate("change", { target: { value } });
    expect(wrapper.state("note")).toBe(value);
});

test("Should set valid amount", () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = "12.50";
    wrapper.find("input").at(1).simulate("change", { target: { value } });
    expect(wrapper.state("amount")).toBe(value);
});

test("Should not set invalid amount", () => {
    const wrapper = shallow(<ExpenseForm />);
    const value = "12.12.50";
    wrapper.find("input").at(1).simulate("change", { target: { value } });
    expect(wrapper.state("amount")).toBe("");
});

test("Should call OnSubmit prop for valid form submission", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(
        <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
    );
    wrapper.find("form").simulate("submit", { preventDefault: () => {} });
    expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt,
    });
});

test("Should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onDateChange")(now);
    expect(wrapper.state("createdAt")).toEqual(now);
});

test("Should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onDateChange")(now);
    expect(wrapper.state("createdAt")).toEqual(now);
});

//Not working
// test("Should set calendar focus on change", () => {
//     const focusValue = true;
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find("SingleDatePicker").prop("onFocusChange")({ focusValue });
//     expect(wrapper.state("calendarFocused")).toBe(focusValue);
// });
