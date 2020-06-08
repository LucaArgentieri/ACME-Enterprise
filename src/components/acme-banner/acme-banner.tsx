import { Component, ComponentInterface, h, Prop} from '@stencil/core';

@Component({
  tag: 'acme-banner',
  styleUrl: 'acme-banner.scss',
  shadow: true,
  assetsDirs: ["/assets"],
})
export class AcmeBanner implements ComponentInterface {

  @Prop() tagline: string;
  @Prop() phone: string;
  @Prop() who: string;
  @Prop() products: string;
  @Prop() contacts: string;
  @Prop() services: string;

  /*@State() divs_1: HTMLAcmeBannerElement[] = [];
  @State() divs_2: HTMLAcmeBannerElement[] = [];
  @State() divs_3: HTMLAcmeBannerElement[] = [];
  @State() divs_4: HTMLAcmeBannerElement[] = [];
  @Element() el: HTMLElement;*/

  /*componentWillLoad() {
   // window.addEventListener("load", () => {
      this.divs_1 = Array.from(this.el.shadowRoot.querySelectorAll('.photo_1'));
      this.divs_2 = Array.from(this.el.shadowRoot.querySelectorAll('.photo_2'));
      this.divs_3 = Array.from(this.el.shadowRoot.querySelectorAll('.photo_3'));
      this.divs_4 = Array.from(this.el.shadowRoot.querySelectorAll('.photo_4'));
      console.log(this.divs_1);
  };*/

  /*show() {
      let delay_1 = 0;
      let delay_2 = 0.2;
      let delay_3 = 0.4;
      let delay_4 = 0.6;

      this.divs_1.forEach(e => {
        e.style.transition = '0.2s';
        e.style.opacity = "1";
        e.style.transitionDelay = delay_1 + 's';
        delay_1 = delay_1 + 0.2;
    })
      this.divs_2.forEach(e => {
      e.style.transition = '0.2s';
      e.style.opacity = "1";
      e.style.transitionDelay = delay_2 + 's';
      delay_2 = delay_2 + 0.25;
    })
      this.divs_3.forEach(e => {
        e.style.transition = '0.2s';
        e.style.opacity = "1";
        e.style.transitionDelay = delay_3 + 's';
        delay_3 = delay_3 + 0.3;
    })
      this.divs_4.forEach(e => {
      e.style.transition = '0.2s';
      e.style.opacity = "1";
      e.style.transitionDelay = delay_4 + 's';
      delay_4 = delay_4 + 0.35;
  })
   // })
} */

  render() {
    return <div class="banner">
        <upper-bar tagline={this.tagline} phone={this.phone}></upper-bar>
        <lower-bar who={this.who} products={this.products} services={this.services} contacts={this.contacts}></lower-bar>
      <div class="promotional_text"><p class="primary_text"><span class="colored">Soluzioni finanziarie</span> per<br/> far fronte alla crisi<br/> COVID-19</p><p class="secondary_text">Finanziamenti digitali su misura che semplificano <br/>l'accesso al credito e la gestione della liquidità.<br/>Meno burocrazia, più opportunità.</p><button>Scopri di più</button></div> 
    </div>

  }

}