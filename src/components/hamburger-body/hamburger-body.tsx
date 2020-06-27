import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'hamburger-body',
  styleUrl: 'hamburger-body.scss',
  shadow: true,
})
export class HamburgerBody implements ComponentInterface {

  @Prop() who: string;
  @Prop() products: string;
  @Prop() contacts: string;
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
