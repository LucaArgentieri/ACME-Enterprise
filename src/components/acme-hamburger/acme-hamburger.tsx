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
    if (this.button.innerHTML === '☰') {
      this.button.innerHTML = '✕';
      this.menu.classList.add('visible');
      console.log(ev);
    } else {
      this.button.innerHTML = '☰';
      this.menu.classList.remove('visible');
    }
  }
  render() {
    return <div class="button">☰</div>
  }

}
