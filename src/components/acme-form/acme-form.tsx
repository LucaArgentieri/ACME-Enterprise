import { Component, ComponentInterface, h, getAssetPath } from '@stencil/core';

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

  render() {
    return (
      <div class='wrapper'>
        <div class='img_background' style={this.acmeBackground}></div>

        <div class='form_inputs'>
          <h4>Contattaci</h4>
          <form id='form' class='form'>

            <p class='form_control'>
              <label>
                <input
                  type='text'
                  id='name'
                  placeholder='Nome'
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
