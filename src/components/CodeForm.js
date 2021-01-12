import React, { useState } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/monokai";

const now = moment();

const CodeForm = (props) => {
    const [title, setTitle] = useState(props.expense ? props.expense.description : "");
    const [note, setNote] = useState(props.expense ? props.expense.note : "");
    const [createdAt, setCreatedAt] = useState(props.expense ? moment(props.expense.createdAt) : moment());
    const [calendarFocused, setCalendarFocused] = useState(false);
    const [error, setError] = useState("");

    const onTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const onEditorChange = (newValue) => {
        setNote(newValue);
    };

    const onDateChange = (createdAt) => {
        if (createdAt) {
            setCreatedAt(createdAt);
        }
    };
    const onFocusChange = ({ focused }) => {
        setCalendarFocused(focused);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (!title) {
            setError("Please Provide a title");
        } else {
            setError("");

            props.onSubmit({
                description: title,
                createdAt: createdAt.valueOf(),
                note,
            });
        }
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            {error && <p className="form__error">{error}</p>}
            <input
                className="text-input"
                type="text"
                placeholder="Title"
                autoFocus
                value={title}
                onChange={onTitleChange}
            />

            <SingleDatePicker
                date={createdAt}
                onDateChange={onDateChange}
                focused={calendarFocused}
                onFocusChange={onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
            />
            <div>
                <AceEditor
                    className="ace-editor"
                    mode="javascript"
                    theme="monokai"
                    value={note}
                    onChange={onEditorChange}
                />
            </div>
            <div>
                <button className="button">Save Code</button>
            </div>
        </form>
    );
};

export default CodeForm;

//            <textarea className="textarea" value={note} onChange={onNoteChange}></textarea>
