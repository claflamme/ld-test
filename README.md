# Loblaw Digital Test

Tested in the latest versions of Chrome, Firefox, Edge, IE11, and Android Chrome. Apologies for any iOS issues, I don't have easy access to any iDevices.

## Instructions

To run the project locally, just run `npm install` from the root, followed by `npm run dev`. The website should then be available at localhost:3000.

```
npm i && npm run dev
```

## Assumptions

- Since this would be a website about recipes, SEO would be important. To that end, each page is either statically compiled or server-rendered.
- Permalinks would be important for sharing the site. Each resource can be accessed through a distinct copy/pasteable URL.
- Accessibility is important, since people of all makes and models like to cook. I aimed for AA and validated pages using ChromeVox and the aXe browser extension.
- The order in which the list of categories is returned is representative of the desired display order.
- Category names will always be single-word entities without special characters, since they seem to serve as the primary ID for that resource and would therefore be used in URLs.
