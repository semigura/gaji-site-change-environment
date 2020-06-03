import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/common/Layout';
import TextLink from '../components/common/TextLink';
import ContactForm from '../components/common/ContactForm';

import css from '../pages/news/News.module.scss';

const News = (props) => {
  const { data } = props;
  const { markdownRemark: post, site } = data;
  const title = `${post.frontmatter.title}`;
  const url = `${site.siteMetadata.siteUrl}${post.fields.slug}`;
  const description = post.frontmatter.description || post.excerpt;
  const pageTitle = 'お知らせ';
  const breadcrumbs = [
    {
      to: '/news',
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
      wrapperClassName={css.NewsWrapper}
    >
      <div className={css.News}>
        <p className={css.News__Date}>{post.frontmatter.date}</p>
        <h1 className={css.News__Title}>{post.frontmatter.title}</h1>
        <div
          className={css.MD_NewsWrapper}
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        {post.frontmatter.showContactForm && (
          <ContactForm action="/contact/success" formName="contact" />
        )}
        <p>
          <TextLink to="/news/" label="お知らせ一覧に戻る" isLeft withIcon />
        </p>
      </div>
    </Layout>
  );
};

News.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    site: PropTypes.object,
  }).isRequired,
};

export default News;

export const pageQuery = graphql`
  query NewsByID($id: String!) {
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
        showContactForm
      }
    }
  }
`;
