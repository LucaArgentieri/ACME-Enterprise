# acme-navbar



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type     | Default     |
| ---------- | ---------- | ----------- | -------- | ----------- |
| `contacts` | `contacts` |             | `string` | `undefined` |
| `phone`    | `phone`    |             | `string` | `undefined` |
| `products` | `products` |             | `string` | `undefined` |
| `services` | `services` |             | `string` | `undefined` |
| `tagline`  | `tagline`  |             | `string` | `undefined` |
| `who`      | `who`      |             | `string` | `undefined` |


## Dependencies

### Used by

 - [app-container](../app-container)

### Depends on

- [upper-bar](../upper-bar)
- [lower-bar](../lower-bar)
- [acme-banner](../acme-banner)

### Graph
```mermaid
graph TD;
  acme-navbar --> upper-bar
  acme-navbar --> lower-bar
  acme-navbar --> acme-banner
  lower-bar --> acme-hamburger
  lower-bar --> hamburger-body
  app-container --> acme-navbar
  style acme-navbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
