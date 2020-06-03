import React from "react";
import PropTypes from "prop-types";

/* eslint-disable */
class HTML extends React.Component {
  render() {
    const {
      body,
      bodyAttributes,
      headComponents,
      htmlAttributes,
      postBodyComponents,
      preBodyComponents,
    } = this.props;

    return (
      <html {...htmlAttributes} lang="ja">
        <head>
          <meta charSet="utf-8" />
          {headComponents}
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <section
            key="gatsby"
            id="___gatsby"
            // eslint-disable-next-line
            dangerouslySetInnerHTML={{ __html: body }}
          />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
/* eslint-enable */

export default HTML;
