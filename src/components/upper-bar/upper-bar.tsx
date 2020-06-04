import { Component, ComponentInterface, h, Prop } from '@stencil/core';

@Component({
  tag: 'upper-bar',
  styleUrl: 'upper-bar.scss',
  shadow: true,
  assetsDirs: ["/assets"],
})
export class UpperBar implements ComponentInterface {

  @Prop() tagline: string;
  @Prop() phone: string;

  render() {
    return <div class="upper">
      <h1>{this.tagline}</h1>
      <div><p><input type="text"/></p><p><span>{this.phone}</span></p><p><a href="#">Login</a></p></div>
      </div>
  }

}
