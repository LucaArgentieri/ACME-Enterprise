import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'acme-footer',
  styleUrl: 'acme-footer.scss',
  shadow: true,
  assetsDirs: ['/assets'],
})
export class AcmeFooter implements ComponentInterface {


  render() {
    return (
      <footer class="footer">
        <div class="footer__section footer__section--icons">
          <div class="logo-acme">
            <img src="assets/logo.svg" alt="logo acme" />
          </div>

          <div class="cont-social">
            <img src="assets/facebook.svg" alt="logo facebook" />
            <img src="assets/twitter.svg" alt="logo twitter" />
            <img src="assets/linkedin.svg" alt="linkedin" />
          </div>
        </div>

        <div class="footer__section">
          <h5>Azienda</h5>
          <ul>
            <li>Chi siamo</li>
            <li>I nostri clienti</li>
            <li>Dicono di noi</li>
            <li>Sponsorship</li>
            <li>Acme per il sociale</li>
          </ul>
        </div>

        <div class="footer__section">
          <h5>Servizi</h5>
          <ul>
            <li>Assicurazioni</li>
            <li>Carte di credito</li>
            <li>Finanziamenti</li>
            <li>Mutui</li>
            <li>Servizi digitali</li>
          </ul>
        </div>

        <div class="footer__section">
          <h5>Contatti</h5>
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
