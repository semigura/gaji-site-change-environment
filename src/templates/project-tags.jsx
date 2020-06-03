import React from 'react';
import PropTypes from 'prop-types';
// TODO: projects のマークダウン追加時にコメントアウトを外して次の一行と入れ替える
// import { Link, graphql } from 'gatsby';
import { Link } from 'gatsby';
import Layout from '../components/common/Layout';

import css from './ProjectTags.module.scss';

const TagRoute = ({ pageContext, data }) => {
  const posts = data.allMarkdownRemark.edges.map((edge) => ({
    ...edge.node.frontmatter,
    ...edge.node.fields,
    excerpt: edge.node.excerpt,
  }));
  // eslint-disable-next-line
  const tag = pageContext.tag;
  const url = `https://www.gaji.jp/tags/${tag}`;
  const pageTitle = '事例紹介';
  const breadcrumbs = [
    {
      to: '/case-studies',
      title: pageTitle,
    },
    {
      title: tag,
    },
  ];

  return (
    <Layout
      isIndex
      pageTitle={pageTitle}
      breadcrumbs={breadcrumbs}
      isHome
      ogpTitle={tag}
      pageUrl={url}
      wrapperClassName={css.ProjectTagsWrapper}
    >
      <div className={css.ProjectTags}>
        <h2 className={css.ProjectTags__TagName}>{tag}</h2>
        <div className={css.CaseStudies}>
          <ul className={css.CaseStudiesList}>
            {posts.map((post) => (
              <li key={post.title} className={css.CaseStudiesList__Item}>
                <Link to={post.slug} className={css.CaseStudiesList__Link}>
                  <img
                    src={post.thumbnail}
                    alt=""
                    className={css.CaseStudiesList__Thumbnail}
                  />
                  <h2 className={css.CaseStudiesList__Title}>{post.title}</h2>
                  <p className={css.CaseStudiesList__Description}>
                    {post.description || post.excerpt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

TagRoute.propTypes = {
  // eslint-disable-next-line
  pageContext: PropTypes.any.isRequired,
  // eslint-disable-next-line
  data: PropTypes.any.isRequired,
};

export default TagRoute;

// TODO: projects のマークダウン追加時にコメントアウトを外す
// export const tagPageQuery = graphql`
//   query TagPage($tag: String) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allMarkdownRemark(
//       limit: 1000
//       filter: { frontmatter: { tags: { in: [$tag] } } }
//       sort: { fields: [frontmatter___caseId], order: DESC }
//     ) {
//       totalCount
//       edges {
//         node {
//           excerpt(pruneLength: 140, truncate: true)
//           fields {
//             slug
//           }
//           frontmatter {
//             title
//             description
//             thumbnail
//           }
//         }
//       }
//     }
//   }
// `;
