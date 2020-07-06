import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'acme-hamburger',
  styleUrl: 'acme-hamburger.scss',
  shadow: true,
})
export class AcmeHamburger implements ComponentInterface {
  
  render() {
    return <div class="button">
      <span class="first"></span>
      <span class="second"></span>
      <span class="third"></span>
    </div>
  }

}
