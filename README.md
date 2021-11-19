# Seven Alter - Drupal

Build files for [Seven Alter admin theme](https://github.com/designhammer/sevenalter) and [Seven Alter Toolbar module](https://github.com/designhammer/sevenalter_toolbar).

<img src="screenshot.png" width="335" height="250">

## Add to a Drupal site

[Drupal.org doc: Managing dependencies for a custom project](https://www.drupal.org/docs/develop/using-composer/managing-dependencies-for-a-custom-project)

Add to composer.json (the first part is already there).

    "repositories": [
        {
            "type": "composer",
            "url": "https://packages.drupal.org/8"
        },
        {
            "type": "git",
            "url": "https://github.com/designhammer/sevenalter.git"
        },
        {
            "type": "git",
            "url": "https://github.com/designhammer/sevenalter_toolbar.git"
        }
    ],

Require the modules.

    composer require designhammer/sevenalter designhammer/sevenalter_toolbar


## CSS Overrides when using the Seven Alter admin theme

Before enabling this theme, please duplicate this file `css/example.override-styles.css` and rename it `css/sevenalter-overrides.css`.
⚠️ Failing to create this file will cause a console error.
