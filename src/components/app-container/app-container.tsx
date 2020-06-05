import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'app-container',
  styleUrl: 'app-container.scss',
  shadow: true,
})
export class AppContainer implements ComponentInterface {

  render() {
    return (
      <div>
      <acme-navbar tagline="Benvenuti su Acme" phone="800-600-200" who="chi siamo" products="prodotti" services="servizi" contacts="contatti"></acme-navbar>
      <body-container></body-container>
      <acme-form></acme-form>
      <acme-footer></acme-footer>
      </div>
    )
  }

}
