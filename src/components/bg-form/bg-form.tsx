import { Component, ComponentInterface, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'bg-form',
  styleUrl: 'bg-form.scss',
  shadow: true,
  assetsDirs: ['/assets'],
})
export class BgForm implements ComponentInterface {

  private acmeBackground = {
    backgroundImage: `url("${getAssetPath('/assets/acme-building-1.jpeg')}")`,
  };
  render() {
    return <div style={this.acmeBackground}></div>;
  }

}
