import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'hamburger-body',
  styleUrl: 'hamburger-body.scss',
  shadow: true,
})
export class HamburgerBody implements ComponentInterface {

   /** take the text for the link to the about page from acme-banner and add it to the component */
   @Prop() who: string;
   /** take the text for the link to the product page from acme-banner and add it to the component */
   @Prop() products: string;
   /** take the text for the link to the contacts page from acme-banner and add it to the component */
   @Prop() contacts: string;
   /** take the text for the link to the services page from acme-banner and add it to the component */
   @Prop() services: string;

  render() {
    return  <div>
    <p><a href="#"></a>{this.who}</p>
    <p><a href="#"></a>{this.products}</p>
    <p><a href="#"></a>{this.contacts}</p>
    <p><a href="#"></a>{this.services}</p>
    <p><a href="#"></a>LOGIN</p>
  </div>
  }
}
