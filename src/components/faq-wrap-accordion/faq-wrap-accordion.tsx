import { Component, ComponentInterface, Host, h } from '@stencil/core';

@Component({
  tag: 'faq-wrap-accordion',
  styleUrl: 'faq-wrap-accordion.scss',
  shadow: true,
})
export class FaqWrapAccordion implements ComponentInterface {

  render() {
    return (
      <Host>
        <faq-accordion width='100%' question='How do i find my member number?'
          answer="Find your member number online. You can also call Customer Support
        at 1-800-426-4840 (U.S. and Canada) or 1-253-891-2500 (International)..">
        </faq-accordion>
        <faq-accordion width='100%' question='How do i find my member number?'
          answer="Find your member number online. You can also call Customer Support
        at 1-800-426-4840 (U.S. and Canada) or 1-253-891-2500 (International)..">
        </faq-accordion>
        <faq-accordion width='100%' question='Does every member get an Annual Dividend?'
          answer="Only active REI Co-op members receive an Annual Dividend notice. 
            To be an active member, you need to make net merchandise or shipping purchases
             (purchases minus credits and returns) of at least $10 per year, 
            unless you joined during that calendar year.">
        </faq-accordion>

      </Host>
    );
  }

}
