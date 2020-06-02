import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'body-box2',
  styleUrl: 'body-box2.scss',
  shadow: true,
})
export class BodyBox2 implements ComponentInterface {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
