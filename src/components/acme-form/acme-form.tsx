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
  @State() numero: string;

  private handleSubmit(e) {
    e.preventDefault();

    console.log(this.nome, this.cognome, this.numero);
  }

  private handleName(e) {
    this.nome = e.target.value;
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
                  value={this.nome}
                  type='text'
                  id='name'
                  placeholder='Nome'
                  onInput={(e) => this.handleName(e)}
                  required
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
                  required
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
                  required
                />
              </label>
            </p>

            <p class='form_control'>
              <label>

                <input
                  type='email'
                  id='email'
                  placeholder='Email'
                  required
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
