import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'body-box',
  styleUrl: 'body-box.scss',
  shadow: true,
})
export class BodyBox implements ComponentInterface {

  render() {
    return (
      <div class="main_box">
        <div class="img_box">
          <div class="container_info">
            <h1>ACME FOR <span>BUSINESS</span></h1>
            <h2>La finanza digitale veloce, flessibile ed accessibile a supporto delle imprese</h2>
            <button class="container_button">Scopri di più</button>
          </div>
        </div>
        <div class="card_box">
          <div class="card card1">
            <div class="card_img"><span class="img_sfondo1"><img src="assets/money.svg" alt="" /></span></div>
            <h3>Finanziamenti <span class="box_rosso">Covid-19</span></h3>
            <div class="container_p_button">
              <p>Ottieni un finanziamento a medio/lungo termine per far fronte alla liquidità o per realizzare piccoli o grandi progetti.</p>
              <div class="container_card_button">
                <button class="card_button">Scopri di più</button>
              </div>
            </div>
          </div>
          <div class="card card2">
            <div class="card_img"><span class="img_sfondo2"><img src="assets/iconfinder_work-business-solid-performance-2_5972610.svg" alt="" /></span></div>
            <h3>Analisi dati</h3>
            <p>Ottieni insight più approfonditi sulle decisioni dei clienti e sulle operazioni organizzative con una base di dati ibridi, potenziati dall'AI.</p>
            <div class="container_card_button">
              <button class="card_button">Scopri di più</button>
            </div>
          </div>
          <div class="card card3">
            <div class="card_img"><span class="img_sfondo3"><img src="assets/presentation.svg" alt="" /></span></div>
            <h3>Consulenze</h3>
            <p>Richiedi una consulenza da parte dei nostri esperti per poter migliorare il rendimento della tua azienda.</p>
            <div class="container_card_button">
              <button class="card_button">Scopri di più</button>
            </div>
          </div>
        </div>

      </div>
    );
  }

}
