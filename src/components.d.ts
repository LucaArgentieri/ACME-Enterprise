/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AcmeBanner {
    }
    interface AcmeNavbar {
        "contacts": string;
        "phone": string;
        "products": string;
        "services": string;
        "tagline": string;
        "who": string;
    }
    interface LowerBar {
        "contacts": string;
        "products": string;
        "services": string;
        "who": string;
    }
    interface TextBox {
    }
    interface UpperBar {
        "phone": string;
        "tagline": string;
    }
}
declare global {
    interface HTMLAcmeBannerElement extends Components.AcmeBanner, HTMLStencilElement {
    }
    var HTMLAcmeBannerElement: {
        prototype: HTMLAcmeBannerElement;
        new (): HTMLAcmeBannerElement;
    };
    interface HTMLAcmeNavbarElement extends Components.AcmeNavbar, HTMLStencilElement {
    }
    var HTMLAcmeNavbarElement: {
        prototype: HTMLAcmeNavbarElement;
        new (): HTMLAcmeNavbarElement;
    };
    interface HTMLLowerBarElement extends Components.LowerBar, HTMLStencilElement {
    }
    var HTMLLowerBarElement: {
        prototype: HTMLLowerBarElement;
        new (): HTMLLowerBarElement;
    };
    interface HTMLTextBoxElement extends Components.TextBox, HTMLStencilElement {
    }
    var HTMLTextBoxElement: {
        prototype: HTMLTextBoxElement;
        new (): HTMLTextBoxElement;
    };
    interface HTMLUpperBarElement extends Components.UpperBar, HTMLStencilElement {
    }
    var HTMLUpperBarElement: {
        prototype: HTMLUpperBarElement;
        new (): HTMLUpperBarElement;
    };
    interface HTMLElementTagNameMap {
        "acme-banner": HTMLAcmeBannerElement;
        "acme-navbar": HTMLAcmeNavbarElement;
        "lower-bar": HTMLLowerBarElement;
        "text-box": HTMLTextBoxElement;
        "upper-bar": HTMLUpperBarElement;
    }
}
declare namespace LocalJSX {
    interface AcmeBanner {
    }
    interface AcmeNavbar {
        "contacts"?: string;
        "phone"?: string;
        "products"?: string;
        "services"?: string;
        "tagline"?: string;
        "who"?: string;
    }
    interface LowerBar {
        "contacts"?: string;
        "products"?: string;
        "services"?: string;
        "who"?: string;
    }
    interface TextBox {
    }
    interface UpperBar {
        "phone"?: string;
        "tagline"?: string;
    }
    interface IntrinsicElements {
        "acme-banner": AcmeBanner;
        "acme-navbar": AcmeNavbar;
        "lower-bar": LowerBar;
        "text-box": TextBox;
        "upper-bar": UpperBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "acme-banner": LocalJSX.AcmeBanner & JSXBase.HTMLAttributes<HTMLAcmeBannerElement>;
            "acme-navbar": LocalJSX.AcmeNavbar & JSXBase.HTMLAttributes<HTMLAcmeNavbarElement>;
            "lower-bar": LocalJSX.LowerBar & JSXBase.HTMLAttributes<HTMLLowerBarElement>;
            "text-box": LocalJSX.TextBox & JSXBase.HTMLAttributes<HTMLTextBoxElement>;
            "upper-bar": LocalJSX.UpperBar & JSXBase.HTMLAttributes<HTMLUpperBarElement>;
        }
    }
}
