import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'body-container',
  styleUrl: 'body-container.scss',
  shadow: true,
})
export class BodyContainer implements ComponentInterface {

  render() {
    return (
      <Host>
        <body-box></body-box>
        <body-box2></body-box2>
        <acme-form></acme-form>
      </Host>
    );
  }

}
