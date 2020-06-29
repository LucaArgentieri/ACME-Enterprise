import { Component, ComponentInterface, h, Listen, Element, State } from '@stencil/core';

@Component({
  tag: 'acme-hamburger',
  styleUrl: 'acme-hamburger.scss',
  shadow: true,
})
export class AcmeHamburger implements ComponentInterface {
  @Element() el: HTMLAcmeHamburgerElement;
  @State() button : HTMLAcmeHamburgerElement;
  @State() menu : HTMLHamburgerBodyElement;

  componentDidLoad() {
    this.button = this.el.shadowRoot.querySelector('.button');
    this.menu = document.querySelector('app-container').shadowRoot.querySelector('acme-navbar').shadowRoot.querySelector('acme-banner').shadowRoot.querySelector('lower-bar').shadowRoot.querySelector('hamburger-body');
    console.log(this.menu);
  }
  // eslint-disable-next-line @stencil/prefer-vdom-listener
  @Listen('click')
     showMenu(ev) {
    if (!this.menu.classList.contains('visible')) {
      this.menu.classList.add('visible');
      this.button.children[1].classList.add('hidden');
      this.button.children[0].classList.add('rotate_1');
      this.button.children[2].classList.add('rotate_2');
      console.log(ev);
    } else {
      this.menu.classList.remove('visible');
      this.button.children[1].classList.remove('hidden');
      this.button.children[0].classList.remove('rotate_1');
      this.button.children[2].classList.remove('rotate_2');
    }
  }
  render() {
    return <div class="button">
      <span class="first"></span>
      <span class="second"></span>
      <span class="third"></span>
    </div>
  }

}
