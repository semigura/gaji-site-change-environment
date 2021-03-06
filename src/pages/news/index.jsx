import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../../components/common/Layout';
import TextLink from '../../components/common/TextLink';

import css from './News.module.scss';

const News = props => {
  const { data } = props;
  const posts = data.allWordpressPost.edges.map(edge => ({
    ...edge.node,
    id: edge.node.id,
  }));

  const pageTitle = 'お知らせ';
  const url = 'https://www.gaji.jp/news/';
  const description =
    'チームワークをスケールさせる会社Gaji-Laboからのお知らせです。';
  const breadcrumbs = [
    {
      title: pageTitle,
    },
  ];

  return (
    <Layout
      isIndex
      pageTitle={pageTitle}
      pageUrl={url}
      breadcrumbs={breadcrumbs}
      ogpDescription={description}
      ogpTitle={pageTitle}
      wrapperClassName={css.NewsWrapper}
    >
      <div className={css.News}>
        <ul className={css.News__List}>
          {posts.map(post => (
            <li key={post.id} className={css.News__ListItem}>
              {post.date}
              <TextLink
                to={`/news/${post.slug}/`}
                label={post.title}
                className={css.News__ListLink}
              />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allWordpressPost(
    filter: {categories: {elemMatch: {slug: {eq: "news"}}}}
  ) {
      edges {
        node {
          id
          path
          slug
          title
          date(formatString: "YYYY.MM.DD")
          categories {
            slug
          }
        }
      }
    }
  }
`;

News.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.any.isRequired,
};

export default News;
