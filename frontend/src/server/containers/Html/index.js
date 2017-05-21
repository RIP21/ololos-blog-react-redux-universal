/* eslint react/no-danger: 0 */

import React, { PropTypes } from "react";
import Helmet from "react-helmet";
import serialize from "serialize-javascript";

export default class Html extends React.Component {
  static propTypes = {
    assets: PropTypes.object.isRequired,
    content: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired
  };

  render() {
    const { assets, store, content, css } = this.props;
    const helmet = Helmet.rewind();
    const attrs = helmet.htmlAttributes.toComponent();
    return (
      <html {...attrs}>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {Object.keys(assets.styles).map((style, i) => (
            <link href={assets.styles[style]} key={i} media="screen, projection" rel="stylesheet" type="text/css" />
          ))}
          <style type="text/css" dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
          <script
            dangerouslySetInnerHTML={{
              __html: "window.__INITIAL_STATE__=" + serialize(store.getState()) + ";"
            }}
          />
          {Object.keys(assets.javascript).map((script, i) => <script src={assets.javascript[script]} key={i} />)}
        </body>
      </html>
    );
  }
}
