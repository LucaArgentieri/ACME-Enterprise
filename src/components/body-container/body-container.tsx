import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'body-container',
  styleUrl: 'body-container.scss',
  shadow: true,
})
export class BodyContainer implements ComponentInterface {

  render() {
    return (
      <div>
        <text-box></text-box>
        <body-box></body-box>
      </div>
    );
  }

}
