import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'simple-label',
  styleUrl: 'simple-label.scss',
  shadow: true,
})
export class SimpleLabel implements ComponentInterface {

  render() {
    return (
      <label class='simple-label'>simpleeee label</label>
    );
  }

}
