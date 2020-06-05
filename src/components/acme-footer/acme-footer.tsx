import { Component, ComponentInterface, h, Prop } from '@stencil/core';

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
      <footer class="footer">
        <div class="footer__section footer__section--icons">
          <div class="logo-acme">
            <img src="assets/logo.svg" alt="logo acme" />
          </div>

          <div class="cont-social">
            <img src="assets/facebook2.svg" alt="logo facebook" />
            <img src="assets/twitter.svg" alt="logo twitter" />
            <img src="assets/linkedin.svg" alt="linkedin" />
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
    );
  }

}
