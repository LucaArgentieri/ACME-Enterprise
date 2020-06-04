import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'acme-navbar',
  styleUrl: 'acme-navbar.scss',
  shadow: true,
})
export class AcmeNavbar implements ComponentInterface {

  @Prop() tagline: string;
  @Prop() phone: string;
  @Prop() who: string;
  @Prop() products: string;
  @Prop() contacts: string;
  @Prop() services: string;
  
  render() {
    return (
      <Host>
        <upper-bar tagline={this.tagline} phone={this.phone}></upper-bar>
        <lower-bar who={this.who.toUpperCase()} products={this.products.toUpperCase()} services={this.services.toUpperCase()} contacts={this.contacts.toUpperCase()}></lower-bar>
        <acme-banner></acme-banner>
      </Host>
    );
  }

}