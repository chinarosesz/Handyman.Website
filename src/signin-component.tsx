import * as React from "react";

export class SigninComponent extends React.Component 
{
  render() 
  {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={() => this.handleClick()}>Click me</button>);
  }

  handleClick()
  {
    alert('Hello World');
  }
}