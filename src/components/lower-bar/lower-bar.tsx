import { Component, ComponentInterface, h, Prop, Element, State, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'lower-bar',
  styleUrl: 'lower-bar.scss',
  shadow: true,
})
export class LowerBar implements ComponentInterface {
  @Element() el: HTMLLowerBarElement;
  @State() button : HTMLAcmeHamburgerElement;
  @State() menu : HTMLHamburgerBodyElement;
  /** shows the menu by clicking on the hamburger */
  @Event() myToggle: EventEmitter;
  /** take the text for the link to the about page from acme-banner and add it to the component */
  @Prop() who: string;
  /** take the text for the link to the product page from acme-banner and add it to the component */
  @Prop() products: string;
  /** take the text for the link to the contacts page from acme-banner and add it to the component */
  @Prop() contacts: string;
  /** take the text for the link to the services page from acme-banner and add it to the component */
  @Prop() services: string;

  private showMenu = () => {
    
    if (!this.menu.classList.contains('visible')) {
      this.menu.classList.add('visible');
      this.button.children[1].classList.add('hidden');
      this.button.children[0].classList.add('rotate_1');
      this.button.children[2].classList.add('rotate_2');
    } else {
      this.menu.classList.remove('visible');
      this.button.children[1].classList.remove('hidden');
      this.button.children[0].classList.remove('rotate_1');
      this.button.children[2].classList.remove('rotate_2');
    } 

    this.myToggle.emit({});
  
  }

  componentDidLoad() {
    this.button = this.el.shadowRoot.querySelector('acme-hamburger').shadowRoot.querySelector('.button');
    console.log(this.button);
    this.menu = this.el.shadowRoot.querySelector('hamburger-body');
  }

  render() {
    return <div class="lower">
      <a href="#"><img src="/assets/logo.svg" alt="logo acme"/></a>
      <acme-hamburger onClick={this.showMenu}></acme-hamburger>
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
