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
      <div><p class="flex"><img src="/assets/loupe.svg" alt=""/><input type="text"/></p><p class="flex"><img src="/assets/phone.svg" alt=""/><span>{this.phone}</span></p><p class="flex"><img src="/assets/users.svg" alt=""/><a href="#">Login</a></p></div>
      </div>
  }

}
