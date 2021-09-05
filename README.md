## @arthurfiorette/prettier-config

<br />

You can use this prettier config with a `.prettierrc.json` file.

```js
// .prettierrc.json

module.exports = require('@arthurfiorette/prettier-config');
```

Or overriding some configs

```js
// .prettierrc.json

const { config } = require('@arthurfiorette/prettier-config');

module.expors = config({
  printWidth: 80
});
```

### See more

- [Prettier - extending configurations](https://prettier.io/docs/en/configuration.html#sharing-configurations)
