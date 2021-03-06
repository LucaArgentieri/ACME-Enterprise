import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'body-box2',
  styleUrl: 'body-box2.scss',
  shadow: true,
})
export class BodyBox2 implements ComponentInterface {

  render() {
    return (
      <div class="main_box">
        <div class="img_box">
          <div class="container_info">
            <h1>ACME FOR <span>PEOPLE</span></h1>
            <h2>Soluzioni che agevolano e migliorano la nostra quotidianità</h2>
            <button class="container_button">Scopri di più</button>
            </div>
        </div>
        <div class="card_box">
              <div class="card card1">
                <div class="card_img"><span class="img_sfondo1"><img src="assets/ecommerce_money.svg" alt=""/></span></div>
                <h3>Mutui</h3>
                <div class="container_p_button">
                  <p>Con ACME scegli tutto tu, dalla tipologia di tasso alle opzioni di flessibilità.</p>
                  <div class="container_card_button">
                  <button class="card_button">Scopri di più</button>
                </div>
                </div>
              </div>
              <div class="card card2">
                <div class="card_img"><span class="img_sfondo2"><img src="assets/iconfinder_umbrella_430125.svg" alt=""/></span></div>
                <h3>Assicurazioni</h3>
                <p>Calcola il tuo preventivo in soli due click
Scopri come risparmiare sull'assicurazione auto e blocca l'offerta per 60 giorni.</p>
                <div class="container_card_button">
                  <button class="card_button">Scopri di più</button>
                </div>
              </div>
              <div class="card card3">
                <div class="card_img"><span class="img_sfondo3"><img src="assets/ecommerce_creditcard.png" alt=""/></span></div>
                <h3>Carte di credito</h3>
                <p>Rendi le tue spese quotidiane più rapide, facili e sicure
Paga online o in negozio e preleva contanti presso milioni di Bancomat in tutto il mondo.</p>
                <div class="container_card_button">
                  <button class="card_button">Scopri di più</button>
                </div>
              </div>
            </div>
      </div>
    );
  }

}
