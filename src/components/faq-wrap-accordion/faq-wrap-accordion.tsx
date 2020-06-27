import { Component, ComponentInterface, Host, h } from '@stencil/core';

/**
 * faq-wrap accordion component
 * @author Anrea Guffi
 * @version 1.0.0
 */

@Component({
  tag: 'faq-wrap-accordion',
  styleUrl: 'faq-wrap-accordion.scss',
  shadow: true,
})
export class FaqWrapAccordion implements ComponentInterface {

  render() {
    return (
      <Host>
        <faq-accordion width='100%' question='Quali persone sono assicurabili?'
          answer="Le polizze sono valide per italiani o stranieri
           domiciliati o residenti in Italia"
        >
        </faq-accordion>
        <faq-accordion width='100%' question='Quali aree non sono coperte dalle nostre polizze?'
          answer="Le nostre polizze non sono operanti per viaggi in stati sottoposti ad embargo ONU
           o Unione Europea (nella pagina avvertenze trovi l’elenco aggiornato)."
        >
        </faq-accordion>
        <faq-accordion width='100%' question='Cosa è la franchigia?'
          answer="In campo assicurativo per franchigia si intende quella parte di danno
           che resta a carico dell'assicurato. Può essere espressa in importo 
           fisso o in percentuale sulla somma assicurata"
        >
        </faq-accordion>
        <faq-accordion width='100%' question='Devo denunciare un sinistro, come posso fare?'
          answer="Accedi all' area acme/denuncia-online.it dove potrai effettuare la tua denuncia online. 
          Troverai anche tutti i dettagli per portare a termine la denuncia."
        >
        </faq-accordion>

      </Host>
    );
  }

}
