import { Component, ComponentInterface, Host, h } from '@stencil/core';

/**
 * faq-text component
 * @author Andrea Guffi
 * @version 1.0.0
 */
@Component({
  tag: 'faq-text',
  styleUrl: 'faq-text.scss',
  shadow: true,
})
export class FaqText implements ComponentInterface {

  render() {
    return (
      <Host>
        <h3>Hai bisogno di aiuto?</h3>
        <p>Una selezione delle principali risposte alle domande più frequenti
        per la tua assicurazione viaggio, assistenza veicoli e altri prodotti.
        </p>
      </Host>
    );
  }

}
