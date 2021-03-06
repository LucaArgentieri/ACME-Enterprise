import { Component, ComponentInterface, h } from '@stencil/core';

/**
 * faq-wrap component
 * @author Andrea Guffi
 * @version 1.0.0
 */
@Component({
  tag: 'faq-wrap',
  styleUrl: 'faq-wrap.scss',
  shadow: true,
})
export class FaqWrap implements ComponentInterface {

  render() {
    return (
      <div>
        <faq-text></faq-text>
        <faq-wrap-accordion></faq-wrap-accordion>
      </div>
    );
  }

}
