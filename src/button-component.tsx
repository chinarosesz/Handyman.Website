import * as React from "react";

export class ButtonComponent extends React.Component 
{
  render() 
  {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={() => this.handleClick()}>Click me</button>
    );
  }

  handleClick()
  {
    alert('Hello World');
  }
}