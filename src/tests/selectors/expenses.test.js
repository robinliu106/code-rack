import selectExpenses from "../../selectors/expenses";
import moment from "moment";

const expenses = [
    {
        id: "1",
        description: "Gum",
        note: "",
        amount: 195,
        createdAt: 0,
    },
    {
        id: "2",
        description: "rent",
        note: "",
        amount: 300095,
        createdAt: moment(0).subtract(4, "days").valueOf(),
    },
    {
        id: "3",
        description: "credit card",
        note: "",
        amount: 6700,
        createdAt: moment(0).add(4, "days").valueOf(),
    },
];

test("Should filter by text value", () => {
    const filters = {
        text: "e",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined,
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1]]);
});

test("Should filter by startDate", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: moment(0),
        endDate: undefined,
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});

test("Should filter by endDate", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: moment(0).add(2, "days"),
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test("Should sort by Date", () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: undefined,
        endDate: undefined,
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("Should sort by Amount", () => {
    const filters = {
        text: "",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined,
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
