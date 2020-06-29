import { Component, ComponentInterface, h, Prop, Host } from '@stencil/core';

/**
 * footer component
 * @author Anrea Guffi
 * @version 1.0.0
 */
@Component({
  tag: 'acme-footer',
  styleUrl: 'acme-footer.scss',
  shadow: true,
  assetsDirs: ['/assets'],
})
export class AcmeFooter implements ComponentInterface {
  /** value of first h5 in the footer */
  @Prop() headFiveOne: string

  /** value of the second h5 in the footer */
  @Prop() headFiveTwo: string

  /** value of the last h5 in the footer */
  @Prop() headFiveThree: string


  render() {
    return (
      <Host>
        <footer class="footer">
          <div class="footer__section footer__section--icons">
            <div class="logo-acme">
              <img src="assets/logo.svg" alt="logo acme" />
            </div>

            <div class="cont-social">
              <img src="assets/fbcolor.svg" alt="logo facebook" />
              <img src="assets/twitcolor.svg" alt="logo twitter" />
              <img src="assets/linkedinnew.svg" alt="linkedin" />
            </div>
          </div>

          <div class="footer__section">
            <h5>{this.headFiveOne}</h5>
            <ul>
              <li>Chi siamo</li>
              <li>I nostri clienti</li>
              <li>Dicono di noi</li>
              <li>Sponsorship</li>
              <li>Acme per il sociale</li>
            </ul>
          </div>

          <div class="footer__section">
            <h5>{this.headFiveTwo}</h5>
            <ul>
              <li>Assicurazioni</li>
              <li>Carte di credito</li>
              <li>Finanziamenti</li>
              <li>Mutui</li>
              <li>Servizi digitali</li>
            </ul>
          </div>

          <div class="footer__section">
            <h5>{this.headFiveThree}</h5>
            <ul>
              <li>Telefono: 800 600 500</li>
              <li>@acme.help.it</li>
              <li>Area clienti</li>
            </ul>
          </div>
        </footer>
        <div class='footer__bottom'>
          <p>
            © Acme S.p.A. — P.IVA 09171640965 — Via Filippo Turati 29, 20121 Milano
        </p>
        </div>
      </Host>
    );
  }

}
