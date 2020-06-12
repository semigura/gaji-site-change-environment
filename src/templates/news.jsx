import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/common/Layout';
import TextLink from '../components/common/TextLink';
import ContactForm from '../components/common/ContactForm';

import css from '../pages/news/News.module.scss';

const News = (props) => {
  const { data } = props;
  const { wordpressPost: post, site } = data;
  const title = `${post.title}`;
  const url = `${site.siteMetadata.siteUrl}/${String(
    post.categories[0].slug,
  )}/${post.slug}/`;
  const description = post.acf.description || post.excerpt;
  const pageTitle = 'お知らせ';
  const breadcrumbs = [
    {
      to: '/news',
      title: pageTitle,
    },
    {
      title: post.title,
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
      ogpThumbnail={post.ogpThumbnail}
      pageUrl={url}
      ogpType="article"
      wrapperClassName={css.NewsWrapper}
    >
      <div className={css.News}>
        <p className={css.News__Date}>{post.date}</p>
        <h1 className={css.News__Title}>{post.title}</h1>
        <div
          className={css.MD_NewsWrapper}
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        {post.acf.showContactForm && (
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
    wordpressPost: PropTypes.object,
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
    wordpressPost(id: { eq: $id }) {
      content
      date(formatString: "YYYY.MM.DD")
      excerpt
      id
      modified
      path
      status
      slug
      sticky
      template
      title
      type
      wordpress_id
      categories {
        name
        slug
      }
      acf {
        case_id
        contactTextFirstLine
        contactTextSecondLine
        description
        introduction
        showContactForm
      }
      featured_media {
        id
        alt_text
        caption
        comment_status
        date
        description
        link
        media_type
        mime_type
        modified
        path
        ping_status
        post
        source_url
        slug
        status
        template
        title
        type
        wordpress_id
      }
    }
  }
`;
