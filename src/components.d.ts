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
    interface AcmeFooter {
    }
    interface AcmeForm {
    }
    interface AcmeNavbar {
        "contacts": string;
        "phone": string;
        "products": string;
        "services": string;
        "tagline": string;
        "who": string;
    }
    interface BgForm {
    }
    interface BodyBox {
    }
    interface BodyBox2 {
    }
    interface BodyContainer {
    }
    interface FormProva {
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
    interface HTMLAcmeFooterElement extends Components.AcmeFooter, HTMLStencilElement {
    }
    var HTMLAcmeFooterElement: {
        prototype: HTMLAcmeFooterElement;
        new (): HTMLAcmeFooterElement;
    };
    interface HTMLAcmeFormElement extends Components.AcmeForm, HTMLStencilElement {
    }
    var HTMLAcmeFormElement: {
        prototype: HTMLAcmeFormElement;
        new (): HTMLAcmeFormElement;
    };
    interface HTMLAcmeNavbarElement extends Components.AcmeNavbar, HTMLStencilElement {
    }
    var HTMLAcmeNavbarElement: {
        prototype: HTMLAcmeNavbarElement;
        new (): HTMLAcmeNavbarElement;
    };
    interface HTMLBgFormElement extends Components.BgForm, HTMLStencilElement {
    }
    var HTMLBgFormElement: {
        prototype: HTMLBgFormElement;
        new (): HTMLBgFormElement;
    };
    interface HTMLBodyBoxElement extends Components.BodyBox, HTMLStencilElement {
    }
    var HTMLBodyBoxElement: {
        prototype: HTMLBodyBoxElement;
        new (): HTMLBodyBoxElement;
    };
    interface HTMLBodyBox2Element extends Components.BodyBox2, HTMLStencilElement {
    }
    var HTMLBodyBox2Element: {
        prototype: HTMLBodyBox2Element;
        new (): HTMLBodyBox2Element;
    };
    interface HTMLBodyContainerElement extends Components.BodyContainer, HTMLStencilElement {
    }
    var HTMLBodyContainerElement: {
        prototype: HTMLBodyContainerElement;
        new (): HTMLBodyContainerElement;
    };
    interface HTMLFormProvaElement extends Components.FormProva, HTMLStencilElement {
    }
    var HTMLFormProvaElement: {
        prototype: HTMLFormProvaElement;
        new (): HTMLFormProvaElement;
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
        "acme-footer": HTMLAcmeFooterElement;
        "acme-form": HTMLAcmeFormElement;
        "acme-navbar": HTMLAcmeNavbarElement;
        "bg-form": HTMLBgFormElement;
        "body-box": HTMLBodyBoxElement;
        "body-box2": HTMLBodyBox2Element;
        "body-container": HTMLBodyContainerElement;
        "form-prova": HTMLFormProvaElement;
        "lower-bar": HTMLLowerBarElement;
        "text-box": HTMLTextBoxElement;
        "upper-bar": HTMLUpperBarElement;
    }
}
declare namespace LocalJSX {
    interface AcmeBanner {
    }
    interface AcmeFooter {
    }
    interface AcmeForm {
    }
    interface AcmeNavbar {
        "contacts"?: string;
        "phone"?: string;
        "products"?: string;
        "services"?: string;
        "tagline"?: string;
        "who"?: string;
    }
    interface BgForm {
    }
    interface BodyBox {
    }
    interface BodyBox2 {
    }
    interface BodyContainer {
    }
    interface FormProva {
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
        "acme-footer": AcmeFooter;
        "acme-form": AcmeForm;
        "acme-navbar": AcmeNavbar;
        "bg-form": BgForm;
        "body-box": BodyBox;
        "body-box2": BodyBox2;
        "body-container": BodyContainer;
        "form-prova": FormProva;
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
            "acme-footer": LocalJSX.AcmeFooter & JSXBase.HTMLAttributes<HTMLAcmeFooterElement>;
            "acme-form": LocalJSX.AcmeForm & JSXBase.HTMLAttributes<HTMLAcmeFormElement>;
            "acme-navbar": LocalJSX.AcmeNavbar & JSXBase.HTMLAttributes<HTMLAcmeNavbarElement>;
            "bg-form": LocalJSX.BgForm & JSXBase.HTMLAttributes<HTMLBgFormElement>;
            "body-box": LocalJSX.BodyBox & JSXBase.HTMLAttributes<HTMLBodyBoxElement>;
            "body-box2": LocalJSX.BodyBox2 & JSXBase.HTMLAttributes<HTMLBodyBox2Element>;
            "body-container": LocalJSX.BodyContainer & JSXBase.HTMLAttributes<HTMLBodyContainerElement>;
            "form-prova": LocalJSX.FormProva & JSXBase.HTMLAttributes<HTMLFormProvaElement>;
            "lower-bar": LocalJSX.LowerBar & JSXBase.HTMLAttributes<HTMLLowerBarElement>;
            "text-box": LocalJSX.TextBox & JSXBase.HTMLAttributes<HTMLTextBoxElement>;
            "upper-bar": LocalJSX.UpperBar & JSXBase.HTMLAttributes<HTMLUpperBarElement>;
        }
    }
}
