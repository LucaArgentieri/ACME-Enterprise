import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'lower-bar',
  styleUrl: 'lower-bar.scss',
  shadow: true,
})
export class LowerBar implements ComponentInterface {

  @Prop() who: string;
  @Prop() products: string;
  @Prop() contacts: string;
  @Prop() services: string;

  render() {
    return <div class="lower">
      <img src="/assets/logo.svg" alt="logo acme"/>
      <div class="lower_links">
        <a href="#">{this.who}</a>
        <a href="#">{this.products}</a>
        <a href="#">{this.services}</a>
        <a href="#">{this.contacts}</a>
      </div>
    </div>
  }

}
