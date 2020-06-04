# app-container



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [acme-navbar](../acme-navbar)
- [body-container](../body-container)
- [acme-form](../acme-form)
- [acme-footer](../acme-footer)

### Graph
```mermaid
graph TD;
  app-container --> acme-navbar
  app-container --> body-container
  app-container --> acme-form
  app-container --> acme-footer
  acme-navbar --> upper-bar
  acme-navbar --> lower-bar
  acme-navbar --> acme-banner
  body-container --> text-box
  body-container --> body-box
  body-container --> body-box2
  style app-container fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
