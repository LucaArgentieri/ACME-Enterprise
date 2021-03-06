import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'text-box',
  styleUrl: 'text-box.scss',
  shadow: true,
})
export class TextBox implements ComponentInterface {

  render() {
    return (
      <div class="box_container">
        <div class="left-box">
          <h2 class="title">Noi siamo <span class="title-azz">Acme</span></h2>
          <h2 class="title">La tua completa soluzione finanziaria</h2>
          <div class="para-box">
            <p>La finanza digitale veloce, flessibile, accessibile, a supporto delle imprese. Finanziamenti digitali su misura che semplificano l’accesso al credito e la gestione della liquidità aziendale. Meno burocrazia, più opportunità.</p>
          </div>
        </div>
        <div class="right-box">
          <div class="info_box">
            <a href=""><h3 class="title-azz">Servizi finanziari</h3></a>
            <p>Offriamo un'ampia gamma di soluzioni d'investimento fondate sulle nostre competenze chiave.</p>
          </div>
          <div class="info_box">
            <a href=""><h3 class="title-azz">Servizi assicurativi</h3></a>
            <p>Scopri le offerte dei nostri Servizi Assicurativi sulle polizze assicurative. Il tuo futuro in mani fidate!</p>
          </div>
          <div class="info_box">
            <a href=""><h3 class="title-azz">Analisi Business</h3></a>
            <p>L'analisi di mercato è una delle attività centrali quando si scrive un business plan.</p>
          </div>
          <div class="info_box">
            <a href=""><h3 class="title-azz">Assistenza 24/7</h3></a>
            <p> La nostra 24/7 Service Hotline vi mette in contatto con il personale di assistenza ACME esperto e altamente qualificato,</p>
          </div>
        </div>
      </div>
    );
  }

}
