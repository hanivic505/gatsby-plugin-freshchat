const React = require('react')

module.exports.onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  if (typeof pluginOptions.token === `undefined`) {
      return null
  }

  const freshchatHost = 
    pluginOptions.host
      ? pluginOptions.host
      : `https://wchat.freshchat.com`

  const renderHTML = () => `
    window.fcWidget.init({
      token: "${pluginOptions.token}",
      host: "${freshchatHost}",
    })
  `

  setHeadComponents([
    <script
      key={`gatsby-plugin-freshchat`}
      src={`https://wchat.freshchat.com/js/widget.js`}
    />
  ])
  setPostBodyComponents([
    <script
      key={`gatsby-plugin-freshchat-init`}
      dangerouslySetInnerHTML={{ __html: renderHTML() }}
    />
  ])
}
  