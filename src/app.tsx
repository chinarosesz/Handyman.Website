import * as React from "react";
import * as ReactDOM from "react-dom";

let a = 1;
if (a == 1) 
{
    console.log("a");
}
else
{
    console.log('b');
}

ReactDOM.render(
    <div>
        <h1>Hello World</h1>
    </div>,
    document.getElementById("root")
);