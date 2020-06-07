import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'faq-text',
  styleUrl: 'faq-text.scss',
  shadow: true,
})
export class FaqText implements ComponentInterface {

  render() {
    return (
      <Host>
        <h3>Frequently asked question</h3>
        <p>Alcune risposte alle domande più frequenti</p>
      </Host>
    );
  }

}
