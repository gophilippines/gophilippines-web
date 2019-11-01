import React, { useState, useContext } from "react";
import ActivityContext from "../Context/ActivityContext";
// import { isContext } from "vm";

const Form = () => {
    const [activity, setActivity] = useState({
        name: "",
        detail: ""
    });

    const context = useContext(ActivityContext);

    const onChange = event => {
        setActivity({ ...activity, [event.target.name]: event.target.value });
    };

    const onSubmit = event => {
        event.preventDefault();
        if (activity.name.trim() === "") return;

        const newActivity = {
            name: activity.name.trim()
        };
        context.addActivity(newActivity);
        setActivity({ name: "", details: "" });
    };
};
