# acme-banner
This component contains upper-bar where you can find search, telephone and login and the lower-bar where you can find about us, products
services,contacts.


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type     | Default     |
| ---------- | ---------- | ----------- | -------- | ----------- |
| `contacts` | `contacts` | Link for contacts form, email and telephone | `string` | `undefined` |
| `phone`    | `phone`    | Instant call for customer care              | `string` | `undefined` |
| `products` | `products` | Link for ACME financial products            | `string` | `undefined` |
| `services` | `services` | Link for private and companies services     | `string` | `undefined` |
| `tagline`  | `tagline`  | Welcome in ACME                             | `string` | `undefined` |
| `who`      | `who`      | Link to about us                            | `string` | `undefined` |


## Dependencies

### Used by

 - [acme-navbar](../acme-navbar)

### Depends on

- [upper-bar](../upper-bar)
- [lower-bar](../lower-bar)

### Graph
```mermaid
graph TD;
  acme-banner --> upper-bar
  acme-banner --> lower-bar
  lower-bar --> acme-hamburger
  lower-bar --> hamburger-body
  acme-navbar --> acme-banner
  style acme-banner fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
