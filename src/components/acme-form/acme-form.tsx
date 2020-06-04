import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'acme-form',
  styleUrl: 'acme-form.scss',
  shadow: true,
})
export class AcmeForm implements ComponentInterface {

  render() {
    return (
      <div class='wrapper'>
        <div class='img_background'></div>

        <div class='form_inputs'>
          <h4>Contattaci</h4>
          <form id='form' class='form'>

            <p class='form_control'>
              <label>
                <input
                  type='text'
                  id='name'
                  placeholder='Nome'
                />
              </label>
            </p>

            <p class='form_control'>
              <label>
                <input
                  type='text'
                  id='surname'
                  placeholder='Cognome'
                />
              </label>
            </p>

            <p class='form_control'>
              <label>
                <input
                  type='text'
                  id='number'
                  placeholder='Numero'
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
            <button type="submit">INVIA</button>
          </form>

        </div>
      </div>
    );
  }

}
