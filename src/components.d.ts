/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BodyBox {
    }
    interface BodyBox2 {
    }
    interface TextBox {
    }
}
declare global {
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
    interface HTMLTextBoxElement extends Components.TextBox, HTMLStencilElement {
    }
    var HTMLTextBoxElement: {
        prototype: HTMLTextBoxElement;
        new (): HTMLTextBoxElement;
    };
    interface HTMLElementTagNameMap {
        "body-box": HTMLBodyBoxElement;
        "body-box2": HTMLBodyBox2Element;
        "text-box": HTMLTextBoxElement;
    }
}
declare namespace LocalJSX {
    interface BodyBox {
    }
    interface BodyBox2 {
    }
    interface TextBox {
    }
    interface IntrinsicElements {
        "body-box": BodyBox;
        "body-box2": BodyBox2;
        "text-box": TextBox;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "body-box": LocalJSX.BodyBox & JSXBase.HTMLAttributes<HTMLBodyBoxElement>;
            "body-box2": LocalJSX.BodyBox2 & JSXBase.HTMLAttributes<HTMLBodyBox2Element>;
            "text-box": LocalJSX.TextBox & JSXBase.HTMLAttributes<HTMLTextBoxElement>;
        }
    }
}
