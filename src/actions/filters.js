//SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text,
});
//SORT_BY_DATE
export const sortByDate = (sortBy = undefined) => ({
    type: "SORT_BY_DATE",
});
//SORT_BY_AMOUNT
export const sortByAmount = (sortBy = undefined) => ({
    type: "SORT_BY_AMOUNT",
});
//SET_START_DATE
export const setStartDate = (startDate) => ({
    //don't need default because default is already set as undefined
    type: "SET_START_DATE",
    startDate,
});
//SET_END_DATE
export const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate,
});
