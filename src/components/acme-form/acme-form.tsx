import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'acme-form',
  styleUrl: 'acme-form.scss',
  shadow: true,
})
export class AcmeForm implements ComponentInterface {

  render() {
    return (
      <div class='big_container'>
        <div class='img_background'></div>
        <div class='container'>
          <form id='form' class='form'>
            <h4>Contattaci</h4>

            <div class='form_control'>
              <label>
                Nome
              <input
                  type='text'
                  id='name'
                  placeholder='inserisci il tuo nome'
                />
              </label>
            </div>

            <div class='form_control'>
              <label>
                Cognome
              <input
                  type='text'
                  id='surname'
                  placeholder='inserisci il tuo cognome'
                />
              </label>
            </div>

            <div class='form_control'>
              <label>
                Numero
              <input
                  type='text'
                  id='number'
                  placeholder='inserisci il tuo numero'
                />
              </label>
            </div>

            <div class='form_control'>
              <label>
                email
              <input
                  type='text'
                  id='email'
                  placeholder='inserisci la tua email'
                />
              </label>
            </div>
            <textarea></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }

}
