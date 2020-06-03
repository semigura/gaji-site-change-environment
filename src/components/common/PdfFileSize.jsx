import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const PdfFileSize = ({ data }) => (
  <span>{data.allFile.edges[0].node.prettySize.replace(/\s+/g, '')}</span>
);

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { name: { eq: "gaji-labo_company-profile" } }) {
          edges {
            node {
              prettySize
            }
          }
        }
      }
    `}
    render={data => <PdfFileSize data={data} />}
  />
);

PdfFileSize.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.any,
};
