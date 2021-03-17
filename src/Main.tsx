import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ClockComponent from "./clock-component";
import * as SigninComponent from "./signin-component";

let clockComponent = <ClockComponent.ClockComponent />
let signinComponent = <SigninComponent.SigninComponent />

ReactDOM.render(
    <div>
        <h1>Hello World</h1>
        <div>{clockComponent}</div>
        <div>{signinComponent}</div>
    </div>,
    document.getElementById("root"));