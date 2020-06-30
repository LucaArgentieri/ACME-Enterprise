import { Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'acme-banner',
  styleUrl: 'acme-banner.scss',
  shadow: true,
  assetsDirs: ["/assets"],
})
export class AcmeBanner implements ComponentInterface {
  /** add a welcome message taking it from acme-navbar component */ 
  @Prop() tagline: string;
  /** add a phone number taking it from acme-navbar component */ 
  @Prop() phone: string;
  /** add a text to the link for the about page taking it from acme-navbar component */ 
  @Prop() who: string;
  /** add a text to the link for the product page taking it from acme-navbar component */ 
  @Prop() products: string;
  /** add a text to the link for the contacts page taking it from acme-navbar component */ 
  @Prop() contacts: string;
  /** add a text to the link for the services page taking it from acme-navbar component */ 
  @Prop() services: string;

 
  render() {
    return <div class="banner">
        <upper-bar tagline={this.tagline} phone={this.phone}></upper-bar>
        <lower-bar who={this.who} products={this.products} services={this.services} contacts={this.contacts}></lower-bar>
      <div class="promotional_text"><p class="primary_text"><span class="colored">Soluzioni finanziarie</span> per far fronte <br/> alla crisi COVID-19</p><p class="secondary_text">Finanziamenti digitali su misura che semplificano <br/>l'accesso al credito e la gestione della liquidità.<br/>Meno burocrazia, più opportunità.</p><button>Scopri di più</button></div> 
    </div>

  }

}