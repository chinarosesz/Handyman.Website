import * as React from "react";
import * as ReactDOM from "react-dom";
import { ClockCoponent } from "./ClockComponent";

let clockComponent = <ClockCoponent />

ReactDOM.render(
    <div>
        <h1>Hello World</h1>
        <div>{clockComponent}</div>
    </div>,
    document.getElementById("root")
);