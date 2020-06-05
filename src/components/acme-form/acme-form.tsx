import { Component, ComponentInterface, h, getAssetPath, State } from '@stencil/core';

@Component({
  tag: 'acme-form',
  styleUrl: 'acme-form.scss',
  shadow: true,
  assetsDirs: ['/assets'],
})

export class AcmeForm implements ComponentInterface {

  private acmeBackground = {
    backgroundImage: `url("${getAssetPath('/assets/acme-building-1.jpeg')}")`,
  };

  @State() nome: string;
  @State() cognome: string;
  @State() numero: number;

  private handleSubmit(e) {
    e.preventDefault();

    console.log(this.nome, this.cognome, this.numero);
  }

  private handleName(event) {
    this.nome = event.target.value;
  }

  private handleSurname(event) {
    this.cognome = event.target.value;
  }

  private handleNumber(event) {
    this.numero = event.target.value;
  }

  render() {
    return (
      <div class='wrapper'>
        <div class='img_background' style={this.acmeBackground}></div>

        <div class='form_inputs'>
          <h4>Contattaci</h4>
          <form id='form' class='form' onSubmit={(e) => this.handleSubmit(e)}>

            <p class='form_control'>
              <label>
                <input
                  type='text'
                  id='name'
                  placeholder='Nome'
                  onInput={(event) => this.handleName(event)}
                />
              </label>
            </p>

            <p class='form_control'>
              <label>
                <input
                  type='text'
                  id='surname'
                  placeholder='Cognome'
                  onInput={(event) => this.handleSurname(event)}
                />
              </label>
            </p>

            <p class='form_control'>
              <label>
                <input
                  type='text'
                  id='number'
                  placeholder='Numero'
                  onInput={(event) => this.handleNumber(event)}
                />
              </label>
            </p>

            <p class='form_control'>
              <label>

                <input
                  type='text'
                  id='email'
                  placeholder='Email'

                />
              </label>
            </p>

            <p class='full-width'>
              <label>
                <textarea id='message' placeholder='inserisci un messaggio'></textarea>
              </label>
            </p>
            <button type="submit" >INVIA</button>
          </form>

        </div>
      </div>
    );
  }

}
