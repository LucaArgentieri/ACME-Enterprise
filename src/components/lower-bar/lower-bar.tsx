import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'lower-bar',
  styleUrl: 'lower-bar.scss',
  shadow: true,
})
export class LowerBar implements ComponentInterface {

  /** take the text for the link to the about page from acme-banner and add it to the component */
  @Prop() who: string;
  /** take the text for the link to the product page from acme-banner and add it to the component */
  @Prop() products: string;
  /** take the text for the link to the contacts page from acme-banner and add it to the component */
  @Prop() contacts: string;
  /** take the text for the link to the services page from acme-banner and add it to the component */
  @Prop() services: string;

  render() {
    return <div class="lower">
      <a href="#"><img src="/assets/logo.svg" alt="logo acme"/></a>
      <acme-hamburger></acme-hamburger>
      <hamburger-body class="hidden" who={this.who} products={this.products} services={this.services} contacts={this.contacts}></hamburger-body>
      <div class="lower_links">
        <a href="#">{this.who}</a>
        <a href="#">{this.products}</a>
        <a href="#">{this.services}</a>
        <a href="#">{this.contacts}</a>
      </div>
    </div>
  }

}
