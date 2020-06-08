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

### Depends on

- [acme-banner](../acme-banner)

### Graph
```mermaid
graph TD;
  acme-navbar --> acme-banner
  acme-banner --> upper-bar
  acme-banner --> lower-bar
  lower-bar --> acme-hamburger
  lower-bar --> hamburger-body
  style acme-navbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
