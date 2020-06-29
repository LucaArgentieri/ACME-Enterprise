# lower-bar
This component contains about us, products services,contacts.



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type     | Default     |
| ---------- | ---------- | ----------- | -------- | ----------- |
| `contacts` | `contacts` | Link for contacts form, email and telephone | `string` | `undefined` |
| `products` | `products` | Link for ACME financial products            | `string` | `undefined` |
| `services` | `services` | Link for private and companies services     | `string` | `undefined` |
| `who`      | `who`      | Link to about us                            | `string` | `undefined` |


## Dependencies

### Used by

 - [acme-banner](../acme-banner)

### Depends on

- [acme-hamburger](../acme-hamburger)
- [hamburger-body](../hamburger-body)

### Graph
```mermaid
graph TD;
  lower-bar --> acme-hamburger
  lower-bar --> hamburger-body
  acme-banner --> lower-bar
  style lower-bar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
