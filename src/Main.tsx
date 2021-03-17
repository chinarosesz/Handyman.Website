import * as React from "react";
import * as ReactDOM from "react-dom";
import * as ClockComponent from "./clock-component";
import * as ButtonComponent from "./button-component";
import * as MsalComponent from "./msal-component";

let clockComponent = <ClockComponent.ClockComponent />
let buttonComponent = <ButtonComponent.ButtonComponent />
let msalComponent = <MsalComponent.MsalComponent />

ReactDOM.render(
    <div>
        <h1>Hello World</h1>
        <div>{clockComponent}</div>
        <div>{buttonComponent}</div>
        <div>{msalComponent}</div>
    </div>,
    document.getElementById('root')
);