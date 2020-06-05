import { Component, ComponentInterface, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'form-prova',
  styleUrl: 'form-prova.scss',
  shadow: true,
})
export class FormProva implements ComponentInterface {
  /**
   *  mutable Prop which will be changed by the user.
   */
  @Prop({ mutable: true }) value: string;

  /**
   * Every time the input is changed, we update the
   * value attribute and emit it via an Event.
   */
  @Event() changed: EventEmitter<string>;

  handleChange(ev) {
    this.value = ev.target ? ev.target.value : null;
    this.changed.emit(this.value);
  }

  render() {
    return (
      <div class='input-container'>
        <input value={this.value} onInput={(ev) => this.handleChange(ev)} />
      </div>
    );
  }

}
