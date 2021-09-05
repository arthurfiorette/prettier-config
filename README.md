## @arthurfiorette/prettier-config

### Usage

First, install

```sh
# Npm
npm i -D @arthurfiorette/prettier-config

# Yarn
yarn add -D @arthurfiorette/prettier-config
```

You can use this prettier config with a `.prettierrc.js` file.

```js
// .prettierrc.js

module.exports = require('@arthurfiorette/prettier-config');
```

Or overriding some configs

```js
// .prettierrc.js

const { config } = require('@arthurfiorette/prettier-config');

module.expors = config({
  printWidth: 80
});
```

### See more

- [Prettier - extending configurations](https://prettier.io/docs/en/configuration.html#sharing-configurations)
