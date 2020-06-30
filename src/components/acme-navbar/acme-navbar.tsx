import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'acme-navbar',
  styleUrl: 'acme-navbar.scss',
  shadow: true,
})
export class AcmeNavbar implements ComponentInterface {
  /** add a welcome message and pass it to other components */
  @Prop() tagline: string;
  /** add phone number and pass it to other components */
  @Prop() phone: string;
  /** add text for the link to the about page  and pass it to other components */
  @Prop() who: string;
  /** add text for the link to the product page  and pass it to other components */
  @Prop() products: string;
  /** add text for the link to the contact page  and pass it to other components */
  @Prop() contacts: string;
  /** add text for the link to the services page  and pass it to other components */
  @Prop() services: string;
  
  render() {
    return (
      <Host>
        <acme-banner tagline={this.tagline} phone={this.phone} who={this.who.toLocaleUpperCase()} products={this.products.toLocaleUpperCase()} services={this.services.toLocaleUpperCase()} contacts={this.contacts.toLocaleUpperCase()}></acme-banner>
      </Host>
    );
  }

}