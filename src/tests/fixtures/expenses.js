import moment from "moment";

export default [
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
