module.exports.decorateConfig = (config) => {
  const getColor = () => {
    if(config.hyperTabs.gradient) {
      return `linear-gradient(90deg, ${ config.hyperTabs.colors.join(', ') })`
    }
    else if(config.hyperTabs.colors.length >= 1) {
      // get a random element
      return config.hyperTabs.colors[Math.floor(Math.random() * config.hyperTabs.colors.length)]
    }
    else {
      // get a random color
      return '#' + Math.floor(Math.random() * 16777215).toString(16)
    }
  }

  const configObj = Object.assign({
    gradient: false,
    color: getColor()
  }, config.hyperTabs)

  return Object.assign({}, config, {
    css:
      'ul.tabs_list { margin-left: 0; }' +

      // set the active tab's background
      `li.tab_active { background: ${ configObj.color };  }` +

      // let everyone else's CSS through
      `${ config.css || ''}`
  })
}
