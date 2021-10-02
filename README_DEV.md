# Seven Alter - Drupal

## Build 🛠

Install the following node mdules (npm) for compiling sass and minifing Javascript.

1. **Install node modules globally:** `npm install -g gulp-cli`

2. **Install node modules in the same directory as this readme file.**

```
yarn add autoprefixer browser-sync gulp gulp-dart-sass gulp-notify gulp-postcss gulp-sourcemaps gulp-uglify postcss --dev
```

3. **gulp-local.env file:**

  * Duplicate `gulp-local.env.sample.js` file and rename it `gulp-local.env.js`.
  * Change vaules in file as needed.

4. **Run script:** `gulp` or `gulp watch`.


## Linting 🧼

We'll also be linting our sass and Javascript in order to produce well written and consistent code.

**Install node modules in the same directory as this readme file.**

```
yarn add stylelint stylelint-config-sass-guidelines stylelint-config-standard standard --dev
```

Required lint files (should be added during initial theme setup):

- .eslintrc.json
- .stylelint.json
- .stylelintignore

To do a global lint on the SCSS files run: `npx stylelint "scss/**/*.scss"`. To fix found errors add the `--fix` flag.

**Sublime:** install the following packages using package control:

- SublimeLinter
- SublimeLinter-contrib-standard
- SublimeLinter-eslint
- SublimeLinter-stylelint

**VS Code:** install the following extensions:

Workspace seeting should be located in the root of this project's repo: `/.vscode/settings.json`

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
