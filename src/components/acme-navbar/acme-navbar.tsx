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
        <acme-banner tagline={this.tagline} phone={this.phone} who={this.who.toLocaleUpperCase()} products={this.products.toLocaleUpperCase()} services={this.services.toLocaleUpperCase()} contacts={this.contacts.toLocaleUpperCase()}></acme-banner>
      </Host>
    );
  }

}