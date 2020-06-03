import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/common/Layout';

import css from '../pages/glossary/Glossary.module.scss';

const glossary = (props) => {
  const { data } = props;
  const { markdownRemark: post, site } = data;
  const title = `${post.frontmatter.title}`;
  const url = `${site.siteMetadata.siteUrl}${post.fields.slug}`;
  const description = post.frontmatter.description || post.excerpt;
  const pageTitle = '用語集';
  const breadcrumbs = [
    {
      title: pageTitle,
    },
    {
      title: post.frontmatter.title,
    },
  ];

  return (
    <Layout
      // eslint-disable-next-line
      {...props}
      pageTitle={pageTitle}
      breadcrumbs={breadcrumbs}
      ogpTitle={title}
      ogpDescription={description}
      ogpThumbnail={post.frontmatter.ogpThumbnail}
      pageUrl={url}
      ogpType="article"
      wrapperClassName={css.glossaryWrapper}
    >
      <div className={css.glossary}>
        <h1 className={css.glossary__Title}>{post.frontmatter.title}</h1>
        <div
          className={css.MD_glossaryWrapper}
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
};

glossary.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    site: PropTypes.object,
  }).isRequired,
};

export default glossary;

export const pageQuery = graphql`
  query glossaryByID($id: String!) {
    site {
      siteMetadata {
        siteUrl
        name
      }
    }
    markdownRemark(id: { eq: $id }) {
      html
      excerpt(pruneLength: 300, truncate: true)
      fields {
        slug
      }
      frontmatter {
        date(formatString: "YYYY.MM.DD")
        title
        description
        ogpThumbnail
      }
    }
  }
`;
