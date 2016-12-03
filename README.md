# hyper-tabs

stylize your tabs in `Hyper.app` with this plugin.

```js
module.exports = {
  config: {
    // other config
    hyperTabs: {
      colors: [ '#b57edc', '#4a8123' ],
      gradient: false
    }
  }
}
```

inside your config object in `.hyper.js`, create an object called `hyperTabs`. there you can control two options:

### colors

an array of hex values representing possible background colors for the active tab. if you don't specify one, the plugin will generate a random color for each window you open. if you specify colors, but not `gradient: true `, it will grab a random color from the array you specify.

### gradient

a boolean flag for whether to display the tabs with a solid-color background or a css3 `linear-gradient`. if you set `gradient: true`, you must provide at least two hex values in `colors`.
