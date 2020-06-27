import { Component, ComponentInterface, getAssetPath, h } from '@stencil/core';

/**
 * background-faq component
 * @author Anrea Guffi
 * @version 1.0.0
 */
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
