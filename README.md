# Store

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Configuracion Inicial

Clean up unused imports

```bash
  ng generate @angular/core:cleanup-unused-imports
```

### EsLint

Install es-lint:

```bash
  ng add @angular-eslint/schematics@19.1.0
```

Fix issues es-lint

```bash
  ng lint --fix
```

### Prettier

Install prettier

```bash
  npm i prettier -D
```

View problems

```bash
  prettier  .
```

Fix problems

```bash
  prettier --write .
```

Create file .prettierrc.json to speccify custom rules and add code

```bash
{
  “tabWidth”: 2,
  “useTabs”: false,
  “singleQuote”: true,
  “semi”: true,
  “blacketSpacing”: true,
  “arrowParens”: “avoid",
  “trailingComma”: “es5",
  “blacketSameLine”: true,
  “printWidth”: 80,
}
```

### Avoid conflics between EsLint and Prettier

```bash
  npm install prettier-eslint eslint-config-prettier eslint-plugin-prettier --save-dev
```

Add this code in eslint.config.js file

```bash
  const prettierRules = require(‘eslint-plugin-prettier/recommended’);
  module.exports = tseslint.config(
	{
	  files: [“**/*.ts”],
	  extends: [
	    …,
	    prettierRules
	  ]
	},
	{
	  files: [“**/*.html”],
	  extends: [
	    …,
	    prettierRules
	  ]
	}
  )
```
