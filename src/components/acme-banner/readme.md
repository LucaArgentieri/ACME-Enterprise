# acme-banner



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
