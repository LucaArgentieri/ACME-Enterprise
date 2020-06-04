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
          <h4>Contattaci</h4>
          <form id='form' class='form'>

            <div class='form_control'>
              <label>
                Nome
              <input
                  type='text'
                  id='name'
                  placeholder='Nome'
                />
              </label>
            </div>

            <div class='form_control'>
              <label>
                Cognome
              <input
                  type='text'
                  id='surname'
                  placeholder='Cognome'
                />
              </label>
            </div>

            <div class='form_control'>
              <label>
                Numero
              <input
                  type='text'
                  id='number'
                  placeholder='Numero'
                />
              </label>
            </div>

            <div class='form_control'>
              <label>
                email
              <input
                  type='text'
                  id='email'
                  placeholder='Email'
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
