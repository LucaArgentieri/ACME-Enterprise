import { Component, ComponentInterface, h, State, EventEmitter, Event, Prop } from '@stencil/core';

@Component({
  tag: 'faq-accordion',
  styleUrl: 'faq-accordion.scss',
  shadow: true,
})
export class FaqAccordion implements ComponentInterface {
  /** handle the state of accordion open/close */
  @State() toggle: boolean = false;
<<<<<<< HEAD
  /**  event of toggle event emitter */
=======
  /**  event of toggle accordion */
>>>>>>> develop
  @Event() myToggle: EventEmitter;
  /** pass the content of faq question from faq-wrap-acoordion */
  @Prop() question: string;
  /** pass the content of faq answer from faq-wrap-acoordion */
  @Prop() answer: string;
  /** pass the width of faq-accordion */
  @Prop() width: string;

  private toggleComponent = () => {
    this.toggle = !this.toggle;
    this.myToggle.emit({ visible: this.toggle });
  }

  render() {
    return (
      <div class="container">
        <button class='accordion'
          style={{ width: this.width }}
          onClick={this.toggleComponent}
        >
          {this.question}
          {this.toggle ? <span>-</span> : <span>+</span>}
        </button>
        <div class={`content-box ${this.toggle ? 'open' : 'close'}`}
          style={{ width: this.width }}
        >
          <p>{this.answer}</p>
        </div>
      </div >
    );
  }

}
