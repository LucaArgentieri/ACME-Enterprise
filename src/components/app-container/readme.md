# app-container
This is the app-container and contains every components of the website


<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [acme-navbar](../acme-navbar)
- [body-container](../body-container)
- [faq-wrap](../faq-wrap)
- [acme-news](../acme-news)
- [acme-form](../acme-form)
- [acme-footer](../acme-footer)

### Graph
```mermaid
graph TD;
  app-container --> acme-navbar
  app-container --> body-container
  app-container --> faq-wrap
  app-container --> acme-news
  app-container --> acme-form
  app-container --> acme-footer
  acme-navbar --> acme-banner
  acme-banner --> upper-bar
  acme-banner --> lower-bar
  lower-bar --> acme-hamburger
  lower-bar --> hamburger-body
  body-container --> text-box
  body-container --> body-box
  body-container --> body-box2
  faq-wrap --> faq-text
  faq-wrap --> faq-wrap-accordion
  faq-wrap-accordion --> faq-accordion
  style app-container fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
